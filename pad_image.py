#!/usr/bin/env python3
"""
Add transparent padding to off.png to match the width of on.png
"""
from PIL import Image
import os

# Get the dimensions
off_img = Image.open('public/off.png')
on_img = Image.open('public/on.png')

off_width, off_height = off_img.size
on_width, on_height = on_img.size

print(f"off.png size: {off_width} x {off_height}")
print(f"on.png size: {on_width} x {on_height}")

# Calculate padding needed
width_diff = on_width - off_width

if width_diff <= 0:
    print("off.png is already wider or equal, no padding needed")
    exit(0)

# Split the difference
left_pad = width_diff // 2
right_pad = width_diff - left_pad

print(f"Adding {left_pad}px on left, {right_pad}px on right")

# Create new image with padding
new_width = off_width + left_pad + right_pad
new_img = Image.new('RGBA', (new_width, off_height), (0, 0, 0, 0))

# Paste the original image in the center
new_img.paste(off_img, (left_pad, 0))

# Backup original
if not os.path.exists('public/off_backup.png'):
    off_img.save('public/off_backup.png')
    print("Created backup: public/off_backup.png")

# Save the padded version
new_img.save('public/off.png')
print(f"Saved padded image: {new_width} x {off_height}")
print("Done!")
