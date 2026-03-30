import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Lab from "@/components/Lab";
import CTA from "@/components/CTA";
import Divider from "@/components/Divider";

export default function Home() {
    return (
        <main>
            <Hero />
            <Divider />

            <div className="py-24">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>

            <Philosophy />

            <div className="py-24">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>

            <Services />

            <div className="py-24">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>

            <Capabilities />

            <Process />
            <Lab />
            <CTA />
        </main>
    );
}