import { useEffect } from "react";

export default function SEO({
  title,
  description,
  image = "https://www.aikisaschool.com/Homehero.webp",
  url = "https://www.aikisaschool.com/",
  breadcrumbs = [],
  faq = [],
}) {
  const canonicalUrl = url;
  const pagePath = new URL(canonicalUrl).pathname;
  const defaultBreadcrumbs = pagePath !== "/" && pagePath !== "/404"
    ? [
        { name: "Home", path: "/" },
        { name: pagePath.split("/").filter(Boolean).pop().replace(/-/g, " "), path: pagePath },
      ]
    : [];
  const breadcrumbItems = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "AI KISA School",
      url: "https://www.aikisaschool.com/",
      logo: "https://www.aikisaschool.com/favicon.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B-12, Survey No 492, Jaffar-e-Tayyar Society, Malir",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
      telephone: "+92 331 3600353",
      email: "contact@aikisaschool.com",
      sameAs: [
        "https://www.facebook.com/share/18SjctuFnk/",
        "https://www.instagram.com/ai_kisa_school",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "AI KISA School",
      url: "https://www.aikisaschool.com/",
    },
  ];

  if (breadcrumbItems.length > 0) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumb.name,
        item: `https://www.aikisaschool.com${breadcrumb.path}`,
      })),
    });
  }

  if (faq.length > 0) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const schemaJson = JSON.stringify(schema);

  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = title;

    const metadata = [
      ["name", "description", description],
      ["name", "keywords", "AI KISA School, free education Karachi, AI education, coding, robotics, digital skills"],
      ["name", "author", "AI KISA School"],
      ["name", "robots", "index, follow"],
      ["name", "theme-color", "#1B2A5C"],
      ["property", "og:type", "website"],
      ["property", "og:site_name", "AI KISA School"],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:url", canonicalUrl],
      ["property", "og:image", image],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", title],
      ["name", "twitter:description", description],
      ["name", "twitter:image", image],
    ];

    document.head.querySelectorAll("[data-kisa-seo]").forEach((element) => element.remove());

    metadata.forEach(([attribute, name, content]) => {
      const element = document.createElement("meta");
      element.setAttribute(attribute, name);
      element.setAttribute("content", content);
      element.dataset.kisaSeo = "true";
      document.head.appendChild(element);
    });

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = canonicalUrl;
    canonical.dataset.kisaSeo = "true";
    document.head.appendChild(canonical);

    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.textContent = schemaJson;
    structuredData.dataset.kisaSeo = "true";
    document.head.appendChild(structuredData);

    return () => {
      document.head.querySelectorAll("[data-kisa-seo]").forEach((element) => element.remove());
    };
  }, [canonicalUrl, description, image, schemaJson, title]);

  return (
    null
  );
}