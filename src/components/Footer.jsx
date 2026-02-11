import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Facebook, Mail, Phone, Sparkles } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="relative pt-32 pb-16 overflow-hidden border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] vip-gradient opacity-[0.03] blur-[100px] -mr-64 -mb-64" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-10 group bg-white/5 w-fit p-4 rounded-3xl border border-white/5 cursor-pointer">
                            <Logo />
                        </Link>
                        <p className="text-2xl opacity-50 font-medium leading-relaxed max-w-md mb-12 text-white/50">
                            A global digital agency engineering the future of high-end software and brand identity. We build the exceptions.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Instagram, Facebook].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    className="p-4 glass rounded-2xl transition-all cursor-pointer"
                                >
                                    <Icon size={24} className="text-white/70" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-[0.2em] mb-10 flex items-center gap-2 text-white">
                            <Sparkles size={16} className="text-primary" /> Navigation
                        </h4>
                        <ul className="flex flex-col gap-6">
                            {[
                                { name: 'Work', path: '/#projects' },
                                { name: 'Services', path: '/services' },
                                { name: 'Our Story', path: '/about' },
                                { name: 'Careers', path: '/contact' },
                                { name: 'Contact VIP', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-xl font-bold opacity-40 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2 group text-white/40 cursor-pointer"
                                    >
                                        <div className="w-0 group-hover:w-4 h-[2px] bg-primary transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-[0.2em] mb-10 flex items-center gap-2 text-white">
                            <Mail size={16} className="text-primary" /> Reach Out
                        </h4>
                        <div className="flex flex-col gap-8">
                            <div onClick={() => navigate('/contact')} className="group cursor-pointer">
                                <span className="text-[10px] uppercase font-black tracking-widest opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all">Email Us</span>
                                <p className="text-xl font-bold text-white transition-colors group-hover:text-primary">twocoder32@gmail.com</p>
                            </div>
                            <div className="group cursor-pointer">
                                <span className="text-[10px] uppercase font-black tracking-widest opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all">Call Us</span>
                                <p className="text-xl font-bold text-white">03151369221</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-sm font-bold opacity-30 text-white/30">
                        &copy; {new Date().getFullYear()} TwoCoders Agency. All rights reserved. Made for Visionaries.
                    </p>
                    <div className="flex gap-10">
                        <Link to="/contact" className="text-sm font-bold opacity-30 hover:opacity-100 transition-all text-white/30 cursor-pointer">Privacy Policy</Link>
                        <Link to="/contact" className="text-sm font-bold opacity-30 hover:opacity-100 transition-all text-white/30 cursor-pointer">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


