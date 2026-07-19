import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "px-4 py-2 rounded-full font-semibold transition-all duration-300";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="KISA Model School" className="h-12 sm:h-14" />

          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-[#2F3D7C]">
              KISA Model School
            </h2>

            <p className="hidden sm:block text-sm text-gray-500">
              Learn • Create • Innovate
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-1 bg-[#EEF4FB] rounded-full px-3 py-2">

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

          <NavLink
            to="/admission"
            className="ml-2 bg-[#74BDE8] hover:bg-[#2F3D7C] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300"
          >
            Admission
          </NavLink>

        </nav>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-4xl text-[#2F3D7C]"
        >
          ☰
        </button>

      </div>

      {/* Mobile Overlay */}

      <div
        className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="font-bold text-xl text-[#2F3D7C]">
            Menu
          </h2>

          <button
            onClick={closeMenu}
            className="text-3xl text-[#2F3D7C]"
          >
            ✕
          </button>

        </div>

        <div className="flex flex-col p-5 gap-4">

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/courses" onClick={closeMenu}>
            Programs
          </NavLink>

          <NavLink to="/achievements" onClick={closeMenu}>
            Achievements
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink
            to="/admission"
            onClick={closeMenu}
            className="mt-4 bg-[#2F3D7C] text-white text-center py-3 rounded-xl font-semibold"
          >
            Admission
          </NavLink>

        </div>

      </div>

    </header>
  );
}