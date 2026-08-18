import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.webp";

const desktopLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/achievements", label: "Achievements" },
  { to: "/admission", label: "Admission" },
  { to: "/donor", label: "Donor" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6edf7] bg-[#F7F8FB] backdrop-blur-md">
      <div className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20">
          <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
            <img
              src={logo}
              alt="AI KISA School logo"
              className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-[0_8px_18px_rgba(27,42,92,0.12)]"
            />

            <div className="min-w-0">
              <span className="block truncate font-display text-lg font-semibold leading-tight text-[#1B2A5C]">AI KISA School</span>
              <span className="block truncate text-xs text-[#4D5967]">Free education. Real futures.</span>
            </div>
          </NavLink>

        <div className="flex flex-1 items-center justify-end gap-4">
            <nav className="hidden items-center gap-1 lg:flex">
            {desktopLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-[#EEF4FF] hover:text-[#1B2A5C] ${
                      isActive ? "text-[#1B2A5C] bg-[#EEF4FF]" : "text-[#47585a]"
                    }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/admission" className="hidden ml-2 lg:inline-flex">
            <span className="inline-flex items-center justify-center rounded-full bg-[#DFB863] px-4 py-2 text-sm font-semibold text-[#1B2A5C]">Apply free</span>
          </NavLink>

          <button onClick={() => setMenuOpen(true)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfe5e0] bg-white lg:hidden" aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/35 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed right-0 top-0 h-full w-[85%] max-w-sm border-l border-[#dfe6f0] bg-[#F7F8FB]/95 shadow-[0_20px_45px_rgba(27,42,92,0.18)] backdrop-blur-xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <h2 className="text-xl font-extrabold text-[#1B2A5C]">Menu</h2>
          <button onClick={closeMenu} className="text-3xl text-[#1B2A5C]" aria-label="Close menu">
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-2 p-5">
          {desktopLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 font-semibold ${
                  isActive ? "bg-[#1B2A5C] text-white" : "text-[#1B2A5C] hover:bg-[#EAF1FF]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/admission"
            onClick={closeMenu}
            className="mt-3 rounded-2xl bg-[#DFB863] px-4 py-3 text-center font-semibold text-[#1B2A5C]"
          >
            Apply free
          </NavLink>
        </div>
      </div>
    </header>
  );
}