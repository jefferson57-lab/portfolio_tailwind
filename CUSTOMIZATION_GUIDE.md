# Customization Examples

This guide shows you exactly how to customize different aspects of your portfolio.

## 1. Changing Colors

### Primary Accent Color (Yellow → Blue)

Find and replace in portfolio.jsx:

```javascript
// FROM:
className="text-yellow-500"
className="bg-yellow-500"
className="border-yellow-500"
className="hover:text-yellow-500"
className="hover:border-yellow-500"
className="group-hover:text-yellow-500"

// TO:
className="text-blue-500"
className="bg-blue-500"
className="border-blue-500"
className="hover:text-blue-500"
className="hover:border-blue-500"
className="group-hover:text-blue-500"
```

Also update the gradient effect:

```javascript
// FROM:
background: 'radial-gradient(circle, rgb(234, 179, 8) 0%, transparent 70%)'

// TO:
background: 'radial-gradient(circle, rgb(59, 130, 246) 0%, transparent 70%)'
```

### Available Tailwind Colors:

- `blue-500` - Blue
- `purple-500` - Purple
- `green-500` - Green
- `red-500` - Red
- `pink-500` - Pink
- `indigo-500` - Indigo
- `teal-500` - Teal
- `orange-500` - Orange

## 2. Updating Personal Information

### Hero Section

```javascript
// In portfolio.jsx, find the hero section:

<h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
  Your Name Here  {/* Change this */}
  <br />
  <span className="text-yellow-500">Title/Specialty</span>  {/* Change this */}
</h1>

<p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
  Your personal tagline or description  {/* Change this */}
</p>
```

### Navigation Brand

```javascript
<div className="text-2xl font-black tracking-tighter">
  <span className="text-yellow-500">YOUR</span>  {/* Change this */}
  <span className="text-zinc-50">.NAME</span>  {/* Change this */}
</div>
```

## 3. Adding/Editing Projects

### Project Template

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of what the project does and what problem it solves.',
    tech: ['React', 'Node.js', 'MongoDB'], // Tech stack
    image: 'https://images.unsplash.com/photo-xxx', // Project screenshot
    link: 'https://yourproject.com', // Live demo link
    github: 'https://github.com/yourusername/repo' // GitHub repo
  },
  // Add more projects here
];
```

### Using Your Own Images

**Option 1: Online hosted images**

```javascript
image: 'https://yourdomain.com/images/project1.png'
```

**Option 2: Local images**

1. Create a `public/images` folder
2. Add your images there
3. Reference them:

```javascript
image: '/images/project1.png'
```

## 4. Updating Skills

```javascript
const skills = {
  'Frontend': [
    'React',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'Tailwind CSS',
    // Add your frontend skills
  ],
  'Backend': [
    'Node.js',
    'Python',
    'PostgreSQL',
    // Add your backend skills
  ],
  'Tools & Others': [
    'Git',
    'Docker',
    'AWS',
    // Add your tools
  ],
  // You can add more categories:
  'Mobile': ['React Native', 'Flutter'],
  'Design': ['Figma', 'Adobe XD'],
};
```

## 5. Modifying Work Experience

```javascript
const experience = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Brief description of your responsibilities and achievements.'
  },
  // Add more experiences
];
```

## 6. Contact Information

### Email

```javascript
// Find all instances of:
href="mailto:your.email@example.com"

// Replace with:
href="mailto:yourrealemail@example.com"
```

### Social Links

```javascript
// GitHub
<a href="https://github.com/yourusername">

// LinkedIn
<a href="https://linkedin.com/in/yourprofile">

// Twitter/X (if you want to add)
<a href="https://twitter.com/yourhandle">
```

## 7. Adding New Sections

### Example: Adding a Blog Section

```javascript
{/* Add this after the Projects section */}
<section id="blog" className="py-32 px-6 bg-zinc-900/50 relative">
  <div className="max-w-7xl mx-auto">
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
          Articles
        </span>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
        Latest Blog Posts
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Blog post cards here */}
    </div>
  </div>
</section>
```

**Don't forget to:**
- Add "Blog" to navigation menu
- Add scroll functionality
- Create blog post data array

## 8. Changing Fonts

### Using Google Fonts

1. Choose a font from [Google Fonts](https://fonts.google.com)
2. Update the import in portfolio.jsx:

```javascript
// FROM:
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

// TO:
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
```

3. Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'], // Change 'Inter' to your font
    },
  },
},
```

### Popular Font Combinations

**Modern & Clean:**
- Headings: Space Grotesk
- Body: Inter

**Elegant:**
- Headings: Playfair Display
- Body: Source Sans Pro

**Tech/Startup:**
- Headings: Montserrat
- Body: Open Sans

**Minimalist:**
- Headings: DM Sans
- Body: DM Sans

## 9. Animation Speed

### Slowing Down Animations

```javascript
// FROM:
duration-300  // Fast
duration-500  // Medium
duration-700  // Slow

// TO:
duration-500  // Medium
duration-700  // Slow
duration-1000 // Very slow
```

### Removing Animations

Remove or comment out transition classes:

```javascript
// FROM:
className="transition-all duration-300 hover:scale-110"

// TO:
className=""
```

## 10. Responsive Breakpoints

Tailwind uses these breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Example:

```javascript
// Small: 1 column, Medium: 2 columns, Large: 3 columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

## 11. Adding a Dark/Light Mode Toggle

### Install package:

```bash
npm install @tailwindcss/forms
```

### Add state:

```javascript
const [isDark, setIsDark] = useState(true);
```

### Toggle button:

```javascript
<button onClick={() => setIsDark(!isDark)}>
  {isDark ? '☀️' : '🌙'}
</button>
```

### Conditional classes:

```javascript
className={isDark ? 'bg-zinc-950' : 'bg-white'}
```

## 12. SEO Optimization

### Update HTML Meta Tags

In `index.html`:

```html
<head>
  <title>Your Name - Full Stack Developer</title>
  <meta name="description" content="Your custom description here" />
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="URL to your social share image" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

## 13. Adding Analytics

### Google Analytics

1. Get your tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 14. Mobile Menu Customization

Change animation direction:

```javascript
// Slide from right instead of top
{isMenuOpen && (
  <div className="fixed inset-0 bg-zinc-900 z-50 animate-slide-in-right">
    {/* Menu content */}
  </div>
)}
```

## 15. Adding Smooth Scroll Offset

If you want space below the fixed navbar when scrolling:

```javascript
// Adjust scroll position
document.getElementById('section')?.scrollIntoView({ 
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest'
});
```

Or add padding to sections:

```javascript
className="pt-32" // Adds space for fixed navbar
```

## Quick Reference: Common Changes

| What to Change | Where to Find It | Line/Section |
|---|---|---|
| Name | Hero section | `<h1>` tag |
| Colors | Throughout | Search for `yellow-500` |
| Projects | projects array | Around line 20 |
| Skills | skills object | Around line 40 |
| Experience | experience array | Around line 50 |
| Email | All mailto links | Search `mailto:` |
| Social links | Contact section | Bottom of component |
| Fonts | Style tag | `@import url` |

## Testing Your Changes

After making changes:

1. Save all files
2. Restart dev server if needed:
   ```bash
   npm run dev
   ```
3. Check browser (auto-reloads)
4. Test on mobile (Chrome DevTools → Toggle Device Toolbar)
5. Build for production:
   ```bash
   npm run build
   ```

## Need More Help?

Check the main README.md for:

- Installation instructions
- Deployment guides
- Troubleshooting tips
- Performance optimization

Happy customizing! 🎨
