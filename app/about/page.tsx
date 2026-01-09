import Manifesto from "../components/about/Manifesto";
import PhilosophyGrid from "../components/about/PhilosophyGrid";
import FounderQuote from "../components/about/FounderQuote";
import TeamCTA from "../components/TeamCTA";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Manifesto / Hero - The Hook */}
            <Manifesto />

            {/* The Methodology - Grid */}
            <PhilosophyGrid />

            {/* The Visionary - Editorial Quote */}
            <FounderQuote />

            {/* Team Call to Action - Keeping this as it fits the bold vibe */}
            <TeamCTA />
        </main>
    );
}
