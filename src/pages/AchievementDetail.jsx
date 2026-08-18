import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import mainImage from "../assets/Courses/achievements/main.png";
import img1 from "../assets/Courses/achievements/1.png";
import img2 from "../assets/Courses/achievements/2.png";
import img3 from "../assets/Courses/achievements/3.png";
import img4 from "../assets/Courses/achievements/4.png";
import competitionVideo from "../assets/Courses/achievements/aipreneur.mp4";

const sliderImages = [mainImage, img1, img2, img3, img4];

const teamMembers = ["Daina", "Shahmeer", "M. Ali", "Abeeha", "Wajahat", "Alishba"];

export default function AchievementDetail() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#F5F8FC] text-[#1F2937]">
      <section className="section-shell pt-8 pb-10 md:pt-10">
        <Link
          to="/achievements"
          className="inline-flex items-center gap-2 rounded-full border border-[#d9d3ca] bg-white px-4 py-2 text-[0.8rem] font-semibold text-[#1B2A5C] shadow-[0_10px_22px_rgba(17,34,32,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          ← Back to achievements
        </Link>
      </section>

      <section className="section-shell pb-8">
        <div className="relative overflow-hidden rounded-[32px] border border-[#d7d1c8] bg-[#1B2A5C] shadow-[0_20px_42px_rgba(17,34,32,0.14)]">
          <img
            src={sliderImages[currentImage]}
            alt="AI PRENEUR'26"
            className="h-[260px] w-full object-cover sm:h-[360px] md:h-[440px] lg:h-[540px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A5C]/90 via-[#1B2A5C]/70 to-[#1B2A5C]/30" />

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl p-6 sm:p-8 lg:p-12">
              <span className="inline-flex items-center rounded-full bg-[#DFB863] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">
                Student achievement
              </span>
              <h1 className="mt-5 text-[2rem] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-[3rem] md:text-[4rem]">
                AI PRENEUR'26
              </h1>
              <p className="mt-4 text-[1rem] font-semibold text-[#edf4ef] sm:text-[1.35rem]">
                🥇 1st Position
              </p>

              <div className="mt-6 space-y-2 text-[0.92rem] leading-7 text-[#edf4ef] sm:text-[1.05rem]">
                <p><strong>Organized By:</strong> Fatimiyah College</p>
                <p><strong>Date:</strong> 29 January 2026</p>
                <p><strong>Location:</strong> Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[30px] border border-[#e5e2db] bg-white p-6 shadow-[0_18px_36px_rgba(17,34,32,0.04)] sm:p-8 lg:p-10">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#1B2A5C]">
              About competition
            </p>
            <h2 className="mt-4 text-[2.1rem] font-black leading-[1.08] tracking-[-0.05em] text-[#1F2937] sm:text-[2.6rem]">
              Celebrating innovation & excellence
            </h2>

            <div className="mt-7 space-y-6 text-[1.02rem] leading-8 text-[#4d5967]">
              <p>
                Students from AI KISA School proudly represented their institution at AI PRENEUR'26, a city-wide innovation competition organized by Fatimiyah College.
              </p>
              <p>
                Representing AI KISA School, our students introduced an AI-powered School Management SaaS Platform designed to make educational institutions smarter, faster and more efficient.
              </p>
              <p>
                Their confidence, teamwork, communication skills and presentation impressed the judges, earning 1st Position together with a cash prize of PKR 100,000.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e5e2db] bg-white p-6 shadow-[0_18px_36px_rgba(17,34,32,0.04)] sm:p-8">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#1B2A5C]">
              Achievement highlights
            </p>
            <div className="mt-6 space-y-4 text-[1rem] leading-7 text-[#4d5967]">
              <div className="flex gap-3"><span>🥇</span><span>1st Position</span></div>
              <div className="flex gap-3"><span>🏆</span><span>Winner of AI PRENEUR'26</span></div>
              <div className="flex gap-3"><span>💰</span><span>Cash Prize: PKR 100,000</span></div>
              <div className="flex gap-3"><span>🏫</span><span>Organized by Fatimiyah College</span></div>
              <div className="flex gap-3"><span>📅</span><span>29 January 2026</span></div>
              <div className="flex gap-3"><span>📍</span><span>Karachi, Pakistan</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-6 sm:py-8">
        <div className="text-center">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#1B2A5C]">
            Student team
          </p>
          <h2 className="mt-4 text-[2.1rem] font-black leading-[1.08] tracking-[-0.05em] text-[#1F2937] sm:text-[2.8rem]">
            Meet our winning team
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {teamMembers.map((student) => (
            <div
              key={student}
              className="rounded-[26px] border border-[#e5e2db] bg-white p-5 text-center shadow-[0_14px_26px_rgba(17,34,32,0.04)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4FF] text-3xl">
                🎓
              </div>
              <h3 className="mt-4 text-[1.1rem] font-bold text-[#1B2A5C]">
                {student}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="text-center">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#1B2A5C]">
            What students built
          </p>
          <h2 className="mt-4 text-[2.1rem] font-black leading-[1.08] tracking-[-0.05em] text-[#1F2937] sm:text-[2.8rem]">
            AI solutions developed by our students
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-[1.02rem] leading-8 text-[#4d5967]">
            During AI PRENEUR'26, our students developed a complete AI-powered School Management SaaS Platform with multiple smart modules.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-[#e5e2db] bg-white p-7 shadow-[0_18px_36px_rgba(17,34,32,0.04)]">
            <div className="text-5xl">📋</div>
            <h3 className="mt-5 text-[1.7rem] font-bold leading-tight tracking-[-0.04em] text-[#1B2A5C]">
              Smart Attendance Management
            </h3>
            <p className="mt-4 text-[1rem] leading-7 text-[#4d5967]">
              Automated attendance with digital records and real-time reporting.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5e2db] bg-white p-7 shadow-[0_18px_36px_rgba(17,34,32,0.04)]">
            <div className="text-5xl">📝</div>
            <h3 className="mt-5 text-[1.7rem] font-bold leading-tight tracking-[-0.04em] text-[#1B2A5C]">
              AI Paper Management
            </h3>
            <p className="mt-4 text-[1rem] leading-7 text-[#4d5967]">
              Secure examination paper creation, storage and management.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5e2db] bg-white p-7 shadow-[0_18px_36px_rgba(17,34,32,0.04)]">
            <div className="text-5xl">🏫</div>
            <h3 className="mt-5 text-[1.7rem] font-bold leading-tight tracking-[-0.04em] text-[#1B2A5C]">
              School Management SaaS
            </h3>
            <p className="mt-4 text-[1rem] leading-7 text-[#4d5967]">
              Cloud platform integrating students, teachers, attendance, exams and administration.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-6 sm:py-10">
        <div className="text-center">
          <h2 className="text-[2.1rem] font-black leading-[1.08] tracking-[-0.05em] text-[#1F2937] sm:text-[2.8rem]">
            Competition highlights
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-[30px] border border-[#d7d1c8] bg-black shadow-[0_24px_52px_rgba(17,34,32,0.15)]">
          <video
            className="h-auto max-h-[700px] w-full bg-black object-contain"
            controls
            preload="metadata"
            controlsList="nodownload"
          >
            <source src={competitionVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="section-shell pb-20 pt-12">
        <div className="flex justify-center">
          <Link
            to="/admission"
            className="inline-flex items-center justify-center rounded-full bg-[#1B2A5C] px-8 py-3.5 text-[0.98rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Apply now
          </Link>
        </div>
      </section>
    </main>
  );
}