import { motion } from 'motion/react';
import { Phone, MessageCircle, Heart, Star, ShoppingCart, Clock, MapPin, CheckCircle, Quote, Instagram, Facebook, Twitter, Menu as MenuIcon, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

// --- Types ---
interface FoodItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: 'Fast Food' | 'Cakes' | 'Sweets' | 'Beverages' | 'Main Course';
  tag?: string;
}

// --- Data ---
const MOST_LOVED: FoodItem[] = [
  { id: '1', name: 'Cheese Pizza', price: '₹199', image: 'https://images.pexels.com/photos/29173102/pexels-photo-29173102.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Fast Food', tag: 'Trending' },
  { id: '2', name: 'Paneer Cheese Pizza', price: '₹249', image: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=800', category: 'Fast Food', tag: 'Trending' },
  { id: '3', name: 'Veg Cheese Burger', price: '₹99', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800', category: 'Fast Food', tag: 'Trending' },
  { id: '4', name: 'Paneer Burger', price: '₹129', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800', category: 'Fast Food', tag: 'Trending' },
  { id: '5', name: 'Cheese Sandwich', price: '₹89', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800', category: 'Fast Food', tag: 'Trending' },
  { id: '6', name: 'Black Forest Cake', price: '₹450', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800', category: 'Cakes', tag: 'Bestseller' },
  { id: '7', name: 'Chocolate Truffle Cake', price: '₹550', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800', category: 'Cakes', tag: 'Bestseller' },
  { id: '8', name: 'Gulab Jamun', price: '₹30', image: 'https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Sweets', tag: 'Traditional Favorite' },
  { id: '9', name: 'Motichoor Laddu', price: '₹40', image: 'https://images.pexels.com/photos/18488297/pexels-photo-18488297.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Sweets', tag: 'Traditional Favorite' },
  { id: '10', name: 'Cold Coffee', price: '₹120', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800', category: 'Beverages', tag: 'Refreshing' },
];

const FULL_MENU: FoodItem[] = [
  ...MOST_LOVED,
  { id: '11', name: 'Thali (Veg)', price: '₹180', image: 'https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Main Course' },
  { id: '12', name: 'Paneer Butter Masala', price: '₹220', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800', category: 'Main Course' },
  { id: '13', name: 'Garlic Naan', price: '₹40', image: 'https://images.pexels.com/photos/28674556/pexels-photo-28674556.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Main Course' },
  { id: '14', name: 'Jeera Rice', price: '₹120', image: 'https://images.pexels.com/photos/7593253/pexels-photo-7593253.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Main Course' },
  { id: '15', name: 'Red Velvet Cake', price: '₹600', image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=800', category: 'Cakes' },
];

const REVIEWS = [
  { name: 'Rahul Sharma', review: 'Best cakes in town! The Black Forest was fresh and delicious.', stars: 5 },
  { name: 'Anjali Gupta', review: 'Amazing fast food and great service! The burger was super juicy.', stars: 5 },
  { name: 'Vikram Singh', review: 'Affordable and tasty food! Love their sweets.', stars: 4 },
  { name: 'Sneha Patel', review: 'Their cold coffee is a must-have. Very refreshing!', stars: 5 },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className={`text-2xl font-display font-black tracking-tighter ${isScrolled ? 'text-brand-red' : 'text-white'}`}>CAKE ROOM</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Products', 'Menu', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`font-medium hover:text-brand-red transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>{item}</a>
          ))}
          <a href="tel:9599972777" className="bg-brand-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all flex items-center gap-2 shadow-md">
            <Phone size={18} /> Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-red" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={30} /> : <MenuIcon size={30} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-2xl py-6 md:hidden flex flex-col items-center gap-4 border-t"
        >
          {['Home', 'Products', 'Menu', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-lg font-medium">{item}</a>
          ))}
          <a href="tel:9599972777" className="bg-brand-red text-white px-10 py-3 rounded-full font-bold flex items-center gap-2">
            <Phone size={20} /> Call Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Professional Bakery Banner */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000" 
        alt="Fresh Bakery" 
        className="w-full h-full object-cover brightness-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Delicious Moments <br />
          <span className="text-brand-yellow">Start Here 🍰</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Fast Food | Cakes | Sweets | Snacks
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="bg-brand-red text-white text-lg px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
            <ShoppingCart size={22} /> Order Now
          </a>
          <a href="#menu" className="bg-white text-brand-red text-lg px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl">
            View Menu
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 border-l-5 border-brand-yellow pl-6">
    <div>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900"
      >
        {children}
      </motion.h2>
      {subtitle && <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mt-1">{subtitle}</p>}
    </div>
  </div>
);

const FoodCard = ({ item }: { item: FoodItem }) => {
  const [imgSrc, setImgSrc] = useState(item.image);
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card rounded-2xl overflow-hidden group relative"
    >
      <div className="relative overflow-hidden h-48 sm:h-56 bg-gray-100">
        <img 
          src={imgSrc} 
          alt={item.name} 
          onError={() => setImgSrc('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80')}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.tag && (
          <div className="absolute top-3 right-3 bg-brand-yellow text-gray-900 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-tighter shadow-sm">
            {item.tag}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h3>
          <span className="text-brand-red font-black text-xl mt-1">{item.price}</span>
        </div>
        <button className="w-full bg-gray-100 text-gray-800 font-bold py-2 rounded-lg hover:bg-brand-red hover:text-white transition-all text-sm flex items-center justify-center gap-2">
          Order Now
        </button>
      </div>
    </motion.div>
  );
};

const Products = () => (
  <section id="products" className="py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeading subtitle="Top Priority">Most Loved Items</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOST_LOVED.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <FoodCard item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-yellow/10 rounded-full -z-10" />
        <img 
          src="https://images.pexels.com/photos/35778362/pexels-photo-35778362.jpeg" 
          alt="Fresh Bakery" 
          className="rounded-[3rem] w-full h-[500px] object-cover shadow-2xl"
        />
        <div className="absolute -bottom-10 -right-10 bg-brand-red p-8 rounded-3xl shadow-xl text-white hidden sm:block">
          <p className="text-4xl font-bold mb-1">10+</p>
          <p className="font-medium opacity-80 uppercase tracking-wider text-sm">Years of Experience</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <p className="text-brand-red font-bold uppercase tracking-widest">Our Story</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Baking Memories <br />
          Since Day One
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Cake Room is your go-to destination for delicious fast food, freshly baked cakes, and traditional sweets. We focus on quality, hygiene, and taste to deliver a memorable experience for every customer.
        </p>
        <div className="grid grid-cols-2 gap-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
              <CheckCircle size={24} />
            </div>
            <span className="font-bold text-gray-700">100% Quality</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Clock size={24} />
            </div>
            <span className="font-bold text-gray-700">Fast Delivery</span>
          </div>
        </div>
        <button className="bg-brand-red px-8 py-4 rounded-full text-white font-bold hover:scale-105 transition-transform shadow-lg">
          Learn More About Us
        </button>
      </motion.div>
    </div>
  </section>
);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Fast Food');
  const categories = ['Fast Food', 'Cakes', 'Main Course', 'Sweets', 'Beverages'];

  const filteredMenu = FULL_MENU.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="Menu Options">Our Full Menu</SectionHeading>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-brand-red text-white shadow-xl scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredMenu.map((item) => (
            <div key={item.id}>
              <FoodCard item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'Fresh Ingredients', icon: <Heart className="text-pink-500" />, desc: 'Only the finest components.' },
    { title: 'Hygienic Kitchen', icon: <CheckCircle className="text-green-500" />, desc: 'Standard safety protocols.' },
    { title: 'Affordable Prices', icon: <Star className="text-brand-yellow" />, desc: 'Great taste, low cost.' },
    { title: 'Fast Service', icon: <Clock className="text-blue-500" />, desc: 'We value your time.' },
    { title: 'Custom Orders', icon: <ShoppingCart className="text-brand-red" />, desc: 'Special cakes for you.' },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="Commitment">Why Choose Us</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 rounded-3xl text-center hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryImage = ({ src, ...props }: { src: string; [key: string]: any }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <motion.div
      {...props}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-3xl h-64 md:h-80 shadow-lg cursor-zoom-in group bg-gray-100"
    >
      <img 
        src={imgSrc} 
        alt="Gallery" 
        onError={() => setImgSrc('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80')}
        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white bg-brand-red px-6 py-2 rounded-full font-bold">View Larger</span>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const images = [
    'https://images.pexels.com/photos/13185296/pexels-photo-13185296.jpeg',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800',
    'https://images.unsplash.com/photo-1551024506-03062804322d?q=80&w=800',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="Visual Feast">Our Gallery</SectionHeading>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <GalleryImage key={i} src={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-20 bg-subtle-gradient overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeading subtitle="Testimonials">Customer Reviews</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative"
          >
            <Quote className="absolute top-6 right-6 text-brand-red/10 h-10 w-10" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} fill={idx < r.stars ? '#FFD700' : 'none'} className={idx < r.stars ? 'text-brand-yellow' : 'text-gray-300'} />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">"{r.review}"</p>
            <h4 className="font-bold text-gray-900 border-t pt-4 border-gray-50">{r.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeading subtitle="Get in Touch">Contact Us</SectionHeading>
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="flex gap-6 items-start">
            <div className="bg-brand-red/10 p-4 rounded-2xl text-brand-red">
              <Phone size={30} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Phone Number</h3>
              <p className="text-lg text-gray-600">+91 9599972777</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="bg-green-50 p-4 rounded-2xl text-green-600">
              <MessageCircle size={30} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
              <p className="text-lg text-gray-600">+91 8800922012</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
              <MapPin size={30} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Our Location</h3>
              <p className="text-lg text-gray-600">123, Main Market Road, City Center, India</p>
            </div>
          </div>
          
          <div className="pt-4 space-y-4">
            <a 
              href="https://wa.me/918800922012" 
              className="bg-green-500 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle size={24} /> Order on WhatsApp
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-[3rem] overflow-hidden h-[400px] shadow-2xl relative"
        >
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 flex-col gap-4">
             <MapPin size={60} />
             <p className="font-bold text-xl">Google Maps Embed Placeholder</p>
             <p className="text-center px-8">Find us in the heart of the city for the best treats!</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-20 pb-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-2xl">C</div>
          <span className="text-3xl font-bold tracking-tight">CAKE ROOM</span>
        </div>
        <p className="text-gray-400 leading-relaxed italic">
          “Baked with Love, Served with Passion.” We are committed to delivering happiness in every bite since 2014.
        </p>
        <div className="flex gap-4">
          {[Instagram, Facebook, Twitter].map((Icon, idx) => (
            <a key={idx} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-red transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-xl font-bold mb-8 text-brand-yellow">Quick Links</h4>
        <ul className="space-y-4">
          {['Home', 'Products', 'Menu', 'About', 'Contact'].map((item) => (
            <li key={item}><a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-8 text-brand-yellow">Our Menu</h4>
        <ul className="space-y-4">
          {['Cakes', 'Fast Food', 'Sweets', 'Beverages', 'Main Course'].map((item) => (
            <li key={item}><a href="#menu" className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-8 text-brand-yellow">Newsletter</h4>
        <p className="text-gray-400 mb-6 text-sm">Subscribe for special offers and new menu updates!</p>
        <div className="relative">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-white focus:outline-none focus:border-brand-red transition-colors" 
          />
          <button className="absolute right-2 top-2 bottom-2 bg-brand-red px-6 rounded-full font-bold hover:scale-105 transition-transform">
            Go
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-gray-500 text-sm">
      <p>&copy; 2026 Cake Room Restaurant. All Rights Reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <motion.a 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="tel:9599972777" 
      className="bg-brand-red text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-colors"
    >
      <Phone size={28} />
    </motion.a>
    <motion.a 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/918800922012" 
      className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
    >
      <MessageCircle size={30} />
    </motion.a>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Menu />
        <Features />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
