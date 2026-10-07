# Marthish DN — Personal Portfolio

A responsive four-page personal website in a modern tech style for Marthish DN:

- `index.html` — Home
- `projects.html` — Projects
- `embedded-systems.html` — Embedded Systems
- `contact.html` — Contact

## Run locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Change the colors

Open `styles.css` and edit the variables at the top:

```css
:root {
  --bg: #07111f;
  --blue: #4da3ff;
  --cyan: #64e5ff;
}
```

Change `--bg` for the main background, `--blue` for buttons and highlights, and `--cyan` for the brighter accent.

## Change text

Each page is a normal HTML file. Search for the text you want to replace, edit it, save, then refresh the browser. The navigation is repeated on each page, so update it consistently if you rename a page.

## Change images

Put an image in `assets/`, then reference it in HTML like this:

```html
<img src="assets/your-image.jpg" alt="Describe the image" />
```

The supplied CV reference is kept at `assets/cv-reference.jpg` for your records and is not displayed automatically.

## Contact form

The form currently demonstrates the interaction locally. To receive submissions after publishing, connect it to an email/form provider and replace the submit handler in `script.js`.
