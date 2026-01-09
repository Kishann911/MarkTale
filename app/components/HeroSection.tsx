'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
    {
        title: "Startups & Brand Building",
        subtitle: "We Build & Scale Brands"
    },
    {
        title: "Growth Partners",
        subtitle: "In the Age of AI"
    },
    {
        title: "Full-Service Agency",
        subtitle: "Marketing & Technology"
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Geometric Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
            </div>

            {/* Content Carousel */}
            <div className="relative z-10 container mx-auto px-6 max-w-7xl">
                <div className="max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-xl md:text-2xl font-body font-bold text-kestone-red uppercase tracking-widest mb-4">
                                {slides[currentSlide].subtitle}
                            </h2>
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-kestone-black leading-tight">
                                {slides[currentSlide].title}
                            </h1>
                        </motion.div>
                    </AnimatePresence>

                    {/* Static CTA or description if needed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8"
                    >
                        <p className="text-lg text-gray-600 max-w-lg mb-8">
                            We combine AI tools, human creativity, and execution clarity to deliver real business outcomes.
                        </p>
                        <button className="px-8 py-4 bg-kestone-red text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-red-700 transition-all hover:shadow-xl transform hover:-translate-y-1">
                            Explore Services
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? "w-12 bg-kestone-red" : "w-6 bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
