"use client";

import { Skill } from "../utils/interface";
import { ParallaxText } from "./ui/ParallaxText";

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills">
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill, index) =>
          skill.enabled ? (
            <span
              key={`parallax-1-${index}`} // Ensure uniqueness
              className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>

      <ParallaxText baseVelocity={5}>
        {skills.map((skill, index) =>
          skill.enabled ? (
            <span
              key={`parallax-2- ${index}`} // Ensure uniqueness
              className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>

      <ParallaxText baseVelocity={-5}>
        {skills.map((skill, index) =>
          skill.enabled ? (
            <span
              key={`parallax-3-${index}`} // Ensure uniqueness
              className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>
    </section>
  );
}

export default Skills;
