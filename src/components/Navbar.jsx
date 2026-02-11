import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Twitter, Linkedin, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/#projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: Facebook, path: "#" },
        { icon: Instagram, path: "#" },
        { icon: Twitter, path: "#" },
        { icon: Linkedin, path: "#" }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-2 bg-bg-color/80 backdrop-blur-xl border-b border-white/5 shadow-xl' : 'py-5 bg-transparent'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="shrink-0 cursor-pointer">
                        <Logo />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex items-center gap-6 glass px-6 py-2 rounded-full border-white/5 bg-white/5">
                            {navLinks.map((link) => (
                                link.path.startsWith('/#') ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all relative text-current/60 cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all relative cursor-pointer ${location.pathname === link.path ? 'text-primary' : 'text-current/60'}`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[1.5px] vip-gradient rounded-full" />
                                        )}
                                    </Link>
                                )
                            ))}
                        </div>

                        <div className="flex items-center gap-5">
                            <ThemeToggle />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="btn-premium vip-gradient text-white shadow-lg py-2.5 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-pointer"
                            >
                                Hire Us
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="lg:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 glass rounded-xl cursor-pointer relative z-[210] border-white/5"
                        >
                            {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer - Outside Nav context for perfect z-indexing */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 z-[200] bg-bg-color/98 backdrop-blur-3xl flex flex-col p-10 overflow-y-auto"
                    >
                        <div className="mb-16 mt-4">
                            <Logo className="scale-110 origin-left" />
                        </div>

                        <div className="flex flex-col gap-8 mb-16 px-4">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 + 0.2 }}
                                >
                                    {link.path.startsWith('/#') ? (
                                        <a
                                            href={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl font-black text-white hover:text-primary transition-colors tracking-tight cursor-pointer"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-4xl font-black tracking-tight cursor-pointer ${location.pathname === link.path ? 'text-gradient' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto space-y-10 px-4">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate('/contact');
                                }}
                                className="btn-premium py-5 px-10 rounded-2xl text-lg font-black w-full text-white vip-gradient shadow-2xl cursor-pointer flex items-center justify-center gap-3"
                            >
                                Start Your Project
                            </motion.button>

                            <div className="grid grid-cols-1 gap-6 pt-10 border-t border-white/5">
                                <div className="flex items-center gap-4 text-white/50">
                                    <div className="p-3 glass rounded-xl text-primary"><Mail size={18} /></div>
                                    <span className="text-sm font-bold tracking-tight text-white">twocoder32@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-white/50">
                                    <div className="p-3 glass rounded-xl text-primary"><Phone size={18} /></div>
                                    <span className="text-sm font-bold tracking-tight text-white">03151369221</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.path}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + idx * 0.1 }}
                                        className="p-4 glass rounded-2xl text-white/70 hover:text-primary transition-colors"
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

