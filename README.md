# Shubham Patel - Portfolio

A beautiful, modern portfolio website built with Next.js, shadcn/ui, and Tailwind CSS. Features dark/light mode toggle and fully responsive design.

## Features

- 🎨 Modern and attractive UI design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 📝 Professional sections: Hero, About, Skills, Experience, Projects, Contact

## Tech Stack

- **Next.js 16** - React framework (latest version)
- **React 19** - UI library (latest version)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom animations
- **shadcn/ui** - UI components
- **next-themes** - Dark mode support
- **Lucide React** - Icons

## Features

✨ **Enhanced UI/UX:**
- Smooth scroll animations
- Hover effects and transitions
- Gradient text effects
- Modern card designs with borders
- Responsive typography

🎨 **Animations:**
- Fade-in animations on scroll
- Hover scale effects
- Smooth transitions
- Intersection Observer for performance

🔍 **SEO Optimized:**
- Comprehensive metadata
- Open Graph tags
- Twitter Card support
- Structured data (JSON-LD)
- Semantic HTML

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── sections/        # Section components
│   ├── ui/              # Reusable UI components
│   ├── navbar.tsx       # Navigation bar
│   ├── theme-toggle.tsx # Theme switcher
│   └── theme-provider.tsx # Theme context provider
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

- Update your information in the respective section components
- Modify colors in `app/globals.css` (CSS variables)
- Adjust styling in `tailwind.config.ts`
