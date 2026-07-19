import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));

const Achievements = lazy(() => import("./pages/Achievements"));
const AchievementDetail = lazy(() => import("./pages/AchievementDetail"));
const IqbalDetail = lazy(() => import("./pages/IqbalDetail"));

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admission = lazy(() => import("./pages/Admission"));

const Programs = lazy(() => import("./components/Programs"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-[#2F3D7C] font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<CourseDetail />} />

          {/* Achievements */}
          <Route path="/achievements" element={<Achievements />} />
          <Route
            path="/achievement-detail"
            element={<AchievementDetail />}
          />
          <Route
            path="/iqbal-detail"
            element={<IqbalDetail />}
          />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;