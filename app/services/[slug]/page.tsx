import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/app/lib/services';
import ServiceHero from '@/app/components/services/detail/ServiceHero';
import ServiceContent from '@/app/components/services/detail/ServiceContent';
import ServiceFAQ from '@/app/components/services/detail/ServiceFAQ';
import ServiceCTA from '@/app/components/services/detail/ServiceCTA';
import type { Metadata } from 'next';

interface ServicePageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const slugs = getAllServiceSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | MarkTale`,
        description: service.metaDescription,
    };
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <ServiceHero
                title={service.title}
                tagline={service.tagline}
                description={service.heroDescription}
                icon={service.icon}
            />

            <ServiceContent sections={service.sections} />

            <ServiceCTA />

            <ServiceFAQ faqs={service.faqs} />
        </main>
    );
}
