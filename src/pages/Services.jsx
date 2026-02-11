import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import { Sparkles, ArrowRight, Zap, Target, Layers } from 'lucide-react';

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center justify-center gap-2"
                    >
                        <Sparkles size={14} /> Our Expertise
                    </motion.div>
                    <h1 className="mb-8 leading-tight tracking-tight text-white">
                        Professional <span className="text-gradient">Digital Services</span>
                    </h1>
                    <p className="text-lg opacity-60 font-medium leading-relaxed max-w-xl mx-auto">
                        We offer a wide range of digital solutions to help your business grow. From custom websites to secure software systems, we provide quality and results.
                    </p>
                </motion.div>
            </div>

            <ServicesSection />

            {/* Custom Software Section */}
            <div className="container mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 vip-gradient opacity-10 blur-[120px] -mr-40 -mt-40" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-primary font-bold uppercase tracking-widest text-[9px]">
                                <Zap size={16} /> Specialty Service
                            </div>
                            <h2 className="mb-6 mb-8 leading-tight tracking-tight text-white">Custom <span className="text-gradient">POS & CRM</span> Solutions</h2>
                            <p className="text-base opacity-60 mb-10 leading-relaxed font-medium">
                                We specialize in building custom Point of Sale (POS) and Customer Relationship Management (CRM) systems. Our software is designed to be easy to use, secure, and perfectly matched to your business workflow.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    { icon: Layers, text: "Secure Database" },
                                    { icon: Target, text: "Sales Analytics" },
                                    { icon: Zap, text: "Instant Updates" },
                                    { icon: Sparkles, text: "Easy Interface" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 glass p-4 rounded-xl border-white/5">
                                        <div className="vip-gradient p-1.5 rounded-lg text-white">
                                            <item.icon size={14} />
                                        </div>
                                        <span className="font-bold text-xs tracking-tight text-white/80">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="btn-premium vip-gradient text-white px-8 py-4 rounded-xl font-bold text-xs flex items-center gap-2 group shadow-xl">
                                Get a Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-x-0 inset-y-0 vip-gradient blur-[60px] opacity-10 group-hover:opacity-20 transition-all duration-1000" />
                            <img
                                src="https://images.unsplash.com/photo-1556742049-dfbd24b0158c?auto=format&fit=crop&q=80&w=2070"
                                alt="POS Software"
                                className="rounded-[2rem] shadow-2xl relative z-10 border border-white/5 group-hover:scale-[1.01] transition-transform duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <PricingSection />
        </motion.div>
    );
};

export default Services;
