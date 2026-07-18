import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navLink =
    "px-4 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="KISA Model School" className="h-14" />

          <div>
            <h2 className="text-2xl font-bold text-[#2F3D7C]">
              KISA Model School
            </h2>

            <p className="text-sm text-gray-500">
              Learn • Create • Innovate
            </p>
          </div>
        </div>

        {/* Navigation */}
       <nav className="hidden lg:flex items-center gap-0.5 bg-[#EEF4FB] rounded-full px-3 py-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLink} ${
                isActive
                  ? "bg-[#2F3D7C] text-white shadow-md"
                  : "text-[#2F3D7C] hover:bg-[#DDECF9]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${navLink} ${
                isActive
                  ? "bg-[#2F3D7C] text-white shadow-md"
                  : "text-[#2F3D7C] hover:bg-[#DDECF9]"
              }`
            }
          >
            Programs
          </NavLink>

          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              `${navLink} ${
                isActive
                  ? "bg-[#2F3D7C] text-white shadow-md"
                  : "text-[#2F3D7C] hover:bg-[#DDECF9]"
              }`
            }
          >
            Achievements
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLink} ${
                isActive
                  ? "bg-[#2F3D7C] text-white shadow-md"
                  : "text-[#2F3D7C] hover:bg-[#DDECF9]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLink} ${
                isActive
                  ? "bg-[#2F3D7C] text-white shadow-md"
                  : "text-[#2F3D7C] hover:bg-[#DDECF9]"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Admission Button */}
          <NavLink
  to="/admission"
  className="ml-2 bg-[#74BDE8] hover:bg-[#2F3D7C] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300"
>
  Admission
</NavLink>

        </nav>

      </div>
    </header>
  );
}