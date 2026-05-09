import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== '/' && href.startsWith('#')) {
      window.location.href = `/${href}`;
      return;
    }
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/40 border-b border-white/10 backdrop-blur-xl' : 'py-6 bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight italic font-serif">
            Fortune <span className="font-sans not-italic font-medium text-white/60">Web Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-sm font-medium tracking-wide uppercase opacity-80 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Link to="/admin" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <LayoutDashboard size={16} /> Admin
            </Link>
            <button onClick={toggleTheme} className="hover:text-cyan-400 transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <button onClick={() => handleNavClick('#contact')} className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors">
            Contact Agency
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="text-white">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t border-white/5 flex flex-col p-6 space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-lg font-medium text-left text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Link to="/admin" onClick={() => setIsOpen(false)} className="text-lg font-medium text-left text-secondary hover:text-white transition-colors flex items-center gap-2">
              <LayoutDashboard size={18} /> Admin Dashboard
            </Link>
            <button onClick={() => handleNavClick('#contact')} className="px-6 py-3 mt-4 rounded-xl bg-white text-black font-medium text-center hover:bg-white/90 transition-colors w-full">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
