import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Aubrey's Blog",
      description: "Software Development Engineer at AWS",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "况咏蓓的博客",
      description: "AWS 软件开发工程师",
    },
  },

  theme,
  bundler: viteBundler(),

  shouldPrefetch: false,
});
