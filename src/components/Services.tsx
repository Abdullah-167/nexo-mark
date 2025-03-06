"use client";

import Link from "next/link";
import { Service } from "../utils/interface"; // Importing Service interface correctly
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import { HoverImage } from "./ui/HoverImage";

// Make sure ServiceProps is correctly typed
export interface ServiceProps {
  services: Service[];
}


function Services({ services  }: any) {
  return (
    <section className="px-2 py-20 relative" id="services">
      <SectionHeading className="md:pl-16 overflow-hidden tracking-tighter">
        <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
        <SlideIn>We can help you</SlideIn>
      </SectionHeading>
      <div className="mx-auto pt-10">
        {services.map((service) => {
          return (
            <div id={service.id} key={service._id}> {/* No type assertion needed now */}
              <Transition>
                <HoverImage
                  heading={service.name}
                  imgSrc={service.image.url}
                  subheading={service.desc} price={""}                />
              </Transition>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
