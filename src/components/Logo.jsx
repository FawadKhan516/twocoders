import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
            <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="relative"
            >
                <div className="absolute inset-0 vip-gradient blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="vip-gradient p-2 rounded-xl shadow-2xl relative z-10 border border-white/20">
                    <Code2 size={24} className="text-white" strokeWidth={2.5} />
                </div>
            </motion.div>

            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-black tracking-tighter leading-none text-white transition-colors group-hover:text-primary">
                        Two<span className="text-gradient">Coders</span>
                    </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                    <div className="h-[1px] w-3 bg-primary/30" />
                    <span className="text-[7px] uppercase tracking-[0.4em] font-black opacity-40 text-white/40 group-hover:opacity-100 group-hover:text-primary transition-all">
                        Digital Studio
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Logo;
