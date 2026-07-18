import { Link } from "react-router-dom";
import {
  Brain,
  Laptop,
  Rocket,
  GraduationCap,
  ArrowRight,
  Phone,
} from "lucide-react";

const About = () => {
  return (
    <main className="bg-gradient-to-b from-white via-[#EEF6FF] to-[#F5F8FC] text-[#1F2937]">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#2F3D7C] via-[#4E82BE] to-[#F5F8FC]">

        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#74BDE8]/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2F3D7C]/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

            <span className="inline-block px-6 py-2 rounded-full bg-white/15 backdrop-blur-md text-white font-semibold uppercase tracking-[3px] border border-white/20">
                About KISA Model School

              </span>

            <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight !text-white">
                Building Future
                <br />
                AI Leaders
                <br />
                Through Modern
                <br />
                Education.

              </h1>

              <p className="mt-8 text-lg leading-9 text-blue-100">

                KISA Model School was established in 2019 in Malir,
                Jaffar Tayyar with a mission to provide free quality
                education to underprivileged children.

                <br />
                <br />

                In 2022, Artificial Intelligence became part of our
                education system after recognizing the importance of
                future-ready skills.

                <br />
                <br />

                Today every student learns AI while students from
                outside the school can also join our specialized AI
                Programs.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  to="/programs"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#74BDE8] hover:bg-[#2F3D7C] text-white font-semibold transition-all duration-300"
                >

                  View Programs

                  <ArrowRight size={20} />

                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#2F3D7C] hover:bg-[#2F3D7C] hover:text-white text-[#2F3D7C] font-semibold transition-all duration-300"
                >

                  Contact Us

                  <Phone size={20} />

                </Link>

              </div>

            </div>

            {/* RIGHT */}

           <div className="hidden lg:block bg-white rounded-[40px] shadow-xl p-8">

              <div className="grid grid-cols-2 gap-6">

                <div className="group rounded-3xl border border-blue-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white">

                  <Brain
                    size={45}
                    className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  />

                  <h3 className="text-xl font-bold text-[#2F3D7C]">

                    AI EDUCATION

                  </h3>

                  <p className="mt-4 text-gray-600">

                    Future-ready AI learning for every student.

                  </p>

                </div>

                <div className="group rounded-3xl border border-blue-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white">

                  <Laptop
                    size={45}
                    className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  />

                  <h3 className="text-xl font-bold text-[#2F3D7C]">

                    AI PROJECTS

                  </h3>

                  <p className="mt-4 text-gray-600">

                    Build real-world apps, SaaS & automation tools.

                  </p>

                </div>

                <div className="group rounded-3xl border border-blue-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white">

                  <Rocket
                    size={45}
                    className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  />

                  <h3 className="text-xl font-bold text-[#2F3D7C]">

                    PRACTICAL TRAINING

                  </h3>

                  <p className="mt-4 text-gray-600">

                    Hands-on projects with industry-focused skills.

                  </p>

                </div>

                <div className="group rounded-3xl border border-blue-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white">

                  <GraduationCap
                    size={45}
                    className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  />

                  <h3 className="text-xl font-bold text-[#2F3D7C]">

                    CAREER PATHWAY

                  </h3>

                  <p className="mt-4 text-gray-600">

                    From learning AI to freelancing and entrepreneurship.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= OUR STORY ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block px-6 py-2 rounded-full bg-[#74BDE8]/20 text-[#2F3D7C] font-semibold uppercase tracking-[3px]">

              OUR STORY

            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#2F3D7C]">

              A Journey From Free Education
              <br />
              To Artificial Intelligence

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              KISA Model School was founded in 2019 with a mission to
              provide free quality education to underprivileged children
              in Malir, Jaffar Tayyar.

              <br /><br />

              In 2022, our vision expanded by introducing Artificial
              Intelligence into the learning system, ensuring students
              gain future-ready skills beyond traditional education.

              <br /><br />

              Today, every student learns AI while external students can
              also enroll in our specialized AI Programs to prepare for
              freelancing, entrepreneurship, and technology careers.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div className="group bg-[#F5F8FC] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              <h3 className="text-4xl font-bold text-[#2F3D7C]">

                2019

              </h3>

              <h4 className="mt-5 text-xl font-semibold text-[#2F3D7C]">

                School Founded

              </h4>

              <p className="mt-4 text-gray-600">

                Started with a vision to provide free quality education.

              </p>

            </div>

            <div className="group bg-[#F5F8FC] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              <h3 className="text-4xl font-bold text-[#2F3D7C]">

                2022

              </h3>

              <h4 className="mt-5 text-xl font-semibold text-[#2F3D7C]">

                AI Introduced

              </h4>

              <p className="mt-4 text-gray-600">

                Artificial Intelligence became part of every student's education.

              </p>

            </div>

            <div className="group bg-[#F5F8FC] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              <h3 className="text-4xl font-bold text-[#2F3D7C]">

                100%

              </h3>

              <h4 className="mt-5 text-xl font-semibold text-[#2F3D7C]">

                Practical Learning

              </h4>

              <p className="mt-4 text-gray-600">

                Students build real AI projects with hands-on training.

              </p>

            </div>

            <div className="group bg-[#F5F8FC] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              <h3 className="text-4xl font-bold text-[#2F3D7C]">

                Future

              </h3>

              <h4 className="mt-5 text-xl font-semibold text-[#2F3D7C]">

                Career Ready

              </h4>

              <p className="mt-4 text-gray-600">

                Preparing students for freelancing, AI, and entrepreneurship.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= OUR MISSION ================= */}

      <section className="py-24 bg-[#F5F8FC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-block px-6 py-2 rounded-full bg-[#74BDE8]/20 text-[#2F3D7C] font-semibold uppercase tracking-[3px]">

                OUR MISSION

              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-[#2F3D7C]">

                Providing Quality
                <br />
                Education Powered
                <br />
                By Artificial
                <br />
                Intelligence

              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                Our mission is to create an educational environment where
                students don't only study textbooks but also develop
                practical technology skills.

                <br />
                <br />

                We believe every child deserves access to Artificial
                Intelligence, programming, digital innovation, and
                project-based learning regardless of their background.

                <br />
                <br />

                Through practical education we prepare students for
                university, freelancing, entrepreneurship, and careers
                in the rapidly growing AI industry.

              </p>

              <div className="mt-10">

                <Link
                  to="/programs"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2F3D7C] hover:bg-[#74BDE8] text-white font-semibold transition-all duration-300"
                >

                  View Programs

                  <ArrowRight size={20} />

                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-6">

              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                <Brain
                  className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  size={42}
                />

                <h3 className="text-2xl font-bold text-[#2F3D7C]">

                  AI EDUCATION

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Every student learns Artificial Intelligence through
                  structured lessons and practical implementation.

                </p>

              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                <Laptop
                  className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  size={42}
                />

                <h3 className="text-2xl font-bold text-[#2F3D7C]">

                  AI PROJECTS

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Students build websites, SaaS platforms, automation,
                  and real-world AI applications.

                </p>

              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                <Rocket
                  className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  size={42}
                />

                <h3 className="text-2xl font-bold text-[#2F3D7C]">

                  PRACTICAL TRAINING

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Learn by building real projects that match current
                  industry standards and future technologies.

                </p>

              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                <GraduationCap
                  className="text-[#74BDE8] mb-5 group-hover:scale-110 transition-all duration-500"
                  size={42}
                />

                <h3 className="text-2xl font-bold text-[#2F3D7C]">

                  CAREER PATHWAY

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  Preparing students for freelancing, startups,
                  university, and successful careers in technology.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
   
        {/* ================= CALL TO ACTION ================= */}

<section className="py-24 bg-gradient-to-r from-[#2F3D7C] via-[#4E82BE] to-[#74BDE8]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="inline-block px-6 py-2 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-white font-semibold uppercase tracking-[3px]">

      JOIN KISA MODEL SCHOOL

    </span>

    <h2
      style={{ color: "#FFFFFF" }}
      className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight"
    >
      Start Your Journey
      <br />
      Into The Future
      <br />
      Of Artificial Intelligence
    </h2>

    <p
      style={{ color: "#EAF6FF" }}
      className="mt-8 text-lg leading-9 max-w-3xl mx-auto"
    >
      Join KISA Model School and become part of a new generation of
      learners mastering Artificial Intelligence, technology,
      innovation, and real-world digital skills.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-6">

      <Link
        to="/programs"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#2F3D7C] hover:bg-[#74BDE8] hover:text-white font-semibold transition-all duration-300"
      >
        View Programs
        <ArrowRight size={20} />
      </Link>

      <Link
        to="/contact"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#2F3D7C] font-semibold transition-all duration-300"
      >
        Contact Us
        <Phone size={20} />
      </Link>

    </div>

  </div>

</section>
</main>
  );
};

export default About;