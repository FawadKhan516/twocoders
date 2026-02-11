import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Play, Globe, Shield, Zap } from 'lucide-react';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col"
        >
            <HeroCarousel />

            {/* Trusted Clients Section */}
            <section className="py-16 bg-white/5 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 mb-10">Trusted by Global Companies</p>
                    <div className="flex flex-wrap justify-around items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-2">
                            <Globe size={18} />
                            <span className="text-lg font-bold tracking-tight">LuckyHomeBakes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={18} />
                            <span className="text-lg font-bold tracking-tight">PeteHinesInsurance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap size={18} />
                            <span className="text-lg font-bold tracking-tight">ElitePOS</span>
                        </div>
                        <div className="hidden lg:flex items-center gap-2">
                            <CheckCircle2 size={18} />
                            <span className="text-lg font-bold tracking-tight">VisionaryTech</span>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesSection />

            <PortfolioSection />

            {/* Clean CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container relative z-10 mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-12 md:p-16 rounded-[2.5rem] text-center max-w-5xl mx-auto overflow-hidden relative border-white/5"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 vip-gradient opacity-10 blur-[100px] -mr-40 -mt-40" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 vip-gradient opacity-10 blur-[100px] -ml-40 -mb-40" />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={14} /> Work with Us
                        </motion.div>

                        <h2 className="mb-8 tracking-tight text-3xl md:text-5xl">
                            Ready to Start Your <span className="text-gradient">Next Project?</span>
                        </h2>

                        <p className="text-lg opacity-60 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            We take your ideas and turn them into professional digital products. Whether it's a website or a custom application, we deliver high-quality results on time.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.location.href = '/contact'}
                                className="btn-premium vip-gradient text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2 group cursor-pointer"
                            >
                                Contact Our Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 rounded-xl font-bold text-sm glass flex items-center gap-2 cursor-pointer"
                            >
                                See Our Work <div className="p-1 px-2 bg-white/10 rounded-full"><Play size={12} className="fill-white" /></div>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <PricingSection />
            <TestimonialsSection />

            {/* Newsletter Section */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-12 md:p-14 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border-white/5"
                    >
                        <div className="max-w-xl text-center lg:text-left">
                            <h3 className="mb-4 text-2xl font-bold">Stay Updated</h3>
                            <p className="text-base opacity-60 font-medium">Get the latest news about web development, design trends, and our newest projects delivered to your inbox.</p>
                        </div>

                        <div className="flex-grow max-w-lg w-full relative">
                            <div className="flex flex-col sm:flex-row gap-3 p-2 glass rounded-2xl border-white/5">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow bg-transparent border-none px-5 py-3 text-sm font-semibold focus:outline-none placeholder:opacity-30"
                                />
                                <button className="vip-gradient px-6 py-3 rounded-xl text-white font-bold text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
