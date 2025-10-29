# NutriMind.AI - HTML/CSS/JS Version

A complete static website clone of the NutriMind.AI fitness platform built with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
html-version/
├── index.html              # Homepage
├── css/
│   ├── styles.css         # Main styles & design system
│   ├── navbar.css         # Navigation styles
│   ├── hero.css           # Hero section styles
│   ├── cards.css          # Card components styles
│   └── footer.css         # Footer styles
├── js/
│   ├── main.js            # Core functionality
│   ├── navbar.js          # Navigation functionality
│   ├── animations.js      # Animation effects
│   └── auth.js            # Authentication logic
├── pages/
│   ├── login.html         # Login page
│   ├── signup.html        # Sign up page
│   ├── profile.html       # User profile
│   ├── contact.html       # Contact page
│   ├── services.html      # Services page
│   ├── tools.html         # Fitness tools
│   ├── blog.html          # Blog listing
│   ├── subscription.html  # Pricing plans
│   ├── gym-packages.html  # Gym packages
│   ├── find-gym.html      # Gym finder
│   ├── train-with-ai.html # AI training
│   ├── train-with-us.html # Personal trainers
│   ├── health-tracking.html # Health metrics
│   └── gamify.html        # Gamification
└── README.md              # This file
```

## 🎨 Design System

### Colors (HSL)
- **Background**: hsl(0, 0%, 3%) - Dark base
- **Foreground**: hsl(0, 0%, 98%) - Light text
- **Primary**: hsl(0, 84%, 55%) - Red accent (#DC2626)
- **Card**: hsl(0, 0%, 6%) - Card background
- **Border**: hsl(0, 20%, 20%) - Borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold (700-800)
- **Body**: Regular (400) / Medium (500)

## 🚀 Features

- ✅ Fully responsive design
- ✅ Dark theme with red accents
- ✅ Smooth animations
- ✅ Interactive navigation
- ✅ Authentication system (localStorage)
- ✅ Form validation
- ✅ FAQ accordion
- ✅ Profile management
- ✅ Mobile-friendly menu
- ✅ Toast notifications

## 📦 CDN Links Used

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Font Awesome Icons
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

## 🔧 Setup & Usage

1. **Local Development**: Simply open `index.html` in a web browser
2. **Live Server**: Use VS Code Live Server extension for hot reload
3. **Deployment**: Upload all files to any static hosting service

## 🔐 Demo Credentials

- **Username**: demo
- **Password**: demo123

## 📱 Pages Overview

| Page | Description |
|------|-------------|
| **index.html** | Homepage with hero, services, testimonials |
| **login.html** | User authentication |
| **signup.html** | New user registration |
| **profile.html** | User profile & settings |
| **services.html** | Available services |
| **tools.html** | Fitness calculators & tools |
| **blog.html** | Fitness articles & tips |
| **subscription.html** | Membership pricing |
| **gym-packages.html** | Gym membership plans |
| **find-gym.html** | Gym locator |
| **train-with-ai.html** | AI-powered training |
| **train-with-us.html** | Personal trainers |
| **health-tracking.html** | Health metrics tracking |
| **gamify.html** | Achievements & challenges |
| **contact.html** | Contact form |

## 🎯 Key Components

### Navbar
- Fixed position with scroll effect
- Dropdown menus
- Mobile hamburger menu
- Auth state management

### Cards
- Hover effects
- Border animations
- Consistent styling
- Responsive grid layouts

### Forms
- Client-side validation
- Toast notifications
- LocalStorage integration
- Error handling

### Animations
- Fade-in effects
- Scroll animations
- Hover transitions
- Loading states

## 💾 Data Storage

Uses `localStorage` for:
- User authentication state
- Profile information
- Preferences

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Notes

- No build process required
- No npm dependencies
- Pure vanilla JavaScript
- SEO-friendly structure
- Accessibility considered

## 🔄 Updates

To update content:
1. Edit HTML files directly
2. Modify CSS variables in `styles.css`
3. Update JavaScript logic in respective files

## 📄 License

© 2024 nutrimind.ai. All rights reserved.

---

**Built with ❤️ for fitness enthusiasts**