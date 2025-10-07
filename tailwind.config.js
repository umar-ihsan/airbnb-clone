/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.{html,html.erb,erb}",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
    "./app/views/layouts/**/*.{html,html.erb,erb}",
    "./app/views/devise/**/*.{html,html.erb,erb}"
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Main primary color (Airbnb red)
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Add custom indigo colors for the form
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        }
      },
      // Add custom aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '5/4': '5 / 4',
        '16/10': '16 / 10',
      }
    }
  },
  plugins: [],
  safelist: [
    'bg-indigo-600',
    'hover:bg-indigo-700',
    'focus:ring-indigo-500',
    'text-indigo-600',
    'hover:text-indigo-500',
    // Add aspect ratio classes to safelist
    'aspect-square',
    'aspect-video',
    'aspect-[4/3]',
    'aspect-[3/2]',
    'aspect-[5/4]'
  ]
}