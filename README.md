# Airbnb Clone - Rails 8 Application

A modern, responsive Airbnb clone built with Rails 8, featuring user authentication, property listings, and a professional UI that mimics the original Airbnb design.

![Rails](https://img.shields.io/badge/Rails-8.0.2-red.svg)
![Ruby](https://img.shields.io/badge/Ruby-3.x-red.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-blue.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue.svg)

## 🚀 Features

### ✅ Implemented
- **User Authentication** - Complete signup/login system with Devise
- **Responsive Design** - Mobile-first design using Tailwind CSS
- **Property Grid Layout** - Professional Airbnb-style property cards
- **Interactive UI** - Hover effects, animations, and modern interactions
- **Custom Branding** - Airbnb-inspired color scheme and logo integration
- **Search Interface** - Header with integrated search functionality
- **Modern Rails 8** - Latest Rails features with Propshaft asset pipeline

### 🔧 Tech Stack
- **Backend**: Ruby on Rails 8.0.2
- **Database**: PostgreSQL
- **Authentication**: Devise gem
- **Styling**: Tailwind CSS 4.x with custom configuration
- **Asset Pipeline**: Propshaft (Rails 8 default)
- **Frontend**: Stimulus JS, Turbo Rails, Importmap
- **Deployment Ready**: Docker, Kamal, Thruster configured

## 🎯 For Employers

This project demonstrates proficiency in:

**Full-Stack Development:**
- Modern Rails 8 application architecture
- RESTful API design principles
- Database design and migrations
- Authentication and authorization

**Frontend Skills:**
- Advanced CSS with Tailwind CSS
- Responsive web design
- Component-based UI development
- JavaScript integration with Stimulus

**Best Practices:**
- Clean, maintainable code structure
- Git version control
- Security considerations (Devise integration)
- Performance optimization (asset pipeline)

**Problem Solving:**
- Custom Tailwind configuration
- Complex grid layouts
- Cross-browser compatibility
- Mobile-responsive design

## 🛠️ Installation & Setup

### Prerequisites
- Ruby 3.x
- Node.js & npm
- PostgreSQL
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/CCumari/airbnb-clone.git
   cd airbnb-clone
   ```

2. **Install dependencies**
   ```bash
   bundle install
   npm install
   ```

3. **Database setup**
   ```bash
   rails db:create
   rails db:migrate
   rails db:seed
   ```

4. **Build Tailwind CSS**
   ```bash
   rails tailwindcss:build
   ```

5. **Start the development server**
   ```bash
   bin/dev
   # or alternatively
   rails server & rails tailwindcss:watch
   ```

6. **Visit the application**
   Open [http://localhost:3000](http://localhost:3000)

### Environment Configuration

Create a `.env` file (optional) for environment-specific variables:
```env
DATABASE_URL=postgresql://localhost/airbnb_development
RAILS_ENV=development
```

## 📁 Project Structure

```
airbnb-clone/
├── app/
│   ├── controllers/          # Application controllers
│   │   ├── application_controller.rb
│   │   └── home_controller.rb
│   ├── models/              # Data models
│   │   └── user.rb          # Devise user model
│   ├── views/               # ERB templates
│   │   ├── devise/          # Authentication views
│   │   ├── home/            # Homepage with property grid
│   │   └── layouts/         # Application layout & header
│   └── assets/              # Stylesheets and images
├── config/                  # Rails configuration
│   ├── routes.rb           # Application routes
│   └── database.yml        # Database configuration
├── db/                     # Database files
│   └── migrate/            # Database migrations
├── tailwind.config.js      # Tailwind CSS configuration
└── Gemfile                 # Ruby dependencies
```

## 🎨 Design System

The application uses a custom Tailwind configuration with:

- **Primary Color Palette**: Airbnb-inspired red (#ef4444) with full shade range
- **Typography**: Clean, modern font hierarchy
- **Components**: Reusable card components, buttons, and form elements
- **Grid System**: Responsive property grid (1-4 columns based on screen size)
- **Animations**: Smooth hover effects and transitions

## 🔐 Authentication

User authentication is handled by Devise with:
- Email/password registration and login
- Password recovery
- Remember me functionality
- Responsive authentication pages
- Conditional header rendering (no header on auth pages)

## 🚀 Deployment

The application is configured for deployment with:

- **Docker**: Dockerfile included for containerization
- **Kamal**: Modern deployment tool for Rails applications
- **Thruster**: HTTP acceleration and caching
- **Production-ready**: Asset compilation and caching configured

### Deploy with Kamal
```bash
kamal setup
kamal deploy
```

## 🏗️ Architecture Decisions

### Why Rails 8?
- Latest features and performance improvements
- Built-in Propshaft for faster asset compilation
- Modern JavaScript integration with importmaps
- Solid Queue/Cache/Cable for background processing

### Why Tailwind CSS?
- Rapid UI development
- Consistent design system
- Mobile-first responsive design
- Easy customization and theming

### Why Devise?
- Battle-tested authentication solution
- Extensive customization options
- Security best practices built-in
- Large community support

## 🧪 Testing

Run the test suite:
```bash
rails test
# or for specific tests
rails test:system
```

## 📝 Development Notes

### Key Implementation Details

1. **Custom Layout Logic**: Conditional header rendering using `devise_controller?` helper
2. **Tailwind Integration**: Custom color palette and component classes
3. **Responsive Grid**: CSS Grid with Tailwind breakpoints for property listings
4. **Asset Management**: Propshaft with Tailwind CSS building pipeline
5. **Authentication Flow**: Separate layouts for auth vs. main application pages

### Common Development Commands

```bash
# Rebuild Tailwind CSS
rails tailwindcss:build

# Watch for Tailwind changes
rails tailwindcss:watch

# Start development server
bin/dev

# Generate new components
rails generate controller Pages about contact

# Run migrations
rails db:migrate

# Reset database
rails db:reset
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Repository**: [https://github.com/CCumari/airbnb-clone](https://github.com/CCumari/airbnb-clone)
- **Live Demo**: [Coming Soon]
- **Portfolio**: [Your Portfolio URL]

---

**Built with ❤️ using Ruby on Rails 8 and Tailwind CSS**
