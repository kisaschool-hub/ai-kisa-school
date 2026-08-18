import SEO from "../components/SEO";

const galleryItems = [
  { title: "Gallery", icon: "📸" },
  { title: "Sports", icon: "🏅" },
  { title: "Events", icon: "🎉" },
  { title: "Workshops", icon: "🛠️" },
  { title: "Competitions", icon: "🏆" },
  { title: "Class Activities", icon: "✏️" },
  { title: "Celebrations", icon: "🎊" },
];

export default function CampusLife() {
  return (
    <>
      <SEO
        title="Campus Life | AI KISA School Karachi"
        description="Discover campus life at AI KISA School through student activities, workshops, competitions, projects, events and school experiences."
        url="https://www.aikisaschool.com/campus-life"
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <section className="bg-[linear-gradient(135deg,#1B2A5C_0%,#2E4A9E_32%,#2E4A9E_100%)] py-20 text-white">
          <div className="container-page text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#f4d687]">
              Campus Life
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.07em] md:text-6xl">A vibrant school experience</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#edf4ef]">
              A school culture where students learn, collaborate, celebrate, and grow with confidence.
            </p>
          </div>
        </section>

        <section className="container-page py-16">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-[#e6e3dc] bg-white p-8 text-center shadow-[0_10px_30px_rgba(17,34,32,0.04)] transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5 text-5xl">{item.icon}</div>
                <h2 className="text-2xl font-bold text-[#1B2A5C]">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
