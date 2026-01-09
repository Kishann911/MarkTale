'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        id: 'startup',
        title: 'Startup & Brand Building',
        description: 'We help early-stage companies build a strong foundation. From market research and brand identity to go-to-market strategy, we are your partners in scaling from zero to one.',
        image: '/images/service-startup.png',
        features: ['Brand Identity Design', 'Go-to-Market Strategy', 'Pitch Deck Creation', 'Market Analysis']
    },
    {
        id: 'development',
        title: 'Website & App Development',
        description: 'Our engineering team builds robust, scalable, and high-performance digital products. Whether it\'s a responsive website, a complex web app, or a mobile application, we deliver excellence.',
        image: '/images/service-dev.png',
        features: ['Custom Web Development', 'Mobile App Development', 'E-commerce Solutions', 'UI/UX Design']
    },
    {
        id: 'marketing',
        title: 'Digital Marketing & Growth',
        description: 'Data-driven marketing strategies that deliver ROI. We leverage SEO, content marketing, and paid acquisition to drive traffic and convert leads into loyal customers.',
        image: '/images/service-marketing.png',
        features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Lead Generation']
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white overflow-hidden" id="services">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-kestone-red font-body font-bold uppercase tracking-widest text-sm block mb-3">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black">
                        Comprehensive <br /> <span className="text-gray-400">Growth Solutions</span>
                    </h2>
                </motion.div>

                <div className="space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Image Side */}
                            <motion.div
                                className="w-full lg:w-1/2 relative group"
                                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-sm shadow-2xl">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-kestone-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                {/* Decorative Element */}
                                <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-24 h-24 bg-kestone-red/10 z-[-1]`} />
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-kestone-black mb-6">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-700 font-medium">
                                            <span className="w-2 h-2 bg-kestone-red rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="group flex items-center text-kestone-red font-bold uppercase tracking-wider hover:text-red-700 transition-colors">
                                    Learn More <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
