import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        title: "Modern Websites for Modern Businesses",
        subtitle: "We build professional, fast, and high-quality websites that help your business grow and reach more customers.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
        btn: "Our Services",
        path: "/services"
    },
    {
        title: "Professional Design and Branding",
        subtitle: "Create a strong brand identity that stands out. We design professional logos and graphics for your business.",
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2564",
        btn: "View Portfolio",
        path: "/#projects"
    },
    {
        title: "Scale Your Business with Custom Apps",
        subtitle: "From custom dashboards to mobile apps, we build the software tools your business needs to succeed.",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
        btn: "Contact Us",
        path: "/contact"
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent(prev => (prev + 1) % slides.length);
    const prev = () => setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src={slides[current].img}
                        alt={slides[current].title}
                        className="w-full h-full object-cover scale-105 animate-slow-zoom"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-3xl"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6"
                        >
                            <CheckCircle2 size={16} /> Trusted Digital Agency
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            {slides[current].title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed font-medium">
                            {slides[current].subtitle}
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <button
                                onClick={() => slides[current].path.startsWith('/#') ? window.location.href = slides[current].path : navigate(slides[current].path)}
                                className="vip-gradient text-white px-8 py-4 rounded-xl font-bold text-sm shadow-2xl flex items-center gap-2 hover:scale-105 transition-all"
                            >
                                {slides[current].btn} <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-10 right-10 z-30 hidden md:flex items-center gap-4">
                <button onClick={prev} className="p-4 rounded-full glass hover:bg-white/10 text-white transition-all cursor-pointer"><ChevronLeft size={20} /></button>
                <button onClick={next} className="p-4 rounded-full glass hover:bg-white/10 text-white transition-all cursor-pointer"><ChevronRight size={20} /></button>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-30 flex gap-2">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 transition-all cursor-pointer rounded-full ${idx === current ? 'w-10 bg-primary' : 'w-4 bg-white/30'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
