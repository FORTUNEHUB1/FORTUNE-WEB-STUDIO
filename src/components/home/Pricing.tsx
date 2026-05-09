import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter Website',
      price: 'KSH 150K',
      desc: 'Perfect for small businesses establishing their brand online.',
      features: [
        'Up to 5 Custom Pages',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '2 Rounds of Revisions',
        '2 Weeks Delivery'
      ]
    },
    {
      name: 'Business Website',
      price: 'KSH 350K',
      pop: true,
      desc: 'Comprehensive solution for growing businesses needing more power.',
      features: [
        'Up to 10 Custom Pages',
        'Advanced Animations & Interactions',
        'CMS Integration (Blog/Projects)',
        'Advanced SEO Setup',
        'Analytics Integration',
        '4 Rounds of Revisions',
        '4 Weeks Delivery'
      ]
    },
    {
      name: 'Premium E-Commerce',
      price: 'KSH 600K+',
      desc: 'Full-scale digital storefront optimized for maximum conversions.',
      features: [
        'Unlimited Pages/Products',
        'Custom Checkout Experience',
        'Payment Gateway Setup',
        'Inventory Management System',
        'Premium Animations',
        'Unlimited Revisions',
        '6-8 Weeks Delivery'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-gradient mb-6">
            Transparent pricing for <br className="hidden md:block" /> premium quality.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-10 rounded-3xl relative flex flex-col ${
                plan.pop 
                  ? 'bg-white text-black ring-4 ring-white/20' 
                  : 'glass-panel border border-white/10 text-white'
              }`}
            >
              {plan.pop && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-cyan-500/20">
                  Most Popular
                </div>
              )}
              
              <h4 className={`text-xl font-medium mb-2 ${plan.pop ? 'text-black' : 'text-white'}`}>{plan.name}</h4>
              <p className={`text-sm mb-8 ${plan.pop ? 'text-gray-600' : 'text-secondary'}`}>{plan.desc}</p>
              
              <div className="mb-8">
                <span className={`text-5xl font-serif font-light ${plan.pop ? 'text-black' : 'text-white'}`}>{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm">
                    <Check size={18} className={`mt-0.5 ${plan.pop ? 'text-black' : 'text-white'}`} />
                    <span className={plan.pop ? 'text-gray-800' : 'text-secondary'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block text-center py-4 px-6 rounded-xl font-medium transition-transform hover:scale-105 ${
                  plan.pop 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black'
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
