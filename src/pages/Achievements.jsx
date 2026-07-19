import { Link } from "react-router-dom";

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

export default function Achievements() {
  return (
    <section className="bg-gradient-to-b from-[#F5F8FC] to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[4px] text-[#74BDE8] font-semibold">
          Our Achievements
        </p>

        <h1 className="text-center text-5xl font-extrabold text-[#2F3D7C] mt-3">
          Celebrating Success Stories
        </h1>

        <p className="text-center text-gray-600 mt-5 mb-14 text-lg max-w-3xl mx-auto">
          Discover how our students transform learning into real achievements,
          competitions, innovation and leadership.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">

                <h2
                  className={`font-extrabold text-[#2F3D7C] leading-tight min-h-[72px] flex items-center ${
                    item.title === "AI PRENEUR'26"
                      ? "text-[1.55rem]"
                      : "text-[1.75rem] whitespace-nowrap"
                  }`}
                >
                  {item.title}
                </h2>

                <div className="mt-6 space-y-4 text-[20px] text-[#1F2937]">

                  <p>
                    <span className="font-extrabold text-[#2F3D7C]">
                      🏆 Position:
                    </span>{" "}
                    {item.position}
                  </p>

                  <p>
                    <span className="font-bold text-[#2F3D7C]">
                      🏫 Organizer:
                    </span>{" "}
                    {item.organizer}
                  </p>

                  <p>
                    <span className="font-bold text-[#2F3D7C]">
                      📅 Date:
                    </span>{" "}
                    {item.date}
                  </p>

                  <p>
                    <span className="font-bold text-[#2F3D7C]">
                      📍 Location:
                    </span>{" "}
                    {item.location}
                  </p>

                </div>

                <Link
                  to={item.link}
                  className="mt-8 block w-full text-center bg-[#2F3D7C] text-white py-4 rounded-2xl font-semibold text-lg hover:bg-[#74BDE8] transition-all duration-300"
                >
                  See What They Achieved →
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          <Link
            to="/courses"
            className="border-2 border-[#2F3D7C] text-[#2F3D7C] px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#2F3D7C] hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            Explore Our Programs
          </Link>

          <Link
            to="/admission"
            className="bg-[#2F3D7C] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            Start Learning Today
          </Link>

        </div>

      </div>
    </section>
  );
}