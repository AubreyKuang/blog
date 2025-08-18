import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Aubrey's Blog",
      description: "a developer majoring in information system",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "况咏蓓的博客",
      description: "一名信息系统专业学生",
    },
  },

  theme,
  bundler: viteBundler(),

  shouldPrefetch: false,
});
