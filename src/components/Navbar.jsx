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
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed inset-y-0 right-0 z-[70] flex h-screen w-[85%] max-w-sm flex-col overflow-y-auto bg-[#1B2A5C] shadow-[0_18px_38px_rgba(15,23,42,0.35)] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{ backgroundColor: "#1B2A5C", minHeight: "100vh", height: "100vh" }}
      >
        <div className="flex min-h-[72px] w-full items-center justify-between border-b border-white/10 bg-[#1B2A5C] px-5 py-4">
          <h2 className="text-xl font-extrabold tracking-[-0.02em] text-white">Menu</h2>
          <button
            onClick={closeMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-white transition-colors hover:bg-white/10 active:bg-white/15"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="flex w-full flex-1 flex-col divide-y divide-white/15 bg-[#1B2A5C] px-4 pb-8 pt-3">
          {desktopLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `w-full rounded-xl px-4 py-3.5 text-left text-base font-semibold text-white transition-all duration-200 ${
                  isActive ? "bg-white/10" : "hover:bg-white/10 active:bg-white/15"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-4">
            <NavLink
              to="/admission"
              onClick={closeMenu}
              className="mt-3 block w-full rounded-2xl bg-[#DFB863] px-4 py-3.5 text-center text-base font-semibold text-[#1B2A5C] shadow-[0_10px_20px_rgba(223,184,99,0.22)] transition-transform duration-200 hover:translate-y-[-1px] active:translate-y-0"
            >
              Apply free
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}