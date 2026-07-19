import SEO from "../components/SEO";
import { useState } from "react";

function Admission() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "9304ab5b-a426-49af-99bd-4261ae7ce561");
    formData.append("subject", "New Admission Form - AI KISA School");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <SEO
        title="School Admissions Pakistan | AI KISA School"
        description="Apply for admission at AI KISA School. Join Pakistan's future-ready AI and Digital Skills school with online and campus-based learning."
        url="https://aikisaschool.com/admission"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-extrabold text-[#2F3D7C]">
            Admissions Open Across Pakistan
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Apply now to join AI KISA School and start learning Artificial
            Intelligence, Coding, Robotics, Digital Marketing, Data Analytics,
            Shopify and future-ready Digital Skills. Students from all over
            Pakistan are welcome.
          </p>

        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-100 text-green-700 text-center font-semibold">
                ✅ Your admission form has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Student Name"
                required
                className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
              />

              <input
                type="text"
                name="father_name"
                placeholder="Father Name"
                required
                className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
              />

              <input
                type="text"
                name="cnic"
                placeholder="CNIC Number (13 Digits)"
                required
                maxLength={13}
                pattern="[0-9]{13}"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 13);
                }}
                className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
              />

              <input
                type="text"
                name="institute"
                placeholder="School / College / University Name"
                required
                className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
              />

              <input
                type="text"
                name="experience"
                placeholder="Computer Experience"
                className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
              />

              <select
                name="course"
                required
                className="w-full border border-blue-100 rounded-xl px-5 py-3 outline-none focus:border-[#2F3D7C]"
              >
                <option value="">Select Course</option>
                <option>AI Foundation</option>
                <option>Content Creation</option>
                <option>Shopify & E-Commerce</option>
                <option>Digital Marketing</option>
                <option>Social Media Management</option>
                <option>Data Analytics</option>
              </select>

              <button
                type="submit"
                className="w-full bg-[#2F3D7C] hover:bg-[#4E82BE] text-white py-3 rounded-xl font-semibold transition"
              >
                Apply for Admission
              </button>

            </form>

          </div>

        </div>
      </section>
    </>
  );
}

export default Admission;