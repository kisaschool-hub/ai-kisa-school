import SEO from "../components/SEO";

const impactStats = [
  { value: "500+", label: "Students" },
  { value: "100%", label: "Free Education" },
  { value: "20+", label: "Community Projects" },
  { value: "50+", label: "AI Workshops" },
];

const values = [
  "Free Education",
  "Technology Access",
  "Community Development",
  "Student Opportunities",
  "AI & Digital Learning",
];

export default function Impact() {
  return (
    <>
      <SEO
        title="Our Impact | AI KISA School"
        description="Learn about the community impact of AI KISA School through free education, technology access, student opportunities, and digital learning."
        url="https://aikisaschool.com/impact"
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <section className="bg-[linear-gradient(135deg,#1B2A5C_0%,#2E4A9E_32%,#2E4A9E_100%)] py-20 text-white">
          <div className="container-page text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#f4d687]">
              Our Impact
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.07em] md:text-6xl">Building a stronger future together</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#edf4ef]">
              AI KISA School helps learners access meaningful opportunity, build confidence and develop the skills they need for tomorrow.
            </p>
          </div>
        </section>

        <section className="container-page py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-[#e6e3dc] bg-white p-8 text-center shadow-[0_10px_30px_rgba(17,34,32,0.04)]">
                <div className="text-4xl md:text-5xl font-black text-[#1B2A5C]">{stat.value}</div>
                <p className="mt-3 font-semibold text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#1B2A5C] p-8 md:p-12 shadow-[0_16px_40px_rgba(27,42,92,0.18)]">
            <h2 className="text-3xl md:text-4xl font-bold text-white">A school making meaningful change</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[#e9f4ef] md:text-lg">
              AI KISA School is focused on helping students access learning, grow their confidence, and prepare for opportunities in a technology-driven world. Through free education, digital access, and community learning, we continue to strengthen the future of our learners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((value) => (
                <span key={value} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
