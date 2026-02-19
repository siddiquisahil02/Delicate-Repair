import os
import glob

# For a repo located at /Delicate-Repair/
# The absolute paths like /style.css will resolve to github.io/style.css
# We need them to be relative, e.g., style.css or ../style.css

def fix_file(filepath, depth):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    prefix = '../' * depth if depth > 0 else './'
    
    # Replace root paths with relative paths
    content = content.replace('href="/style.css"', f'href="{prefix}style.css"')
    content = content.replace('src="/script.js"', f'src="{prefix}script.js"')
    content = content.replace('src="/logo2.svg"', f'src="{prefix}logo2.svg"')
    content = content.replace('href="/"', f'href="{prefix}index.html"')
    
    # General page links
    pages = ['about', 'specialties', 'approaches', 'book', 'learn']
    for page in pages:
        content = content.replace(f'href="/{page}.html"', f'href="{prefix}{page}.html"')
    
    # Nested page links
    specialties = ['trauma', 'anxiety', 'depression', 'eating-disorders', 'addiction', 'couples-therapy', 'abuse', 'relationships', 'lgbtq', 'mood-disorders', 'enmeshment-trauma', 'boundaries']
    for spec in specialties:
        content = content.replace(f'href="/specialties/{spec}.html"', f'href="{prefix}specialties/{spec}.html"')
        
    approaches = ['emdr', 'ifs']
    for app in approaches:
        content = content.replace(f'href="/approaches/{app}.html"', f'href="{prefix}approaches/{app}.html"')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Fix root html files (depth 0)
for filepath in glob.glob('*.html'):
    fix_file(filepath, 0)

# Fix 1-level deep html files (depth 1)
for filepath in glob.glob('*/*.html'):
    fix_file(filepath, 1)

print("Paths fixed successfully!")
