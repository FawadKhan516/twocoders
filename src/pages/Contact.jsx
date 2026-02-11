import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Send, Sparkles, CheckCircle2, MessageSquare, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        agency: '',
        brief: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const plan = params.get('plan');
        if (plan) {
            setFormData(prev => ({
                ...prev,
                brief: `Hello, I am interested in the ${plan} Plan for my business. Please let me know the next steps.`
            }));
        }
    }, [location]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left: Info */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2"
                        >
                            <Sparkles size={14} /> Get in Touch
                        </motion.div>
                        <h1 className="mb-8 leading-tight tracking-tight text-white">
                            Let's Talk About <span className="text-gradient">Your Project</span>
                        </h1>
                        <p className="text-lg opacity-60 font-medium leading-relaxed mb-12 text-white/60">
                            Have a project in mind? We are here to help. Send us a message and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email Us", value: "twocoder32@gmail.com" },
                                { icon: Phone, label: "Call Us", value: "03151369221" },
                                { icon: Facebook, label: "Facebook", value: "TwoCoders Official" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-5 group cursor-pointer"
                                >
                                    <div className="p-3.5 glass rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 border-white/5">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <span className="text-[9px] uppercase font-black tracking-widest opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all">
                                            {item.label}
                                        </span>
                                        <p className="text-lg font-bold tracking-tight text-white">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass p-10 md:p-14 rounded-[2.5rem] border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 vip-gradient opacity-10 blur-[120px] -mr-40 -mt-40" />

                            <form
                                action="https://formsubmit.co/twocoder32@gmail.com"
                                method="POST"
                                className="relative z-10 space-y-8"
                            >
                                <input type="hidden" name="_subject" value="New Website Inquiry" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value={window.location.origin + "/contact?status=success"} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[9px] uppercase font-black tracking-widest opacity-40 ml-4 flex items-center gap-2">
                                            <CheckCircle2 size={10} className="text-primary" /> Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-base font-bold focus:outline-none focus:border-primary/50 transition-all font-sans text-white"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[9px] uppercase font-black tracking-widest opacity-40 ml-4 flex items-center gap-2">
                                            <MessageSquare size={10} className="text-primary" /> Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-base font-bold focus:outline-none focus:border-primary/50 transition-all font-sans text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase font-black tracking-widest opacity-40 ml-4 flex items-center gap-2">
                                        <Globe size={10} className="text-primary" /> Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="agency"
                                        required
                                        value={formData.agency}
                                        onChange={handleChange}
                                        placeholder="Enter your company name"
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-base font-bold focus:outline-none focus:border-primary/50 transition-all font-sans text-white"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase font-black tracking-widest opacity-40 ml-4 flex items-center gap-2">
                                        <Sparkles size={10} className="text-primary" /> Project Brief
                                    </label>
                                    <textarea
                                        name="brief"
                                        required
                                        value={formData.brief}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your project requirements..."
                                        className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] px-6 py-4 text-base font-bold focus:outline-none focus:border-primary/50 transition-all resize-none font-sans text-white"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="btn-premium vip-gradient text-white w-full py-6 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 group"
                                >
                                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>

                                {new URLSearchParams(location.search).get('status') === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-primary font-bold text-sm"
                                    >
                                        Message Sent Successfully! We will contact you soon.
                                    </motion.p>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
