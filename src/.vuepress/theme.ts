import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

// Old note locations (before they were archived under /zh/notes/)
const legacyNotePaths: [newPrefix: string, oldPrefix: string][] = [
  ["/zh/notes/cs/os/", "/os/"],
  ["/zh/notes/cs/", "/cs/"],
  ["/zh/notes/java/", "/se/BackEnd/"],
  ["/zh/notes/frontend/", "/se/FrontEnd/"],
  ["/zh/notes/algo/", "/algo/"],
  ["/zh/notes/english/", "/standardized/"],
];

export default hopeTheme({
  hostname: "https://aubreykuang.github.io",

  author: {
    name: "Aubrey Kuang",
    url: "https://github.com/aubreykuang",
  },

  logo: "/favicon.ico",

  repo: "AubreyKuang/blog",

  docsDir: "src",

  docsBranch: "main",

  editLink: false,

  pageInfo: ["Author", "Date", "ReadingTime"],

  blog: {
    medias: {
      GitHub: "https://github.com/aubreykuang",
      Linkedin: "https://www.linkedin.com/in/yongbeikuang/",
    },
  },

  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "Aubrey's Blog",
      displayFooter: true,
      blog: {
        description: "Software Development Engineer at AWS",
        intro: "/",
      },
    },

    "/zh/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "况咏蓓的博客",
      displayFooter: true,
      blog: {
        description: "AWS 软件开发工程师",
        intro: "/zh/",
      },
    },
  },

  plugins: {
    blog: {
      // Archived study notes are not blog articles
      filter: ({ filePathRelative, frontmatter }) =>
        Boolean(filePathRelative) &&
        !frontmatter.home &&
        !filePathRelative!.startsWith("zh/notes/"),
    },

    copyright: {
      disableCopy: true,
    },

    icon: {
      assets: "fontawesome-with-brands",
    },

    redirect: {
      config: (app) => {
        const redirects: Record<string, string> = {};
        for (const { path } of app.pages) {
          const match = legacyNotePaths.find(([newPrefix]) =>
            path.startsWith(newPrefix),
          );
          if (match)
            redirects[decodeURI(match[1] + path.slice(match[0].length))] =
              path;
        }
        return redirects;
      },
    },
  },
});
