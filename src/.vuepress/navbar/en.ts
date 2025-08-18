import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // 如果不需要子目录如下一行写法即可，认为是文件夹路径
  "/algo/",


  
  {
    text: "Computer Science",
    // icon: "edit",
    prefix: "/cs/",
    children: [
      {
        text: "Database",
        icon: "edit",
        prefix: "database/",
        children: [
          {
            text: "MySQL",
            icon: "edit",
            link: "mysql/",
          },
          {
            text: "Redis",
            icon: "edit",
            link: "redis/",
          },
        ]
      },
      {
        text: "Basic",
        icon: "edit",
        children: [
          {
            text: "Network",
            icon: "edit",
            link: "network/",
          },
          {
            text: "Operating System",
            icon: "edit",
            link: "os/",
          },
        ]
      },
      {
        text: "Components",
        // icon: "note",
        prefix: "components/",
        children: [
          {
            text: "Java",
            icon: "edit",
            link: "java/",
          }
        ]
      },
    ]
  },
  
  "/se/",

  // {
  //   text: "Software Engineering",
  //   // icon: "edit",
  //   prefix: "/se/",

  //   children: [
  //     {
  //       text: "FrontEnd",
  //       icon: "edit",
  //       link: "FrontEnd/",
  //     },

  //     {
  //       text: "BackEnd",
  //       icon: "edit",
  //       link: "BackEnd/",
  //     },

  //   ]
  // },

  {
    text: "English Tests",
    // icon: "edit",
    prefix: "/standardized/",
    children: [
      {
        text: "GRE",
        icon: "edit",
        prefix: "GRE/",
        children: [
          { text: "QUANTITATIVE", icon: "edit", link: "QUANTITATIVE" },
          { text: "VERBAL", icon: "edit", link: "VERBAL" },
        ]
      },
      {
        text: "TOEFL",
        icon: "edit",
        prefix: "TOEFL/",
        children: [
          { text: "LISTENING", icon: "edit", link: "LISTENING" },
          { text: "READING", icon: "edit", link: "READING" },
          { text: "SPEAKING", icon: "edit", link: "SPEAKING" },
          { text: "WRITING", icon: "edit", link: "WRITING" },
        ]
      },
    ]
  },

  {
    text: "Information System",
    // icon: "edit",
    prefix: "/is/",
    children: [
      {
        text: "Commercial",
        icon: "edit",
        link: "commercial/",
      },
      // 以下两种写法二选一即可，长的写法好处是可以带一个自定义的图标，短的没有图标
      {
        text: "Decision",
        icon: "edit",
        link: "decision/",
      },

      // "decision/",
    ]
  },
  {
    text: "List",
    link: "/list"
  }
]);
