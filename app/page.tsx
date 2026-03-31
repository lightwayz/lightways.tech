import Hero from "@/app/components/Hero";
import Philosophy from "@/app/components/Philosophy";
import Services from "@/app/components/Services";
import Capabilities from "@/app/components/Capabilities";
import Process from "@/app/components/Process";
import Lab from "@/app/components/Lab";
import CTA from "@/app/components/CTA";
import Divider from "@/app/components/Divider";

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