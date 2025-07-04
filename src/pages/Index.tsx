import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [nameScrollProgress, setNameScrollProgress] = useState(0); // 0 = top, 1 = header

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home');
      const name = document.getElementById('hero-name-anim');
      if (hero && name) {
        const heroRect = hero.getBoundingClientRect();
        const nameRect = name.getBoundingClientRect();
        const start = heroRect.top + window.scrollY;
        const end = start + heroRect.height / 2; // Adjust as needed
        const scrollY = window.scrollY + 80; // 80 = header height
        let progress = (scrollY - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress));
        setNameScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} nameScrollProgress={nameScrollProgress} />
      <Hero nameScrollProgress={nameScrollProgress} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
