import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
  const desktopImages = ["/hero.webp", "/hero2.webp"];
  const mobileImages = ["/hero1mobile.webp", "/hero2mobile.webp"];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) =>
        (prev + 1) % desktopImages.length
      );
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
    <section className="bg-gradient-to-r from-[#2F3D7C] to-[#6EC6FF] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="text-center lg:text-left">

            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-xs sm:text-sm">
              🎓 Admissions Open 2026-27
            </span>

            <h1
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: "#ffffff" }}
            >
              Learn AI,
              <br />
              Build Your Future
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-100 max-w-xl mx-auto lg:mx-0">
              AI KISA School prepares students with Artificial Intelligence,
              Digital Skills and Modern Education for tomorrow's world.
            </p>

          <div className="mt-8 flex flex-col gap-4 justify-center lg:flex-row lg:justify-start">

              <Link
                to="/courses"
                className="bg-white text-[#2F3D7C] px-6 py-3 rounded-full font-bold text-center"
              >
                Explore Programs
              </Link>

              <Link
                to="/admission"
                className="border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#2F3D7C] text-center"
              >
                Apply Now
              </Link>

            </div>

            {/* Search Box */}

            <div className="mt-8 hidden md:block">

              <div className="bg-white rounded-full p-2 flex items-center max-w-xl mx-auto lg:mx-0 shadow-xl">

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  placeholder="Search courses..."
                  className="flex-1 min-w-0 px-4 py-3 rounded-full outline-none text-gray-700 text-sm sm:text-base"
                />

                <button
                  onClick={handleSearch}
                  className="bg-[#2F3D7C] text-white px-5 sm:px-8 py-3 rounded-full whitespace-nowrap hover:bg-[#4E82BE] duration-300"
                >
                  Search
                </button>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center items-center w-full">

            {/* Desktop Images */}
            {desktopImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="AI KISA School students learning Artificial Intelligence and digital skills in Pakistan"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1200"
                height="800"
                className={`hidden lg:block absolute w-full max-w-2xl xl:max-w-5xl h-auto rounded-3xl shadow-2xl transition-opacity duration-1000 ease-in-out ${
                  currentBanner === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Mobile Images */}
            {mobileImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="AI KISA School students learning Artificial Intelligence and digital skills in Pakistan"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="600"
                height="900"
                className={`block lg:hidden w-full max-w-sm h-auto mx-auto transition-opacity duration-1000 ease-in-out ${
                  currentBanner === index ? "opacity-100" : "opacity-0 hidden"
                }`}
              />
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}