import SEO from "../components/SEO";
import { Link } from "react-router-dom";

import ai from "../assets/Courses/ai.png";
import data from "../assets/Courses/data.png";
import marketing from "../assets/Courses/marketing.png";
import shopify from "../assets/Courses/shopify.png";
import content from "../assets/Courses/content.png";
import social from "../assets/Courses/media.png";

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
    <>
      <SEO
        title="AI Courses in Pakistan | Coding, Robotics & Digital Skills | AI KISA School"
        description="Explore AI, Coding, Robotics, Data Analytics, Digital Marketing, Shopify and Digital Skills courses at AI KISA School. Learn online from anywhere in Pakistan."
        url="https://aikisaschool.com/courses"
      />

      <section className="py-20 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl lg:text-5xl font-bold text-center text-[#2F3D7C]">
            AI Courses in Pakistan
          </h1>

          <p className="text-center text-gray-600 mt-3 mb-10">
            Learn Artificial Intelligence, Coding, Robotics, Data Analytics,
            Shopify, Digital Marketing and other future-ready digital skills
            from AI KISA School. Our programs are available for students across Pakistan.
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
                    alt={`${course.title} course at AI KISA School Pakistan`}
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
                    View Course Details →
                  </Link>

                </div>

              </div>

            ))}

          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">

            <h2 className="text-3xl font-bold text-[#2F3D7C]">
              Why Choose AI KISA School Courses?
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              AI KISA School provides practical, project-based training in
              Artificial Intelligence, Coding, Robotics, Data Analytics,
              Shopify, Digital Marketing and Digital Skills. Our courses are
              designed to prepare students for future careers and can be
              attended by learners from anywhere in Pakistan.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}