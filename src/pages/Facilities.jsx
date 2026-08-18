import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { IMG } from "../lib/site";

const facilities = [
  {
    title: "Computer & AI lab",
    image: IMG.computerLab,
    body: "Networked workstations for coding, data work and supervised model-building sessions.",
  },
  {
    title: "Robotics workshop",
    image: IMG.robotics,
    body: "Build space with microcontrollers, sensors and prototyping tools for team projects.",
  },
  {
    title: "Library & study hall",
    image: IMG.library,
    body: "Quiet reading and research space, open before and after the timetabled day.",
  },
];

const highlights = [
  { title: "Safe & supervised", description: "Trained staff supervise all labs and workshops during use." },
  { title: "Free access", description: "Equipment, materials and lab time are included for every learner." },
  { title: "Open after hours", description: "Study hall and lab sessions run beyond the timetabled day." },
];

export default function Facilities() {
  return (
    <>
      <SEO
        title="Facilities | AI KISA School"
        description="Explore the learning environment at AI KISA School, including AI computer labs, robotics workshops, library spaces and sports grounds."
        url="https://aikisaschool.com/facilities"
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <PageHero
          eyebrow="Facilities"
          title="Spaces designed for hands-on, ambitious learning."
          description="Laboratories, workshops and study spaces are open to every learner at no cost, including equipment and materials."
          backgroundImage="/Facilities.webp"
          mobileBackgroundImage="/Facilitiesmobile.webp"
        />

        <section className="container-page py-20">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">Campus</p>
            <h2 className="mt-3 text-3xl font-black leading-[1.08] tracking-[-0.04em] text-[#1F2937] md:text-4xl">
              Where the learning happens
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4d5967]">
              Photography is representative; official campus images will replace these once available.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <article key={facility.title} className="surface-card overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1B2A5C]">{facility.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4d5967]">{facility.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F5F8FC] py-16">
          <div className="container-page grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <h3 className="text-base font-semibold text-[#1B2A5C]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4d5967]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-page mt-24 mb-20">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#1B2A5C_0%,#2E4A9E_100%)] px-6 py-16 text-center text-white shadow-[0_18px_44px_rgba(27,42,92,0.18)] sm:px-10">
            <h2 className="text-[2.3rem] font-black leading-[1.06] tracking-[-0.06em] text-white md:text-[3rem]">
              Every child deserves a school that costs nothing and expects everything.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[1.08rem] leading-8 text-[#edf4ef]">
              Admissions are open to all families. No tuition, no hidden fees — only a commitment to learning.
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
