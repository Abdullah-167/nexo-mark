const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Nexo Mark",
  description:
    "We provide digital marketing, seo , website development , wordpress develpment, shopify , graphic designing and branding services.",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "",
    github: "",
  },
  mailSupport: "business@nexomark.agency",
};
