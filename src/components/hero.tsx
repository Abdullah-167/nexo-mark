"use client";

import Link from "next/link";

import { About } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { TextReveal } from "./ui/Typography";
import { ArrowUpRight } from "./ui/Icons";
// import LoaderWrapper from "./LoaderWrapper";

interface HeroProps {
  about: About;
}

const Hero = ({ about }: HeroProps) => {
  return (
    <section className="sm:mt-0 mt-24 sm:h-dvh w-dvw overflow-hidden relative px-5">
      <Transition>
        <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      </Transition>
      <div className="relative h-full w-full">
        <div className="flex items-center justify-center flex-col h-full pb-10">
          <div className="flex items-center flex-col">
            <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
              <SlideIn>
                {" "}
                <span className="text-white"> Create.</span>{" "}
                <span className="text-gray-400"> Scale. Thrive</span>
              </SlideIn>
            </h2>
          </div>
          <Transition viewport={{ once: true }} className="w-full">
            <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
              In-House Excellence & Full-Spectrum Digital Solutions for Market
              Domination.
            </p>
          </Transition>
          <Transition viewport={{ once: true }}>
            <Link
              href={"#contact"}
              className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-2 group"
            >
              <TextReveal>Let&apos;s talk</TextReveal>
              <ArrowUpRight />
            </Link>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Hero;
