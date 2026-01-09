'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [background, setBackground] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    });

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Projects', href: '/projects' },
        { name: 'Awards', href: '/awards' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                background ? "bg-kestone-black py-4 shadow-md" : "bg-kestone-black py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative block w-40 h-12">
                    <Image
                        src="/images/image.png"
                        alt="MarkTale"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 160px, 160px"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className="text-white font-body text-sm font-medium hover:text-kestone-red transition-colors duration-200 flex items-center gap-1"
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6" /></svg>
                                )}
                            </Link>
                        </div>
                    ))}
                    <Link
                        href="#contact"
                        className="inline-block px-6 py-2 bg-white text-black font-heading font-bold text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-kestone-black border-t border-gray-800"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white font-body text-lg font-medium hover:text-kestone-red"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="inline-block px-6 py-2 bg-white text-black font-heading font-bold text-sm rounded-full hover:bg-gray-200 transition-colors text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
