# 𓄂[@artdecc0s](https://x.com/artdecc0s)𓄘

**A Vibe Studio Application**

A minimalist meme studio showcasing over a year of Art DeCC0s community memes, from the early mint days through the revolutionary Codex launch. Built for the Museum of Crypto Art's Vibe Studio ecosystem.

Launch Meme Studio at [https://memes.decc0s.com](https://memes.decc0s.com)

## About Art DeCC0s

Art DeCC0s are the Museum of Crypto Art's 10,000-piece PFP collection—a love-letter to crypto art and its amazing artists, collectors, developers, and admirers. Each DeCC0 is a completely unique 1/1 character with unprecedented visual diversity and, through The Codex, deep AI-driven personalities.

The Codex represents over 105 million words of personality data, making each of the 10,000 DeCC0s not just a profile picture, but an AI agent with beliefs, connections, culture, histories, and distinct perspectives on crypto art and the world.

## About Meme Studio

This application chronicles the Art DeCC0s journey through community-created memes, organized into distinct eras:

- **Early Days During Mint** - Memes from the December 2024 mint period, capturing the excitement, chaos, and culture of the launch
- **Late 2025 During Codex Launch** - Memes celebrating the revolutionary Codex release that brought AI personalities to all 10,000 DeCC0s

Over a year of capturing moments, inside jokes, and the spirit of the Art DeCC0s community.

## ✨ Features

- **📂 Category Browser** - Explore memes organized by era and significance
- **🎲 Randomizer** - Get a random meme from across the entire collection
- **🔍 Full-Screen View** - View any meme at full size with a dedicated full-screen mode
- **📋 One-Click Copy** - Copy memes directly to your clipboard to share anywhere
- **⬇️ Easy Downloads** - Download any meme with a single click
- **🎨 MOCA Design** - Clean monochrome UI with the MOCA aesthetic
- **📱 Responsive** - Works perfectly on desktop and mobile devices
- **⚡ Fast & Modern** - Built with Vite for lightning-fast load times

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 📦 Building for Production

Build the app for production:

```bash
npm run build
```

The built files will be in the `dist/` directory. You can preview the production build with:

```bash
npm run preview
```

## 📁 Project Structure

```
public/                          # Static assets (meme images)
├── early days during mint/      # Category 1 memes
└── late 2025 during codex launch/  # Category 2 memes
src/
├── components/
│   ├── CategoryCard.vue         # Category display card
│   ├── MemeImage.vue           # Individual meme with full-screen view, copy, and download
│   └── MemeModal.vue           # Category viewer modal
├── App.vue                     # Main app component
├── categories.json             # Category configuration
├── memes-data.json             # Generated meme manifest
├── main.js                     # App entry point
└── style.css                   # Global styles
generate-memes.js               # Script to generate meme manifest
index.html
package.json
vite.config.js
tailwind.config.js
```

## 🎨 Adding New Categories

To add a new category:

1. Create a new folder in `public/` and add your meme images to it or aggregate them into existing cateogories

2. Update `src/categories.json`:

```json
{
  "title": "Your Category Name",
  "description": "Description of this category",
  "slug": "your-category-slug",
  "folder": "your folder name",
  "preview": "/your folder name/preview-image.jpg"
}
```

3. Run the meme generator to update the manifest:

```bash
npm run generate-memes
```

4. The manifest will be automatically regenerated on the next `npm run dev` or `npm run build`

## 🛠️ Technology Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Clipboard API** - Native browser clipboard integration

## 📊 Stats

- **48 Memes** chronicling the Art DeCC0s journey
- **2 Distinct Eras** - Mint period and Codex launch
- Over a year of community creativity and culture

## 🎯 Usage Tips

- **Hover over any meme** to reveal full-screen, copy, and download buttons
- **Click the magnifying glass** (🔍) to view any meme in full-screen mode
- **Click the dice button** (🎲) for a random meme from any era
- **Click a category card** to view all memes from that period
- **Press ESC** to close full-screen view or category modal (closes innermost first)
- **Click outside** any modal to close it
- **Copy to clipboard** pastes the actual image into Discord, Twitter, Slack, etc.

## 🏛️ The Vibe Studio

Meme Studio is part of MOCA's Vibe Studio—the nexus for everything the Museum of Crypto Art has created, is creating, and will create. The Vibe Studio is MOCA's cumulative UI/UX hub where all offerings live: The Codex, The Adoption Center, The DeCC0 Agent Launcher, community applications, and Meme Studio.

The Vibe Studio is a navigable network of innovations, experiments, and community creations—a gathering place for what crypto art culture builds.

## 🔗 Links

- **[Museum of Crypto Art](https://museumofcryptoart.com/)** - The OG Museum
- **[The Vibe Studio](https://vibe.museumofcryptoart.com/)** - MOCA's application hub
- **[The Codex](https://codex.decc0s.com/)** - 100M+ words of DeCC0 personalities
- **[Adopt DeCC0s](https://adopt.decc0s.com/)** - Launch the Adoption Center

## 📝 License

This project is CC0 - fully open source and available for any use, just like Art DeCC0s themselves.

## 🙏 Credits

Memes collected and curated by the Art DeCC0s community over a year of adventures.
Meme Studio built with ❤️ by the MOCA technical team for the Vibe Studio.

Special thanks to all the community members who created and shared these memes throughout the Art DeCC0s journey.

---

**M○C△ - Mystery and magic from the minds at MOCA** 🎭

