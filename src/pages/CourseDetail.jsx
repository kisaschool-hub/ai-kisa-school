import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import ai from "../assets/Courses/ai.png";
import data from "../assets/Courses/data.png";
import marketing from "../assets/Courses/marketing.png";
import shopify from "../assets/Courses/shopify.png";
import content from "../assets/Courses/content.png";
import social from "../assets/Courses/media.png";

export default function CourseDetail() {
  const { slug } = useParams();

  const courses = {
    "ai-foundations": {
      title: "AI Foundations",
      image: ai,
      duration: "3 Months",
      weekly: "3 Classes / Week",
      overview:
        "AI Foundations is a beginner-friendly course designed for students, professionals and freelancers across Pakistan who want to understand modern Artificial Intelligence. During this program, you will learn ChatGPT, Google Gemini, Prompt Engineering, AI productivity tools, AI image generation and practical AI applications used in education and business. The course focuses on hands-on learning so you can confidently use AI tools in real-world projects, improve productivity and prepare for future career opportunities.",
      learn: [
        "Introduction to AI",
        "ChatGPT",
        "Prompt Engineering",
        "Google Gemini",
        "Canva AI",
        "AI Image Generation",
        "YouTube AI Tools",
        "AI Productivity"
      ],
      scope: [
        "AI Assistant",
        "Prompt Engineer",
        "AI Content Creator",
        "Freelancer",
        "Office Productivity"
      ]
    },

    "data-analytics": {
      title: "Data Analytics",
      image: data,
      duration: "4 Months",
      weekly: "3 Classes / Week",
      overview:
        "Learn data analysis from beginner to advanced using professional tools used by companies worldwide.",
      learn: [
        "Excel",
        "Power BI",
        "SQL",
        "Dashboards",
        "Data Cleaning",
        "Visualization",
        "Business Reports",
        "Projects"
      ],
      scope: [
        "Data Analyst",
        "Business Analyst",
        "Dashboard Developer",
        "Freelancer",
        "Corporate Jobs"
      ]
    },

    "digital-marketing": {
      title: "Digital Marketing",
      image: marketing,
      duration: "3 Months",
      weekly: "3 Classes / Week",
      overview:
        "Master digital marketing with practical campaigns and social media advertising.",
      learn: [
        "Facebook Ads",
        "Instagram Marketing",
        "Google Ads",
        "SEO",
        "Email Marketing",
        "Lead Generation"
      ],
      scope: [
        "Digital Marketer",
        "Social Media Expert",
        "SEO Executive",
        "Freelancer"
      ]
    },

    "shopify-ecommerce": {
      title: "Shopify & E-Commerce",
      image: shopify,
      duration: "3 Months",
      weekly: "3 Classes / Week",
      overview:
        "Build and manage professional online stores using Shopify and modern e-commerce strategies.",
      learn: [
        "Store Setup",
        "Product Listing",
        "Payments",
        "Dropshipping",
        "Order Management"
      ],
      scope: [
        "Shopify Developer",
        "E-Commerce Manager",
        "Online Business Owner"
      ]
    },

    "content-creation": {
      title: "Content Creation",
      image: content,
      duration: "2 Months",
      weekly: "3 Classes / Week",
      overview:
        "Create high-quality content using AI tools and Canva for personal branding and business growth.",
      learn: [
        "AI Content Writing",
        "Canva Pro",
        "Thumbnail Design",
        "Copywriting",
        "Brand Strategy"
      ],
      scope: [
        "Content Creator",
        "Copywriter",
        "Brand Manager",
        "Freelancer"
      ]
    },

    "social-media-management": {
      title: "Social Media Management",
      image: social,
      duration: "2 Months",
      weekly: "3 Classes / Week",
      overview:
        "Manage business social media accounts professionally and grow online audiences.",
      learn: [
        "Facebook",
        "Instagram",
        "LinkedIn",
        "Scheduling",
        "Analytics",
        "Brand Building"
      ],
      scope: [
        "Social Media Manager",
        "Community Manager",
        "Digital Agency"
      ]
    }
  };

  const course = courses[slug];
  const seoData = {
    "ai-foundations": {
      title: "AI Foundations Course | AI KISA School Pakistan",
      description:
        "Learn AI Foundations including ChatGPT, Prompt Engineering, Google Gemini and modern AI tools at AI KISA School.",
    },

    "data-analytics": {
      title: "Data Analytics Course | AI KISA School Pakistan",
      description:
        "Master Excel, SQL, Power BI, Dashboards and Business Analytics with practical projects.",
    },

    "digital-marketing": {
      title: "Digital Marketing Course | AI KISA School Pakistan",
      description:
        "Learn SEO, Google Ads, Facebook Ads, Instagram Marketing and Lead Generation.",
    },

    "shopify-ecommerce": {
      title: "Shopify & E-Commerce Course | AI KISA School Pakistan",
      description:
        "Learn Shopify Store Development, Dropshipping and E-Commerce Business.",
    },

    "content-creation": {
      title: "Content Creation Course | AI KISA School Pakistan",
      description:
        "Learn Canva, AI Content Writing, Copywriting and Personal Branding.",
    },

    "social-media-management": {
      title: "Social Media Management Course | AI KISA School Pakistan",
      description:
        "Become a Social Media Manager with Facebook, Instagram, LinkedIn and Analytics.",
    },
  };

  if (!course) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Course Not Found
      </div>
    );
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: "AI KISA School",
      sameAs: "https://aikisaschool.com"
    }
  };

  return (
    <>
      <SEO
        title={seoData[slug]?.title || course.title}
        description={seoData[slug]?.description || course.overview}
        url={`https://aikisaschool.com/programs/${slug}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <section className="py-20 bg-[#F8FBFF]">
        <div className="max-w-6xl mx-auto px-6">

          <img
            src={course.image}
            alt={`${course.title} Course - AI KISA School Pakistan`}
            className="w-full aspect-[16/9] object-contain bg-white"
          />

          <div className="p-8">

            <h1 className="text-3xl md:text-4xl font-bold text-[#2F3D7C]">
              {course.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-700 leading-8">
              {course.overview}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-blue-50 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h2 className="font-bold text-xl text-[#2F3D7C]">
                  Course Details
                </h2>

                <p className="mt-4">
                  <strong>Duration:</strong> {course.duration}
                </p>

                <p className="mt-2">
                  <strong>Weekly Classes:</strong> {course.weekly}
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <h2 className="font-bold text-xl text-[#2F3D7C]">
                  Market Scope
                </h2>

                <ul className="list-disc pl-5 mt-4 space-y-2">
                  {course.scope.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

              </div>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-bold text-[#2F3D7C] mb-4">
                What You'll Learn
              </h2>

              <ul className="grid md:grid-cols-2 gap-3">
                {course.learn.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 rounded-lg p-3 cursor-pointer transition-all duration-300 hover:bg-[#2F3D7C] hover:text-white hover:scale-105 hover:shadow-xl"
                  >
                    ✔ {item}
                  </li>
                ))}
              </ul>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/admission"
                className="bg-[#2F3D7C] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                Apply for Admission
              </Link>

              <Link
                to="/courses"
                className="border-2 border-[#2F3D7C] text-[#2F3D7C] px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#2F3D7C] hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                Back to Programs
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}