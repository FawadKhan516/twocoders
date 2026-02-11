import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Zap, Rocket, CheckCircle2, Quote } from 'lucide-react';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
                    {/* Left: Headline */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2"
                        >
                            <Sparkles size={14} /> Our Story
                        </motion.div>
                        <h1 className="mb-8 leading-tight tracking-tight text-white">
                            We Build <span className="text-gradient">Professional Solutions</span> for Your Business
                        </h1>
                        <p className="text-lg opacity-60 font-medium leading-relaxed mb-10">
                            TwoCoders is a team of professional developers and designers dedicated to helping businesses grow in the digital world. We provide high-quality web development, branding, and custom software services.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-4xl font-black mb-1 text-white">50+</h3>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-40">Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black mb-1 text-white">10+</h3>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-40">Expert Developers</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Vision */}
                    <div className="lg:w-1/2">
                        <div className="glass p-10 md:p-14 rounded-[3rem] border-white/5 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden h-full flex flex-col justify-center">
                            <Quote size={60} className="text-primary opacity-10 absolute top-10 right-10" />
                            <h3 className="text-2xl font-bold mb-6 italic opacity-80 leading-snug text-white">
                                "Our goal is to make professional digital services accessible to every business, providing quality and reliability in every project."
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Rocket size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Team TwoCoders</p>
                                    <p className="text-xs opacity-50 font-bold uppercase tracking-widest">Digital Agency Founders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Users,
                            title: "Client Focused",
                            desc: "We listen to your needs and create solutions that specifically help your business succeed."
                        },
                        {
                            icon: Target,
                            title: "Quality Results",
                            desc: "We focus on high-quality code and professional design to ensure your website performs perfectly."
                        },
                        {
                            icon: Zap,
                            title: "Fast Delivery",
                            desc: "We value your time and work efficiently to deliver your projects without compromising on quality."
                        }
                    ].map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-10 rounded-[2.5rem] border-white/5 hover:bg-white/5 transition-all text-center"
                        >
                            <div className="vip-gradient w-14 h-14 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                                <value.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                            <p className="text-sm opacity-50 font-medium leading-relaxed">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default About;
