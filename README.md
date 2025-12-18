# Alice - UI/UX Designer Portfolio

A portfolio website designed in Figma and implemented with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
├── from_figma/           # Components exported from Figma
│   ├── DribbbleShotHD.jsx
│   ├── svg-ctujq.jsx
│   └── TitleSection
├── src/                  # Application source files
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Figma** - Design source

## Notes

- Images are currently referenced from Figma's localhost server (`http://localhost:3845/assets/...`)
- These images will work while the Figma desktop app is running with the MCP server
- For production, replace these with actual image assets
