import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';
import TechPerson from './components/tech-person';
import About from './components/about';
import WhyChoose from './components/why-choose';
import Contact from './components/contact';
import Footer from './components/footer';
import AnimatedBackground from './components/animated-background';
import { ThemeProvider } from './contexts/theme-context';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-x-hidden transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <Features />
        <TechPerson />
        <About />
        <WhyChoose />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
