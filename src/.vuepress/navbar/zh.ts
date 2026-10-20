import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "关于我", icon: "user", link: "/zh/" },
  {
    text: "笔记归档",
    icon: "box-archive",
    prefix: "/zh/notes/",
    children: [
      { text: "总览", icon: "list", link: "" },
      { text: "计算机基础", icon: "laptop-code", link: "cs/" },
      { text: "Java 后端", icon: "mug-hot", link: "java/" },
      { text: "前端", icon: "code", link: "frontend/" },
      { text: "算法", icon: "diagram-project", link: "algo/" },
      { text: "英语考试", icon: "language", link: "english/" },
    ],
  },
]);
