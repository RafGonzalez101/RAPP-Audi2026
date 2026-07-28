# Porsche 2026 Starter Project

This folder contains a lightweight web starter project for the Porsche 2026 design importer.

## Contents

- `index.html` — starter UI shell
- `styles.css` — basic styling
- `app.js` — simple demo script

## How to use

1. Open `Porsche 2026/index.html` in a browser.
2. Or use a local server such as VS Code Live Server.
3. Start replacing `app.js` with your Figma importer and Codex-assisted code.
4. Run `npm run import` after setting `FIGMA_TOKEN` and replacing the Figma file key in `figma-import.js`.

## Next steps

- Add a Figma API workflow if this will become an importer.
- Add `package.json` if you want a Node-based build or automation script.
- Use Codex to generate parsing code, component exports, or design data transformers.

## Figma Design Library tutorial

1. Create or open the Figma file containing your design system.
2. Organize components into published libraries and name them clearly.
3. Export the file key or team library URL for use in automation.
4. In this project, build a small script to call the Figma REST API and fetch library data.
5. Extract component metadata, styles, and assets from the library JSON.
6. Map Figma component names to your local UI model or design tokens.
7. Use `app.js` as the integration point for previewing extracted output.
8. Test changes by updating the Figma library and rerunning the import flow.

> Tip: start with a single Figma library page, then expand to multiple libraries once your importer works.
