'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-kestone-black text-white pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-3xl font-heading font-bold tracking-widest uppercase mb-6 block">
                            Mark<span className="text-kestone-red">Tale</span>
                        </Link>
                        <p className="text-gray-400 mb-6 font-body leading-relaxed">
                            MarkTale is an AI powered pioneering advertising and marketing company dedicated
                            to helping businesses of all sizes achieve their maximum potential through innovative
                            and effective marketing strategies.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-kestone-red transition-colors text-white">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-8 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Contact Us', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-kestone-red transition-colors text-sm uppercase tracking-wide">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-8 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4">
                            {[
                                'Video Content Creation',
                                'Market Research',
                                'Marketing Plan Development',
                                'Lead Generation',
                                'Online Reputation Management',
                                'UI / UX Design',
                                'Performance Marketing',
                                'SEO & Analytics',
                                'Web Development'
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-400 hover:text-kestone-red transition-colors text-sm uppercase tracking-wide">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-8 uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <MapPin className="text-kestone-red mr-4 mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-400">Plot no. 141, Sec. 14, Dwarka, New Delhi – 110078</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-kestone-red mr-4 flex-shrink-0" size={20} />
                                <span className="text-gray-400">+91-8587870707</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-kestone-red mr-4 flex-shrink-0" size={20} />
                                <span className="text-gray-400">sales@marktaleworld.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} MarkTale World. All rights reserved. | www.marktaleworld.com
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
