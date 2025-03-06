"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Example = () => {
  return (
    <div className=" hidden md:flex items-center justify-between px-6 py-6  nav-bg">
      <div>
        <Image src={"/logo.svg"} alt={"nexo-mark logo"} width={100} height={100}/>
      </div>
      <div className="flex space-x-8">
        {/* Keep dropdown only for Services */}
        <FlyoutLink href="#" FlyoutContent={PricingContent}>Services</FlyoutLink>
        {/* Remove dropdowns for Projects and Resources */}
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#testimonials">Reviews</NavLink>
      </div>
      <div>
        <a href="#contact" className="text-white font-medium">Contact Us</a>
      </div>
    </div>
  );
};

// Component for normal nav links without dropdown
const NavLink = ({ children, href }) => (
  <a href={href} className="text-white font-medium ">
    {children}
  </a>
);

// Flyout link (Dropdown) remains for Services
const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white font-medium">
        {children}
        <span
          className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-300 ease-out ${open ? "scale-x-100" : "scale-x-0"}`}
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -left-24 top-[30px] mt-2 z-50 backdrop-blur-lg bg-gradient-to-r from-[#7c4c93]/60 to-[#2B1D32]/60 rounded-lg p-2"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Services Dropdown Content
const PricingContent = () => (
  <div className="w-64 p-4 rounded-lg shadow-xl backdrop-blur-lg">
    <a href="#customWebsiteDevelopment" className="block text-sm hover:underline pb-0.5">Custom Website Development</a>
    <a href="#digitalMarketing" className="block text-sm hover:underline pb-0.5">Digital Marketing</a>
    <a href="#seo" className="block text-sm hover:underline pb-0.5">SEO</a>
    <a href="#graphicsDesigning" className="block text-sm hover:underline pb-0.5">Graphics Designing</a>
    <a href="#brandConsultation" className="block text-sm hover:underline pb-0.5">Brand Consultation</a>
    <a href="#wordpressDevelopment" className="block text-sm hover:underline pb-0.5">Wordpress Development</a>
    <a href="#shopifyDevelopment" className="block text-sm hover:underline pb-0.5">Shopify Development</a>
  </div>
);

export default Example;
