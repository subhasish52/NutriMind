# NutriMind - HTML/CSS/JS Project

A complete fitness and wellness platform built with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
nutrimind-project/
│
├── index.html                 # Homepage
│
├── css/
│   ├── styles.css            # Main stylesheet with variables and utilities
│   ├── navbar.css            # Navigation bar styles
│   ├── hero.css              # Hero section and gym finder styles
│   ├── cards.css             # Card components (trainers, blog, testimonials)
│   └── footer.css            # Footer styles
│
├── js/
│   ├── main.js               # Core functionality and FAQ
│   ├── navbar.js             # Mobile menu and navbar interactions
│   ├── animations.js         # Scroll animations and effects
│   ├── auth.js               # Authentication logic
│   └── utils.js              # Utility functions
│
├── pages/
│   ├── services.html         # Services overview
│   ├── subscription.html     # Track and buy subscription
│   ├── tools.html            # Fitness tools (BMI, calories)
│   ├── train-with-us.html    # Personal coaching
│   ├── train-with-ai.html    # AI training selection
│   ├── find-gym.html         # Gym locator
│   ├── gym-packages.html     # Membership packages
│   ├── blog.html             # Blog listing
│   ├── contact.html          # Contact form
│   ├── login.html            # Login page
│   ├── signup.html           # Sign up page
│   ├── profile.html          # User profile
│   ├── health-tracking.html  # Health metrics
│   └── gamify.html           # Gamification features
│
└── assets/
    └── images/
        ├── trainers/         # Trainer photos
        ├── blog/             # Blog post images
        ├── testimonials/     # Customer photos
        └── gym-*.png         # Gym logos
```

## 🔗 Required CDN Links

All CDN links are already included in the HTML files. Here's what's being used:

### Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Font Awesome Icons (v6.5.1)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

## 🎨 Color System (HSL Format)

The project uses CSS custom properties with HSL colors for easy theming:

```css
:root {
    --primary: 262 83% 58%;              /* Purple brand color */
    --secondary: 220 14.3% 95.9%;        /* Light gray */
    --background: 0 0% 100%;             /* White */
    --foreground: 220.9 39.3% 11%;       /* Dark text */
    --muted: 220 14.3% 95.9%;            /* Muted backgrounds */
    --border: 220 13% 91%;               /* Border color */
    --ring: 262 83% 58%;                 /* Focus ring */
}
```

## 📦 Features Included

### 1. **Homepage (index.html)**
- Hero section with gradient background
- Gym finder with search
- Affiliated gyms showcase
- Featured trainers
- Latest blog posts
- Customer testimonials
- FAQ accordion

### 2. **Authentication**
- Login page with demo credentials
- Sign up page with validation
- LocalStorage-based auth system
- Protected routes

**Demo Login Credentials:**
- Email: `user@nutrimind.ai`
- Password: `demo123`

### 3. **Subscription Management**
- Track current subscription
- View subscription history
- Browse and select plans
- Pricing in Indian Rupees (₹)

### 4. **Services Pages**
- Services overview
- Fitness tools (BMI, calories, workout planner)
- Personal coaching with trainer contact
- AI-powered training selection

### 5. **User Dashboard**
- Profile management
- Health tracking metrics
- Gamification features
- Progress tracking

## 🚀 Getting Started

### Option 1: Direct File Opening
1. Download all files maintaining the folder structure
2. Open `index.html` in your web browser
3. All pages should work locally

### Option 2: Local Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js (http-server):
```bash
npm install -g http-server
http-server -p 8000
```

Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

Then visit: `http://localhost:8000`

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## 🎯 Core JavaScript Features

### Authentication (auth.js)
- `handleLogin(email, password)`
- `handleSignup(name, email, password)`
- `handleLogout()`
- `isAuthenticated()`
- `getCurrentUser()`
- `requireAuth()` - Protect pages
- `redirectIfAuth()` - Redirect logged-in users

### Utilities (utils.js)
- LocalStorage helpers
- Date formatting
- Currency formatting
- String manipulation
- Array utilities
- Debounce & throttle
- DOM helpers

### Animations (animations.js)
- Scroll-triggered fade-in
- Parallax effects
- Count-up animations
- Smooth scrolling
- Card hover effects

### UI Components (main.js)
- Toast notifications
- Loading spinner
- FAQ accordion
- Form validation

## 🎨 Custom Components

### Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-outline">Outline Button</button>
<button class="btn btn-text">Text Button</button>
<button class="btn btn-lg">Large Button</button>
```

### Cards
```html
<div class="card">
    <h3>Card Title</h3>
    <p>Card content...</p>
</div>
```

### Forms
```html
<div class="form-group">
    <label class="form-label">Label</label>
    <input type="text" class="form-input">
</div>
```

## 🔧 Customization

### Changing Brand Colors
Edit `css/styles.css`:
```css
:root {
    --primary: 262 83% 58%;  /* Change this to your brand color */
}
```

### Adding New Pages
1. Create new HTML file in `pages/` folder
2. Copy header/footer from existing page
3. Link CSS files: `../css/styles.css`
4. Link JS files: `../js/main.js`

### Adding New Features
1. Add HTML structure
2. Style in appropriate CSS file
3. Add JavaScript logic in `js/main.js` or create new JS file

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌟 Key Features

✅ Fully responsive design
✅ Smooth animations and transitions
✅ LocalStorage-based authentication
✅ Mobile-friendly navigation
✅ FAQ accordion
✅ Toast notifications
✅ Form validation
✅ Scroll animations
✅ Modern gradient effects
✅ Icon integration (Font Awesome)
✅ Indian pricing (₹)
✅ Demo credentials included

## 📊 Performance Tips

1. **Optimize Images**: Compress all images before deployment
2. **Minify CSS/JS**: Use tools like UglifyJS or cssnano
3. **Enable Caching**: Configure server caching headers
4. **Lazy Load Images**: Add `loading="lazy"` to images
5. **Remove Unused Code**: Clean up unused CSS and JS

## 🐛 Debugging

### Common Issues

1. **Pages not loading?**
   - Check file paths (use relative paths)
   - Ensure folder structure is correct
   - Check browser console for errors

2. **Styles not applying?**
   - Verify CSS file paths
   - Check for typos in class names
   - Clear browser cache

3. **JavaScript not working?**
   - Check browser console for errors
   - Ensure JS files are loaded in correct order
   - Verify function names and syntax

## 📄 License

This is a demo project. Feel free to use and modify as needed.

## 🤝 Support

For issues or questions:
- Check browser console for errors
- Verify all file paths are correct
- Ensure CDN links are accessible
- Test in different browsers

## 🎓 Learning Resources

- **HTML**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript**: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Font Awesome Icons**: [fontawesome.com/icons](https://fontawesome.com/icons)

---

**Built with ❤️ for NutriMind**