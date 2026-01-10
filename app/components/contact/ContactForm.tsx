'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl font-heading font-bold text-kestone-black mb-6">
                            Ready to Start <br /> Your Project?
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-12 max-w-lg font-body">
                            Whether you need a full digital transformation or a specific marketing campaign, our team is ready to help you scale.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-kestone-black mb-1">Call Us</h4>
                                    <a href="tel:+918587870707" className="text-gray-600 hover:text-kestone-red transition-colors">
                                        +91-8587870707
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-kestone-black mb-1">Email Us</h4>
                                    <a href="mailto:sales@marktaleworld.com" className="text-gray-600 hover:text-kestone-red transition-colors">
                                        sales@marktaleworld.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-kestone-black mb-1">Visit Us</h4>
                                    <p className="text-gray-600">
                                        Plot no. 141, Sec. 14, Dwarka,<br />
                                        New Delhi – 110078
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://wa.me/918587870707"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-green-600 transition-colors"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        layoutId="contact-form"
                        className="bg-neutral-50 p-6 md:p-12 rounded-3xl border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Service Interest</label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-gray-600 text-base"
                                >
                                    <option>Marketing as a Service (MaaS)</option>
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>Performance Marketing</option>
                                    <option>Brand Identity</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-kestone-black text-white font-bold rounded-lg hover:bg-kestone-red transition-colors flex items-center justify-center"
                            >
                                Send Message <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
