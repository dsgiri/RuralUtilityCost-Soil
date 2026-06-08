import React from "react";
import { Helmet } from "react-helmet-async";

export interface SeoProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  url?: string;
  image?: string;
}

export const Seo: React.FC<SeoProps> = ({ title, description, type, name, url, image }) => {
  const fullTitle = `${title} | Soil - Rural Utility Cost`;
  const canonicalUrl = url ? `https://soil.ruralutilitycost.com${url}` : "https://soil.ruralutilitycost.com";
  const defaultImage = "https://soil.ruralutilitycost.com/og-image.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": fullTitle,
    "description": description,
    "url": canonicalUrl
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="soil test interpretation, fertilizer recommendation, nutrient removal, cost per nutrient, lime requirement, rural utility cost, farming" />
      <meta name="author" content="Rural Utility Cost" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Facebook & Open Graph tags */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name || "@ruralutilitycost"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};
