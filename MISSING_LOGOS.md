# Logo Flags / Pending Identification

These entries exist in `data/customers.ts` (full 45-logo dataset for the
dedicated `/customers` page) but are flagged `unverified: true`, so they render
as a neutral dashed "Logo pending" cell instead of a broken/blank image. They
are NOT part of the curated 18-logo homepage set.

## 1. SSC — needs company identification
- Slug: `ssc` — logo file `public/logos/customers/ssc.png` is a tiny (≈3 KB)
  icon-only/placeholder asset of unknown origin. The client must confirm what
  "SSC" stands for and supply a verified, properly-named logo file.
- Source: an icon-only entry in the source PDF that could not be confidently
  identified during transcription.

## 2. NAVTTC — blank / near-invisible logo (near NCA / Multinet in source)
- Slug: `navttc` — logo file `public/logos/customers/navttc.png` renders as a
  dark/near-invisible mark on the `#0d0d0c` background. Confirm the company name
  and supply a light- or color-compatible logo (or a white/silhouette variant).

## Note on grid positions
The reported blank cells were at "row 1 col 7" and "row 3 col 4" of the 45-logo
grid (9-column layout). By array order those map to **LUMS** (row 1 col 7) and
**NAVTTC** (row 3 col 4). LUMS is a confirmed, featured client; if its logo also
reads dark on the charcoal background, supply a light-compatible variant — but
do not mark it unverified (it is a real, named client). SSC sits at row 3 col 5,
immediately after NAVTTC. Verify with the client which two entries should be
placeholder vs. just contrast-fixed.
