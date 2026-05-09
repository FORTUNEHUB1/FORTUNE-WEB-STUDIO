import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Trash2, Edit2, Image as ImageIcon, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CustomService {
  id: string;
  title: string;
  description: string;
  price: string;
  mediaUrl: string;
}

export default function AdminDashboard() {
  const [services, setServices] = useState<CustomService[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  
  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  useEffect(() => {
    const storedFilters = localStorage.getItem('custom_services');
    if (storedFilters) {
      try {
        setServices(JSON.parse(storedFilters));
      } catch (error) {
        console.error('Error parsing services');
      }
    }
  }, []);

  const saveServices = (newServices: CustomService[]) => {
    setServices(newServices);
    localStorage.setItem('custom_services', JSON.stringify(newServices));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMediaFile(file);
      
      // Convert to Base64 for local storage preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !price) return;
    
    const newService: CustomService = {
      id: Date.now().toString(),
      title,
      description,
      price,
      mediaUrl: mediaUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    };
    
    saveServices([newService, ...services]);
    
    // Reset Form
    setTitle('');
    setDescription('');
    setPrice('');
    setMediaUrl('');
    setMediaFile(null);
    setIsAdding(false);
  };

  const deleteService = (id: string) => {
    saveServices(services.filter(s => s.id !== id));
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2">Admin Dashboard</h1>
            <p className="text-secondary">Manage your custom services & products.</p>
          </div>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
          >
            {isAdding ? 'Cancel' : <><Plus size={20} /> Add New Service</>}
          </button>
        </div>

        {isAdding && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 rounded-2xl mb-12 border border-white/10"
          >
            <h2 className="text-2xl font-serif font-bold mb-6">Add Custom Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Service Title</label>
                  <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="e.g. SEO Audit"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Price (KSH)</label>
                  <input 
                    type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="e.g. 50,000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Description</label>
                <textarea 
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Describe the service..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary block">Cover Image / Video Preview</label>
                <div className="flex items-center gap-6">
                  {mediaUrl ? (
                    <div className="w-32 h-32 rounded-xl overflow-hidden glass-panel">
                      <img src={mediaUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-secondary">
                      <ImageIcon size={32} />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <input 
                      type="file" 
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-secondary
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-cyan-500/10 file:text-cyan-400
                        hover:file:bg-cyan-500/20 transition-colors"
                    />
                    <p className="text-xs text-secondary mt-2">Upload a high-quality image or short video.</p>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full px-6 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors mt-4">
                Save Service
              </button>
            </form>
          </motion.div>
        )}

        {/* Existing Services List */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">Your Services</h2>
          {services.length === 0 ? (
            <div className="text-center py-16 glass-panel rounded-2xl border border-white/5 border-dashed">
              <Search size={48} className="mx-auto text-white/20 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No custom services yet</h3>
              <p className="text-secondary max-w-sm mx-auto">Click the Add New Service button to create your first custom offering.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {services.map(service => (
                <div key={service.id} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row gap-6 items-center">
                  <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-black">
                    <img src={service.mediaUrl} alt={service.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <span className="text-cyan-400 font-medium">KSH {service.price}</span>
                    </div>
                    <p className="text-secondary text-sm mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => deleteService(service.id)}
                        className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
