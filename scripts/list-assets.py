from pathlib import Path
root = Path(__file__).resolve().parents[1] / 'public' / 'assets'
for p in sorted(root.rglob('*')):
    if p.is_file():
        print(p.relative_to(root))
