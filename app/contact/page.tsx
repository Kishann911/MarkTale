'use client';

import React from 'react';
import PageHero from '@/app/components/ui/PageHero';
import ContactForm from '@/app/components/contact/ContactForm';
import FAQSection from '@/app/components/contact/FAQSection';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Contact Us"
                subtitle="Let's Talk"
                description="Have a project in mind? Let's discuss how we can help you achieve your goals."
            />
            <ContactForm />
            <FAQSection />
        </div>
    );
}
