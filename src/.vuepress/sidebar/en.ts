import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/is/": "structure",
  // 如下短写法和长写法二选一，
  // 长写法好处还是可以自定义一个icon短的没有，同时长的可以子文件夹的名称自定义而不会直接继承README名称
  // "/algo/": "structure",
  "/algo/": "structure",
  // 如下短写法和长写法二选一，
  "/cs/database/mysql/": "structure",
  // "/cs/database/mysql/": [
  //   "",
  //   {
  //     text: "事务",
  //     icon: "note",
  //     prefix: "transaction/",
  //     children: "structure",
  //   },
  //   {
  //     text: "索引",
  //     icon: "note",
  //     prefix: "index/",
  //     children: "structure",
  //   },
  //   {
  //     text: "引擎",
  //     icon: "note",
  //     prefix: "engine/",
  //     children: "structure",
  //   },
  //   {
  //     text: "锁",
  //     icon: "note",
  //     prefix: "lock/",
  //     children: "structure",
  //   },
  //   {
  //     text: "日志",
  //     icon: "note",
  //     prefix: "log/",
  //     children: "structure",
  //   },
  // ],
  // 如下短写法和长写法二选一，
  // "/standardized/": "structure",
  "/standardized/": [
    "",
    {
      text: "GRE",
      icon: "note",
      prefix: "GRE/",
      link: "GRE/",
      children: "structure",
    },
    {
      text: "TOEFL",
      icon: "note",
      prefix: "TOEFL/",
      link: "TOEFL/",
      children: "structure",
    },
  ],
});
