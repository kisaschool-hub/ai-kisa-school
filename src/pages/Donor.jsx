import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

const DONOR_ACCESS_KEY = "9304ab5b-a426-49af-99bd-4261ae7ce561";

const donationOptions = [
  { value: "Monthly Support", label: "Monthly Support" },
  { value: "One time Gift", label: "One time Gift" },
  { value: "Sponsor a Learner", label: "Sponsor a Learner" },
];

const initialForm = {
  donorName: "",
  donorCnic: "",
  mobileNumber: "",
  email: "",
  donationType: "Monthly Support",
};

const donationMessage =
  "Assalam-o-Alaikum, I would like to support AI KISA School and contribute towards providing free, future-ready education to deserving children. Please guide me regarding the donation process.";

export default function Donor() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCnicChange = (event) => {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 13);
    setFormData((prev) => ({ ...prev, donorCnic: digits }));
    setErrors((prev) => ({ ...prev, donorCnic: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.donorName.trim()) nextErrors.donorName = "Donor Name is required.";
    if (!/^\d{13}$/.test(formData.donorCnic)) {
      nextErrors.donorCnic = "Donor CNIC must contain exactly 13 numeric digits.";
    }
    if (!formData.mobileNumber.trim()) nextErrors.mobileNumber = "Mobile Number is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.donationType) nextErrors.donationType = "Please select a donation type.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setSubmissionError("");
    setIsSubmitting(true);
    const payload = new FormData();
    payload.append("access_key", DONOR_ACCESS_KEY);
    payload.append("to", "donor@aikisaschool.com");
    payload.append("subject", "New Donation/Support Inquiry - AI KISA School");
    payload.append("donor_name", formData.donorName);
    payload.append("donor_cnic", formData.donorCnic);
    payload.append("mobile_number", formData.mobileNumber);
    payload.append("email", formData.email);
    payload.append("donation_type", formData.donationType);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");

      setSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      console.error("Donor submission error:", error);
      setSubmissionError("There was a problem submitting your support enquiry. Please try again or contact the school directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Become a Donor | AI KISA School"
        description="Support AI KISA School and help provide free, future-ready education to children who deserve opportunity and access to modern technology."
        url="https://www.aikisaschool.com/donor"
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <PageHero
          eyebrow="DONOR"
          title="Help us give every child a real chance."
          description="Your support helps AI KISA School keep learning free, focused on the future and accessible for students who deserve quality education and a path to opportunity."
          backgroundImage="/Donor.webp"
          mobileBackgroundImage="/Donormobile.webp"
        />

        <section className="container-page py-20 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">What We Do</p>
              <h2 className="mt-4 text-3xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937] md:text-4xl">
                Free education, practical learning, and real opportunity.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#4d5967]">
                AI KISA School provides free, future ready education to children who may otherwise have limited access to quality schooling. Alongside foundational academic learning, we introduce students to Artificial Intelligence, AI tools, coding, web development, digital literacy, content creation, digital marketing and data analytics. Through practical, project based learning and access to Chromebooks and laptops, students gain hands on experience with modern technology while developing communication, creativity, problem solving skills and confidence.
              </p>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-[#e7e1d8] bg-white shadow-[0_12px_28px_rgba(17,34,32,0.04)]">
              <img
                src="/Homecomp.webp"
                alt="Students learning with technology in a supportive classroom environment"
                loading="lazy"
                decoding="async"
                className="block h-[320px] w-full object-cover md:h-[420px] lg:h-[460px]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="container-page">
            <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="order-2 overflow-hidden rounded-[22px] border border-[#e7e1d8] bg-[#F5F8FC] shadow-[0_12px_28px_rgba(17,34,32,0.04)] lg:order-1">
                <img
                  src="/About.webp"
                  alt="Students and community members engaged in learning and impact activities"
                  loading="lazy"
                  decoding="async"
                  className="block h-[320px] w-full object-cover md:h-[420px] lg:h-[460px]"
                />
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1B2A5C]">Our Impact</p>
                <h2 className="mt-4 text-3xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937] md:text-4xl">
                  Creating access, confidence and opportunity.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#4d5967]">
                  Since its establishment, AI KISA School has helped create meaningful educational opportunities for children who might otherwise be excluded from quality education. Today, students are not only continuing their education but are also developing confidence, participating in technology and creative projects, and applying their skills in real world activities. Our students have achieved recognition in competitions, including winning Rs. 100,000 in the AI Preneur competition and succeeding in Iqbal Day speaking competitions, demonstrating how access to education, technology and opportunity can help children discover their potential and build a more confident future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-page py-8 md:py-10">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#1B2A5C_0%,#2E4A9E_100%)] px-6 py-10 text-center text-white shadow-[0_18px_44px_rgba(27,42,92,0.18)] sm:px-10">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#DFB863]">Choose your support</p>
            <h2 className="mt-4 text-3xl font-black leading-[1.06] tracking-[-0.04em] text-white md:text-4xl">
                Help fund free, future ready education.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#edf4ef]">
              Your generosity keeps learning accessible, practical and future focused for every child.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {donationOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, donationType: option.value }))}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    formData.donationType === option.value
                      ? "border border-[#DFB863] bg-[#DFB863] text-[#1B2A5C] shadow-[0_12px_22px_rgba(223,184,99,0.28)]"
                      : "border border-white/35 bg-white/5 text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container-page pb-20 md:pb-24">
          <div className="mx-auto max-w-[760px] rounded-[18px] border border-[#e7e1d8] bg-white p-4 shadow-[0_10px_24px_rgba(17,34,32,0.04)] md:p-6">
            <div className="mb-6">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">Support</p>
              <h2 className="mt-3 text-2xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937]">
                Become a donor
              </h2>
            </div>

            {submitted ? (
              <div className="rounded-[12px] border border-[#dfe6df] bg-[#f4f8f4] p-5 text-center" role="status" aria-live="polite">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#1B2A5C]" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-[#1B2A5C]">Thank you for your support.</p>
                <p className="mt-2 text-sm text-[#4d5967]">We will contact you for further details.</p>
                <a
                  href={`https://wa.me/923313600353?text=${encodeURIComponent(donationMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex flex-col items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(37,211,102,0.22)] transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Contact
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {submissionError ? <p className="text-sm text-red-600" role="alert">{submissionError}</p> : null}
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Donor Name</span>
                    <input
                      type="text"
                      name="donorName"
                      value={formData.donorName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.donorName ? <span className="mt-1 block text-xs text-red-600">{errors.donorName}</span> : null}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Donor CNIC</span>
                    <input
                      type="text"
                      name="donorCnic"
                      value={formData.donorCnic}
                      onChange={handleCnicChange}
                      placeholder="13 digit CNIC"
                      inputMode="numeric"
                      maxLength={13}
                      className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.donorCnic ? <span className="mt-1 block text-xs text-red-600">{errors.donorCnic}</span> : null}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Mobile Number</span>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="03xx xxxxxxx"
                      className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.mobileNumber ? <span className="mt-1 block text-xs text-red-600">{errors.mobileNumber}</span> : null}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Gmail/Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.email ? <span className="mt-1 block text-xs text-red-600">{errors.email}</span> : null}
                  </label>
                </div>

                <div>
                  <span className="mb-2 block text-[0.82rem] font-medium text-[#1B2A5C]">Donation type</span>
                  <div className="grid gap-3 md:grid-cols-3">
                    {donationOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex cursor-pointer items-start gap-3 rounded-[16px] border p-3 transition ${
                          formData.donationType === option.value
                            ? "border-[#1B2A5C] bg-[#EEF4FF]"
                            : "border-[#e7e1d8] bg-[#fafcfb]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="donationType"
                          value={option.value}
                          checked={formData.donationType === option.value}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 accent-[#1B2A5C]"
                        />
                        <span className="text-sm font-semibold text-[#1F2937]">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.donationType ? <span className="mt-2 block text-xs text-red-600">{errors.donationType}</span> : null}
                </div>

                <p className="text-sm text-[#4d5967]">We will contact you for further details.</p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1B2A5C] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(27,42,92,0.16)] transition-transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? "Sending" : "Submit donation enquiry"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
