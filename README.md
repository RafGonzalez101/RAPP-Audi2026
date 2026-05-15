# Audi Library 2026 Updates

Changelog and notes for the **Audi Brand Assets** Figma file — "Audi 2026 Models" component set updates.

**Figma File:** [Audi-Brand-Assets](https://www.figma.com/design/3to1FIA5qvzQBNHXhpdzXc/Audi-Brand-Assets?node-id=1-29)
**Page:** 2026 Car Models Q3
**Component:** Audi 2026 Models (node `19:6`)

---

## Summary of Changes

### 1. Image Fill Mode — Set All to FIT
- Scanned all 230+ image fills across all variants in the component set
- Changed every image fill from `FILL` (crop) to `FIT` (letterbox/pillarbox) mode
- Ensures images preserve aspect ratio inside their 2160×2160px containers

### 2. Layout Restructure — Model-per-Column
- Reorganized the component set from a 4-column grid into **19 columns**, one per car model
- Column order (left to right):

| Column | Model |
|--------|-------|
| 1 | A3 |
| 2 | A5 |
| 3 | A6 |
| 4 | A6 TFSI |
| 5 | A8 |
| 6 | S3 |
| 7 | S5 Sedan |
| 8 | S e-tron GT |
| 9 | Q3 |
| 10 | Q4 e-tron |
| 11 | Q4 Sportback e-tron |
| 12 | Q5 |
| 13 | Q5 Sportback |
| 14 | Q7 |
| 15 | Q8 |
| 16 | RS Q8 performance |
| 17 | SQ5 |
| 18 | SQ5 Sportback |
| 19 | SQ8 |

- Variant size: 2160×2160px
- Column gap: 168px | Row gap: 90px

### 3. Missing Variants Uploaded (28 new variants)
- Identified 28 variants that existed in the local image folder but had no corresponding component
- Created 28 new variant components and uploaded their images
- Source folder: `~/Desktop/Audi MY26 Images`
- Excluded: Q3 raw preview files (DSC_/JC9_ prefix), A6 old-format files (A6_2024_*)
- 4 oversized A6 TFSI images (10–13MB) were compressed to ~1–2MB before upload using:
  ```
  sips -Z 3000 --setProperty formatOptions 75 <file>
  ```

### 4. Variant Property Consistency Fix
- Audited all 258 variants for consistent property keys
- Found 9 variants missing the `Shot` property — caused "Component set has existing errors"
- Fixed by inserting `Shot=Default` into their names

**Variants fixed:**

| Original Name | Fixed Name |
|---------------|------------|
| Model=A3, Side=Interior, Year=2026 | Model=A3, Side=Interior, Shot=Default, Year=2026 |
| Model=A3, Side=Exterior, Year=2026 | Model=A3, Side=Exterior, Shot=Default, Year=2026 |
| Model=A5, Side=Interior, Year=2026 | Model=A5, Side=Interior, Shot=Default, Year=2026 |
| Model=A6, Side=Interior, Year=2026 | Model=A6, Side=Interior, Shot=Default, Year=2026 |
| Model=Q3, Side=Exterior, Year=2026 | Model=Q3, Side=Exterior, Shot=Default, Year=2026 |
| Model=Q3, Side=Interior, Year=2026 | Model=Q3, Side=Interior, Shot=Default, Year=2026 |
| Model=Q5, Side=Interior, Year=2026 | Model=Q5, Side=Interior, Shot=Default, Year=2026 |
| Model=Q7, Side=Interior, Year=2026 | Model=Q7, Side=Interior, Shot=Default, Year=2026 |
| Model=Q8, Side=Exterior, Year=2026 | Model=Q8, Side=Exterior, Shot=Default, Year=2026 |

---

## Final State

| Metric | Value |
|--------|-------|
| Total variants | 258 |
| Properties per variant | 4 (Model, Side, Shot, Year) |
| Missing properties | 0 |
| Duplicate variants | 0 |
| Component set errors | 0 |
| Images present | All 258 |

---

## Variant Naming Convention

```
Model=<model>, Side=<Exterior|Interior>, Shot=<shot name>, Year=2026
```

Examples:
- `Model=A3, Side=Exterior, Shot=Front Parked, Year=2026`
- `Model=Q5, Side=Interior, Shot=Default, Year=2026`

---

## Image Source

- Local folder: `~/Desktop/Audi MY26 Images`
- Subfolders per model: A3, A5, A6, A6 TFSI, A8, Q3, Q4 Sportback e-tron, Q4 e-tron, Q5, Q5 Sportback, Q7, Q8 TFSI, RS Q8, RS e-tron GT, RS3, S e-tron GT, S3, S5, S8, SQ5, SQ5 Sportback, SQ8
- Excluded from component set: RS3, RS e-tron GT, S8 (no variants created for these models)
