import { Link } from "react-router-dom";

const learningAreas = [
  { title: "AI Education", description: "AI concepts, digital thinking, and creativity for real world learning." },
  { title: "Coding", description: "Logical thinking and practical coding experiences for growing students." },
  { title: "Robotics", description: "Hands on STEM exploration through building and experimentation." },
  { title: "Creative Skills", description: "Design, storytelling, digital media, and presentation confidence." },
  { title: "Entrepreneurship", description: "Ideas, leadership, planning, and future career readiness." },
  { title: "Digital Literacy", description: "Technology fluency, safe online habits, and digital confidence." },
];

export default function Programs() {
  return (
    <section className="py-12 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[#2E4A9E] font-semibold uppercase tracking-[0.25em] text-sm">
          Our Learning Areas
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-[#1B2A5C] mt-3">
          Future ready skills for every learner
        </h2>
        <p className="text-center text-gray-600 mt-5 mb-10 text-base max-w-3xl mx-auto">
          Students grow through a balanced school curriculum that combines academic strength, digital confidence, creativity, and character.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => (
            <Link
              key={area.title}
              to="/academics"
              className="group block rounded-[18px] border border-slate-200 bg-white p-6 shadow hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-[#EAF5FF] text-[#1B2A5C] font-bold flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[#DFB863] font-semibold text-sm">Explore</span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1B2A5C]">{area.title}</h3>
              <p className="mt-4 text-gray-600 leading-7">{area.description}</p>

              <div className="mt-6 text-[#1B2A5C] font-semibold inline-flex items-center gap-2">
                Learn more <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}