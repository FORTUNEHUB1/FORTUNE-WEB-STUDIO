import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MonitorSmartphone, 
  ShoppingCart, 
  LayoutTemplate, 
  Briefcase, 
  CalendarCheck, 
  Download, 
  RefreshCw, 
  Smartphone,
  Star
} from 'lucide-react';
import { CustomService } from '../../pages/AdminDashboard';

export default function Services() {
  const [customServices, setCustomServices] = useState<CustomService[]>([]);

  useEffect(() => {
    const storedFilters = localStorage.getItem('custom_services');
    if (storedFilters) {
      try {
        setCustomServices(JSON.parse(storedFilters));
      } catch (error) {
        console.error('Error parsing services');
      }
    }
  }, []);

  const services = [
    { icon: MonitorSmartphone, title: 'Business Website Design', desc: 'Professional websites tailored to establish your brand authority.' },
    { icon: ShoppingCart, title: 'E-commerce Websites', desc: 'High-converting online stores built for sales and seamless checkout.' },
    { icon: LayoutTemplate, title: 'Landing Pages', desc: 'Focused, conversion-optimized pages for your marketing campaigns.' },
    { icon: Briefcase, title: 'Portfolio Websites', desc: 'Stunning showcases for creatives, agencies, and freelancers.' },
    { icon: CalendarCheck, title: 'Booking Websites', desc: 'Automated scheduling solutions for service-based businesses.' },
    { icon: Download, title: 'Digital Product Stores', desc: 'Automated delivery systems for your ebooks, courses, and software.' },
    { icon: RefreshCw, title: 'Website Redesign', desc: 'Modernize your outdated website to meet current web standards.' },
    { icon: Smartphone, title: 'Mobile Responsive Design', desc: 'Flawless experiences across all devices and screen sizes.' },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-gradient mb-6">
            Services that drive <br className="hidden md:block" /> measurable results.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/20"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 text-white">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-medium text-white mb-3">{service.title}</h4>
                <p className="text-secondary text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Admin Services */}
        {customServices.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <h3 className="text-2xl font-serif italic text-white flex items-center gap-2">
                <Star size={20} className="text-cyan-400" /> Specialized Products
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customServices.map((cs, idx) => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-full h-48 bg-black overflow-hidden relative">
                    <img src={cs.mediaUrl} alt={cs.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-cyan-400 border border-white/10">
                      KSH {cs.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{cs.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{cs.description}</p>
                    <button className="mt-6 w-full py-3 bg-white/5 hover:bg-cyan-500 hover:text-black text-white font-bold rounded-xl transition-colors text-sm uppercase tracking-wider">
                      Request Service
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
