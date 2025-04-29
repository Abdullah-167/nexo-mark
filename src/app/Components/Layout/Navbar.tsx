// app/components/Nav.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed z-[10000] top-0 w-full bg-neutral-950/80 backdrop-blur-md  border-b border-neutral-800"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - matches hero typography */}
        <motion.a href="/" whileHover={{ scale: 1.03 }} className="">
          <Image
            src={"/logowhite.png"}
            className="max-h-[70px] object-cover"
            alt={""}
            width={170}
            height={70}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <motion.a
            href="/"
            whileHover={{ color: "#f5f5f5" }}
            className="text-neutral-300 text-sm tracking-wider"
          >
            Home
          </motion.a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
          >
            <motion.button
              whileHover={{ color: "#f5f5f5" }}
              className="flex items-center gap-1 text-neutral-300 text-sm tracking-wider"
            >
              <Link href={"/services"}>Services</Link>
              <motion.span
                animate={{ rotate: servicesHover ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="h-3.5 w-3.5" />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {servicesHover && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="absolute top-full left-0 mt-4 w-48 bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden shadow-xl"
                >
                  {[
                    {
                      name: "Web Development",
                      link: "/services/website-development",
                    },
                    { name: "UI/UX Design", link: "/services/ui-ux" },
                    { name: "Branding", link: "/services/branding" },
                    {
                      name: "Digital Marketing",
                      link: "/services/digital-marketing",
                    },
                  ].map((service) => (
                    <motion.a
                      key={service.name}
                      href={service.link}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="block px-4 py-3 text-neutral-300 text-sm border-b border-neutral-800 last:border-0"
                    >
                      {service.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { name: "Work", link: "/work" },
            { name: "About", link: "/about-us" },
            { name: "Contact", link: "/contact" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={`#${item.link.toLowerCase()}`}
              whileHover={{ color: "#f5f5f5" }}
              className="text-neutral-300 text-sm tracking-wider"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 text-neutral-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-neutral-900 border-t border-neutral-800"
          >
            <div className="px-6 py-4 space-y-4">
              {[
                { name: "Home", href: "/" },
                {
                  name: "Services",
                  subitems: [
                    { name: "Website Development", link: "/services-website-development" },
                    { name: "Ui/Ux", link: "/services/ui-ux" },
                    { name: "Digital Marketing", link: "/services/digital-marketing" },
                    { name: "Branding", link: "/services/branding" },
                  ],
                },
                { name: "Work", href: "/work" },
                { name: "About", href: "/about-us" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border-b border-neutral-800 last:border-0 pb-4 last:pb-0"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-neutral-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-neutral-300 py-2"
                        onClick={() => setServicesHover(!servicesHover)}
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform ${
                            servicesHover ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesHover && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.subitems?.map((subitem) => (
                              <a
                                key={subitem.name}
                                href={subitem.link}
                                className="block text-neutral-400 py-2 text-sm"
                                onClick={() => setIsOpen(false)}
                              >
                                {subitem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
