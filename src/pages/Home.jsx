import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <SEO
        title="KISA Model School | AI School & Digital Skills Academy Karachi"
        description="KISA Model School provides AI education, Digital Skills, Web Development, Shopify, Data Analytics, Digital Marketing and future-ready learning in Pakistan."
        url="https://aikisaschool.com/"
        image="https://aikisaschool.com/hero.png"
      />

      <Hero />
      <Stats />
      <Programs />
      <Reviews />
    </>
  );
}