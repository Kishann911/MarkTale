'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
    title: string;
    tagline: string;
    description: string;
    iconSmall: React.ReactNode;
    iconLarge: React.ReactNode;
}

export default function ServiceHero({ title, tagline, description, iconSmall, iconLarge }: ServiceHeroProps) {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-kestone-black text-white px-6 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                            {iconSmall}
                            <span className="text-sm font-medium uppercase tracking-wider text-gray-300">Expertise</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight">
                            {title}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-8">
                            {tagline}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    {/* Abstract Visual / Decorative */}
                    <motion.div
                        className="hidden lg:block lg:w-1/3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="relative w-full aspect-square border-2 border-white/20 rounded-full flex items-center justify-center p-12">
                            <div className="w-full h-full bg-gradient-to-br from-kestone-red/20 to-transparent rounded-full animate-pulse"></div>
                            {iconLarge}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
