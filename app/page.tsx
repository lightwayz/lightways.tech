import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Lab from "@/components/Lab";
import CTA from "@/components/CTA";

export default function Home() {
    return (
        <main>
            <Hero />
            <Philosophy />
            <Services />
            <Capabilities />
            <Process />
            <Lab />
            <CTA />
        </main>
    );
}