import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  image = "https://aikisaschool.com/hero.png",
  url = "https://aikisaschool.com/",
}) {
  return (
    <Helmet>
      <html lang="en" />

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="AI School Karachi, AI School Pakistan, AI KISA School, Artificial Intelligence School, Coding Classes Karachi, Robotics Classes Karachi, Digital Skills School, AI Courses Karachi, Future Ready School Pakistan, Computer Courses Karachi"
      />

      <meta name="author" content="AI KISA School" />

      <meta name="robots" content="index,follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AI KISA School" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra SEO */}

      <meta name="theme-color" content="#2F3D7C" />
      <meta name="application-name" content="AI KISA School" />
    </Helmet>
  );
}