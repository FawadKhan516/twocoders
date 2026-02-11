import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Target, Crown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
    {
        name: "Digital Foundation",
        price: "899",
        desc: "Essential high-performance web presence for startups and growing brands.",
        features: ["Boutique UI/UX Design", "Responsive Layout", "On-Page SEO", "Contact Integration", "Social Connectivity"],
        icon: Zap,
        color: "from-blue-500/20 to-transparent",
        btnColor: "bg-white/5"
    },
    {
        name: "Business Elite",
        price: "2,499",
        desc: "Comprehensive digital growth package with advanced automation and custom features.",
        features: ["Premium Web App", "E-commerce System", "Strategic SEO Plan", "Priority Support", "Performance Labs"],
        recommended: true,
        icon: Crown,
        color: "from-primary/20 to-transparent",
        btnColor: "vip-gradient"
    },
    {
        name: "Enterprise Scale",
        price: "5,999",
        desc: "The complete technology partner experience for high-stakes business operations.",
        features: ["Custom Software Suite", "Multi-Region Support", "Elite Security Audit", "Dedicated Manager", "Full-Stack Maintenance"],
        icon: Target,
        color: "from-purple-500/20 to-transparent",
        btnColor: "bg-white/5"
    }
];

const PricingSection = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const handleSelectPlan = (planName) => {
        navigate(`/contact?plan=${encodeURIComponent(planName)}`);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2"
                        >
                            <Sparkles size={14} /> Flexible Pricing
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-0 leading-tight tracking-tight text-3xl md:text-5xl"
                        >
                            Choose the <span className="text-gradient">Right Plan</span>
                        </motion.h2>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={() => scroll('left')} className="p-3 glass rounded-full hover:bg-primary transition-all border-white/5"><ChevronLeft size={18} /></button>
                        <button onClick={() => scroll('right')} className="p-3 glass rounded-full hover:bg-primary transition-all border-white/5"><ChevronRight size={18} /></button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory"
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            className="min-w-[280px] md:min-w-[380px] snap-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className={`glass rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden border-white/5 h-full ${plan.recommended ? 'ring-1 ring-primary/20 ring-offset-4 ring-offset-bg-color' : ''}`}>
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${plan.color} blur-[80px] -mr-32 -mt-32`} />

                                {plan.recommended && (
                                    <div className="absolute top-8 right-8">
                                        <div className="vip-gradient px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest text-white shadow-lg">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="mb-8 relative z-10">
                                    <plan.icon className="text-primary mb-5" size={24} />
                                    <h3 className="text-xl font-black mb-1 tracking-tight text-white">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-black tracking-tighter text-white">$</span>
                                        <span className="text-4xl font-black tracking-tighter text-white">{plan.price}</span>
                                        <span className="text-[10px] opacity-40 font-bold">/start</span>
                                    </div>
                                </div>

                                <p className="text-sm opacity-60 mb-8 font-medium leading-relaxed relative z-10">
                                    {plan.desc}
                                </p>

                                <div className="space-y-4 mb-10 flex-grow relative z-10">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3 group">
                                            <div className="p-1 px-1.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                <Check size={10} className="stroke-[4px]" />
                                            </div>
                                            <span className="text-xs font-bold opacity-70 group-hover:opacity-100 transition-opacity">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handleSelectPlan(plan.name)}
                                    className={`w-full py-4 rounded-xl font-black text-xs transition-all shadow-xl hover:-translate-y-1 active:scale-[0.98] ${plan.btnColor === 'vip-gradient' ? 'vip-gradient text-white' : 'glass hover:bg-white/10 border-white/10'}`}
                                >
                                    Select {plan.name}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
