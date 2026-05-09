import { motion } from 'motion/react';
import { Target, Zap, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '120+', label: 'Projects Completed' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">About Fortune Web Studio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gradient">
              Crafting digital experiences that command attention.
            </h3>
            <p className="text-secondary text-lg leading-relaxed mb-8 font-light">
              We help businesses build a strong online presence with modern, responsive, high-converting websites designed to attract customers and grow brands online. Our philosophy is rooted in the belief that a website should be more than just a digital brochure—it should be a powerful business engine.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col space-y-2">
                <Target className="text-cyan-400 mb-2" size={24} />
                <h4 className="text-white font-medium text-lg">Strategy First</h4>
                <p className="text-secondary text-sm">We design with your business goals in mind.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Zap className="text-cyan-400 mb-2" size={24} />
                <h4 className="text-white font-medium text-lg">Lightning Fast</h4>
                <p className="text-secondary text-sm">Optimized for speed and performance.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Shield className="text-cyan-400 mb-2" size={24} />
                <h4 className="text-white font-medium text-lg">Secure & Reliable</h4>
                <p className="text-secondary text-sm">Built on solid, secure foundations.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Sparkles className="text-cyan-400 mb-2" size={24} />
                <h4 className="text-white font-medium text-lg">Pixel Perfect</h4>
                <p className="text-secondary text-sm">Meticulous attention to detail.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden relative glass-panel border border-white/10 p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-blue-800/20 rounded-3xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Our Studio Team" 
                className="w-full h-full object-cover rounded-[1.25rem] brightness-75 contrast-125 saturate-0 relative z-10 mix-blend-luminosity"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-2xl hidden md:grid grid-cols-2 gap-8 z-20">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-serif text-white">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-secondary mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
