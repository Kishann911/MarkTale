'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Megaphone, PenTool, Database, Search, Smartphone, Globe, BarChart, Video, FileText, Target, ShieldCheck, Palette, TrendingUp } from 'lucide-react';

const services = [
    {
        icon: Video,
        title: "Video Content Creation",
        desc: "Crafting captivating video content is crucial for brands to engage their audience and showcase their products or services in a compelling manner.",
        features: ["High-quality production", "Storytelling", "Meaningful connections"]
    },
    {
        icon: Search,
        title: "Market Research",
        desc: "In-depth understanding of audience needs, pain points, and preferences through qualitative and quantitative analysis.",
        features: ["Qualitative Research", "Quantitative Analysis", "Observational Studies"]
    },
    {
        icon: FileText,
        title: "Marketing Plan Development",
        desc: "Strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions.",
        features: ["Comprehensive Planning", "Data-Driven Insights", "Creative Ideation"]
    },
    {
        icon: Target,
        title: "Lead Generation",
        desc: "Driving brand visibility and customer engagement to generate high-quality leads for your business.",
        features: ["Targeted Campaigns", "Conversion Optimization", "Pipeline Growth"]
    },
    {
        icon: ShieldCheck,
        title: "Online Reputation Management",
        desc: "Protecting and enhancing your brand's image across digital channels to build trust and credibility.",
        features: ["Brand Monitoring", "Review Management", "Crisis Response"]
    },
    {
        icon: Palette,
        title: "UI / UX Design",
        desc: "Designing intuitive and visually stunning user interfaces that provide exceptional user experiences.",
        features: ["User Research", "Prototyping", "Visual Design"]
    },
    {
        icon: TrendingUp,
        title: "Performance Marketing",
        desc: "Data-focused advertising campaigns optimized for maximum ROI and measurable impact.",
        features: ["Paid Search", "Social Ads", "Retargeting"]
    },
    {
        icon: BarChart,
        title: "SEO & Analytics",
        desc: "Improving search engine visibility and deriving actionable insights from data to optimize performance.",
        features: ["Keyword Strategy", "Technical SEO", "Performance Tracking"]
    },
    {
        icon: Globe,
        title: "Web Development",
        desc: "Building robust, scalable, and high-performance websites that serve as the foundation of your digital presence.",
        features: ["Responsive Design", "Custom Solutions", "Seamless Integration"]
    }
];

export default function ServicesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-50 p-6 md:p-8 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group border border-transparent hover:border-black/10 group cursor-default"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-kestone-black group-hover:bg-kestone-red group-hover:text-white transition-colors duration-300">
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.desc}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-400">
                                        <div className="w-1.5 h-1.5 bg-kestone-red rounded-full mr-2 group-hover:bg-white"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
