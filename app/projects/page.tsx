'use client';

import React from 'react';
import PageHero from '@/app/components/ui/PageHero';
import ProjectsGallery from '@/app/components/projects/ProjectsGallery';
import TeamCTA from '@/app/components/TeamCTA';

export default function ProjectsPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Our Work"
                subtitle="Projects"
                description="A visual showcase of how we help brands grow, scale, and dominate their industries."
            />
            <ProjectsGallery />
            <TeamCTA />
        </div>
    );
}
