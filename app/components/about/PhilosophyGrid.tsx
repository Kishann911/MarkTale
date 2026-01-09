'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Users, ShieldCheck } from 'lucide-react';

const items = [
    {
        title: "The Old Way",
        subtitle: "Guesswork & Gut Feelings",
        desc: "Traditional agencies rely on subjective creativity and manual processes that scale linearly.",
        bg: "bg-neutral-100",
        text: "text-neutral-500",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
        icon: null
    },
    {
        title: "The MarkTale Engine",
        subtitle: "MaaS (Marketing as a Service)",
        desc: "We deployed an AI-driven infrastructure that learns from every campaign, optimizing 24/7.",
        bg: "bg-kestone-red text-white",
        text: "text-white/80",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
        icon: Zap
    },
    {
        title: "Data Decoded",
        subtitle: "Precision > Volume",
        desc: "It's not about more leads. It's about the RIGHT leads.",
        bg: "bg-neutral-900 text-white",
        text: "text-gray-400",
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
        icon: Brain
    },
    {
        title: "Human Led",
        subtitle: "Soul in the Machine",
        desc: "AI builds the road. Humans drive the car. We bring the storytelling that algorithms can't replicate.",
        bg: "bg-white border border-neutral-200",
        text: "text-neutral-600",
        colSpan: "col-span-1 md:col-span-1 lg:col-span-2",
        icon: Users
    }
];

export default function PhilosophyGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-2 block">Our Methodology</span>
                    <h2 className="text-5xl font-heading font-black text-kestone-black uppercase">
                        Why We <span className="line-through text-gray-300">Exist</span> <br />
                        <span className="text-kestone-red">Dominate.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`${item.colSpan} ${item.bg} p-10 flex flex-col justify-between rounded-3xl relative overflow-hidden group`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            {item.icon && (
                                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-500">
                                    <item.icon size={120} />
                                </div>
                            )}

                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2 opacity-70">{item.title}</h3>
                                <h4 className="text-3xl md:text-4xl font-heading font-bold mb-4">{item.subtitle}</h4>
                            </div>

                            <p className={`text-lg leading-relaxed font-body ${item.text}`}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
