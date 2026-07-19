import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | AI KISA School"
        description="Read the Privacy Policy of AI KISA School to understand how we collect, use and protect your personal information."
        url="https://aikisaschool.com/privacy-policy"
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#2F3D7C] mb-8">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last Updated: July 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              1. Introduction
            </h2>
            <p>
              AI KISA School respects your privacy and is committed to protecting
              the personal information you provide through our website, admission
              forms and communication channels.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              2. Information We Collect
            </h2>

            <ul className="list-disc ml-6">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Admission Information</li>
              <li>Course Interest</li>
              <li>Messages submitted through contact forms</li>
              <li>Website analytics including browser, device and IP address</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6">
              <li>Process admission applications</li>
              <li>Respond to inquiries</li>
              <li>Provide educational services</li>
              <li>Improve our website</li>
              <li>Send important announcements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              4. Google Analytics
            </h2>

            <p>
              We use Google Analytics to understand how visitors interact with our
              website. Analytics may collect anonymous usage information including
              browser type, pages visited and session duration.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              5. Cookies
            </h2>

            <p>
              Our website may use cookies to improve user experience and website
              performance. You can disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              6. Data Security
            </h2>

            <p>
              We take reasonable technical and administrative measures to protect
              your information from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              7. Third Party Links
            </h2>

            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2F3D7C]">
              8. Contact Us
            </h2>

            <p>
              AI KISA School
              <br />
              Karachi, Pakistan
              <br />
              Email: contact@aikisaschool.com
              <br />
              Phone: +92 331 3600353
            </p>
          </div>

        </div>
      </section>
    </>
  );
}