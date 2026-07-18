import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/Courses/achievements/main.png";
import img1 from "../assets/Courses/achievements/1.png";
import img2 from "../assets/Courses/achievements/2.png";
import img3 from "../assets/Courses/achievements/3.png";
import img4 from "../assets/Courses/achievements/4.png";
import competitionVideo from "../assets/Courses/achievements/aipreneur.mp4";
const sliderImages = [
  mainImage,
  img1,
  img2,
  img3,
  img4,
];

export default function AchievementDetail() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5F8FC] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

          <img
            src={sliderImages[currentImage]}
            alt="AI PRENEUR'26"
            className="w-full h-[650px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2F3D7C]/90 via-[#2F3D7C]/60 to-black/40"></div>

          <div className="absolute inset-0 flex items-end">
          <div className="p-10 md:p-14 text-white max-w-3xl">

  <span className="inline-block bg-[#74BDE8] text-[#2F3D7C] px-5 py-2 rounded-full font-bold mb-5">
    🏆 Student Achievement
  </span>

  <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
    AI PRENEUR'26
  </h1>

  <p className="text-2xl font-semibold mt-5">
    🥇 1st Position
  </p>

  <div className="mt-8 space-y-2 text-lg">

    <p>
      <strong>Organized By:</strong> Fatimiyah College
    </p>

    <p>
      <strong>Date:</strong> 29 January 2026
    </p>

    <p>
      <strong>Location:</strong> Karachi, Pakistan
    </p>

  </div>

</div>
            </div>
          </div>

        </div>

        {/* About */}

        <div className="mt-20 bg-white rounded-3xl shadow-xl p-10">

  <p className="uppercase tracking-[4px] text-[#74BDE8] font-semibold">
    About Competition
  </p>

  <h2 className="text-4xl font-bold text-[#2F3D7C] mt-3">
    Celebrating Innovation & Excellence
  </h2>

  <div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2937]">

    <p>
      Students from AI KISA School proudly represented their institution
      at AI PRENEUR'26, a city-wide innovation competition organized by
      Fatimiyah College.
    </p>

    <p>
      Representing AI KISA School, our students introduced an
      AI-powered School Management SaaS Platform designed to make
      educational institutions smarter, faster and more efficient.
    </p>

    <p>
      Their confidence, teamwork, communication skills and presentation
      impressed the judges, earning 1st Position together with a cash
      prize of PKR 100,000.
    </p>

  </div>

</div>
{/* Winning Team */}
      {/* Winning Team */}

      <div className="mt-20">

        <p className="text-center uppercase tracking-[4px] text-[#74BDE8] font-semibold">
          Student Team
        </p>

        <h2 className="text-center text-4xl font-bold text-[#2F3D7C] mt-3">
          Meet Our Winning Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

          {[
            "Daina",
            "Shahmeer",
            "M. Ali",
            "Abeeha",
            "Wajahat",
            "Alishba",
          ].map((student) => (
            <div
              key={student}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#74BDE8]/20 mx-auto flex items-center justify-center text-3xl">
                🎓
              </div>

              <h3 className="mt-4 font-bold text-[#2F3D7C]">
                {student}
              </h3>
            </div>
          ))}

        </div>

      </div>

      {/* AI Solutions */}

      <div className="mt-24">

        <p className="uppercase tracking-[4px] text-[#74BDE8] font-semibold text-center">
          What Students Built
        </p>

        <h2 className="text-center text-4xl font-bold text-[#2F3D7C] mt-3">
          AI Solutions Developed by Our Students
        </h2>

        <p className="text-center text-[#1F2937] max-w-4xl mx-auto mt-5">
          During AI PRENEUR'26, our students developed a complete AI-powered
          School Management SaaS Platform with multiple smart modules.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-5xl">📋</div>
            <h3 className="text-2xl font-bold text-[#2F3D7C] mt-5">
              Smart Attendance Management
            </h3>
            <p className="mt-4 text-[#1F2937]">
              Automated attendance with digital records and real-time reporting.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-5xl">📝</div>
            <h3 className="text-2xl font-bold text-[#2F3D7C] mt-5">
              AI Paper Management
            </h3>
            <p className="mt-4 text-[#1F2937]">
              Secure examination paper creation, storage and management.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-5xl">🏫</div>
            <h3 className="text-2xl font-bold text-[#2F3D7C] mt-5">
              School Management SaaS
            </h3>
            <p className="mt-4 text-[#1F2937]">
              Cloud platform integrating students, teachers, attendance,
              exams and administration.
            </p>
          </div>

        </div>

      </div>

      {/* Achievement Highlights */}

      <div className="mt-24 bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-[#2F3D7C]">
          Achievement Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div>🥇 1st Position</div>
          <div>🏆 Winner of AI PRENEUR'26</div>
          <div>💰 Cash Prize: PKR 100,000</div>
          <div>🏫 Organized by Fatimiyah College</div>
          <div>📅 29 January 2026</div>
          <div>📍 Karachi, Pakistan</div>

        </div>

      </div>

      {/* Competition Highlights */}

      <div className="mt-24">

        <h2 className="text-center text-4xl font-bold text-[#2F3D7C]">
          Competition Highlights
        </h2>

       <div className="mt-10 overflow-hidden rounded-3xl shadow-2xl bg-black">

  <video
    className="w-full h-auto max-h-[700px] object-contain bg-black"
    controls
    preload="metadata"
    controlsList="nodownload"
  >
    <source src={competitionVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

</div>

      </div>

      {/* Apply Button */}

      <div className="mt-20 flex justify-center">

        <Link
  to="/admission"
  className="bg-[#74BDE8] hover:bg-[#2F3D7C] text-white px-10 py-4 rounded-2xl font-bold text-lg duration-300 inline-block"
>
  Apply Now
</Link>

           </div>

    </section>
  );
}