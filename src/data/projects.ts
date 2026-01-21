export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "lubricentro",
    title: "Sistema de Stock - Lubricentro",
    description:
      "Aplicación web para gestionar productos, categorías y stock en tiempo real para un negocio físico.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/projects/lubricentro.png",
    demo: "https://phenomenal-granita-92f9ab.netlify.app/",
    repo: "https://github.com/leandroArias1/frontend-lubricentro",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Full Stack",
    description:
      "Plataforma e-commerce con catálogo, carrito y flujo de compra optimizado.",
    stack: ["Astro", "React", "Node.js", "Tailwind", "Stripe"],
    image: "/projects/ecommerce.png",
    demo: "https://e-commerce-livid-iota-93.vercel.app/",
    repo: "https://github.com/leandroArias1/e-commerce",
  },
  {
    slug: "barricas",
    title: "Controlador de Barricas",
    description:
      "Aplicación web para gestionar barricas y movimientos dentro de una bodega.",
    stack: ["React", "Node.js", "SQLite"],
    image: "/projects/barricas.png",
    demo: "https://bodega-maqueta.onrender.com/crear",
    repo: "https://github.com/leandroArias1/barricas",
  },
  {
    slug: "landing-simple",
    title: "Landing Simple",
    description:
      "Landing page simple con diseño moderno y responsive.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/landing-simple.png",
    demo: "https://landing-simple.vercel.app",
    repo: "https://github.com/leandroArias1/landing-simple",
  },
  {
    slug: "estudio-contable",
    title: "Estudio Contable",
    description:
      "Sitio institucional para estudio contable con diseño moderno.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/estudio-contable.png",
    demo: "https://estudio-contable.vercel.app",
    repo: "https://github.com/leandroArias1/estudio-contable",
  },
  {
    slug: "fitgym-landing",
    title: "FitGym Landing",
    description:
      "Landing page para gimnasio con foco en conversión.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/fitgym-landing.png",
    demo: "https://fitgym-landing.vercel.app",
    repo: "https://github.com/leandroArias1/fitgym-landing",
  },
];

/**
 * Proyectos secundarios (solo para /projects)
 */
export const extraProjects: Project[] = projects.filter(
  (project) =>
    project.slug === "landing-simple" ||
    project.slug === "estudio-contable" ||
    project.slug === "fitgym-landing"
);
