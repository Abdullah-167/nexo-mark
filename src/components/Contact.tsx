"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { About, SocialHandle } from "../utils/interface";
import { cn } from "../utils/cn";
import Link from "next/link";
import { SectionHeading, TextReveal } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transitions";
import { Input, Textarea } from "./ui/Input";

interface ContactProps {
  email: string;
  social_handle: SocialHandle[];
  about: About;
}
const Contact = ({ email, social_handle, about }: ContactProps) => {
  const [status, setStatus] = useState<"SENDING" | "DONE" | "ERROR" | "IDLE">(
    "IDLE"
  );
  const [statusText, setStatusText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    try {
      // Sending POST request to the API
      const response = await fetch("/api/contact/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("DONE");
        setFormData({
          email: "",
          message: "",
          name: "",
          subject: "",
        });
        setStatusText("Message sent successfully!");
      } else {
        setStatus("ERROR");
        setStatusText(data.message || "Error sending message");
      }
    } catch (error: any) {
      setStatus("ERROR");
      setStatusText("Error sending message: " + error.message);
      console.error("Error sending message:", error.message);
    }
  };

  useEffect(() => {
    if (status === "DONE" || status === "ERROR") {
      const timer = setTimeout(() => {
        setStatus("IDLE");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <motion.section className="relative" id="contact">
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px] -z-10" />
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading className="">
          <SlideIn className="text-white/40">Interested in talking,</SlideIn>{" "}
          <br /> <SlideIn>{`let’s`} do it.</SlideIn>
        </SectionHeading>
        <div className="grid md:grid-cols-2 gap-10 md:pt-16">
          {status === "DONE" ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white text-2xl font-semibold p-6 bg-white/10 rounded-lg"
            >
              <p>Thank you for reaching out to Nexomark!</p>
              <p className="text-lg text-[#BFBFC6] mt-2">
                We've received your message and our team will review it shortly.
                Expect a response within 24-48 hours.
              </p>
              <p className="text-lg text-[#BFBFC6] mt-2">
                In the meantime, feel free to explore our services or check out
                our latest work.
              </p>
              <div className="mt-4">
                <Link href="#services" className="text-[#BFBFC6] underline">
                  Check Our Services
                </Link>
              </div>
            </motion.div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <Transition className="w-full">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Full name"
                    className="border-0 border-b rounded-none"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Transition>
                <Transition className="w-full">
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="border-0 border-b rounded-none"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Transition>
              </div>
              <div className="space-y-2">
                <Transition>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject"
                    className="border-0 border-b rounded-none"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </Transition>
              </div>
              <div className="space-y-2">
                <Transition>
                  <Textarea
                    className="min-h-[100px] rounded-none border-0 border-b resize-none"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Transition>
              </div>
              <div>
                <Transition>
                  <motion.button
                    whileHover="whileHover"
                    initial="initial"
                    className="border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden"
                    type="submit"
                  >
                    <TextReveal className="uppercase">
                      {status === "SENDING" ? "Sending..." : "Send"}
                    </TextReveal>
                  </motion.button>
                </Transition>
              </div>
            </form>
          )}
        </div>
      </div>
      <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm">
        <Transition>
          <div className="flex gap-3">
            <p>
              developed by &copy;
              <Link href={""} className="hover:underline">
                nexomark.agency
              </Link>
            </p>
          </div>
        </Transition>
        <Transition></Transition>
      </footer>
    </motion.section>
  );
};

export default Contact;
