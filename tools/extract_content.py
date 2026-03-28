"""
Extract content from DOCX/PDF files in C:\Lingua\A2\STANDART
Output: JSON with all lesson data for creating lesson-XX.js files
"""
import os
import json
import sys
import io
from pathlib import Path

# Fix encoding for Windows console
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

try:
    from docx import Document
except ImportError:
    print("pip install python-docx")
    sys.exit(1)

try:
    import pdfplumber
except ImportError:
    print("pip install pdfplumber")
    sys.exit(1)

STANDART_DIR = Path(r"C:\Lingua\A2\STANDART")
OUTPUT_DIR = Path(r"C:\Lingua\Github\lingua\tools\extracted")

def read_docx(filepath):
    """Read all text from a DOCX file."""
    try:
        doc = Document(str(filepath))
        paragraphs = []
        for para in doc.paragraphs:
            text = para.text.strip()
            if text:
                paragraphs.append(text)
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"[ERROR reading {filepath.name}: {e}]"

def read_pdf(filepath):
    """Read all text from a PDF file."""
    try:
        with pdfplumber.open(str(filepath)) as pdf:
            texts = []
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    texts.append(text.strip())
            return '\n\n'.join(texts)
    except Exception as e:
        return f"[ERROR reading {filepath.name}: {e}]"

def extract_lesson(lesson_dir):
    """Extract all content from a single lesson directory."""
    lesson_name = lesson_dir.name
    result = {
        'folder': lesson_name,
        'files': {}
    }

    for f in sorted(lesson_dir.iterdir()):
        if f.is_file():
            fname = f.name
            if fname.endswith('.docx'):
                result['files'][fname] = read_docx(f)
            elif fname.endswith('.pdf'):
                result['files'][fname] = read_pdf(f)
            elif fname.endswith(('.mp3', '.mp4')):
                result['files'][fname] = f"[MEDIA: {fname}]"

    return result

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    lessons = []
    for d in sorted(STANDART_DIR.iterdir()):
        if d.is_dir() and d.name[0:2].isdigit():
            print(f"Extracting: {d.name}")
            lesson = extract_lesson(d)
            lessons.append(lesson)

            # Save individual lesson
            num = d.name[:2]
            outfile = OUTPUT_DIR / f"lesson-{num}.json"
            with open(outfile, 'w', encoding='utf-8') as f:
                json.dump(lesson, f, ensure_ascii=False, indent=2)
            print(f"  -> {outfile.name}")

    # Save all lessons
    allfile = OUTPUT_DIR / "all_lessons.json"
    with open(allfile, 'w', encoding='utf-8') as f:
        json.dump(lessons, f, ensure_ascii=False, indent=2)

    print(f"\nDone! {len(lessons)} lessons extracted to {OUTPUT_DIR}")

if __name__ == '__main__':
    main()
