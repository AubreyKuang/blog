import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "About", icon: "user", link: "/" },
  {
    text: "Notes (中文)",
    icon: "box-archive",
    prefix: "/zh/notes/",
    children: [
      { text: "Overview", icon: "list", link: "" },
      { text: "CS Fundamentals", icon: "laptop-code", link: "cs/" },
      { text: "Java Backend", icon: "mug-hot", link: "java/" },
      { text: "Frontend", icon: "code", link: "frontend/" },
      { text: "Algorithms", icon: "diagram-project", link: "algo/" },
      { text: "English Tests", icon: "language", link: "english/" },
    ],
  },
]);
