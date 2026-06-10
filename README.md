# Khamid Kholmatov - Portfolio

A responsive, single-page portfolio showcasing my development projects,
education, technical skills, and volunteering experience.

## Featured Projects

- Safa Prayer
- Fridgy
- Chapter One
- Chat JPT

Each project opens as an interactive case study with screenshots, technology
tags, descriptions, and release or development information.

## Features

- Light and dark themes
- Responsive desktop and mobile layouts
- Animated project gallery and reusable case-study modal
- Project-colored cursor glow within Featured Work
- Volunteering organization cards with event galleries
- Accessible keyboard navigation and reduced-motion support

## Technology

The site is built with vanilla HTML, CSS, and JavaScript. It has no build step
or runtime dependencies.

## Structure

```text
.
|-- index.html
|-- css/style.css
|-- js/main.js
|-- assets/img/
|-- assets/files/
`-- .claude/serve.js
```

Project content is managed through the `PROJECTS` array in `js/main.js`.
General portfolio and volunteering content lives in `index.html`.

## Run Locally

```bash
node .claude/serve.js
```

Then open `http://localhost:4321`.
