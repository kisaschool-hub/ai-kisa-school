import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";

const ADMISSION_ACCESS_KEY = "9304ab5b-a426-49af-99bd-4261ae7ce561";
const ADMISSION_WHATSAPP_MESSAGE =
  "Assalam-o-Alaikum, I have just submitted the admission form for my child at AI KISA School. Please guide me regarding the next steps.";

const initialForm = {
  studentName: "",
  fatherName: "",
  fatherCnic: "",
  classApplyingFor: "",
  previousSchool: "",
  reasonForScholarship: "",
};

const faqs = [
  {
    question: "Is AI KISA School a free school?",
    answer: "Yes. AI KISA School is committed to providing free, high quality education to children who may not be able to afford expensive private schooling.",
  },
  {
    question: "What does AI KISA School teach?",
    answer: "Students receive strong foundational education alongside Artificial Intelligence, coding, digital literacy, computer skills, robotics, creative skills and other future ready learning.",
  },
  {
    question: "Who can apply for admission?",
    answer: "Admission is intended for students who meet the school's eligibility requirements. Families can contact the school or submit the admission application to learn more about eligibility and available places.",
  },
  {
    question: "How can I apply for admission?",
    answer: "Parents or guardians can complete the admission application form on the website or contact AI KISA School directly for guidance about the admission process.",
  },
];

function Admission() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCnicChange = (event) => {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 13);
    setFormData((prev) => ({ ...prev, fatherCnic: digits }));
    setErrors((prev) => ({ ...prev, fatherCnic: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.studentName.trim()) nextErrors.studentName = "Student Name is required.";
    if (!formData.fatherName.trim()) nextErrors.fatherName = "Father Name is required.";
    if (!/^\d{13}$/.test(formData.fatherCnic)) {
      nextErrors.fatherCnic = "Father CNIC must contain exactly 13 numeric digits.";
    }
    if (!formData.classApplyingFor) nextErrors.classApplyingFor = "Class applying for is required.";
    if (!formData.previousSchool.trim()) nextErrors.previousSchool = "Previous School is required.";
    if (!formData.reasonForScholarship.trim()) nextErrors.reasonForScholarship = "Reason for Scholarship is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    const payload = new FormData();
    payload.append("access_key", ADMISSION_ACCESS_KEY);
    payload.append("subject", "New Admission Enquiry - AI KISA School");
    payload.append("student_name", formData.studentName);
    payload.append("father_name", formData.fatherName);
    payload.append("father_cnic", formData.fatherCnic);
    payload.append("class_applying_for", formData.classApplyingFor);
    payload.append("previous_school", formData.previousSchool);
    payload.append("reason_for_scholarship", formData.reasonForScholarship);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      console.error("Admission submission error:", error);
      alert("There was a problem submitting the form. Please contact the admissions team directly.");
    }
  };

  return (
    <>
      <SEO
        title="Admission | AI KISA School Karachi"
        description="Learn about admission at AI KISA School Karachi, eligibility, application process and free education opportunities for deserving students."
        url="https://www.aikisaschool.com/admission"
        faq={faqs}
      />

      <main className="bg-[#F5F8FC] text-[#1F2937]">
        <PageHero
          eyebrow="Admission"
          title="Admission is open and it costs nothing."
          description="There is no tuition, no application fee and no entrance payment. We welcome enquiries from every family."
          backgroundImage="/Admission.webp"
          mobileBackgroundImage="/Admissionmobile.webp"
        />

        <section className="container-page kisa-section--tight">
          <div className="mb-7 max-w-[760px]">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">How it works</p>
            <h2 className="mt-3 text-2xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937]">
              Four simple steps
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Submit an enquiry",
                text: "Share the learner's details using the form below.",
              },
              {
                number: "02",
                title: "Family conversation",
                text: "We meet the family to understand needs and answer questions.",
              },
              {
                number: "03",
                title: "Placement assessment",
                text: "A friendly assessment helps us place the learner in the right year group.",
              },
              {
                number: "04",
                title: "Offer & enrolment",
                text: "Offers are confirmed in writing. There is nothing to pay at any stage.",
              },
            ].map((step) => (
              <article key={step.number} className="rounded-[16px] border border-[#e7e1d8] bg-white p-4 shadow-[0_8px_20px_rgba(17,34,32,0.04)]">
                <p className="text-2xl font-black leading-none tracking-[-0.04em] text-[#d9e9de]">{step.number}</p>
                <h3 className="mt-3 text-lg font-bold leading-[1.15] tracking-[-0.03em] text-[#1B2A5C]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4d5967]">{step.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-7 text-[0.96rem] leading-7 text-[#4d5967]">
            Families are encouraged to start early so our team can guide them through the right placement and enrolment steps.
          </p>
        </section>

        <section className="bg-[#F5F8FC] kisa-section--tight">
          <div className="container-page">
            <div className="mx-auto max-w-[760px] rounded-[18px] border border-[#e7e1d8] bg-white p-4 shadow-[0_10px_24px_rgba(17,34,32,0.04)] md:p-5 lg:p-6">
              <div className="mb-6">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#1B2A5C]">Apply</p>
                <h2 className="mt-3 text-2xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937]">
                  Start an application enquiry
                </h2>
                <p className="mt-3 text-[0.96rem] leading-7 text-[#4d5967]">
                  Complete the form and our admissions team will follow up.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-[12px] border border-[#dfe6df] bg-[#f4f8f4] p-5 text-center">
                  <p className="text-lg font-semibold text-[#1B2A5C]">Your enquiry has been submitted.</p>
                  <p className="mt-2 text-sm text-[#4d5967]">The admissions team will review it shortly.</p>
                  <a
                    href={`https://wa.me/923313600353?text=${encodeURIComponent(ADMISSION_WHATSAPP_MESSAGE)}`}
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
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Student Name</span>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                      />
                      {errors.studentName ? <span className="mt-1 block text-xs text-red-600">{errors.studentName}</span> : null}
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Father Name</span>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        placeholder="Father full name"
                        className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                      />
                      {errors.fatherName ? <span className="mt-1 block text-xs text-red-600">{errors.fatherName}</span> : null}
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Father CNIC</span>
                      <input
                        type="text"
                        name="fatherCnic"
                        value={formData.fatherCnic}
                        onChange={handleCnicChange}
                        placeholder="13 digit CNIC"
                        inputMode="numeric"
                        maxLength={13}
                        className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                      />
                      {errors.fatherCnic ? <span className="mt-1 block text-xs text-red-600">{errors.fatherCnic}</span> : null}
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Class applying for</span>
                      <select
                        name="classApplyingFor"
                        value={formData.classApplyingFor}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                      >
                        <option value="">Select class</option>
                        {Array.from({ length: 10 }, (_, index) => index + 1).map((n) => (
                          <option key={n} value={`Class ${n}`}>
                            Class {n}
                          </option>
                        ))}
                      </select>
                      {errors.classApplyingFor ? <span className="mt-1 block text-xs text-red-600">{errors.classApplyingFor}</span> : null}
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Previous School</span>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="School name"
                      className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.previousSchool ? <span className="mt-1 block text-xs text-red-600">{errors.previousSchool}</span> : null}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[0.82rem] font-medium text-[#1B2A5C]">Reason for Scholarship</span>
                    <textarea
                      name="reasonForScholarship"
                      value={formData.reasonForScholarship}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about the circumstances and why support is needed."
                      className="w-full rounded-[12px] border border-[#dfe4df] bg-[#fafcfb] px-3.5 py-2.5 text-[0.96rem] text-[#1F2937] outline-none transition focus:border-[#1B2A5C]"
                    />
                    {errors.reasonForScholarship ? <span className="mt-1 block text-xs text-red-600">{errors.reasonForScholarship}</span> : null}
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#1B2A5C] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(27,42,92,0.16)] transition hover:bg-[#1F2F69]"
                  >
                    Submit enquiry
                  </button>
                </form>
              )}

              <section className="mt-10 border-t border-[#e7e1d8] pt-8" aria-labelledby="admission-faq-heading">
                <h2 id="admission-faq-heading" className="text-2xl font-black leading-[1.06] tracking-[-0.04em] text-[#1F2937]">
                  Frequently asked questions
                </h2>
                <div className="mt-4 divide-y divide-[#e7e1d8] border-y border-[#e7e1d8]">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="group py-4">
                      <summary className="cursor-pointer list-none pr-8 text-left text-base font-semibold text-[#1B2A5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2A5C] [&::-webkit-details-marker]:hidden">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-sm leading-6 text-[#4d5967]">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <div className="mt-6 text-center">
                <Link
                  to="/donor"
                  className="inline-flex items-center justify-center rounded-full border border-[#DFB863] bg-[#DFB863] px-6 py-3 text-sm font-semibold text-[#1B2A5C] shadow-[0_12px_22px_rgba(223,184,99,0.28)] transition-transform hover:-translate-y-0.5"
                >
                  Become a Donor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Admission;