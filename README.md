# Barristar - Law Firm Website

A modern, professional law firm website built with **Tailwind CSS** and **TypeScript**, inspired by the Barristar design. This project features a fully responsive layout with a professional legal aesthetic.

## ✨ Features

- **Modern Design**: Professional law firm layout with elegant typography and color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Interactive Components**: Smooth scrolling, dropdown menus, and form handling
- **Alpine.js**: Lightweight JavaScript framework for reactive components
- **Performance Optimized**: Fast loading times and smooth animations

## 🎨 Design Features

- **Professional Color Scheme**: Navy blue, gold accents, and clean whites
- **Typography**: Playfair Display for headings, Inter for body text
- **Modern Cards**: Hover effects and shadow animations
- **Professional Imagery**: Placeholder gradients that can be replaced with actual photos
- **Interactive Navigation**: Dropdown menus and mobile-responsive hamburger menu

## 📁 Project Structure

```
barristar-law-firm/
├── src/
│   ├── components/         # Reusable TypeScript components
│   ├── styles/
│   │   └── input.css      # Tailwind CSS entry point
│   ├── types/
│   │   └── index.ts       # TypeScript type definitions
│   ├── utils/
│   │   └── data.ts        # Sample data for the website
│   └── main.ts            # Main TypeScript entry point
├── dist/
│   ├── index.html         # Main HTML file
│   ├── styles/
│   │   └── output.css     # Compiled Tailwind CSS
│   └── assets/            # Images and other assets
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd barristar-law-firm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to the local server URL (typically `http://localhost:8080`)

## 📜 Available Scripts

- `npm run build` - Build both CSS and TypeScript
- `npm run build:css` - Compile Tailwind CSS
- `npm run build:ts` - Compile TypeScript
- `npm run dev` - Start development server with live reload
- `npm start` - Start production server

## 🎯 Sections Included

### 1. Header & Navigation
- Professional sticky navigation bar
- Dropdown menus for practice areas and about sections
- Mobile-responsive hamburger menu
- Contact information in top bar

### 2. Hero Section
- Compelling headline with call-to-action
- Professional imagery background
- Appointment booking card

### 3. About Section
- Company information and values
- Statistics showcase (cases won, clients, lawyers)
- Professional styling with grid layout

### 4. Practice Areas
- Six main practice areas:
  - Family Law
  - Personal Injury
  - Criminal Law
  - Education Law
  - Real Estate Law
  - Business Law
- Interactive hover effects
- Professional icons for each area

### 5. Case Studies
- Portfolio of successful cases
- Filter functionality by practice area
- Professional case presentations

### 6. Team Section
- Attorney profiles with photos
- Social media links
- Professional credentials display

### 7. Testimonials
- Client reviews and feedback
- Professional presentation with ratings
- Multiple testimonial layouts

### 8. Contact Form
- Professional contact form with validation
- Practice area selection dropdown
- Responsive design

### 9. Footer
- Comprehensive footer with multiple sections
- Contact information
- Quick links and practice areas
- Social media integration

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

- **Primary Colors**: Navy blue variations
- **Accent Colors**: Gold/amber variations
- **Neutral Colors**: Gray scale

### Typography
Two main font families are used:
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Content
Update the content in `src/utils/data.ts`:
- Navigation items
- Practice areas
- Team members
- Case studies
- Testimonials
- Contact information

## 📱 Responsive Design

The layout is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Optimized Images**: Placeholder gradients that load instantly
- **Smooth Scrolling**: Native CSS smooth scrolling
- **Lazy Loading**: Optimized for performance
- **Minified CSS**: Production-ready Tailwind CSS

## 🔧 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please contact:
- Email: info@barristar.com
- Phone: 3164-5456854
- Address: 121 King Street, Melbourne, Australia

---

**Built with ❤️ using Tailwind CSS and TypeScript**