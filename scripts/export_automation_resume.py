"""Export both PDF languages from automation/resume.html using the reference layout.

Requires reportlab and Segoe UI fonts (available in C:/Windows/Fonts).
Run with a Python environment containing reportlab; no website build is needed.
"""
from html import escape
from html.parser import HTMLParser
from pathlib import Path
import os
import re

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path(os.environ.get('RESUME_FONT_DIR', 'C:/Windows/Fonts'))
OUT = ROOT / 'automation' / 'downloads'


class Node:
    def __init__(self, tag='', attrs=()):
        self.tag = tag
        self.attrs = dict(attrs)
        self.children = []

    def all(self, tag=None, cls=None):
        found = []
        for child in self.children:
            if isinstance(child, Node):
                if (tag is None or child.tag == tag) and (cls is None or cls in child.attrs.get('class', '').split()):
                    found.append(child)
                found.extend(child.all(tag, cls))
        return found

    def text(self, language):
        if language == 'en' and 'data-en' in self.attrs:
            return self.attrs['data-en']
        return ''.join(child.text(language) if isinstance(child, Node) else child for child in self.children).strip()

    def rich(self, language):
        if language == 'en' and 'data-en' in self.attrs:
            return escape(self.attrs['data-en'])
        parts = []
        for child in self.children:
            if isinstance(child, Node):
                value = child.rich(language)
                if child.tag == 'a':
                    value = f'<a href="{escape(child.attrs["href"], quote=True)}" color="#445848"><u>{value}</u></a>'
                elif child.tag in ('b', 'strong'):
                    value = f'<b>{value}</b>'
                parts.append(value)
            else:
                parts.append(escape(child))
        return ''.join(parts).strip()


class Document(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in ('meta', 'link', 'br', 'hr', 'img', 'input'):
            self.stack.append(node)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


for font, file in [('Segoe', 'segoeui.ttf'), ('Segoe-Bold', 'segoeuib.ttf'), ('Segoe-Italic', 'segoeuii.ttf')]:
    pdfmetrics.registerFont(TTFont(font, str(FONT_DIR / file)))
pdfmetrics.registerFontFamily('Segoe', normal='Segoe', bold='Segoe-Bold', italic='Segoe-Italic', boldItalic='Segoe-Bold')

doc = Document()
doc.feed((ROOT / 'automation/resume.html').read_text(encoding='utf-8'))
main = doc.root.all('main', 'resume-sheet')[0]


def export(language):
    target = OUT / f'Kenan_Ibragimov_AI_Automation_Engineer_{language.upper()}.pdf'
    c = canvas.Canvas(str(target), pagesize=A4)
    c.setTitle('Kenan Ibragimov - AI Automation Engineer / n8n Developer / Low-code Developer')
    c.setAuthor('Kenan Ibragimov')
    width, height = A4
    x, usable = 42, width - 84
    y = height - 93
    base = ParagraphStyle('body', fontName='Segoe', fontSize=8.45, leading=11.2, textColor=HexColor('#000000'))

    def paragraph(node, *, xx=x, yy=None, ww=usable, size=8.45, leading=11.2, bold=False, gap=4, bullet=False):
        nonlocal y
        value = node.rich(language) if isinstance(node, Node) else node
        # Keep punctuation portable, including values supplied in the HTML.
        value = value.replace('\u2011', '-').replace('\u2013', '-').replace('\u2014', '-')
        value = re.sub(r'(2-3 hours|2-3 часов|20%)', r'<b>\1</b>', value)
        style = ParagraphStyle('p', parent=base, fontName='Segoe-Bold' if bold else 'Segoe', fontSize=size, leading=leading)
        top = y if yy is None else yy
        if bullet:
            c.setFont('Segoe', size)
            c.drawString(xx, top - size, '\u2022')
            xx += 7
            ww -= 7
        p = Paragraph(value, style)
        _, hh = p.wrap(ww, height)
        p.drawOn(c, xx, top - hh)
        if yy is None:
            y -= hh + gap
        return hh + gap

    def band(title):
        nonlocal y
        c.setFillColor(HexColor('#d8ddd0'))
        c.roundRect(x - 4, y - 19, usable + 8, 19, 9.5, fill=1, stroke=0)
        c.setFillColor(HexColor('#000000'))
        c.setFont('Segoe-Italic', 8.8)
        c.drawString(x + 14, y - 13, title)
        y -= 26

    c.setFont('Segoe-Bold', 24)
    c.drawString(x, height - 54, main.all('h1')[0].text(language).upper())
    c.setFont('Segoe-Bold', 11.2)
    c.drawString(x, height - 76, main.all('p', 'resume-title')[0].text(language).upper())

    for section in main.all('section', 'resume-section'):
        band(section.all('h2')[0].text(language))
        grid = section.all('div', 'resume-skills-grid')
        jobs = section.all('article', 'resume-job')
        if grid:
            column_width = (usable - 18) / 3
            bottoms = []
            for i, column in enumerate(grid[0].all('ul')):
                cy = y
                for item in column.all('li'):
                    cy -= paragraph(item, xx=x + i * (column_width + 9), yy=cy, ww=column_width, size=8, leading=10.5, gap=2, bullet=True)
                bottoms.append(cy)
            y = min(bottoms) - 6
        elif jobs:
            for job in jobs:
                heading = job.all('div', 'resume-job-heading')[0]
                y -= 1
                title = heading.all('h3')[0].text(language)
                dates = heading.all('span')[0].text(language)
                c.setFont('Segoe-Bold', 9.8)
                c.drawString(x, y - 9.8, title)
                c.setFont('Segoe-Bold', 8.5)
                c.drawRightString(x + usable, y - 9.8, dates)
                y -= 16
                c.setStrokeColor(HexColor('#445848'))
                c.setLineWidth(.5)
                c.line(x, y, x + usable, y)
                y -= 8
                for node in job.children:
                    if not isinstance(node, Node):
                        continue
                    if node.tag == 'p':
                        is_stack = 'resume-job-stack' in node.attrs.get('class', '')
                        paragraph(node, size=8 if is_stack else 8.45, bold=is_stack, gap=7 if is_stack else 4)
                    elif node.tag == 'ul':
                        for item in node.all('li'):
                            paragraph(item, bullet=True, gap=2)
                y -= 2
        else:
            for node in section.children:
                if isinstance(node, Node) and node.tag == 'p':
                    paragraph(node, gap=4)
            y -= 3
    if y < 35:
        raise RuntimeError(f'{language}: content exceeds the single-page layout (bottom={y:.1f})')
    c.save()
    print(f'{target} (A4, 1 page; bottom margin {y:.1f} pt)')


OUT.mkdir(parents=True, exist_ok=True)
for lang in ('ru', 'en'):
    export(lang)
