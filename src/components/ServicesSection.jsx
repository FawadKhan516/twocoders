import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Palette, BarChart, Smartphone, Shield, Code, Sparkles, ArrowRight, ChevronLeft, ChevronRight, Store, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        id: "web",
        icon: Globe,
        title: "Web Development",
        desc: "We build fast, professional, and mobile-friendly websites tailored to your business needs.",
        color: "from-blue-500 to-indigo-600",
    },
    {
        id: "brand",
        icon: Palette,
        title: "Graphic Design",
        desc: "Professional logos, branding, and visual identities that make your business stand out.",
        color: "from-purple-500 to-rose-600",
    },
    {
        id: "seo",
        icon: BarChart,
        title: "SEO & Marketing",
        desc: "Get more customers with our expert search engine optimization and digital marketing strategies.",
        color: "from-amber-500 to-orange-600",
    },
    {
        id: "app",
        icon: Smartphone,
        title: "App Development",
        desc: "Custom mobile and web applications built to improve your business efficiency.",
        color: "from-emerald-500 to-teal-600",
    },
    {
        id: "pos",
        icon: Store,
        title: "POS Systems",
        desc: "Advanced Point of Sale solutions for restaurants, retail, and inventory management.",
        color: "from-violet-500 to-fuchsia-600",
    },
    {
        id: "hrms",
        icon: Users,
        title: "HRMS Solutions",
        desc: "Scalable HR management systems for payroll, attendance, and employee tracking.",
        color: "from-sky-500 to-cyan-600",
    },
    {
        id: "sec",
        icon: Shield,
        title: "Cyber Security",
        desc: "We protect your website and customer data with high-level security and encryption.",
        color: "from-red-500 to-orange-700",
    },
    {
        id: "dev",
        icon: Code,
        title: "Software Solutions",
        desc: "Bespoke software and automation tools designed specifically for your organization.",
        color: "from-cyan-500 to-blue-700",
    }
];

const ServicesSection = () => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

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
                            <Sparkles size={14} /> Our Services
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-0 leading-tight tracking-tight text-3xl md:text-5xl"
                        >
                            What We <span className="text-gradient">Can Do For You</span>
                        </motion.h2>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={() => scroll('left')} className="p-3 glass rounded-full hover:bg-primary transition-all border-white/5"><ChevronLeft size={18} /></button>
                        <button onClick={() => scroll('right')} className="p-3 glass rounded-full hover:bg-primary transition-all border-white/5"><ChevronRight size={18} /></button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="min-w-[280px] md:min-w-[350px] snap-center"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="glass p-10 rounded-[2.5rem] group border-white/5 relative h-full flex flex-col">
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} mb-8 inline-block shadow-lg w-fit`}>
                                    <service.icon className="text-white" size={20} />
                                </div>
                                <h3 className="text-xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors text-white">{service.title}</h3>
                                <p className="text-sm opacity-50 font-medium leading-relaxed mb-8 flex-grow">
                                    {service.desc}
                                </p>
                                <button
                                    onClick={() => navigate(`/services/${service.id}`)}
                                    className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest group/btn transition-all mt-auto"
                                >
                                    Learn More <ArrowRight className="group-hover/btn:translate-x-1 transition-transform text-primary" size={12} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
