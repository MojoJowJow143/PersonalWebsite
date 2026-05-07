from rembg import remove
from PIL import Image

src = "JO25A.png"
dst = "JO25A-cutout.png"

with open(src, "rb") as f:
    data = f.read()

result = remove(data)

with open(dst, "wb") as f:
    f.write(result)

print(f"Wrote {dst}")
