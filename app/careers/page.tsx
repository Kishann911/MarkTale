'use client';

import React from 'react';
import PageHero from '@/app/components/ui/PageHero';
import CareersContent from '@/app/components/careers/CareersContent';
import TeamCTA from '@/app/components/TeamCTA';

export default function CareersPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Careers"
                subtitle="Join Us"
                description="We are building the future of marketing. If you want to move fast and break things, you belong here."
            />
            <CareersContent />
            <TeamCTA />
        </div>
    );
}
