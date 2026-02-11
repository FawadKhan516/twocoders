import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

const projects = [
    {
        title: "Pete Hines Insurance",
        category: "Corporate & Finance",
        desc: "A professional insurance portal built with WordPress focusing on high reliability and seamless customer lead generation.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070",
        link: "https://petequalityinsurance.com/",
        tags: ["WordPress", "Lead Gen", "SEO"],
        color: "from-blue-600 to-indigo-700"
    },
    {
        title: "CMBS Solutions",
        category: "Logistics & Business",
        desc: "A global logistics and business solutions platform developed with WordPress for industrial-scale operations.",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2070",
        link: "https://cmbs.com/",
        tags: ["WordPress", "Industrial", "CRM"],
        color: "from-amber-600 to-orange-700"
    },
    {
        title: "JDC Rentals UK",
        category: "Luxury Travel",
        desc: "A premium luxury vehicle rental platform serving the UK market with an emphasis on high-end user experience.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070",
        link: "https://jdcrentals.co.uk/",
        tags: ["WordPress", "Car Rental", "UX"],
        color: "from-slate-700 to-slate-900"
    },
    {
        title: "Best Board Industrial",
        category: "Construction & Mfg",
        desc: "An industrial and construction solutions portal built for the Pakistan market focusing on product showcasing.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070",
        link: "https://bestboard.com.pk/",
        tags: ["WordPress", "Industrial", "Business"],
        color: "from-emerald-600 to-teal-700"
    },
    {
        title: "Vision Core Solutions",
        category: "Tech & Consulting",
        desc: "Next-gen tech and business consulting platform built with WordPress for modern enterprise visibility.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
        link: "https://visioncoresolutions.com/",
        tags: ["WordPress", "Consulting", "Enterprise"],
        color: "from-cyan-600 to-blue-700"
    },
    {
        title: "SkyTech Mart",
        category: "E-commerce Hub",
        desc: "A high-performance digital gadgets and tech e-commerce hub built using React for ultimate speed.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
        link: "https://skytechmart.netlify.app/",
        tags: ["React", "E-commerce", "Performance"],
        color: "from-purple-600 to-indigo-600"
    },
    {
        title: "Sneak Hive Premium",
        category: "Fashion Retail",
        desc: "A boutique premium footwear and streetwear store featuring custom product workflows in WordPress.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070",
        link: "https://sneakhive.gt.tc/",
        tags: ["WordPress", "Shopping", "Fashion"],
        color: "from-rose-600 to-orange-600"
    }
];

const PortfolioSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2"
                        >
                            <Sparkles size={14} /> Our Masterpieces
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-0 leading-tight tracking-tight"
                        >
                            Projects that <span className="text-gradient">Define</span> Us
                        </motion.h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 glass rounded-full hover:bg-primary hover:text-white transition-all border-white/5"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 glass rounded-full hover:bg-primary hover:text-white transition-all border-white/5"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="min-w-[320px] md:min-w-[450px] snap-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="glass rounded-[2.5rem] overflow-hidden group border-white/5 relative h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity z-10`} />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-primary transition-all block"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-base opacity-50 mb-6 font-medium leading-relaxed line-clamp-2">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold uppercase tracking-widest opacity-40">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
