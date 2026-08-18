import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

const programmeContent = {
  primary: {
    title: "Foundations, curiosity and confidence",
    items: [
      "Students are introduced to friendly AI tools such as Canva, ChatGPT and Gemini alongside core literacy and numeracy blocks",
      "Daily lessons focus on curiosity, hands on play and growing digital literacy",
      "Short project afternoons where children create simple digital stories and classroom builds",
    ],
  },
  middle: {
    title: "From exploration to practical skills",
    items: [
      "Students move into text based coding and start using tools like Claude for guided projects",
      "Classes introduce structured computing, simple data handling and collaborative builds",
      "Assessments focus on learning progress and clear next steps shared with families",
    ],
  },
  senior: {
    title: "Applied skills, creativity and opportunity",
    items: [
      "Senior learners focus on digital marketing, data analytics and practical project portfolios",
      "Capstone projects emphasise real world problem solving and ethical technology use",
      "Ongoing communication and content creation skills prepare students for further study or work",
    ],
  },
};

const tabImages = {
  primary: "/AcademicsPrimary.webp",
  middle: "/AcademicsMiddle.webp",
  senior: "/AcademicsSenior.webp",
};

const subjects = [
  {
    title: "Mathematics",
    description: "Problem solving foundations with weekly applied challenges, reasoning practice and targeted small group support.",
  },
  {
    title: "Sciences",
    description: "Practical science lessons with hands on experiments that build observation, measurement and reporting skills.",
  },
  {
    title: "English & Communication",
    description: "Reading, writing and oracy taught through storytelling, presentations and regular opportunities to publish work.",
  },
  {
    title: "Computing & AI",
    description: "From block coding to Python, students learn to use tools and build small models, with an emphasis on practical, ethical use of AI.",
  },
  {
    title: "Arts & wellbeing",
    description: "Music, visual arts, drama and structured physical education that support creativity, emotional growth and wellbeing.",
  },
  {
    title: "Entrepreneurship",
    description: "Practical enterprise skills, simple project budgeting and ventures focused on the community to grow initiative and problem solving.",
  },
];

export default function Academics() {
  const [activeTab, setActiveTab] = useState("primary");
  const currentProgramme = programmeContent[activeTab];

  return (
    <>
      <SEO
        title="Academics | AI & Future-Ready Education | AI KISA School"
        description="Explore the AI KISA School curriculum combining foundational education with AI, coding, robotics, digital literacy, creativity and life skills."
        url="https://www.aikisaschool.com/academics"
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <PageHero
          eyebrow="Academics"
          title="A rigorous curriculum where technology deepens learning."
          description="From primary foundations to senior examinations, learners follow an inquiry based programme with AI and computing woven into every stage."
          backgroundImage="/Academics.webp"
          mobileBackgroundImage="/Academicsmobile.webp"
        />

        <section className="container-page kisa-section--tight">
          <div className="mb-8 max-w-[760px]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">Programmes</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937]">
              Three stages, one continuous journey
            </h2>
          </div>

          <div className="mb-6 flex gap-2 rounded-full border border-[#dfe6e0] bg-white p-1 shadow-[0_8px_18px_rgba(17,34,32,0.03)] md:w-max">
            {[
              { key: "primary", label: "Primary" },
              { key: "middle", label: "Middle years" },
              { key: "senior", label: "Senior years" },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                aria-selected={activeTab === tab.key}
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-[0.9rem] font-semibold transition-colors ${
                  activeTab === tab.key
                    ? "bg-[#1B2A5C] text-white shadow-sm"
                    : "bg-transparent text-[#1B2A5C] hover:bg-[#edf3ef]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid items-center gap-8 rounded-[18px] border border-[#e7e1d8] bg-white p-4 shadow-[0_12px_28px_rgba(17,34,32,0.04)] md:grid-cols-[1.12fr_0.88fr] md:p-8 lg:p-10">
            <div className="min-w-0">
              <h3 className="text-xl md:text-2xl font-black leading-[1.08] tracking-[-0.04em] text-[#1B2A5C]">
                {currentProgramme.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {currentProgramme.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#4D5967]">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#1B2A5C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full overflow-hidden rounded-[18px] border border-[#e7e1d8] bg-[#f3efe8] shadow-[0_12px_28px_rgba(17,34,32,0.04)]">
              <img
                src={tabImages[activeTab]}
                alt={`${activeTab} stage of the AI KISA School curriculum`}
                loading="lazy"
                decoding="async"
                className="block h-[300px] w-full bg-[#f3efe8] object-contain p-2 md:h-[360px]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FC] py-20 md:py-24">
          <div className="container-page">
            <div className="mb-10 max-w-[760px]">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">Subjects</p>
              <h2 className="mt-4 text-[2.3rem] font-black leading-[1.08] tracking-[-0.06em] text-[#1F2937] md:text-[3rem]">
                What learners study
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {subjects.map((subject) => (
                <article key={subject.title} className="rounded-[28px] border border-[#e5e1d8] bg-white p-5 shadow-[0_14px_30px_rgba(17,34,32,0.04)]">
                  <h3 className="text-[1.8rem] font-bold leading-[1.15] tracking-[-0.04em] text-[#1B2A5C]">
                    {subject.title}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-7 text-[#4d5967]">{subject.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page py-20 md:py-24">
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="h-[280px] overflow-hidden rounded-[24px] border border-dashed border-[#cfc5ba] bg-[#f3efe8]">
              <img
                src="/aboutacad.webp"
                alt="AI KISA School teaching approach and classroom learning illustration"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">Teaching approach</p>
              <h2 className="mt-4 text-[2.4rem] font-black leading-[1.08] tracking-[-0.06em] text-[#1F2937] md:text-[3rem]">
                From classroom learning to real world creation
              </h2>
              <p className="mt-5 max-w-[620px] text-[1.04rem] leading-8 text-[#4d5967]">
                We believe students learn best when they can explore, experiment and build. Through project based learning, technology and creative problem solving, students develop strong academic foundations alongside practical skills in AI, robotics, digital marketing, content creation, analytics, communication and entrepreneurship, preparing them to turn ideas into meaningful projects and real world opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell pb-20 pt-4 md:pb-24">
          <div className="rounded-[36px] bg-[linear-gradient(135deg,#1B2A5C_0%,#2E4A9E_100%)] px-6 py-16 text-center text-white shadow-[0_18px_44px_rgba(27,42,92,0.18)] sm:px-10">
            <h2 className="text-[2.3rem] font-black leading-[1.06] tracking-[-0.06em] text-white md:text-[3rem]">
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
}
