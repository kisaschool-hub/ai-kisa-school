import { Link } from "react-router-dom";
import { BookOpen, Cpu, HeartHandshake, Users, Microscope, BadgeCheck } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const values = [
  {
    title: "Academic strength",
    text: "A rigorous, inquiry-led curriculum from early years to graduation, taught in small groups with regular feedback to families.",
  },
  {
    title: "AI & technology learning",
    text: "Every learner builds digital fluency — coding, data literacy, robotics and responsible use of AI — from their first year onward.",
  },
  {
    title: "Truly free",
    text: "No tuition. No hidden fees. Learning materials, labs and mentoring are provided so that cost is never a barrier.",
  },
  {
    title: "Parent partnership",
    text: "Open days, transparent reporting and an always-reachable pastoral team keep families close to their child's progress.",
  },
];

const testimonials = [
  {
    name: "Imtiaz",
    label: "Parent, Grade 7",
    quote:
      "Jab se meri beti yahan admission le kar aayi hai, uski confidence aur learning dono mein bohot farq aaya hai. School walay bachon ka bohot khayal rakhte hain.",
  },
  {
    name: "Fouzia",
    label: "Parent, Grade 10",
    quote:
      "Mera beta class 10 mein hai aur is school ne uski soch hi badal di hai. Ab wo AI aur technology ki baatein aise karta hai jaise koi expert ho.",
  },
];

export default function Home() {
  const [statsRef, statsInView] = useInView();
  const count1 = useCountUp(100, 1200, statsInView);
  const count2 = useCountUp(200, 1200, statsInView);
  const count3 = useCountUp(10, 1200, statsInView);
  const count4 = useCountUp(100, 1200, statsInView);

  return (
    <>
      <SEO
        title="AI KISA School — Free World-Class Education for Every Child"
        description="AI KISA School is a tuition-free school where every learner grows in character, academics and technology with AI literacy woven through daily learning."
        url="https://aikisaschool.com/"
      />

      <Hero />

      <section className="border-y border-[#e8e6df] bg-[#F5F8FC] py-12 md:py-20" ref={statsRef}>
        <div className="section-shell">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[20px] border border-[#e6e3dc] bg-white p-4 shadow-[0_8px_20px_rgba(13,31,31,0.05)] animate-fade-up-delay-1 sm:rounded-[24px] sm:p-5 md:rounded-[28px] md:p-6">
              <div className="text-3xl font-black tracking-[-0.08em] text-[#1B2A5C] sm:text-4xl md:text-5xl">{count1}%</div>
              <p className="mt-2 text-sm font-semibold text-[#1F2937] sm:text-base md:text-lg">Tuition-free places</p>
            </div>
            <div className="rounded-[20px] border border-[#e6e3dc] bg-white p-4 shadow-[0_8px_20px_rgba(13,31,31,0.05)] animate-fade-up-delay-2 sm:rounded-[24px] sm:p-5 md:rounded-[28px] md:p-6">
              <div className="text-3xl font-black tracking-[-0.08em] text-[#1B2A5C] sm:text-4xl md:text-5xl">{count2}+</div>
              <p className="mt-2 text-sm font-semibold text-[#1F2937] sm:text-base md:text-lg">Students enrolled</p>
            </div>
            <div className="rounded-[20px] border border-[#e6e3dc] bg-white p-4 shadow-[0_8px_20px_rgba(13,31,31,0.05)] animate-fade-up-delay-3 sm:rounded-[24px] sm:p-5 md:rounded-[28px] md:p-6">
              <div className="text-3xl font-black tracking-[-0.08em] text-[#1B2A5C] sm:text-4xl md:text-5xl">{count3}+</div>
              <p className="mt-2 text-sm font-semibold text-[#1F2937] sm:text-base md:text-lg">AI Projects</p>
            </div>
            <div className="rounded-[20px] border border-[#e6e3dc] bg-white p-4 shadow-[0_8px_20px_rgba(13,31,31,0.05)] animate-fade-up-delay-4 sm:rounded-[24px] sm:p-5 md:rounded-[28px] md:p-6">
              <div className="text-3xl font-black tracking-[-0.08em] text-[#1B2A5C] sm:text-4xl md:text-5xl">{count4}+</div>
              <p className="mt-2 text-sm font-semibold text-[#1F2937] sm:text-base md:text-lg">Achievements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12 md:py-20">
        <div className="max-w-2xl px-4 sm:px-0 animate-fade-up-delay-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1B2A5C]">Why families choose us</p>
          <h2 className="mt-4 sm:mt-3 text-3xl font-semibold leading-[1.05] text-[#1F2937]">A school built around the learner, not the invoice.</h2>
          <p className="mt-5 sm:mt-4 text-base sm:text-lg text-[#4D5967]">Four commitments shape everything from timetabling to the way we talk with parents.</p>
        </div>

        <div className="mt-10 sm:mt-8 grid gap-6 px-4 sm:px-0 md:grid-cols-2">
          <div className="rounded-[18px] border border-[#e7e1d8] bg-white p-6 shadow-[0_10px_28px_rgba(17,34,32,0.04)] hover:shadow-[0_12px_32px_rgba(17,34,32,0.08)] transition-shadow duration-300 animate-fade-up-delay-2">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#EEF4FF] text-[#1B2A5C]">
              <BookOpen size={20} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">Academic strength</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#556269]">A rigorous, inquiry-led curriculum from early years to graduation, taught in small groups with regular feedback to families.</p>
          </div>

          <div className="rounded-[18px] border border-[#e7e1d8] bg-white p-6 shadow-[0_10px_28px_rgba(17,34,32,0.04)] hover:shadow-[0_12px_32px_rgba(17,34,32,0.08)] transition-shadow duration-300 animate-fade-up-delay-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#EEF4FF] text-[#1B2A5C]">
              <Cpu size={20} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">AI & technology learning</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#556269]">Every learner builds digital fluency — coding, data literacy, robotics and responsible use of AI — from their first year onward.</p>
          </div>

          <div className="rounded-[18px] border border-[#e7e1d8] bg-white p-6 shadow-[0_10px_28px_rgba(17,34,32,0.04)] hover:shadow-[0_12px_32px_rgba(17,34,32,0.08)] transition-shadow duration-300 animate-fade-up-delay-2">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#EEF4FF] text-[#1B2A5C]">
              <HeartHandshake size={20} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">Truly free</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#556269]">No tuition. No hidden fees. Learning materials, labs and mentoring are provided so that cost is never a barrier.</p>
          </div>

          <div className="rounded-[18px] border border-[#e7e1d8] bg-white p-6 shadow-[0_10px_28px_rgba(17,34,32,0.04)] hover:shadow-[0_12px_32px_rgba(17,34,32,0.08)] transition-shadow duration-300 animate-fade-up-delay-4">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#EEF4FF] text-[#1B2A5C]">
              <Users size={20} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#1F2937]">Parent partnership</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#556269]">Open days, transparent reporting and an always-reachable pastoral team keep families close to their child's progress.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8FC] kisa-section--tight py-12 md:py-20">
        <div className="container-page">
          <div className="grid items-center gap-8 lg:gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="px-4 sm:px-0 order-2 lg:order-1 animate-fade-up-delay-2">
              <img src="/Homecomp.png" alt="Students assembling a robotics project in a technology lab" className="aspect-[5/4] w-full rounded-3xl object-cover" />
            </div>

            <div className="px-4 sm:px-0 order-1 lg:order-2 animate-fade-up-delay-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1B2A5C]">AI, taught properly</p>
              <h2 className="mt-4 sm:mt-3 text-2xl sm:text-3xl font-semibold text-[#1F2937] max-w-[36rem]">Technology fluency as a core subject — not an after-school club.</h2>
              <p className="mt-5 sm:mt-3 text-base leading-7 text-[#4D5967] max-w-[40rem]">Learners move from block coding and digital citizenship in primary years to Python, data analysis and applied machine-learning projects before graduation.</p>

              <ul className="mt-8 sm:mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Microscope className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B2A5C]" />
                  <span className="text-[#556269]">Weekly lab time in coding, robotics and data literacy</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Microscope className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B2A5C]" />
                  <span className="text-[#556269]">Ethics and responsible AI discussed in every technology unit</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Microscope className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1B2A5C]" />
                  <span className="text-[#556269]">Capstone projects solving problems in the learners' own community</span>
                </li>
              </ul>

              <Link to="/facilities" className="mt-10 sm:mt-8 inline-flex rounded-full border border-[#1F2937]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#1F2937] hover:bg-[#1F2937]/6 min-h-[44px] items-center">
                See our facilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page kisa-section--tight py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center px-4 sm:px-0 animate-fade-up-delay-1">
          <p className="kisa-eyebrow">Voices from our community</p>
          <h2 className="mt-5 sm:mt-4 text-3xl md:text-4xl font-black text-[#1F2937]">What families and learners say</h2>
        </div>

        <div className="mt-10 sm:mt-8 grid gap-6 px-4 sm:px-0 lg:grid-cols-2 items-stretch">
          {testimonials.map((item, idx) => (
            <div
              key={item.name}
              className={`rounded-[18px] border border-[#e6e3dc] bg-white p-6 shadow-[0_10px_26px_rgba(17,34,34,0.04)] hover:shadow-[0_12px_32px_rgba(17,34,34,0.08)] transition-shadow duration-300 h-full flex flex-col justify-between ${idx === 0 ? 'animate-fade-up-delay-2' : 'animate-fade-up-delay-3'}`}
            >
              <div>
                <div className="mb-4 text-lg text-[#f4b942]">★★★★★</div>
                <p className="text-base leading-7 text-[#2b3441] flex-1">“{item.quote}”</p>
              </div>
              <div className="mt-4 border-t border-[#edf0eb] pt-4">
                <p className="font-semibold text-[#1F2937]">{item.name}</p>
                <p className="text-sm text-[#5a6674]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 md:py-20">
        <div className="rounded-[36px] bg-[linear-gradient(135deg,#1B2A5C_0%,#2E4A9E_100%)] px-6 py-16 text-center text-white shadow-[0_18px_44px_rgba(27,42,92,0.18)] sm:px-10 animate-fade-up">
          <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-5xl">
            Every child deserves a school that costs nothing and expects everything.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#edf4ef]">
            Admissions are open to all families. No tuition, no hidden fees — only a commitment to learning.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/admission"
              className="inline-flex items-center justify-center rounded-full border border-[#DFB863] bg-[#DFB863] px-7 py-4 text-lg font-semibold text-[#1B2A5C] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(223,184,99,0.35)]"
            >
              Start an application
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-lg font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(255,255,255,0.15)]"
            >
              Book a campus visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}