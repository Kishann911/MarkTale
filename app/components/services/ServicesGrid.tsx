'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Megaphone, PenTool, Database, Search, Smartphone, Globe, BarChart } from 'lucide-react';

const services = [
    {
        icon: Database,
        title: "MaaS (Marketing as a Service)",
        desc: "A fully managed marketing engine for startups. We handle everything from strategy to execution, acting as your extended growth team.",
        features: ["Go-to-Market Strategy", "Full-Stack Execution", "AI-Driven Optimization"]
    },
    {
        icon: Globe,
        title: "Web Development",
        desc: "Building blazing fast, SEO-optimized, and visually stunning websites that convert visitors into customers.",
        features: ["Next.js & React", "eCommerce Platforms", "Custom CMS Solutions"]
    },
    {
        icon: Smartphone,
        title: "App Development",
        desc: "Native and cross-platform mobile applications designed for seamless user experiences and high scalability.",
        features: ["iOS & Android", "Flutter / React Native", "UI/UX Design"]
    },
    {
        icon: Search,
        title: "SEO Optimization",
        desc: "Dominate search rankings with our data-first SEO strategies. We don't just target keywords; we target intent.",
        features: ["Technical SEO", "On-Page Optimization", "Backlink Strategy"]
    },
    {
        icon: Megaphone,
        title: "Performance Marketing",
        desc: "High-ROI paid campaigns across Google, Meta, and LinkedIn to drive qualified leads and sales.",
        features: ["PPC Campaigns", "Social Media Ads", "Retargeting Pipelines"]
    },
    {
        icon: PenTool,
        title: "Brand Identity",
        desc: "Crafting memorable brands with distinct visual languages and compelling narratives that resonate.",
        features: ["Logo Design", "Brand Guidelines", "Visual Storytelling"]
    },
    {
        icon: Code,
        title: "Custom AI Solutions",
        desc: "Leveraging Large Language Models and automation to build custom tools that streamline your business ops.",
        features: ["Chatbots", "Process Automation", "Data Analysis Tools"]
    },
    {
        icon: BarChart,
        title: "Analytics & Insights",
        desc: "Turning data into actionable growth strategies. We set up comprehensive tracking to measure every click.",
        features: ["Google Analytics 4", "Conversion Tracking", "User Behavior Analysis"]
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
                            className="bg-neutral-50 p-8 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group border border-transparent hover:border-black/10 group cursor-default"
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
