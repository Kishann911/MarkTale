'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ContentSection {
    whyChoose?: {
        title: string;
        content: string;
        points: string[];
    };
    problem?: {
        title: string;
        content: string;
    };
    differentiators?: {
        title: string;
        points: { title: string; description: string }[];
    };
    framework?: {
        title: string;
        steps: { title: string; description: string }[];
    };
    platforms?: {
        title: string;
        items: { name: string; description: string }[];
    };
    results?: {
        title: string;
        outcomes: string[];
    };
}

interface ServiceContentProps {
    sections: ContentSection;
}

export default function ServiceContent({ sections }: ServiceContentProps) {
    return (
        <>
            {/* Why Choose Section */}
            {sections.whyChoose && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-8">
                                {sections.whyChoose.title}
                            </h2>
                            <p className="text-lg text-gray-600 font-body leading-relaxed mb-8">
                                {sections.whyChoose.content}
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {sections.whyChoose.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Check className="text-kestone-red mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-700 font-body">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Problem Section */}
            {sections.problem && (
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-8">
                                {sections.problem.title}
                            </h2>
                            <p className="text-lg text-gray-600 font-body leading-relaxed">
                                {sections.problem.content}
                            </p>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Differentiators Section */}
            {sections.differentiators && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-12"
                        >
                            {sections.differentiators.title}
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sections.differentiators.points.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-50 p-6 rounded-xl"
                                >
                                    <h3 className="text-xl font-heading font-bold text-kestone-black mb-3">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 font-body">
                                        {point.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Framework Section */}
            {sections.framework && (
                <section className="py-24 bg-kestone-black text-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold mb-12"
                        >
                            {sections.framework.title}
                        </motion.h2>
                        <div className="space-y-8">
                            {sections.framework.steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-kestone-red rounded-full flex items-center justify-center font-heading font-bold text-xl">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-300 font-body leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Platforms Section */}
            {sections.platforms && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-12"
                        >
                            {sections.platforms.title}
                        </motion.h2>
                        <div className="space-y-6">
                            {sections.platforms.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-50 p-6 rounded-xl"
                                >
                                    <h3 className="text-xl font-heading font-bold text-kestone-black mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 font-body">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Results Section */}
            {sections.results && (
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-12">
                                {sections.results.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {sections.results.outcomes.map((outcome, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start bg-white p-6 rounded-xl"
                                    >
                                        <Check className="text-kestone-red mr-4 mt-1 flex-shrink-0" size={24} />
                                        <span className="text-lg text-gray-700 font-body">{outcome}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}
        </>
    );
}
