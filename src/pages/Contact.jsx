import SEO from "../components/SEO";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | KISA Model School"
        description="Contact KISA Model School for admissions, AI courses, digital skills programs and student support."
        url="https://aikisaschool.com/contact"
        image="https://aikisaschool.com/hero.png"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block px-6 py-2 rounded-full bg-[#74BDE8]/20 text-[#2F3D7C] font-semibold uppercase tracking-[3px]">
            CONTACT US
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#2F3D7C] mt-4">
            Get In Touch
          </h1>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#F8FAFC] py-14">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Left */}
            <div className="bg-white rounded-2xl shadow-lg p-7">

              <h2 className="text-3xl font-bold text-[#2F3D7C] mb-6">
                Send a Message
              </h2>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >

                <input
                  type="hidden"
                  name="access_key"
                  value="9304ab5b-a426-49af-99bd-4261ae7ce561"
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission - AI KISA School"
                />

                <input
                  type="hidden"
                  name="redirect"
                  value={window.location.origin + "/contact"}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#2F3D7C] hover:bg-[#4E82BE] text-white py-3 rounded-xl font-semibold transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Right */}
            <div className="space-y-4">

              <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5">
                <Mail size={24} className="text-[#74BDE8]" />
                <h3 className="text-lg font-bold text-[#2F3D7C] mt-3">
                  Email
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  contact@aikisaschool.com
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5">
                <Phone size={24} className="text-[#74BDE8]" />
                <h3 className="text-lg font-bold text-[#2F3D7C] mt-3">
                  Phone
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  +92 331 3600353
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5">
                <MapPin size={24} className="text-[#74BDE8]" />
                <h3 className="text-lg font-bold text-[#2F3D7C] mt-3">
                  Address
                </h3>

                <p className="text-sm text-gray-600 mt-1 leading-6">
                  B-12, Survey No 492
                  <br />
                  Jaffar-e-Tayyar Society
                  <br />
                  Malir, Karachi, Pakistan
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5">
                <Clock size={24} className="text-[#74BDE8]" />
                <h3 className="text-lg font-bold text-[#2F3D7C] mt-3">
                  Office Hours
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;