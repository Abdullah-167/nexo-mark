const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://nexo-mark.vercel.app/";

export const siteConfig = {
  name: "Nexo Mark",
  description:
    "Nexo Mark is a digital marketing agency specializing in web development, eCommerce store creation, branding, SEO, and digital marketing strategies tailored to your business needs.",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://twitter.com/tehseen_type",
    github: "https://github.com/tehseen01/the-portfolio",
  },
  mailSupport: "tehseen.type@gmail.com",
};
