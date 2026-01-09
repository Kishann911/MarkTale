'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const deepDives = [
    {
        title: "MaaS: Your Outsourced Growth Engine",
        subtitle: "Marketing as a Service",
        content: "For startups and lean enterprises, hiring a full-stack marketing team is cost-prohibitive. A CMO, Performance Marketer, Content Lead, and Designer can easily cost $300k+ annually. \n\nMaaS (Marketing as a Service) is our answer. We plug into your organization as a fully functional marketing department. We don't just execute tasks; we own the OKRs. From setting up your CRM to running daily ad optimizations and managing your social narrative, we handle it all with the agility of a startup and the discipline of an enterprise.",
        benefits: ["Zero hiring/training overhead", "Access to a multi-disciplinary team", "Scalable based on growth phase", "Strategy meets execution"]
    },
    {
        title: "Tech That Scales With You",
        subtitle: "Web & App Development",
        content: "In 2024, your digital product is your brand. A slow website or a buggy app is a conversion killer. Our development philosophy is simple: 'Performance First.'\n\nWe build on modern stacks like Next.js for web and Flutter for mobile to ensure speed, SEO dominance, and cross-platform consistency. Whether you need a complex e-commerce headless architecture or a high-converting landing page, our code is clean, documented, and built to scale.",
        benefits: ["Headless CMS architectures", "Pixel-perfect implementations", "SEO-native code structure", "High-performance compute"]
    },
    {
        title: "ROI-Obsessed Performance Marketing",
        subtitle: "Digital Advertising",
        content: "Clicks are vanity; revenue is sanity. We stop the budget bleed by focusing on high-intent channels. We don't just run ads; we build funnels.\n\nOur approach involves deep data analytics to understand your customer's journey. We test creatives relentlessly, optimize landing pages for conversion, and use automated email loops to increase LTV. We treat your ad budget like our own money—every dollar must show a return.",
        benefits: ["Full-funnel attribution", "Creative A/B testing", "Conversion Rate Optimization (CRO)", "Real-time dashboards"]
    }
];

export default function ServiceDeepDive() {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-4xl font-heading font-bold mb-6 text-kestone-black">Why Choose MarkTale?</h2>
                    <p className="text-gray-600 leading-relaxed font-body">
                        We go deeper than surface-level deliverables. We understand the business mechanics behind marketing and technology.
                    </p>
                </div>

                <div className="space-y-24">
                    {deepDives.map((dive, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
                        >
                            <div className="flex-1">
                                <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
                                    {dive.subtitle}
                                </span>
                                <h3 className="text-3xl font-heading font-bold mb-6 text-kestone-black">
                                    {dive.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-body mb-8 whitespace-pre-line text-lg">
                                    {dive.content}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {dive.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center text-kestone-black font-medium">
                                            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mr-3 text-kestone-red">
                                                <Check size={14} />
                                            </div>
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 relative h-[400px] w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex items-center justify-center">
                                {/* Placeholder for illustrative graphics - using text for now to keep it clean or could involve icons */}
                                <div className="text-center">
                                    <h4 className="text-9xl font-heading font-bold text-gray-100 select-none">
                                        0{index + 1}
                                    </h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
