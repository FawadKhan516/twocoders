import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Code, Palette, Smartphone, BarChart, Shield, Sparkles, ArrowRight, Zap, Layers, Crown, CheckCircle2, Store, Users, Image as LucideImage } from 'lucide-react';

const servicesData = {
    "web": {
        icon: Globe,
        title: "Web Development",
        desc: "We build professional, fast, and high-quality websites that help your business grow.",
        details: "Our web development service focuses on creating high-performance websites that are easy to use and look great on all devices. Whether you need a simple business site or a complex web portal, we have the expertise to deliver a professional solution.",
        features: ["Modern Responsive Design", "Fast Loading Speed", "SEO Friendly Structure", "Easy Content Management", "Secure Hosting Setup", "Custom Functionality"],
        color: "from-blue-500 to-indigo-600",
        quote: "A professional website is the foundation of your digital success.",
        plans: [
            { name: "Starter Web", price: "499", desc: "Perfect for personal brands and small landing pages.", features: ["5-Page Responsive Site", "Basic SEO", "Contact Form", "Standard Support"] },
            { name: "Business Web", price: "1,299", desc: "Ideal for growing businesses needing a strong presence.", features: ["12-Page Custom Site", "Advanced SEO", "CMS Integration", "Priority Support"], recommended: true },
            { name: "Elite Portal", price: "3,499", desc: "Full-scale enterprise web solutions and portals.", features: ["Unlimited Pages", "Custom Backend", "API Integrations", "24/7 Support"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=826",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
        ]
    },
    "brand": {
        icon: Palette,
        title: "Graphic Design",
        desc: "Create a strong brand identity with professional logos and visual designs.",
        details: "We help you build a professional brand image that stands out from the competition. Our designers create unique logos, style guides, and marketing materials that communicate your business values clearly and effectively.",
        features: ["Custom Logo Design", "Professional Style Guides", "Social Media Graphics", "Marketing Materials", "Brand Consultation", "Print Ready Designs"],
        color: "from-purple-500 to-rose-600",
        quote: "Good design is about making your brand memorable.",
        plans: [
            { name: "Brand Identity", price: "299", desc: "Essential branding for startups and small shops.", features: ["Logo Design", "Color Palette", "Font Selection", "2 Revisions"] },
            { name: "Signature Kit", price: "799", desc: "Complete visual identity for professional agencies.", features: ["Full Branding Suite", "Social Media Kit", "Style Guide", "Unlimited Revisions"], recommended: true },
            { name: "Master Studio", price: "1,999", desc: "High-end corporate branding and strategy.", features: ["Global Strategy", "Brand Guidelines", "UI/UX Concepts", "Concierge Service"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1561070791-236b3341ea22?auto=format&fit=crop&q=80&w=800"
        ]
    },
    "seo": {
        icon: BarChart,
        title: "SEO & Marketing",
        desc: "Boost your online visibility and get more customers with our marketing expertise.",
        details: "Our SEO and marketing services are designed to improve your search engine rankings and drive more traffic to your website. We use proven strategies to reach your target audience and increase your business revenue.",
        features: ["Keyword Research", "On-Page Optimization", "Content Strategy", "Google Ranking", "Conversion Analysis", "Monthly Reports"],
        color: "from-amber-500 to-orange-600",
        quote: "Visibility in search results is the key to business growth.",
        plans: [
            { name: "Basic Growth", price: "399", desc: "Simple optimization to get your site noticed locally.", features: ["Keyword Research", "On-Page Fixes", "Local SEO", "Monthly Report"] },
            { name: "Market Leader", price: "999", desc: "Dominant SEO strategy for competitive markets.", features: ["Competitor Analysis", "Backlink Strategy", "Content Plan", "Weekly Tracking"], recommended: true },
            { name: "Empire SEO", price: "2,499", desc: "Aggressive multi-channel marketing campaigns.", features: ["Global Strategy", "Technical Audits", "Paid Ad Sync", "Dedicated Manager"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1533750516457-a7f992034fce?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
        ]
    },
    "app": {
        icon: Smartphone,
        title: "App Development",
        desc: "Custom mobile and web applications built to improve your business efficiency.",
        details: "We build custom applications for iOS and Android that solve your business challenges. Our apps are designed to be intuitive, secure, and fast, providing a great experience for your users and employees.",
        features: ["iOS & Android Apps", "Custom Business Tools", "Secure Login Systems", "Database Integration", "Real-time Notifications", "Modern UI/UX"],
        color: "from-emerald-500 to-teal-600",
        quote: "Apps help bring your business directly to your customers' hands.",
        plans: [
            { name: "MVP App", price: "2,999", desc: "Fast-track development for your initial app idea.", features: ["iOS/Android MVP", "Cloud Sync", "Standard UI", "Basic Store Listing"] },
            { name: "Elite App", price: "7,499", desc: "Feature-rich application for scaling platforms.", features: ["Advanced Logic", "Custom UI/UX", "Payment API", "Performance Labs"], recommended: true },
            { name: "Enterprise App", price: "19,999", desc: "Massively scalable apps with complex architectures.", features: ["Microservices", "Offline Sync", "Deep Analytics", "Premium Support"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800"
        ]
    },
    "pos": {
        icon: Store,
        title: "POS Systems",
        desc: "Advanced Point of Sale solutions for restaurants, retail, and inventory management.",
        details: "We provide state-of-the-art POS systems designed for efficiency and ease of use. Our solutions include real-time inventory tracking, staff management, detailed reporting, and secure payment processing to streamline your business operations.",
        features: ["Retail & Restaurant POS", "Inventory Management", "Shift & Staff Tracking", "Mobile POS Support", "Cloud Reporting", "Offline Operations"],
        color: "from-violet-500 to-fuchsia-600",
        quote: "Streamline your sales and inventory with our precision POS tools.",
        plans: [
            { name: "Quick Retail", price: "899", desc: "Essential POS for small shops and boutiques.", features: ["1 Terminal License", "Basic Inventory", "Tax Reporting", "Email Support"] },
            { name: "Pro Restaurant", price: "2,499", desc: "Advanced features for busy dining environments.", features: ["3 Terminal Licenses", "KDS Integration", "Table Management", "Priority Support"], recommended: true },
            { name: "Global Chain", price: "8,999", desc: "Multi-outlet management and enterprise analytics.", features: ["Unlimited Terminals", "Central Inventory", "Custom API", "Dedicated Manager"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1556740734-754f1577039a?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1556742031-c69611f7bb4d?auto=format&fit=crop&q=80&w=800"
        ]
    },
    "hrms": {
        icon: Users,
        title: "HRMS Solutions",
        desc: "Scalable HR management systems for payroll, attendance, and employee tracking.",
        details: "Our Human Resource Management Systems help you manage your workforce with ease. From automated payroll and tax calculations to performance reviews and recruitment tracking, we provide a complete solution for modern HR needs.",
        features: ["Employee Database", "Automated Payroll", "Attendance Tracking", "Performance Reviews", "Recruitment Portal", "Compliance Tools"],
        color: "from-sky-500 to-cyan-600",
        quote: "Empower your workforce with smart management software.",
        plans: [
            { name: "Core HR", price: "1,299", desc: "Essential tools for small team management.", features: ["Up to 50 Employees", "Attendance Logs", "Document Vault", "Standard Support"] },
            { name: "Enterprise HRMS", price: "4,999", desc: "Comprehensive system for large corporations.", features: ["Unlimited Employees", "Global Payroll", "Performance AI", "Priority Support"], recommended: true },
            { name: "Custom Workforce", price: "POA", desc: "Bespoke HR solutions for unique organizations.", features: ["Custom Modules", "SSO Integration", "On-Site Training", "Dedicated Manager"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1521737706045-36ce16e16709?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600880292203-767bb626c8e9?auto=format&fit=crop&q=80&w=800"
        ]
    },
    "sec": {
        icon: Shield,
        title: "Cyber Security",
        desc: "Protect your business data and customer information with elite security.",
        details: "We provide comprehensive security solutions to protect your digital assets. From website encryption to secure server setups, we ensure that your business and customer data remain safe from any online threats.",
        features: ["Website Encryption", "Secure Database Setup", "Data Backup Solutions", "Security Audits", "Firewall Protection", "Login Security"],
        color: "from-red-500 to-orange-700",
        quote: "Data security is the most important part of your business.",
        plans: [
            { name: "Base Shield", price: "199", desc: "Essential security layers for small business sites.", features: ["SSL/HTTPS Set", "Spam Filtering", "Daily Backups", "Malware Scan"] },
            { name: "Fortress Pro", price: "599", desc: "Proactive defense for high-traffic platforms.", features: ["Firewall Config", "Intrusion Audit", "Real-time Monitoring", "Disaster Recovery"], recommended: true },
            { name: "Titan Vault", price: "1,499", desc: "Maximum compliance and heavy-duty data safety.", features: ["ISO Standard Audit", "End-to-End Encryption", "Penetration Testing", "Legal Support"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
        ]
    },
    "dev": {
        icon: Code,
        title: "Software Solutions",
        desc: "Bespoke software and automation tools designed specifically for your organization.",
        details: "We develop custom software tailored to your specific business needs. Whether you need an internal tracking tool or an automated workflow system, we build software that makes your business run more efficiently.",
        features: ["Custom Software Design", "Automation Tools", "Database Management", "System Integration", "Scalable Architecture", "Technical Support"],
        color: "from-cyan-500 to-blue-700",
        quote: "The right software can solve your most complex problems.",
        plans: [
            { name: "Automation Bot", price: "899", desc: "Streamline repetitive tasks with custom scripts.", features: ["3 Core Automations", "Dashboard Access", "Email Integration", "Bug Fixes"] },
            { name: "Custom Suite", price: "4,499", desc: "Tailored internal tools for business operations.", features: ["Full Ops System", "Multi-User Roles", "Data Visualization", "API Exports"], recommended: true },
            { name: "Global Enterprise", price: "14,999", desc: "Massive scale software systems for huge teams.", features: ["Global Architecture", "SLA Guarantee", "Custom Training", "DevOps Pipeline"] }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
        ]
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = servicesData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate('/services');
        }
    }, [id, service, navigate]);

    if (!service) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 min-h-screen"
        >
            <div className="container mx-auto px-6">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-12 opacity-50 text-[10px] font-bold uppercase tracking-widest">
                    <Link to="/" className="hover:text-primary transition-all">Home</Link>
                    <span>/</span>
                    <Link to="/services" className="hover:text-primary transition-all">Expertise</Link>
                    <span>/</span>
                    <span className="text-primary">{service.title}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-32">
                    {/* Left: Content */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2"
                        >
                            <CheckCircle2 size={14} /> Service Overview
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
                            {service.title.split(' ')[0]} <span className="text-gradient">{service.title.split(' ').slice(1).join(' ')}</span>
                        </h1>

                        <p className="text-xl md:text-2xl opacity-60 font-medium leading-relaxed mb-12">
                            {service.details}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {service.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass p-6 rounded-2xl border-white/5 group hover:bg-white/5 transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Layers size={18} />
                                        </div>
                                        <span className="font-bold text-lg tracking-tight text-white">{feature}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="glass p-10 md:p-14 rounded-[3rem] border-white/5 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
                            <Sparkles className="absolute top-10 right-10 opacity-10 text-primary" size={60} />
                            <h3 className="text-2xl font-bold mb-6 italic opacity-80 leading-snug text-white">
                                "{service.quote}"
                            </h3>
                            <div className="h-[1px] w-20 bg-primary/30 mb-6" />
                            <p className="text-sm font-bold uppercase tracking-widest opacity-40">Our Commitment to Value</p>
                        </div>
                    </div>

                    {/* Right: Quick Action */}
                    <div className="lg:w-1/3 w-full sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-10 blur-[80px] -mr-32 -mt-32`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <Crown size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-black opacity-40">Next Step</p>
                                        <p className="text-2xl font-black tracking-tight text-white">Get Started</p>
                                    </div>
                                </div>

                                <p className="text-sm opacity-60 font-medium leading-relaxed mb-10">
                                    Ready to transform your business expectations? Explore our specialized plans below or reach out for a custom quote.
                                </p>

                                <button
                                    onClick={() => navigate(`/contact?service=${service.title}`)}
                                    className="w-full vip-gradient text-white py-4 rounded-xl font-black text-sm shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                                >
                                    Discuss Your Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Portfolio Gallery Section */}
                <div className="pt-24 mb-32">
                    <div className="max-w-xl mb-16">
                        <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2">
                            <LucideImage size={14} /> Case Studies
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-white">
                            Our <span className="text-gradient">Expertise</span> in Action
                        </h2>
                        <p className="text-sm opacity-50 font-medium leading-relaxed">
                            Take a look at some of the industry-leading solutions we've delivered for our global clients.
                        </p>
                    </div>

                    <div className="columns-1 md:columns-2 gap-8 space-y-8">
                        {service.gallery.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5"
                            >
                                <img
                                    src={img}
                                    alt={`${service.title} Project ${idx + 1}`}
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-color/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <div className="p-4 glass rounded-xl text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                        View Case Study <ArrowRight size={12} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Service Specific Pricing Section */}
                <div className="pt-24 border-t border-white/5">
                    <div className="max-w-xl mb-16">
                        <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2">
                            <Zap size={14} /> Pricing Packages
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-0 leading-tight tracking-tight text-white">
                            Choose the <span className="text-gradient">Right Plan</span> for {service.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`glass rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden border-white/5 transition-all hover:border-primary/20 ${plan.recommended ? 'ring-1 ring-primary/40' : ''}`}
                            >
                                {plan.recommended && (
                                    <div className="absolute top-8 right-8">
                                        <div className="vip-gradient px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest text-white shadow-lg">
                                            Recommended
                                        </div>
                                    </div>
                                )}

                                <div className="mb-8 relative z-10">
                                    <h3 className="text-xl font-black mb-1 tracking-tight text-white">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-black tracking-tighter text-white">$</span>
                                        <span className="text-4xl font-black tracking-tighter text-white">{plan.price}</span>
                                        <span className="text-[10px] opacity-40 font-bold">/starting</span>
                                    </div>
                                </div>

                                <p className="text-sm opacity-60 mb-8 font-medium leading-relaxed relative z-10 min-h-[40px]">
                                    {plan.desc}
                                </p>

                                <div className="space-y-4 mb-10 flex-grow relative z-10">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3">
                                            <CheckCircle2 size={12} className="text-primary" />
                                            <span className="text-xs font-bold opacity-70">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => navigate(`/contact?plan=${encodeURIComponent(plan.name)}`)}
                                    className={`w-full py-4 rounded-xl font-black text-xs transition-all shadow-xl hover:-translate-y-1 ${plan.recommended ? 'vip-gradient text-white' : 'glass hover:bg-white/10'}`}
                                >
                                    Select {plan.name}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceDetail;
