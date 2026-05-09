import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-secondary hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} />
          <span className="text-sm font-medium uppercase tracking-widest">Back to Portfolio</span>
        </Link>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 text-xs font-medium uppercase tracking-widest border border-white/20 rounded-full text-secondary">
              {project.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-gradient">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light max-w-3xl leading-relaxed">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="aspect-video w-full rounded-2xl overflow-hidden glass-panel border border-white/10 mb-20"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif mb-6 text-white">Client Overview</h3>
              <p className="text-secondary text-lg leading-relaxed">{project.clientOverview}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase text-secondary mb-6">Services Provided</h4>
              <ul className="space-y-4">
                {project.servicesProvided.map((service, i) => (
                  <li key={i} className="flex items-center space-x-3 text-white">
                    <CheckCircle2 size={18} className="text-cyan-400" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase text-secondary mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techUsed.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-md text-sm text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
            >
              <span>Visit Live Site</span>
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        {/* Screenshots */}
        <div className="space-y-8">
          <h3 className="text-2xl font-serif mb-8 text-white">Gallery</h3>
          {project.screenshots.map((shot, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden glass-panel border border-white/10"
            >
              <img src={shot} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
        
        {/* Next Project CTA */}
        <div className="mt-32 text-center border-t border-white/10 pt-16">
          <h2 className="text-4xl font-serif font-light mb-8">Ready to start your project?</h2>
          <Link to="/#contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-medium hover:scale-105 transition-transform">
            Get in touch today
          </Link>
        </div>
      </div>
    </div>
  );
}
