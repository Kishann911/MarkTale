'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
    title: string;
    tagline: string;
    description: string;
    icon: LucideIcon;
}

export default function ServiceHero({ title, tagline, description, icon: Icon }: ServiceHeroProps) {
    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-kestone-black text-white overflow-hidden px-6">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <motion.div
                className="relative z-10 max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Icon */}
                <motion.div
                    className="w-20 h-20 bg-kestone-red rounded-2xl flex items-center justify-center mx-auto mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Icon size={40} className="text-white" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight tracking-tighter mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {title}
                </motion.h1>

                {/* Tagline */}
                <motion.h2
                    className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-400 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {tagline}
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto font-body leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {description}
                </motion.p>

                {/* Scroll Indicator */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="h-16 w-1 bg-kestone-red mx-auto animate-bounce"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}
