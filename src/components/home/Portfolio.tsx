import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Business', 'E-commerce', 'Restaurant', 'Barber', 'Real Estate', 'Portfolio', 'Digital Store'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-gradient">
              Proof is in the pixels.
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-white text-black' 
                    : 'bg-transparent text-secondary hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group cursor-pointer"
              >
                <Link to={`/project/${project.id}`} className="block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel mb-6 border border-white/5">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100 mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                    </div>
                    <p className="text-secondary text-sm mb-3">{project.shortDescription}</p>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs uppercase tracking-widest text-[#a1a1aa]/60 font-semibold">{project.category}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
