import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  image = "https://aikisaschool.com/hero.png",
  url = "https://aikisaschool.com/",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="AI School Pakistan, AI Courses Karachi, KISA Model School, Artificial Intelligence, Digital Skills, Web Development, Shopify, Data Analytics"
      />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}