import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="bg-[#2F3D7C] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="bg-white rounded-xl p-3 inline-block">
              <img
                src={logo}
                alt="AI KISA School"
                className="h-20 w-auto"
              />
            </div>

            <p className="mt-5 text-blue-100 leading-7 text-sm">
              AI KISA School empowers students with practical digital skills,
              AI knowledge and career-focused training for the future.
            </p>

            <div className="flex gap-5 mt-6">

              <a
                href="https://www.facebook.com/share/1YQLp5sUPx/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF
                  size={22}
                  className="hover:text-[#74BDE8] duration-300"
                />
              </a>

              <a
                href="https://www.instagram.com/ai_kisa_school?igsh=ODlubmM1ZDMzMmpo"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  size={22}
                  className="hover:text-[#74BDE8] duration-300"
                />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-blue-100">

              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link to="/programs" className="hover:text-white">
                  Programs
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/admission" className="hover:text-white">
                  Admission
                </Link>
              </li>

            </ul>

          </div>

          {/* Programs */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Programs
            </h3>

            <ul className="space-y-3 text-blue-100">
              <li>AI Foundation</li>
              <li>Content Creation</li>
              <li>Shopify & E-Commerce</li>
              <li>Digital Marketing</li>
              <li>Social Media Management</li>
              <li>Graphic Designing</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Get In Touch
            </h3>

            <div className="space-y-5 text-blue-100">

              <div className="flex items-start gap-3">
                <Mail size={20} />
                <span>contact@aikisaschool.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} />
                <span>+92 331 3600353</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} />
                <span>
                  B-12, Survey No 492 <br />
                  Jaffar-e-Tayyar Society <br />
                  Malir, Karachi, Pakistan
                </span>
              </div>

            </div>

          </div>

        </div>

        <hr className="border-blue-400 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-blue-100">

          <p>
            © 2025 AI KISA School. All Rights Reserved.
          </p>

          <p>
            Design & Developed by <strong>Taqi Mehdi</strong> | 0317-7741792
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;