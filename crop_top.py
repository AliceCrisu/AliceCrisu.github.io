#!/usr/bin/env python3
"""
Remove transparent pixels from the top of both lightbulb images
"""
from PIL import Image
import numpy as np

def find_first_non_transparent_row(img):
    """Find the first row that has actual visible content (not just transparent or nearly transparent pixels)"""
    img_array = np.array(img)

    # Check each row from top
    for row_idx in range(img_array.shape[0]):
        row = img_array[row_idx]
        # Check if this row has any pixel with significant opacity (alpha > 10)
        # This filters out nearly transparent pixels
        if np.any(row[:, 3] > 10):  # Alpha channel > 10
            print(f"  First non-transparent row at index {row_idx}")
            return row_idx

    return 0  # No content found

def crop_top_transparency(image_path):
    """Crop transparent pixels from the top of an image"""
    img = Image.open(image_path)

    # Find first non-transparent row
    crop_top = find_first_non_transparent_row(img)

    if crop_top > 0:
        print(f"{image_path}: Found {crop_top} transparent rows at top")

        # Crop the image
        width, height = img.size
        cropped = img.crop((0, crop_top, width, height))

        # Save backup
        backup_path = image_path.replace('.png', '_before_crop.png')
        img.save(backup_path)
        print(f"  Backup saved: {backup_path}")

        # Save cropped version
        cropped.save(image_path)
        print(f"  Cropped to: {cropped.size[0]} x {cropped.size[1]}")
    else:
        print(f"{image_path}: No transparent rows found at top")

    return crop_top

# Process both images
print("Processing images...")
crop_off = crop_top_transparency('public/off.png')
crop_on = crop_top_transparency('public/on.png')

print("\nDone!")
