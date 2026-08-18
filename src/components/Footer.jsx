import { Link } from "react-router-dom";
import { Clock, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.webp";

function Footer() {
  return (
    <footer className="mt-20 border-t border-[#e6edf7] bg-[#1B2A5C] text-white md:mt-24">
      <div className="container-page px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1.2fr] md:gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="AI KISA School logo"
                className="h-11 w-11 rounded-xl object-cover shadow-[0_8px_18px_rgba(0,0,0,0.18)] md:h-12 md:w-12"
              />
              <span className="text-lg font-semibold text-white">AI KISA School</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/75">
              A tuition-free school where every learner grows in character, academics and technology — with AI literacy woven through daily learning.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/18SjctuFnk/"
                target="_blank"
                rel="noreferrer"
                aria-label="AI KISA School on Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-200 hover:bg-[#DFB863] hover:text-[#1B2A5C]"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/ai_kisa_school"
                target="_blank"
                rel="noreferrer"
                aria-label="AI KISA School on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-200 hover:bg-[#DFB863] hover:text-[#1B2A5C]"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="space-y-3">
            <h2 className="text-base font-semibold text-white">Explore</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li><Link to="/" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">Home</Link></li>
              <li><Link to="/about" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">About</Link></li>
              <li><Link to="/academics" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">Academics</Link></li>
              <li><Link to="/facilities" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">Facilities</Link></li>
              <li><Link to="/achievements" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">Achievements</Link></li>
              <li><Link to="/admission" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">Admission</Link></li>
              <li className="col-span-2"><Link to="/donor" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">Become a Donor</Link></li>
              <li className="col-span-2"><Link to="/contact" className="inline-block py-1.5 text-white/75 transition-colors hover:text-[#DFB863]">Contact</Link></li>
            </ul>
          </nav>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-white">Contact</h2>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#DFB863]" />
                <span className="leading-6">B-12, Survey No 492, Jaffar-e-Tayyar Society, Malir</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#DFB863]" />
                <a href="tel:+923313600353" className="transition-colors hover:text-[#DFB863]">+92 331 3600353</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="shrink-0 text-[#DFB863]" />
                <span>8:00 AM – 1:30 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#DFB863]" />
                <a href="mailto:contact@aikisaschool.com" className="break-all transition-colors hover:text-[#DFB863]">contact@aikisaschool.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>© 2026 AI KISA School. Education is free, always.</p>
          <p>Developed by Taqi Mehdi — 0317 7741792</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;