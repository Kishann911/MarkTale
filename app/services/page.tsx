'use client';

import React from 'react';
import PageHero from '@/app/components/ui/PageHero';
import ServicesGrid from '@/app/components/services/ServicesGrid';
import ProcessSteps from '@/app/components/services/ProcessSteps';
import TeamCTA from '@/app/components/TeamCTA';
import ServiceDeepDive from '@/app/components/services/ServiceDeepDive';

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Services & Solutions"
                subtitle="What We Do"
                description="We combine creativity, data, and technology to build brands that scale. From MVP to IPO, we've got you covered."
            />
            <ServicesGrid />
            <ProcessSteps />
            <ServiceDeepDive />
            <TeamCTA />
        </div>
    );
}
