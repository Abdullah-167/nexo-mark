import Hero from "./Components/Home/Hero";
import MainHome from "./Components/Home/MainHome";
import Navbar from "./Components/Layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Nexo Mark",
  description: "Nexo Mark helps businesses grow through expert web development, SEO, digital marketing, branding, video editing and stunning design. Build your brand with purpose-driven solutions that deliver results.",
};

export default async function Home() {
  return (
    <main className="">
      <MainHome />
    </main>
  );
}
