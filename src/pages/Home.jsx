import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <SEO
        title="AI KISA School Pakistan | AI School & Digital Skills School"
        description="AI KISA School provides Artificial Intelligence, Coding, Robotics and Digital Skills education for students across Pakistan through online and campus-based learning."
        url="https://aikisaschool.com/"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "AI KISA School",
                "url": "https://aikisaschool.com",
                "logo": "https://aikisaschool.com/logo.png"
              },
              {
                "@type": "EducationalOrganization",
                "name": "AI KISA School",
                "url": "https://aikisaschool.com",
                "description": "AI, Data Analytics, Digital Marketing and E-Commerce training institute in Pakistan."
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AI KISA School",
            "url": "https://aikisaschool.com",
            "image": "https://aikisaschool.com/logo.png",
            "telephone": "+92331 3600353",
            "email": "Contact@aikisaschool.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "B12 Survey 492 jaffar tayyar",
              "addressLocality": "Karachi",
              "addressRegion": "Sindh",
              "postalCode": "75050",
              "addressCountry": "PK"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/ai.kisa.school",
              "https://www.instagram.com/ai_kisa_school/",
            
            ]
          })
        }}
      />

      <Hero />
      <Stats />
      <Programs />
      <Reviews />
    </>
  );
}