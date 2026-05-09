export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  clientOverview: string;
  servicesProvided: string[];
  techUsed: string[];
  imageUrl: string;
  screenshots: string[];
  websiteUrl: string;
}

export const projects: Project[] = [
  {
    id: 'prime-cuts',
    title: 'Prime Cuts Barber',
    category: 'Barber',
    shortDescription: 'Modern booking experience for a premier barbershop.',
    fullDescription: 'A complete redesign of the Prime Cuts digital presence, focusing on an intuitive booking flow and a dark, refined aesthetic that matches their brand.',
    clientOverview: 'Prime Cuts is a high-end barbershop in the city center. They needed a website that reflected their premium service and allowed clients to book appointments seamlessly.',
    servicesProvided: ['Website Redesign', 'Booking Integration', 'SEO Optimization'],
    techUsed: ['React', 'Tailwind CSS', 'Booksy API'],
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582236166416-646738c6411f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    websiteUrl: '#'
  },
  {
    id: 'luxe-grill',
    title: 'Luxe Grill Restaurant',
    category: 'Restaurant',
    shortDescription: 'Immersive dining preview with reservation system.',
    fullDescription: 'We created an immersive, visual-first website showcasing the culinary excellence of Luxe Grill, complete with a custom reservation system.',
    clientOverview: 'An award-winning steakhouse wanting to translate their dining experience to the web while simplifying the reservation process for staff and customers.',
    servicesProvided: ['UI/UX Design', 'Full-stack Development', 'Photography'],
    techUsed: ['Next.js', 'Framer Motion', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    websiteUrl: '#'
  },
  {
    id: 'nova-homes',
    title: 'Nova Homes',
    category: 'Real Estate',
    shortDescription: 'Premium property listings with virtual tours.',
    fullDescription: 'A sophisticated real estate platform for a luxury agency, featuring advanced filtering, high-res image galleries, and integrated virtual tours.',
    clientOverview: 'Nova Homes deals in luxury properties and needed a platform that felt as exclusive as their listings, with fast performance and stunning visuals.',
    servicesProvided: ['Platform Design', 'CMS Integration', 'Virtual Tour Setup'],
    techUsed: ['Vue.js', 'Tailwind', 'Contentful'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    websiteUrl: '#'
  },
  {
    id: 'fortune-digital',
    title: 'Fortune Digital Hub',
    category: 'E-commerce',
    shortDescription: 'High-converting digital product storefront.',
    fullDescription: 'A sleek e-commerce platform designed to sell digital assets, courses, and software with a seamless checkout experience.',
    clientOverview: 'A creator looking to centralize their digital product sales. They needed a store that was fast, easy to navigate, and optimized for conversions.',
    servicesProvided: ['E-commerce Design', 'Payment Gateway Integration', 'Automation'],
    techUsed: ['Shopify', 'Liquid', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    websiteUrl: '#'
  },
  {
    id: 'nexus-fitness',
    title: 'Nexus Fitness',
    category: 'Business',
    shortDescription: 'Dynamic gym website with member portal.',
    fullDescription: 'An energetic, motivating website for a premium gym, featuring class schedules, trainer profiles, and a member login area.',
    clientOverview: 'Nexus Fitness wanted to upgrade their old site to something that matched the intense, modern vibe of their new facility.',
    servicesProvided: ['Website Design', 'Member Portal', 'Schedule Integration'],
    techUsed: ['React', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    websiteUrl: '#'
  },
  {
    id: 'elite-auto',
    title: 'Elite Auto Spa',
    category: 'Business',
    shortDescription: 'Luxury detailing service booking platform.',
    fullDescription: 'A clean, dark-themed website highlighting the pristine results of this luxury detailing service, with an integrated quoting and booking system.',
    clientOverview: 'A detailing service catering to exotic car owners needed a website that conveyed trust, quality, and attention to detail.',
    servicesProvided: ['Branding', 'Website Design', 'Form Integration'],
    techUsed: ['Webflow', 'GSAP', 'Make.com'],
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552805400-01cc5139031c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    websiteUrl: '#'
  }
];
