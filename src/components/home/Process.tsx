import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'We dive deep into your business goals, target audience, and market landscape to define a clear roadmap for success.' },
    { num: '02', title: 'Wireframing & UX', desc: 'Crafting the structural blueprint of your site to ensure a seamless and intuitive user journey.' },
    { num: '03', title: 'Visual Design', desc: 'Bringing the strategy to life with stunning, premium visuals, typography, and interactive elements.' },
    { num: '04', title: 'Development', desc: 'Translating the design into clean, performant, and responsive code using cutting-edge technologies.' },
    { num: '05', title: 'Launch & Scale', desc: 'Rigorous testing, optimized deployment, and ongoing support to ensure your site performs at its peak.' },
  ];

  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Our Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-gradient">
            How we bring your <br className="hidden md:block" /> vision to life.
          </h3>
        </motion.div>

        <div className="relative">
          {/* Subtle vertical line connecting steps */}
          <div className="absolute left-6 md:left-[3.25rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent hidden md:block" />
          
          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-16 group"
              >
                <div className="flex-shrink-0 flex items-center md:items-start z-10">
                  <div className="w-12 h-12 md:w-28 md:h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-4xl font-serif text-white/50 group-hover:text-white group-hover:border-white/30 transition-colors backdrop-blur-md">
                    {step.num}
                  </div>
                </div>
                
                <div className="pt-2 md:pt-6">
                  <h4 className="text-2xl md:text-3xl font-serif text-white mb-4">{step.title}</h4>
                  <p className="text-secondary text-lg leading-relaxed max-w-2xl font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
