import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import mainImage from "../assets/Courses/achievements/iqbal-day/iqbal main.png";
import img1 from "../assets/Courses/achievements/iqbal-day/iqbal 1.png";
import img2 from "../assets/Courses/achievements/iqbal-day/iqbal 2.png";

const sliderImages = [mainImage, img1, img2];

const students = ["Abeeha", "Daina", "Dur-e-Najaf", "M. Ali"];

export default function IqbalDetail() {
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
            key={currentImage}
            src={sliderImages[currentImage]}
            alt="Iqbal Day Competition"
            className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[540px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A5C]/90 via-[#1B2A5C]/70 to-[#1B2A5C]/30" />

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl p-6 sm:p-8 lg:p-12">
              <span className="inline-flex items-center rounded-full bg-[#DFB863] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">
                Student achievement
              </span>
              <h1 className="mt-5 text-[2.3rem] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-[3rem] md:text-[4rem]">
                Iqbal Day Competition
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-[1.05rem] font-semibold text-[#edf4ef]">
                <span>🥈 2nd Position</span>
                <span>&</span>
                <span>🥉 3rd Position</span>
              </div>

              <div className="mt-6 space-y-2 text-[0.98rem] leading-7 text-[#edf4ef] sm:text-[1.05rem]">
                <p><strong>Competition:</strong> Iqbal Day Urdu Speech Competition</p>
                <p><strong>Organizer:</strong> Qamar Bani Hashim School</p>
                <p><strong>Date:</strong> 9 November 2025</p>
                <p><strong>Location:</strong> Karachi</p>
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
              Inspiring young public speakers
            </h2>

            <div className="mt-7 space-y-6 text-[1.02rem] leading-8 text-[#4d5967]">
              <p>
                Students from AI KISA School proudly participated in the <strong>Iqbal Day Urdu Speech Competition</strong> organized by <strong>Qamar Bani Hashim School</strong> on <strong>9 November 2025</strong> in Karachi.
              </p>
              <p>
                Representing AI KISA School, our students confidently delivered inspiring Urdu speeches based on the vision and philosophy of Allama Muhammad Iqbal. Although each presentation lasted only one minute, every participant demonstrated excellent preparation and communication skills.
              </p>
              <p>
                Their confidence, stage presence, public speaking abilities and well-prepared content impressed the judges, earning <strong>2nd Position</strong> and <strong>3rd Position</strong>, along with trophies and certificates for AI KISA School.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e5e2db] bg-white p-6 shadow-[0_18px_36px_rgba(17,34,32,0.04)] sm:p-8">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#1B2A5C]">
              Achievement highlights
            </p>
            <div className="mt-6 space-y-4 text-[1rem] leading-7 text-[#4d5967]">
              <div className="flex gap-3"><span>🥈</span><span>2nd Position</span></div>
              <div className="flex gap-3"><span>🥉</span><span>3rd Position</span></div>
              <div className="flex gap-3"><span>🏆</span><span>Trophy Awarded</span></div>
              <div className="flex gap-3"><span>📜</span><span>Certificates Received</span></div>
              <div className="flex gap-3"><span>🏫</span><span>Organized by Qamar Bani Hashim School</span></div>
              <div className="flex gap-3"><span>📅</span><span>9 November 2025</span></div>
              <div className="flex gap-3"><span>📍</span><span>Karachi, Pakistan</span></div>
              <div className="flex gap-3"><span>🎤</span><span>Iqbal Day Urdu Speech Competition</span></div>
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

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {students.map((student) => (
            <div
              key={student}
              className="rounded-[26px] border border-[#e5e2db] bg-white p-5 text-center shadow-[0_14px_26px_rgba(17,34,32,0.04)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4FF] text-3xl">
                🎤
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
            What students achieved
          </p>
          <h2 className="mt-4 text-[2.1rem] font-black leading-[1.08] tracking-[-0.05em] text-[#1F2937] sm:text-[2.8rem]">
            Skills that led to victory
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-[1.02rem] leading-8 text-[#4d5967]">
            During the Iqbal Day Urdu Speech Competition, our students showcased exceptional confidence, public speaking skills and well-prepared content, helping AI KISA School secure 2nd and 3rd positions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-[#e5e2db] bg-white p-7 shadow-[0_18px_36px_rgba(17,34,32,0.04)]">
            <div className="text-5xl">🎙️</div>
            <h3 className="mt-5 text-[1.7rem] font-bold leading-tight tracking-[-0.04em] text-[#1B2A5C]">
              Public Speaking
            </h3>
            <p className="mt-4 text-[1rem] leading-7 text-[#4d5967]">
              Clear pronunciation, confident delivery and effective communication helped our students impress the judges.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5e2db] bg-white p-7 shadow-[0_18px_36px_rgba(17,34,32,0.04)]">
            <div className="text-5xl">💡</div>
            <h3 className="mt-5 text-[1.7rem] font-bold leading-tight tracking-[-0.04em] text-[#1B2A5C]">
              Confidence &amp; Stage Presence
            </h3>
            <p className="mt-4 text-[1rem] leading-7 text-[#4d5967]">
              Excellent confidence and strong stage presence enabled students to perform calmly and effectively in front of the audience.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e5e2db] bg-white p-7 shadow-[0_18px_36px_rgba(17,34,32,0.04)]">
            <div className="text-5xl">📝</div>
            <h3 className="mt-5 text-[1.7rem] font-bold leading-tight tracking-[-0.04em] text-[#1B2A5C]">
              Speech Preparation
            </h3>
            <p className="mt-4 text-[1rem] leading-7 text-[#4d5967]">
              Well-structured Urdu speeches, thoughtful content and consistent practice played a key role in achieving success.
            </p>
          </div>
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