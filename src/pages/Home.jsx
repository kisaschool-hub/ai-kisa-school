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

      <Hero />
      <Stats />
      <Programs />
      <Reviews />
    </>
  );
}