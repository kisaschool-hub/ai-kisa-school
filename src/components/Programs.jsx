import { Link } from "react-router-dom";

import ai from "../assets/Courses/ai-foundations-course.png";
import content from "../assets/Courses/content-creation-course.png";
import shopify from "../assets/Courses/shopify-ecommerce-course.png";

const courses = [
  {
    title: "AI Foundation",
    image: ai,
    duration: "3 Months",
  },
  {
    title: "Content Creation",
    image: content,
    duration: "2 Months",
  },
  {
    title: "Shopify & E-Commerce",
    image: shopify,
    duration: "3 Months",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-[#4E82BE] font-semibold uppercase tracking-widest">
          Learning Programs
        </p>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[#2F3D7C] mt-3">
          Choose Your Next Learning Path
        </h2>

        <p className="text-center text-gray-600 mt-5 mb-14 text-lg">
          Master future-ready AI & Digital Skills with practical learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              to="/courses"
              className="group bg-white rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden bg-[#F5F8FC]">
                <div className="absolute top-5 left-5 z-10 w-12 h-12 rounded-full bg-[#2F3D7C] text-white flex items-center justify-center font-bold shadow-xl">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2F3D7C]">
                  {course.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Learn with real-world projects, expert mentors and hands-on
                  practical training.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="border border-blue-100 rounded-xl p-4 text-center bg-[#F5F8FC]">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-bold text-[#2F3D7C]">
                      {course.duration}
                    </p>
                  </div>

                  <div className="border border-blue-100 rounded-xl p-4 text-center bg-[#F5F8FC]">
                    <p className="text-sm text-gray-500">Classes</p>
                    <p className="font-bold text-[#2F3D7C]">3 / Week</p>
                  </div>
                </div>

                <div className="mt-6 w-full bg-[#2F3D7C] text-white py-3 rounded-xl font-semibold text-base text-center hover:bg-[#4E82BE] transition-all duration-300">
                  View Program →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}