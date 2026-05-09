import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Trash2, Image as ImageIcon, Search, LogIn, LogOut, ExternalLink } from 'lucide-react';
import { db, auth } from '../lib/firebase';
import { collection, query, onSnapshot, setDoc, deleteDoc, doc, orderBy } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface CustomService {
  id: string;
  title: string;
  description: string;
  price: string;
  mediaUrl: string;
  serviceUrl?: string;
  ownerId?: string;
  createdAt?: number;
}

export default function AdminDashboard() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [services, setServices] = useState<CustomService[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [serviceUrl, setServiceUrl] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    // Only subscribe to services if user is logged in, or can just be public. 
    // In our case we allow public read. Let's show all services.
    const q = query(collection(db, 'services'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const svcs: CustomService[] = [];
      snapshot.forEach(doc => svcs.push({ id: doc.id, ...doc.data() } as CustomService));
      setServices(svcs);
    }, (error) => {
      // Ignore if offline before initialized, but handle otherwise
      console.error(error);
    });
    return () => unsub();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMediaFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !price || !currentUser) return;
    
    // Default to telegram url if empty
    const finalServiceUrl = serviceUrl.trim() !== '' ? serviceUrl : 'https://t.me/+1vH_j9h-myowZjQ0';
    
    const id = Date.now().toString();
    const newDoc = doc(db, 'services', id);
    
    const data = {
      title,
      description,
      price,
      mediaUrl: mediaUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      serviceUrl: finalServiceUrl,
      ownerId: currentUser.uid,
      createdAt: Date.now()
    };
    
    try {
      await setDoc(newDoc, data);
      
      setTitle('');
      setDescription('');
      setPrice('');
      setMediaUrl('');
      setServiceUrl('');
      setMediaFile(null);
      setIsAdding(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'services');
    }
  };

  const deleteService = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'services', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `services/${id}`);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center pt-32"><div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!currentUser) {
    return (
      <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-blue-900/20 rounded-3xl blur-3xl -z-10" />
        <div className="glass-panel p-10 rounded-3xl border border-white/10 text-center max-w-md w-full">
          <h1 className="text-3xl font-serif font-bold mb-4">Admin Access</h1>
          <p className="text-secondary mb-8">Sign in to manage your custom services.</p>
          <button 
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <LogIn size={20} /> Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2">Admin Dashboard</h1>
            <p className="text-secondary">Manage your custom services & products.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/10"
            >
              <LogOut size={16} /> Logout
            </button>
            <button 
              onClick={() => setIsAdding(!isAdding)}
              className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
            >
              {isAdding ? 'Cancel' : <><Plus size={20} /> Add New Service</>}
            </button>
          </div>
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
                    maxLength={100}
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
                    maxLength={50}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    placeholder="e.g. 50,000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Service/Product URL (Optional)</label>
                <input 
                  type="text" 
                  value={serviceUrl}
                  maxLength={2000}
                  onChange={(e) => setServiceUrl(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="e.g. https://whop.com/... (Defaults to Telegram)"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Description</label>
                <textarea 
                  required
                  rows={3}
                  maxLength={2000}
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
                  <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-black relative">
                    <img src={service.mediaUrl} alt={service.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2 gap-4">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <span className="text-cyan-400 font-medium whitespace-nowrap bg-cyan-900/30 px-3 py-1 rounded-full text-sm">KSH {service.price}</span>
                    </div>
                    <p className="text-secondary text-sm mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex gap-4 items-center">
                      {service.ownerId === currentUser.uid && (
                        <button 
                          onClick={() => deleteService(service.id)}
                          className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1"
                        >
                          <Trash2 size={16} /> Delete
                        </button>
                      )}
                      {service.serviceUrl && (
                        <a 
                          href={service.serviceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
                        >
                          <ExternalLink size={16} /> Test Link
                        </a>
                      )}
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
