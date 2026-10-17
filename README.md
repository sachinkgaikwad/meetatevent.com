# Meet at Event - Website

A responsive static website for Meet at Event, an event planning and hosting service founded by Sonia Gaikwad. Built with plain HTML, CSS, and JavaScript, it can be hosted directly with GitHub Pages.

## Project Structure

```
MeetAtEvent.com/
├── index.html                 # Homepage
├── pages/
│   ├── aboutus.html          # About Us page
│   ├── upcomingEvents.html   # Upcoming Events listing
│   ├── pastEvents.html       # Past Events archive
│   └── login.html            # Login/Sign Up page
├── css/
│   ├── styles.css            # Main stylesheet with all components
│   └── responsive.css        # Mobile and tablet responsive styles
├── js/
│   └── script.js             # Interactive functionality and animations
├── README.md                 # This file
└── requirement.txt           # Project requirements
```

## Features

### 🎨 Modern Design
- Black, gold, and purple theme with a subtle animated sparkle effect
- Smooth animations and transitions
- Professional typography and spacing
- Beautiful card layouts

### 📱 Fully Responsive
- Desktop, tablet, and mobile optimized
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Touch-friendly buttons and controls

### ⚡ Interactive Elements
- Smooth scrolling navigation
- Form validation
- Tab switching (Login/Sign Up)
- Event filtering by category
- Newsletter subscription
- Scroll-to-top button
- Mobile menu toggle

### 📄 Complete Pages

#### Homepage (index.html)
- Hero section with call-to-action
- Feature showcase grid (6 features)
- Statistics section
- Newsletter signup

#### About Us Page (aboutus.html)
- Founder profile and professional credentials
- Sonia Gaikwad's portrait from `images/Sonia.png`
- Event planning, coordination, dance, Zumba, and fitness services
- Contact email

#### Upcoming Events (upcomingEvents.html)
- Event listing with filtering
- Category filters (Conferences, Workshops, Networking, Seminars)
- Event cards with details
- Registration links

#### Past Events (pastEvents.html)
- Archive of completed events
- Testimonials section
- Statistics of past success
- Access to recordings and photos

#### Login Page (login.html)
- Dual-tab login/sign-up form
- Social login options
- Form validation
- Password recovery link
- Professional layout

## Color Scheme

- **Primary**: Gold (#f3cd72)
- **Secondary**: Lavender (#d8b4fe)
- **Accent**: Purple (#a855f7)
- **Background**: Black with deep purple gradients

## JavaScript Functionality

### Core Features
- **Mobile Menu Toggle**: Hamburger menu for responsive navigation
- **Smooth Scrolling**: Anchor links scroll smoothly
- **Form Validation**: Email and required field validation
- **Event Filtering**: Filter events by category
- **Intersection Observer**: Animate elements on scroll
- **Local Storage**: Remember user preferences

### Functions Available
- `validateEmail()` - Email validation
- `validateForm()` - Form field validation
- `filterEvents()` - Filter events by category
- `saveUserPreference()` - Store user settings
- `getUserPreference()` - Retrieve user settings

## CSS Classes & Styling

### Layout Classes
- `.container` - Max-width content container
- `.navbar` - Sticky navigation bar
- `.hero` - Hero section with background animation
- `.section-title` - Section heading style
- `.btn-*` - Button variants

### Component Classes
- `.feature-card` - Feature showcase cards
- `.event-card` - Event listing cards
- `.team-member` - Team profile cards
- `.form-group` - Form input groups

### Responsive Breakpoints
- **Mobile**: max-width: 480px
- **Tablet**: max-width: 768px
- **Large Tablet**: 769px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: min-width: 1400px

## Animations

### CSS Animations
- `slideInDown` - Title animation from top
- `slideInUp` - Content animation from bottom
- `fadeInUp` - Card appearance animation
- `float` - Floating cards in hero section
- `countUp` - Number counter animation

### Transition Effects
- Smooth color transitions on hover
- Transform animations for buttons
- Box-shadow depth effects
- Opacity fade effects

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

### Prerequisites
- Any modern web browser
- No external dependencies required (vanilla HTML/CSS/JS)

### Installation

1. Clone or download the project:
```bash
git clone <repository-url>
cd MeetAtEvent.com
```

2. Open in your browser:
```bash
# Simply open index.html in your browser
open index.html

# Or use a local server (Python)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Publish with GitHub Pages

1. Upload the project files to the root of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Open the published URL shown in the Pages settings.

This site has no build step, package installation, or server-side dependencies. Forms and login interactions are front-end demonstrations; they do not store submissions or authenticate users.

## Usage

- Use the navigation to browse the home, about, upcoming-event, and past-event pages.
- Use the category buttons to filter the event listings.
- Contact Meet at Event through the email link on the About Us page.

This repository is a static front-end website. Login, sign-up, registration, and newsletter interactions are demonstrations only: they do not authenticate users, send email, or store submissions. Connect a backend or replace those interactions before using them to collect information.

## Performance Features

- Lightweight CSS (no frameworks)
- Vanilla JavaScript (no jQuery/libraries)
- Optimized animations (GPU-accelerated)
- Lazy loading support
- Responsive images
- Minimal DOM manipulation

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on form fields
- Color contrast compliance
- Print-friendly styles

## Future Enhancements

Potential features to add:
- User dashboard with event management
- Payment integration for ticket sales
- Email notification system
- Advanced analytics dashboard
- Event recommendation engine
- Social sharing integration
- Live event streaming
- Mobile app version
- Backend API integration

## Customization

### Changing Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #f3cd72;
    --secondary-color: #d8b4fe;
    --accent-color: #a855f7;
    /* ... more variables */
}
```

### Modifying Fonts
Update the font-family in the body style:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adjusting Spacing
Modify padding and margins in component classes to adjust layout spacing.

## Code Structure

### HTML Structure
- Semantic HTML5 elements
- BEM naming convention for classes
- Organized sections with clear hierarchy
- Accessible form elements

### CSS Organization
- Global styles first
- Component-specific styles
- Responsive breakpoints at end
- Animation definitions grouped together

### JavaScript Organization
- Event listeners grouped by functionality
- Utility functions for reusable logic
- Clear function naming conventions
- Inline comments for complex logic

## Troubleshooting

### Mobile Menu Not Working
- Check if hamburger class is visible at small screen sizes
- Ensure JavaScript file is loaded properly

### Form Validation Issues
- Verify email format includes @ symbol
- Check that all required fields are filled

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure CSS files are in correct paths
- Check for CSS syntax errors in browser console

## Support

For issues or questions:
1. Check the FAQ section on About Us page
2. Contact support: support@meetatevent.com
3. Review browser console for error messages

## License

This project is open source and available for use.

## Credits

- Design inspired by modern SaaS platforms
- Built with vanilla HTML, CSS, and JavaScript
- Icons and emojis used for visual appeal

## Changelog

### Version 1.0 (Current)
- Initial website launch
- All core pages implemented
- Responsive design complete
- Form validation added
- Mobile menu implemented
- Animations and effects added

---

**Last Updated**: March 2024
**Version**: 1.0
**Status**: Production Ready
