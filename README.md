# Go2Study - Elite School Entrance Exam Preparation

A modern, responsive React website for Go2Study, an educational service that helps 7th-grade students in Kazakhstan prepare for entrance exams to elite schools like NIS and BIL.

## Features

- Fully responsive design that works on all devices
- Modern UI with smooth animations
- Interactive components
- Contact form for expressing interest
- Section-based single-page application
- Video testimonials section

## Project Structure

The project follows a modular component-based structure:

```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Teachers.tsx
│       ├── Approach.tsx
│       ├── Results.tsx
│       ├── Reviews.tsx
│       └── Contact.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Technologies Used

- React with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Responsive design principles
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Customization

- Update images and content in the respective component files
- Modify styles in index.css or App.css
- Add or remove sections by editing the App.tsx file

## Deployment

Build the production-ready site:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static site hosting service.

## License

This project is open source and available under the MIT License.

## Contact

Go2Study - go2studykz@gmail.com
