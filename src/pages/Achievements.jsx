import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import PageHero, { SectionHeading } from "../components/PageHero";
import preneur from "../assets/Courses/achievements/main.png";
import iqbal from "../assets/Courses/achievements/iqbal-day/iqbal main.png";

const achievements = [
  {
    title: "AI PRENEUR'26",
    image: preneur,
    position: "🥇 1st Position",
    organizer: "Fatimiyah College",
    date: "29 January 2026",
    location: "Karachi",
    link: "/achievement-detail",
  },
  {
    title: "Iqbal Day Competition",
    image: iqbal,
    position: "2nd & 3rd Position",
    organizer: "Qamar Bani Hashim School",
    date: "9 November 2025",
    location: "Karachi",
    link: "/iqbal-detail",
  },
];

const milestones = [
  {
    label: "Awarded",
    value: "1st Position",
    detail: "AI PRENEUR'26 • Fatimiyah College",
  },
  {
    label: "Recognition",
    value: "2nd & 3rd Position",
    detail: "Iqbal Day Urdu Speech Competition • Karachi",
  },
  {
    label: "Prize",
    value: "PKR 100,000",
    detail: "Cash prize won by the AI PRENEUR'26 team",
  },
  {
    label: "Celebration",
    value: "Trophies & Certificates",
    detail: "Recognised for confidence, communication and achievement",
  },
];

export default function Achievements() {
  return (
    <>
      <SEO
        title="Student Achievements | AI KISA School Karachi"
        description="Discover AI KISA School student achievements, projects, competitions, awards, events and community initiatives."
        url="https://www.aikisaschool.com/achievements"
      />
      <main className="bg-[#F5F8FC] text-[#1F2937]">
      <PageHero
        eyebrow="Achievements"
        title="Results that prove free education can be excellent education."
        description="Our learners compete, publish and graduate alongside the strongest schools in the region."
        backgroundImage="/Achievementhero.webp"
        mobileBackgroundImage="/Achievementheromobile.webp"
      />

      <section className="-mt-3 pb-8 pt-10">
        <div className="container-page rounded-[24px] bg-[#F5F8FC] px-1">
          <SectionHeading
            eyebrow="Milestones"
            title="Moments of progress, confidence and excellence"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="h-full rounded-[18px] border border-[#e7e1d8] bg-white p-5 shadow-[0_12px_28px_rgba(17,34,32,0.04)] md:p-6"
              >
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">
                  {item.label}
                </p>
                <h3 className="mt-4 text-[1.65rem] font-black leading-[1.08] tracking-[-0.05em] text-[#1B2A5C] md:text-[1.9rem]">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4d5967]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 pt-6">
        <div className="container-page">
          <div className="mb-6">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">
              Recent recognition
            </p>
            <h2 className="mt-4 text-2xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937]">
              What our learners are achieving
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[18px] border border-[#e5e2db] bg-white shadow-[0_12px_28px_rgba(17,34,32,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="overflow-hidden bg-[#EEF4FF]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[260px]"
                  />
                </div>

                <div className="flex h-full flex-col p-4 sm:p-5">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#1B2A5C]">
                    Achievement
                  </p>

                  <h3 className="mt-3 text-lg font-bold leading-tight tracking-[-0.03em] text-[#1B2A5C]">
                    {item.title}
                  </h3>

                  <dl className="mt-4 space-y-2 text-sm leading-6 text-[#4d5967]">
                    <div className="flex gap-2">
                      <dt className="font-bold text-[#1B2A5C]">🏆 Position:</dt>
                      <dd>{item.position}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-bold text-[#1B2A5C]">🏫 Organizer:</dt>
                      <dd>{item.organizer}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-bold text-[#1B2A5C]">📅 Date:</dt>
                      <dd>{item.date}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-bold text-[#1B2A5C]">📍 Location:</dt>
                      <dd>{item.location}</dd>
                    </div>
                  </dl>

                  <Link
                    to={item.link}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1B2A5C] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1B2A5C]"
                  >
                    See what they achieved →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/academics"
              className="inline-flex items-center justify-center rounded-full border border-[#1B2A5C] bg-transparent px-5 py-2 text-sm font-semibold text-[#1B2A5C] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore our programs
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center rounded-full bg-[#1B2A5C] px-5 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start learning today
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}