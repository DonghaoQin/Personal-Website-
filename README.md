# Personal Portfolio Website

A modern, responsive portfolio website built with Vue 3 and Vite to showcase your projects and skills to potential employers.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Project Showcase** - Display your projects with filtering by technology stack
- **Skills Visualization** - Interactive skill bars and professional timeline
- **Contact Section** - Easy-to-find contact information and social media links
- **Single Page Application** - Smooth scrolling navigation between sections

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend build tool
- **HTML5/CSS3** - Modern web standards
- **Vanilla JavaScript** - No heavy dependencies

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization Guide

### 1. Personal Information

Update your personal details in the following components:

#### Navbar Component ([src/components/Navbar.vue](src/components/Navbar.vue))
- Line 5: Replace "Your Name" with your actual name

#### Hero Component ([src/components/Hero.vue](src/components/Hero.vue))
- Line 5: Replace placeholder image with your photo
- Line 7: Update your name
- Line 8: Update your title/role
- Line 9-12: Update your introduction
- Line 18: Update core skills array

### 2. Projects

Edit [src/components/Projects.vue](src/components/Projects.vue) (starting at line 53):
- Replace the placeholder projects with your actual projects
- Update: title, description, image, technologies, demo links, and code links
- Add or remove projects as needed

### 3. Skills & Experience

Edit [src/components/Skills.vue](src/components/Skills.vue):
- Lines 21-48: Update your technical skills and proficiency levels
- Lines 52-76: Update your work experience and education timeline

### 4. Contact Information

Edit [src/components/Contact.vue](src/components/Contact.vue):
- Line 12: Update email address
- Line 24: Update GitHub link
- Line 36: Update LinkedIn link
- Line 48: Update phone number
- Lines 66-86: Update social media links

### 5. Colors & Styling

The main color scheme uses purple gradients. To change:
- Primary gradient: `#667eea` to `#764ba2`
- Update these colors in component `<style>` sections

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Vue components
│   │   ├── Navbar.vue   # Navigation bar
│   │   ├── Hero.vue     # Home/About section
│   │   ├── Projects.vue # Project showcase
│   │   ├── Skills.vue   # Skills & experience
│   │   └── Contact.vue  # Contact section
│   ├── App.vue          # Main app component
│   └── main.js          # App entry point
├── package.json
└── vite.config.js
```

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist/` directory.

## Deployment

You can deploy this website to various platforms:

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run: `npm run deploy`

## Tips for Showcasing to HR

1. **Keep it Professional** - Use a professional photo and maintain a formal tone
2. **Highlight Real Projects** - Include 3-5 of your best projects with live demos
3. **Quantify Achievements** - Add metrics and results where possible
4. **Keep Skills Current** - Only list technologies you're comfortable discussing
5. **Test Thoroughly** - Ensure all links work and the site is responsive
6. **Add a Resume** - Consider adding a downloadable PDF resume
7. **SEO Optimization** - Update meta tags in `index.html` for better discoverability

## Adding Your Own Images

1. Place images in the `public/` folder
2. Reference them in components using `/image-name.jpg`
3. For the hero image, use a professional headshot (200x200px recommended)
4. For project images, use screenshots or mockups (400x250px recommended)

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, feel free to open an issue on GitHub.

---

Built with Vue 3 + Vite
