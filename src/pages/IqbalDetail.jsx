import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import mainImage from "../assets/Courses/achievements/iqbal-day/iqbal main.png";
import img1 from "../assets/Courses/achievements/iqbal-day/iqbal 1.png";
import img2 from "../assets/Courses/achievements/iqbal-day/iqbal 2.png";

const sliderImages = [mainImage, img1, img2];

const students = [
  "Abeeha",
  "Daina",
  "Dur-e-Najaf",
  "M. Ali",
];

export default function IqbalDetail() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F7FAFF]">

      {/* Hero */}
      <section className="relative h-[650px] overflow-hidden">

        <img
          key={currentImage}
          src={sliderImages[currentImage]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2F73]/90 via-[#1E2F73]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">

          <div className="max-w-2xl text-white">

            <span className="bg-[#74BDE8] text-[#1E2F73] px-6 py-3 rounded-full font-bold text-lg">
              🏆 Student Achievement
            </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
  Iqbal Day Competition
</h1>
      <div className="flex items-center gap-3 mt-7 text-2xl font-bold text-white">
  <span>🥈</span>
  <span className="text-white">2nd Position</span>

  <span>&</span>

  <span>🥉</span>
  <span className="text-white">3rd Position</span>
</div>
            <div className="mt-10 space-y-5 text-2xl">

              <p>
                <strong>Competition:</strong> Iqbal Day Urdu Speech Competition
              </p>

              <p>
                <strong>Organizer:</strong> Qamar Bani Hashim School
              </p>

              <p>
                <strong>Date:</strong> 9 November 2025
              </p>

              <p>
                <strong>Location:</strong> Karachi
              </p>

            </div>

          </div>

        </div>

      </section>

  {/* About */}

<div className="mt-20 bg-white rounded-3xl shadow-xl p-10">

  <p className="uppercase tracking-[4px] text-[#74BDE8] font-semibold">
    About Competition
  </p>

  <h2 className="text-4xl font-bold text-[#2F3D7C] mt-3">
    Inspiring Young Public Speakers
  </h2>

  <div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2937]">

    <p>
      Students from AI KISA School proudly participated in the
      <strong> Iqbal Day Urdu Speech Competition</strong> organized by
      <strong> Qamar Bani Hashim School</strong> on
      <strong> 9 November 2025</strong> in Karachi.
    </p>

    <p>
      Representing AI KISA School, our students confidently delivered
      inspiring Urdu speeches based on the vision and philosophy of
      Allama Muhammad Iqbal. Although each presentation lasted only one
      minute, every participant demonstrated excellent preparation and
      communication skills.
    </p>

    <p>
      Their confidence, stage presence, public speaking abilities and
      well-prepared content impressed the judges, earning
      <strong> 2nd Position</strong> and
      <strong> 3rd Position</strong>, along with trophies and
      certificates for AI KISA School.
    </p>

  </div>

</div>

      {/* Student Team */}

<div className="mt-20">

  <p className="text-center uppercase tracking-[4px] text-[#74BDE8] font-semibold">
    Student Team
  </p>

  <h2 className="text-center text-4xl font-bold text-[#2F3D7C] mt-3">
    Meet Our Winning Team
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

    {students.map((student) => (

      <div
        key={student}
        className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 text-center"
      >

        <div className="w-16 h-16 rounded-full bg-[#74BDE8]/20 mx-auto flex items-center justify-center text-3xl">
          🎤
        </div>

        <h3 className="mt-4 font-bold text-[#2F3D7C]">
          {student}
        </h3>

      </div>

    ))}

  </div>

</div>

     {/* Skills */}

<div className="mt-24">

  <p className="uppercase tracking-[4px] text-[#74BDE8] font-semibold text-center">
    What Students Achieved
  </p>

  <h2 className="text-center text-4xl font-bold text-[#2F3D7C] mt-3">
    Skills That Led To Victory
  </h2>

  <p className="text-center text-[#1F2937] max-w-4xl mx-auto mt-5">
    During the Iqbal Day Urdu Speech Competition, our students showcased
    exceptional confidence, public speaking skills and well-prepared content,
    helping AI KISA School secure 2nd and 3rd positions.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-14">

    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="text-5xl">🎙️</div>

      <h3 className="text-2xl font-bold text-[#2F3D7C] mt-5">
        Public Speaking
      </h3>

      <p className="mt-4 text-[#1F2937]">
        Clear pronunciation, confident delivery and effective communication
        helped our students impress the judges.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="text-5xl">💡</div>

      <h3 className="text-2xl font-bold text-[#2F3D7C] mt-5">
        Confidence & Stage Presence
      </h3>

      <p className="mt-4 text-[#1F2937]">
        Excellent confidence and strong stage presence enabled students to
        perform calmly and effectively in front of the audience.
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <div className="text-5xl">📝</div>

      <h3 className="text-2xl font-bold text-[#2F3D7C] mt-5">
        Speech Preparation
      </h3>

      <p className="mt-4 text-[#1F2937]">
        Well-structured Urdu speeches, thoughtful content and consistent
        practice played a key role in achieving success.
      </p>
    </div>

  </div>

</div>
{/* Achievement Highlights */}

<div className="mt-24 bg-white rounded-3xl shadow-xl p-10">

  <h2 className="text-4xl font-bold text-[#2F3D7C]">
    Achievement Highlights
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-10 text-lg text-[#1F2937]">

    <div>🥈 2nd Position</div>
    <div>🥉 3rd Position</div>
    <div>🏆 Trophy Awarded</div>
    <div>📜 Certificates Received</div>
    <div>🏫 Organized by Qamar Bani Hashim School</div>
    <div>📅 9 November 2025</div>
    <div>📍 Karachi, Pakistan</div>
    <div>🎤 Iqbal Day Urdu Speech Competition</div>

  </div>

</div>

{/* Apply Button */}

<div className="mt-20 mb-24 flex justify-center">

  <Link
    to="/admission"
    className="bg-[#74BDE8] hover:bg-[#2F3D7C] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
  >
    Apply Now
  </Link>

</div>

</div>
  );
}