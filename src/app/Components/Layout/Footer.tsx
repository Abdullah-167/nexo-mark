"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-neutral-300 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <motion.a href="/" whileHover={{ scale: 1.03 }} className="">
            <Image
              src={"/logowhite.png"}
              className="max-h-[70px] object-cover"
              alt={""}
              width={170}
              height={70}
            />
          </motion.a>
          <p className="text-neutral-400 max-w-xs">
            Building brands for people, society, and the planet.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/"
            className="hover:text-white transition"
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/about"
            className="hover:text-white transition"
          >
            About Us
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/services"
            className="hover:text-white transition"
          >
            Services
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </motion.a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end items-center space-x-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-white transition"
          >
            <FaFacebookF size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-white transition"
          >
            <FaTwitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-white transition"
          >
            <FaLinkedinIn size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-white transition"
          >
            <FaInstagram size={20} />
          </motion.a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-16 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
