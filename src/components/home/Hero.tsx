import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-600/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[#050505]/80 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Premium Web Design Studio</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-6"
        >
          Modern Websites <br className="hidden md:block"/>
          That <span className="italic font-serif font-light text-cyan-400">Grow Businesses</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-white/50 max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
        >
          We design premium, high-converting websites for businesses, brands, creators, and digital entrepreneurs who demand excellence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
          >
            <span>View Portfolio</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors text-white"
          >
            Contact Agency
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  );
}
