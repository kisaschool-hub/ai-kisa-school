import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <SEO
        title="AI KISA School Karachi | AI School & Digital Skills School in Pakistan"
        description="AI KISA School Karachi provides Artificial Intelligence, Coding, Robotics and Digital Skills education for students across Pakistan. Admissions are now open."
        url="https://aikisaschool.com/"
      />

      <Hero />
      <Stats />
      <Programs />
      <Reviews />
    </>
  );
}