import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/hero.png", "/hero2.png"];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const value = search.toLowerCase().trim();

    // Programs Page
    if (
      value === "course" ||
      value === "courses" ||
      value === "program" ||
      value === "programs"
    ) {
      navigate("/courses");
    }

    // AI Foundations
    else if (
      value === "ai" ||
      value === "ai foundations" ||
      value === "artificial intelligence"
    ) {
      navigate("/programs/ai-foundations");
    }

    // Data Analytics
    else if (
      value === "data" ||
      value === "data analytics"
    ) {
      navigate("/programs/data-analytics");
    }

    // Digital Marketing
    else if (
      value === "marketing" ||
      value === "digital marketing"
    ) {
      navigate("/programs/digital-marketing");
    }

    // Shopify
    else if (
      value === "shopify" ||
      value === "shopify ecommerce" ||
      value === "ecommerce"
    ) {
      navigate("/programs/shopify-ecommerce");
    }

    // Content Creation
    else if (
      value === "content" ||
      value === "content creation"
    ) {
      navigate("/programs/content-creation");
    }

    // Social Media
    else if (
      value === "social media" ||
      value === "social media management"
    ) {
      navigate("/programs/social-media-management");
    }

    // Admission
    else if (
      value === "admission" ||
      value === "apply" ||
      value === "apply now"
    ) {
      navigate("/admission");
    }

    // Achievements
    else if (
      value === "achievement" ||
      value === "achievements"
    ) {
      navigate("/achievements");
    }

    // AI PRENEUR
    else if (
      value === "preneur" ||
      value === "ai preneur" ||
      value === "aipreneur"
    ) {
      navigate("/achievement-detail");
    }

    // Iqbal Day
    else if (
      value === "iqbal" ||
      value === "iqbal day" ||
      value === "speech competition"
    ) {
      navigate("/iqbal-detail");
    }
   
    // About
    else if (value === "about") {
      navigate("/about");
    }

    // Contact
    else if (value === "contact") {
      navigate("/contact");
    }

    // Home
    else if (value === "home") {
      navigate("/");
    }

    else {
      alert("No matching page found.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#2F3D7C] to-[#74BDE8] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              🎓 Admissions Open 2026-27
            </span>

            <h1
              className="text-4xl lg:text-6xl font-extrabold leading-tight mt-6"
              style={{ color: "#ffffff" }}
            >
              Learn AI,
              <br />
              Build Your Future
            </h1>

            <p className="mt-6 text-lg text-gray-100 max-w-xl">
              AI KISA School prepares students with Artificial Intelligence,
              Digital Skills and Modern Education for tomorrow's world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/courses"
                className="bg-white text-[#2F3D7C] px-6 py-3 rounded-full font-bold hover:scale-105 duration-300"
              >
                Explore Programs
              </Link>

              <Link
                to="/admission"
                className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#2F3D7C] duration-300"
              >
                Apply Now
              </Link>

            </div>

            {/* Search Box */}

            <div className="mt-8">

              <div className="bg-white rounded-full p-2 flex items-center shadow-xl max-w-xl">

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search courses, admission, achievements..."
                  className="flex-1 px-5 py-3 rounded-full outline-none text-gray-700"
                />

                <button
                  onClick={handleSearch}
                  className="bg-[#2F3D7C] text-white px-8 py-3 rounded-full hover:bg-[#4E82BE] duration-300"
                >
                  Search
                </button>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center items-center overflow-hidden">

            <img
              key={currentBanner}
              src={images[currentBanner]}
              alt="Hero Banner"
              className="w-full max-w-2xl lg:max-w-5xl xl:max-w-6xl rounded-3xl shadow-2xl animate-[slideIn_0.8s_ease]"
            />

          </div>

        </div>
      </div>
    </section>
  );
}