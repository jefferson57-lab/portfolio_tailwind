# Jefferson's Portfolio

A modern, high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Showcasing projects, skills, and experience with smooth animations and responsive design.

## Features

✨ **Modern Design**
- Dark theme with yellow accents
- Glassmorphism effects
- Smooth animations and transitions
- Fully responsive layout

🚀 **Performance**
- Built with Vite for lightning-fast development
- Optimized bundle size
- Lazy loading components
- SEO-friendly structure

📱 **Responsive**
- Mobile-first design
- Smooth navigation
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

🎨 **Customizable**
- Easy to personalize with your own information
- Well-organized component structure
- CSS custom properties for theming
- Detailed customization guide included

## Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.4
- **CSS Processing**: PostCSS & Autoprefixer
- **Fonts**: Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js 14+ and npm/yarn installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-tailwind.git
   cd portfolio-tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The portfolio will open automatically at `http://localhost:5173`

## Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
portfolio-tailwind/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── portfolio.jsx           # Main portfolio component
│   ├── App.jsx                 # App wrapper
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## Customization

See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for detailed instructions on:

- Changing colors and accent colors
- Updating personal information
- Adding/editing projects
- Updating skills and experience
- Customizing fonts
- Adding animations
- SEO optimization
- And much more!

### Quick Customization Examples

#### Change Accent Color (Yellow → Blue)
In `src/components/`, search for `text-yellow-500` and replace with `text-blue-500`:

```bash
sed -i 's/yellow-500/blue-500/g' src/components/*.jsx
```

#### Update Your Information
1. **Hero Section**: Edit name and title in [src/components/Hero.jsx](src/components/Hero.jsx)
2. **Navigation**: Update brand name in [src/components/Navigation.jsx](src/components/Navigation.jsx)
3. **Projects**: Modify projects array in [src/components/Projects.jsx](src/components/Projects.jsx)
4. **Contact**: Update contact info in [src/components/Contact.jsx](src/components/Contact.jsx)

#### Add Your Projects
Edit the `projects` array in [src/components/Projects.jsx](src/components/Projects.jsx):

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'What your project does',
    tech: ['React', 'Node.js'],
    image: 'https://your-image-url.com/image.jpg',
    link: 'https://yourproject.com',
    github: 'https://github.com/yourusername/repo'
  },
  // Add more...
]
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Deploy automatically!

### Deploy to Netlify

1. Build your project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name
2. Build: `npm run build`
3. Push the `dist` folder to the `gh-pages` branch

## Performance Optimization

- Images are optimized automatically by browsers
- CSS is tree-shaken and minified by Vite
- JavaScript is bundled and minified for production
- Lazy loading animations reduce initial paint time
- Use `npm run build` to generate optimized production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO

The portfolio includes:
- ✓ Meta tags for social media sharing
- ✓ Semantic HTML structure
- ✓ Open Graph tags
- ✓ Mobile viewport configuration
- ✓ Optimized page titles and descriptions

See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md#12-seo-optimization) for more SEO tips.

## Analytics

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add the tracking code to `index.html` (see CUSTOMIZATION_GUIDE.md)

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## License

This project is open source and available under the MIT License.

## Support

Need help? Check out:
- [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) - Detailed customization instructions
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)

## Roadmap

- [ ] Dark/Light mode toggle
- [ ] Blog section with markdown support
- [ ] Newsletter signup
- [ ] Case studies
- [ ] More animation variations
- [ ] PWA support

## Author

**Jefferson**
- GitHub: [@yourusername](https://github.com)
- LinkedIn: [Your Profile](https://linkedin.com)
- Email: jefferson@example.com

---

Built with ❤️ using React, Vite & Tailwind CSS
