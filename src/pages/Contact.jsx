import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SEO from "../components/SEO";
import PageHero, { SectionHeading } from "../components/PageHero";

const CONTACT_ACCESS_KEY = "REPLACE_WITH_CONTACT_WEB3FORMS_KEY";
const GENERAL_CONTACT_MESSAGE =
  "Assalam-o-Alaikum, I have just submitted the contact form on the AI KISA School website. I would appreciate your response regarding my inquiry.";
const CAMPUS_VISIT_MESSAGE =
  "Assalam-o-Alaikum, I have just submitted a campus visit request through the AI KISA School website. Please confirm a suitable time for my visit.";

const details = [
  { icon: MapPin, label: "Campus", value: "B-12, Survey No 492, Jaffar-e-Tayyar Society, Malir" },
  { icon: Phone, label: "Phone", value: "+92 331 3600353" },
  { icon: Mail, label: "Email", value: "contact@aikisaschool.com" },
  { icon: Clock, label: "School timings", value: "8:00 AM – 1:30 PM" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [waMessage, setWaMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Campus Visit",
    customSubject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Your name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = "Please enter a valid email address.";
    if (!formData.subject) nextErrors.subject = "Subject is required.";
    if (formData.subject === "Other" && !formData.customSubject.trim()) {
      nextErrors.customSubject = "Please enter your custom subject.";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    const payload = new FormData();
    payload.append("access_key", CONTACT_ACCESS_KEY);
    payload.append("subject", "New Contact Form - AI KISA School");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
    payload.append("custom_subject", formData.customSubject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setWaMessage(formData.subject === "Campus Visit" ? CAMPUS_VISIT_MESSAGE : GENERAL_CONTACT_MESSAGE);
      setSent(true);
      setFormData({
        name: "",
        email: "",
        subject: "Campus Visit",
        customSubject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact submission error:", error);
      alert("There was a problem submitting the form. Please email us directly instead.");
    }
  };

  return (
    <>
      <SEO
        title="Contact & Visit | AI KISA School"
        description="Get in touch with AI KISA School for enquiries, admissions, and school visits."
        url="https://aikisaschool.com/contact"
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <PageHero
          eyebrow="Contact"
          title="Talk to us, or come and see the school for yourself."
          description="Our admissions and pastoral teams are happy to answer questions from families, partners and the wider community."
          backgroundImage="/Contact.png"
          mobileBackgroundImage="/Contactmobile.png"
        />

        <section className="container-page grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Reach us" title="School details" />

            <ul className="mt-8 space-y-5">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#EEF4FF] text-[#1B2A5C]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#1B2A5C]">{label}</p>
                    <p className="text-sm leading-6 text-[#4d5967]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          <div className="rounded-[24px] border border-[#e7e1d8] bg-white p-6 shadow-[0_12px_28px_rgba(17,34,32,0.04)] md:p-8">
            {sent ? (
              <div className="text-center" role="status" aria-live="polite">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#1B2A5C]" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.04em] text-[#1B2A5C]">
                  Message sent
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4d5967]">
                  Our admissions team will review your message and respond as soon as possible.
                </p>
                <a
                  href={`https://wa.me/923313600353?text=${encodeURIComponent(waMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex flex-col items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(37,211,102,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Contact
                </a>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[#1B2A5C] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1B2A5C] transition-transform hover:-translate-y-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <h2 className="text-xl font-bold leading-[1.15] tracking-[-0.04em] text-[#1B2A5C]">Send a message</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[0.82rem] font-medium text-[#1B2A5C]">Your name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      autoComplete="name"
                      className="h-[46px] w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.name ? <span className="mt-1 block text-xs text-red-600">{errors.name}</span> : null}
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[0.82rem] font-medium text-[#1B2A5C]">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="h-[46px] w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.email ? <span className="mt-1 block text-xs text-red-600">{errors.email}</span> : null}
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[0.82rem] font-medium text-[#1B2A5C]">Subject</span>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="h-[46px] w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                  >
                    <option value="Campus Visit">Campus Visit</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject ? <span className="mt-1 block text-xs text-red-600">{errors.subject}</span> : null}
                </label>

                {formData.subject === "Other" ? (
                  <label className="block">
                    <span className="mb-2 block text-[0.82rem] font-medium text-[#1B2A5C]">Custom subject</span>
                    <input
                      type="text"
                      name="customSubject"
                      value={formData.customSubject}
                      onChange={handleChange}
                      placeholder="Please enter your custom subject"
                      className="h-[46px] w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.customSubject ? <span className="mt-1 block text-xs text-red-600">{errors.customSubject}</span> : null}
                  </label>
                ) : null}

                <label className="block">
                  <span className="mb-2 block text-[0.82rem] font-medium text-[#1B2A5C]">Message</span>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="min-h-[140px] w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-3 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                  />
                  {errors.message ? <span className="mt-1 block text-xs text-red-600">{errors.message}</span> : null}
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1B2A5C] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(27,42,92,0.16)] transition-transform hover:-translate-y-0.5"
                >
                  Send message
                </button>

              </form>
            )}

            <div className="mt-6 text-center">
              <Link
                to="/donor"
                className="inline-flex items-center justify-center rounded-full border border-[#DFB863] bg-[#DFB863] px-6 py-3 text-sm font-semibold text-[#1B2A5C] shadow-[0_12px_22px_rgba(223,184,99,0.28)] transition-transform hover:-translate-y-0.5"
              >
                Become a Donor
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;