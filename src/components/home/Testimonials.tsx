import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Fortune Studio transformed our online presence. Our conversion rate doubled in the first month after launch.",
      author: "Sarah Jenkins",
      role: "Founder, Luxe Beauty",
    },
    {
      text: "The most professional and modern design we've ever seen. The team understood our vision instantly.",
      author: "Michael Chang",
      role: "CEO, TechNova Solutions",
    },
    {
      text: "Fast delivery, incredible communication, and a final product that exceeded all expectations. Highly recommended.",
      author: "David Alaba",
      role: "Director, Elite Real Estate",
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Decorative blurry spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-gradient mb-6">
            Don't just take our word for it.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 rounded-3xl glass-panel border border-white/5 relative"
            >
              <Quote size={40} className="text-white/10 absolute top-8 right-8" />
              <div className="flex space-x-1 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-white font-serif leading-relaxed italic mb-8">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-medium text-white">{review.author}</h4>
                <p className="text-secondary text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
