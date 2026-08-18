import { Link } from "react-router-dom";
import PageHero from "./PageHero";

export default function Hero() {
  return (
    <PageHero
      badgeText="Tuition-free — admissions open"
      title="A world-class school that costs families nothing."
      description="AI KISA School educates curious young people through strong academics, character formation and real experience with artificial intelligence — completely free."
      backgroundImage="/Homehero.png"
      mobileBackgroundImage="/Homeheromobile.png"
    >
      <Link to="/admission" className="inline-flex items-center justify-center rounded-full border border-[#DFB863] bg-[#DFB863] px-6 py-3 text-base font-semibold text-[#1B2A5C] shadow-[0_12px_22px_rgba(223,184,99,0.30)] transition-transform hover:-translate-y-0.5">
        Apply for admission
      </Link>
      <Link to="/academics" className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5">
        Explore academics
      </Link>
    </PageHero>
  );
}