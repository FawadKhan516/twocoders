import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
    {
        name: "Ahmed Khan",
        role: "CEO, Tech Solutions",
        content: "TwoCoders transformed our business with a top-tier POS system. Their attention to detail and VIP service is unmatched in the industry.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=ahmed"
    },
    {
        name: "Sarah Miller",
        role: "Marketing Director, Creative Hub",
        content: "Our website's organic reach exploded after their SEO overhaul. They are truly masters of the digital domain.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "David Chen",
        role: "Founder, Luxe Decor",
        content: "The aesthetic vision TwoCoders brought to our brand was revolutionary. We finally have a digital presence that matches our quality.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=david"
    }
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-32 overflow-hidden relative">
            <div className="container">
                <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 flex items-center gap-2"
                        >
                            <Sparkles size={16} /> Global Trust
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black mb-0 leading-none"
                        >
                            Voices of <span className="text-gradient">Success</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 glass px-8 py-4 rounded-3xl"
                    >
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-accent text-accent" />)}
                        </div>
                        <span className="font-black text-xl">5.0 / 5.0</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-12 rounded-[3rem] relative border-white/5 h-full flex flex-col"
                        >
                            <div className="absolute top-10 right-10 text-primary/10">
                                <Quote size={80} />
                            </div>

                            <div className="flex gap-1 mb-8">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-xl leading-snug mb-12 font-medium italic opacity-80 flex-grow">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-5 mt-auto">
                                <div className="relative">
                                    <div className="absolute inset-0 vip-gradient blur-md opacity-50 rounded-full" />
                                    <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full border-2 border-white/20 relative z-10" />
                                </div>
                                <div>
                                    <h4 className="font-black text-xl tracking-tight">{item.name}</h4>
                                    <p className="text-sm font-bold opacity-50 uppercase tracking-widest">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
