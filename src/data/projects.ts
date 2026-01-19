export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Sistema de Stock - Lubricentro",
    description:
      "Aplicación web para gestionar productos, categorías y stock en tiempo real para un negocio físico.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/projects/lubricentro.png",
    demo: "https://phenomenal-granita-92f9ab.netlify.app/",
    repo: "https://github.com/leandroArias1/frontend-lubricentro",
  },
  {
    title: "E-commerce Full Stack",
    description:
      "Plataforma e-commerce con catálogo, carrito y flujo de compra optimizado.",
    stack: ["Astro", "React", "Node.js", "Tailwind", "Stripe"],
    image: "/projects/ecommerce.png",
    demo: "https://demo-ecommerce.vercel.app",
    repo: "https://github.com/usuario/ecommerce-app",
  },
  {
    title: "Controlador de Barricas",
    description:
      "Aplicación web para gestionar productos, categorías y stock en tiempo real para un negocio físico.",
    stack: ["React", "Node.js", "SQLite"],
    image: "/projects/barricas.png",
    demo: "https://bodega-maqueta.onrender.com/crear",
    repo: "https://github.com/leandroArias1/barricas",
  },
];
