// Valid icon names that match the ICONS object in Skills.astro
export type IconName = 
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "express"
  | "postman"
  | "postgresql"
  | "astro"
  | "mongodb"
  | "tailwindcss"
  | "nodejs"
  | "git"
  | "github";

export type Skill = {
  name: string;
  icon: IconName;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Astro", icon: "astro" },
      { name: "Tailwind", icon: "tailwindcss" },
    ],
  },
  {
    title: "Backend / APIs",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" }
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" }
    ],
  },
];
