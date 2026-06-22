import sys
from PIL import Image

def inspect():
    try:
        img = Image.open('images/logo_raw.png')
        print(f"Image dimensions: {img.width} x {img.height}")
        
        corners = [
            (0, 0),
            (img.width - 1, 0),
            (0, img.height - 1),
            (img.width - 1, img.height - 1),
            (img.width // 2, img.height // 2)
        ]
        
        # Convert image to RGBA to ensure we have pixel channels
        img_rgba = img.convert('RGBA')
        
        for x, y in corners:
            r, g, b, a = img_rgba.getpixel((x, y))
            # Jimp outputs hex in RRGGBBAA format.
            hex_color = f"{r:02x}{g:02x}{b:02x}{a:02x}"
            print(f"Pixel at ({x}, {y}): #{hex_color}")
            
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == '__main__':
    inspect()
