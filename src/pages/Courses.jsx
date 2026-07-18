import { Link } from "react-router-dom";

import ai from "../assets/courses/ai.png";
import data from "../assets/courses/data.png";
import marketing from "../assets/courses/marketing.png";
import shopify from "../assets/courses/shopify.png";
import content from "../assets/courses/content.png";
import social from "../assets/courses/media.png";

export default function Courses() {
  const courses = [
    {
      title: "AI Foundations",
      slug: "ai-foundations",
      image: ai,
      duration: "3 Months",
      weekly: "3 Classes / Week",
    },
    {
      title: "Data Analytics",
      slug: "data-analytics",
      image: data,
      duration: "4 Months",
      weekly: "3 Classes / Week",
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      image: marketing,
      duration: "3 Months",
      weekly: "3 Classes / Week",
    },
    {
      title: "Shopify & E-Commerce",
      slug: "shopify-ecommerce",
      image: shopify,
      duration: "3 Months",
      weekly: "3 Classes / Week",
    },
    {
      title: "Content Creation",
      slug: "content-creation",
      image: content,
      duration: "2 Months",
      weekly: "3 Classes / Week",
    },
    {
      title: "Social Media Management",
      slug: "social-media-management",
      image: social,
      duration: "2 Months",
      weekly: "3 Classes / Week",
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-4xl lg:text-5xl font-bold text-center text-[#2F3D7C]">
          Our Programs
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Choose the course that matches your future goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course, index) => (

            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-[#2F3D7C]">
                  {course.title}
                </h2>

                <p className="mt-4 text-gray-700">
                  <strong>Duration:</strong> {course.duration}
                </p>

                <p className="mt-2 text-gray-700">
                  <strong>Weekly Classes:</strong> {course.weekly}
                </p>

                <Link
                  to={`/programs/${course.slug}`}
                  className="block mt-6 text-center bg-[#2F3D7C] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-sky-500 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  See Details →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}