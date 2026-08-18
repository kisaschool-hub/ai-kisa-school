import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Academics = lazy(() => import("./pages/Academics"));
const Facilities = lazy(() => import("./pages/Facilities"));
const CampusLife = lazy(() => import("./pages/CampusLife"));
const Impact = lazy(() => import("./pages/Impact"));
const Achievements = lazy(() => import("./pages/Achievements"));
const AchievementDetail = lazy(() => import("./pages/AchievementDetail"));
const IqbalDetail = lazy(() => import("./pages/IqbalDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admission = lazy(() => import("./pages/Admission"));
const Donor = lazy(() => import("./pages/Donor"));

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-[#1B2A5C] font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          <Route path="/courses" element={<Navigate to="/academics" replace />} />
          <Route path="/programs" element={<Navigate to="/academics" replace />} />
          <Route path="/programs/:slug" element={<Navigate to="/academics" replace />} />

          <Route path="/achievement-detail" element={<AchievementDetail />} />
          <Route path="/iqbal-detail" element={<IqbalDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;