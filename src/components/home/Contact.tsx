import { motion } from 'motion/react';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Start a Project</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light text-gradient mb-8">
              Let's build something extraordinary.
            </h3>
            <p className="text-secondary text-lg leading-relaxed mb-12 max-w-md">
              Whether you need a complete redesign or a new premium website from scratch, we're ready to bring your vision to life.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@fortunestudio.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/10 group-hover:bg-white transition-colors">
                  <Mail size={20} className="text-white group-hover:text-black transition-colors" />
                </div>
                <span className="text-lg text-secondary group-hover:text-white transition-colors">hello@fortunestudio.com</span>
              </a>
              <a href="#" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/10 group-hover:bg-green-500 transition-colors">
                  <MessageCircle size={20} className="text-white transition-colors" />
                </div>
                <span className="text-lg text-secondary group-hover:text-white transition-colors">WhatsApp Us</span>
              </a>
              <div className="flex items-center space-x-4 group cursor-default">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/10">
                  <MapPin size={20} className="text-white" />
                </div>
                <span className="text-lg text-secondary">Global Remote Studio</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-secondary font-medium block">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-secondary font-medium block">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary font-medium block">Project Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                  <option className="bg-[#0a0a0a]">Business Website</option>
                  <option className="bg-[#0a0a0a]">E-Commerce Store</option>
                  <option className="bg-[#0a0a0a]">Landing Page</option>
                  <option className="bg-[#0a0a0a]">Website Redesign</option>
                  <option className="bg-[#0a0a0a]">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary font-medium block">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-cyan-500 text-black font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={24} />
      </a>
    </section>
  );
}
