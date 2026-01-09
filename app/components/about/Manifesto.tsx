'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center justify-center bg-kestone-black text-white overflow-hidden px-6"
        >
            {/* Background Grid - faint */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <motion.div
                className="relative z-10 max-w-6xl mx-auto text-center"
                style={{ y, opacity }}
            >
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-9xl font-heading font-black leading-tight tracking-tighter mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Startups Don't Die of <span className="text-kestone-red">Starvation.</span>
                </motion.h1>

                <motion.div
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-400">
                        They Die of <span className="text-white">Indigestion.</span>
                    </h2>
                </motion.div>

                <motion.p
                    className="mt-12 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-body leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    We don’t feed you empty metrics. We curate <span className="text-white font-bold">growth</span> using an AI-fueled engine that eliminates the noise.
                </motion.p>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <div className="h-24 w-1 bg-kestone-red mx-auto animate-bounce"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}
