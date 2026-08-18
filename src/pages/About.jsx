import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

const values = [
  {
    icon: Sparkles,
    title: "Curiosity & Innovation",
    text: "We encourage students to ask questions, explore new ideas and discover how technology can solve real world problems.",
  },
  {
    icon: Rocket,
    title: "Real World Skills",
    text: "Learning goes beyond textbooks. Students develop practical skills through projects, creativity, technology and experiences that connect learning to the world around them.",
  },
  {
    icon: Users,
    title: "Confidence & Expression",
    text: "We help students communicate their ideas with confidence through presentations, public speaking, teamwork and creative expression.",
  },
  {
    icon: BrainCircuit,
    title: "Purpose & Leadership",
    text: "We inspire students to take initiative, work together and turn their ideas into meaningful projects that create a positive impact.",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About AI KISA School Karachi | Our Mission & Vision"
        description="Learn about AI KISA School Karachi, our mission to provide free education, our vision for future-ready learning and our commitment to students."
        url="https://www.aikisaschool.com/about"
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <PageHero
          eyebrow="About us"
          title="A school founded on one belief: talent is everywhere, opportunity is not."
          description="AI KISA School was created so that ability, not family income, decides how far a young person can go."
          backgroundImage="/About.webp"
          mobileBackgroundImage="/Aboutmobile.webp"
        />

        <section className="bg-[#F5F8FC] kisa-section--tight">
          <div className="container-page">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.08fr]">
              <div className="max-w-[520px]">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">Our story</p>
                  <h2 className="mt-4 text-2xl md:text-3xl font-black leading-[1.04] tracking-[-0.04em] text-[#1F2937]">
                    Built for children who deserve more.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-[#4d5967]">
                    AI KISA School was established in 2019 with a mission to provide quality education to children who could not afford expensive schooling. The goal was to give deserving children access to better learning opportunities and a brighter future.
                  </p>
                  <p className="mt-5 text-base leading-7 text-[#4d5967]">
                    In 2023, the school decided to expand its educational vision by preparing students for the future of technology. Alongside their foundational education, students began learning modern, practical skills that can create greater opportunities for their future.
                  </p>
                  <p className="mt-5 text-base leading-7 text-[#4d5967]">
                    Today, students are learning coding, digital marketing, digital literacy, and other future technologies, helping them develop the knowledge and skills they need to succeed in a rapidly changing world.
                  </p>
              </div>
              <div className="ml-auto h-[320px] w-full max-w-[520px] rounded-[18px] overflow-hidden border border-[#e7e1d8] bg-white shadow-[0_10px_24px_rgba(17,34,32,0.04)]">
                <img
                  src="/Homecomp.webp"
                  alt="Students in a classroom"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FC] kisa-section--tight">
          <div className="container-page">
            <div className="max-w-4xl text-left">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">Mission &amp; vision</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937]">
                What we are here to do
              </h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="surface-card p-8">
                <h3 className="text-xl font-semibold">Mission</h3>
                <p className="mt-3 text-muted-foreground">
                  We provide a free, high quality education for children who previously lacked access, combining strong academics, character formation and real, practical technology skills so young people can thrive.
                </p>
              </div>

              <div className="surface-card p-8">
                <h3 className="text-xl font-semibold">Vision</h3>
                <p className="mt-3 text-muted-foreground">
                  Graduates who confidently lead in their communities and use technology responsibly to improve lives, with the skills and opportunities to choose their future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-page py-20">
          <div className="max-w-4xl text-left">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">Our approach</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-black leading-[1.08] tracking-[-0.04em] text-[#1F2937]">
              What we believe every student deserves
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="h-full rounded-[22px] border border-[#e7e1d8] bg-white p-6 shadow-[0_12px_28px_rgba(17,34,32,0.04)]">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#EEF4FF] text-[#1B2A5C]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-[1.2] tracking-[-0.03em] text-[#1B2A5C]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4d5967]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="rounded-[36px] bg-[linear-gradient(135deg,#1B2A5C_0%,#2E4A9E_100%)] px-6 py-16 text-center text-white shadow-[0_18px_44px_rgba(27,42,92,0.18)] sm:px-10">
            <h2 className="text-[2.3rem] font-black leading-[1.06] tracking-[-0.06em] text-white sm:text-[2.8rem]">
              Every child deserves a school that costs nothing and expects everything.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[1.08rem] leading-8 text-[#edf4ef]">
              Admissions are open to all families. No tuition, no hidden fees, only a commitment to learning.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center rounded-full border border-[#DFB863] bg-[#DFB863] px-7 py-4 text-[1rem] font-semibold text-[#1B2A5C] transition-transform hover:-translate-y-0.5"
              >
                Start an application
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-[1rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Book a campus visit
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;