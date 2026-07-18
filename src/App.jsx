import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Programs from "./components/Programs";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

import Achievements from "./pages/Achievements";
import AchievementDetail from "./pages/AchievementDetail";
import IqbalDetail from "./pages/IqbalDetail";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

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

      <Footer />
    </BrowserRouter>
  );
}

export default App;