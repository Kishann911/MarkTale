'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCTA() {
    return (
        <section className="py-24 bg-kestone-black text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 font-body mb-10 max-w-2xl mx-auto">
                        Let's discuss how we can help you achieve your goals. Our team is ready to transform your vision into reality.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-kestone-red text-white px-8 py-4 font-heading font-bold text-lg rounded-full hover:bg-red-600 transition-all hover:shadow-xl group"
                    >
                        Start Your Project Today
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
