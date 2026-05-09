import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold tracking-tight italic font-serif text-white">
              Fortune <span className="font-sans not-italic font-medium text-white/60">Web Studio</span>
            </span>
          </Link>
          <p className="text-secondary max-w-sm">
            We design premium websites for businesses, brands, creators, and digital entrepreneurs.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-2 text-secondary">
            <li><a href="/#about" className="hover:text-white transition-colors">About Studio</a></li>
            <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest">Connect</h4>
          <div className="flex space-x-4 text-secondary">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:hello@fortunestudio.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary/60">
        <p>&copy; {new Date().getFullYear()} Fortune Web Studio. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
