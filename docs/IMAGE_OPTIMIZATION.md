Image Optimization (2025-08-28)

Summary
- Converted all raster images in `public/` to WebP.
- Photos (JPG/JPEG) use lossy WebP at quality 85; logos/PNGs use lossless WebP.
- Updated app references to use `.webp`.
- Removed original non-WebP images from `public/` after conversion.
- Preserved originals in a timestamped backup folder not tracked by Git.

Details
- Backup location: `public/_original_images_backup_20250828_120453/` (mirrors original structure).
- Conversion tool: `cwebp` (Google WebP utilities).
  - Photos: `-q 85 -m 6 -mt -sharp_yuv`.
  - Logos/PNGs/GIFs: `-lossless -z 9 -m 6 -mt`.
- Files unaffected: `.svg`, `favicon.ico`.

Code updates
- Paths updated in:
  - `src/components/Header.tsx`
  - `src/components/Footer.tsx`
  - `src/pages/HomePage.tsx`
  - `src/pages/InitiativesPage.tsx`
  - `src/pages/AboutPage.tsx`
  - `src/data/teamData.ts` (headshot switch cases now `.webp`)

Notes
- Known missing asset before this change: `src/pages/ApplicationsPage.tsx` references `/applications/applications_banner.jpg`, which does not exist. Replace with a valid asset (e.g., `/applications/accelerator_program_inititive_image.webp`) if desired.
- To revert any file, restore from the backup folder with the matching path.

Future adjustments
- If more size reduction is needed, consider lowering photo quality to `q=80` or `q=75` and re-encoding photos only.

