"""Refresh sidebar indexes using the original PDFs, excluding their index page.

Requires pypdf (python3 -m pip install pypdf).
Run from any directory: python3 scripts/update-pdf-indexes.py
"""

import json
from pathlib import Path

from pypdf import PdfReader

PDF_DIRECTORY = Path(__file__).resolve().parents[1] / 'static' / 'pdf'


def read_entries(reader, outline):
    entries = []
    for item in outline:
        if isinstance(item, list):
            children = read_entries(reader, item)
            if entries:
                entries[-1]['children'] = children
            else:
                entries.extend(children)
        else:
            page = reader.get_destination_page_number(item)
            if page is not None and page > 0:
                entries.append({'title': item.title, 'page': page + 1})
    return entries


for pdf_path in sorted(PDF_DIRECTORY.glob('*.pdf')):
    if pdf_path.stem.endswith('.viewer'):
        continue
    reader = PdfReader(pdf_path)
    if len(reader.pages) < 2:
        raise ValueError(f'{pdf_path.name} must contain an index and at least one content page')
    index = {'pageCount': len(reader.pages), 'entries': read_entries(reader, reader.outline)}
    output = pdf_path.with_suffix('.index.json')
    output.write_text(json.dumps(index, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'Updated {output.name}')
