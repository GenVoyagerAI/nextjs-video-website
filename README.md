# Next.js Video Website

A modern Next.js website with a video homepage that can be deployed on Netlify.

## Features

- 🎥 Auto-playing YouTube video on homepage
- 📱 Responsive design for mobile, tablet, and desktop
- 🧭 Sticky navigation with logo
- 📞 Contact page with form
- 🎨 Modern UI with Tailwind CSS
- ⚡ TypeScript for type safety
- 🚀 Optimized for Netlify deployment

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React YouTube library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-video-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Netlify

1. Connect your GitHub repository to Netlify
2. The build settings are already configured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Deploy!

## Project Structure

```
/app
  /page.tsx              # Homepage with video
  /contact/page.tsx      # Contact page
  /components
    /Navigation.tsx      # Navigation component
    /VideoPlayer.tsx     # Video player component
  /layout.tsx            # Root layout
  /globals.css           # Global styles
```

## Customization

- Update the YouTube video ID in `/app/page.tsx`
- Modify the logo in `/app/components/Navigation.tsx`
- Customize colors in `tailwind.config.js`
- Update contact information in `/app/contact/page.tsx`

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
