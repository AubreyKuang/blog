import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Algorithm",
    icon: "note",
    prefix: "/algo/",
    children: [
      { text: "BASIC",
      icon: "edit",
      prefix: "basic/",
      children: [
        {
          text: "parameter",
          icon: "edit",
          prefix: "parameter/",
          link: "parameter/",
          children: [
            { text: "Transaction", icon: "edit", link: "transaction" },
            { text: "Index", icon: "edit", link: "index" },
            { text: "Lock", icon: "edit", link: "lock" },
            { text: "Log", icon: "edit", link: "log" },
          ]
        },
        // {
        //   text: "Redis",
        //   icon: "edit",
        //   prefix: "redis/",
        //   link: "redis/",
        //   children: [
        //     { text: "Clients", icon: "edit", link: "clients" },
        //     { text: "Commands", icon: "edit", link: "commands" },
        //     { text: "Data structure", icon: "edit", link: "data-structure" },
        //   ]
        // },
      ]},
      {
        text: "SUMMARY",
        icon: "edit",
        prefix: "faq/",
        children: [
          {
            text: "Business Analysis",
            icon: "edit",
            prefix: "ba/",
            link: "ba/",
            // children: [
            //   { text: "Transaction", icon: "edit", link: "transaction" },
            //   { text: "Index", icon: "edit", link: "index" },
            //   { text: "Lock", icon: "edit", link: "lock" },
            //   { text: "Log", icon: "edit", link: "log" },
            // ]
          },
          // {
          //   text: "Redis",
          //   icon: "edit",
          //   prefix: "redis/",
          //   link: "redis/",
          //   children: [
          //     { text: "Clients", icon: "edit", link: "clients" },
          //     { text: "Commands", icon: "edit", link: "commands" },
          //     { text: "Data structure", icon: "edit", link: "data-structure" },
          //   ]
          // },
        ]
      },
    ]
  },

  {
    text: "Computer Science",
    icon: "edit",
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
            prefix: "mysql/",
            link: "mysql/",
            children: [
              { text: "Transaction", icon: "edit", link: "transaction" },
              { text: "Index", icon: "edit", link: "index" },
              { text: "Lock", icon: "edit", link: "lock" },
              { text: "Log", icon: "edit", link: "log" },
            ]
          },
          {
            text: "Redis",
            icon: "edit",
            prefix: "redis/",
            link: "redis/",
            children: [
              { text: "Clients", icon: "edit", link: "clients" },
              { text: "Commands", icon: "edit", link: "commands" },
              { text: "Data structure", icon: "edit", link: "data-structure" },
            ]
          },
        ]
      },
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


  // {
  //   text: "Software Engineer",
  //   icon: "edit",
  //   prefix: "/se/",
  //   children: [
  //     {
  //       text: "Unix",
  //       icon: "edit",
  //       link: "unix/",
  //       // prefix: "unix/",
  //       // children: [
  //       //   { text: "Apple1", icon: "edit", link: "1" },
  //       //   { text: "Apple2", icon: "edit", link: "2" }
  //       // ]
  //     },
  //     {
  //       text: "Framework",
  //       icon: "edit",
  //       link: "framework/",
  //     },
  //     {
  //       text: "Systen design",
  //       icon: "edit",
  //       link: "systen-design/",
  //     },
  //     "tools/",
  //   ]
  // },




  {
    text: "Information System ",
    icon: "note",
    prefix: "/is/",
    children: [
      { text: "DECISION",
      icon: "edit",
      prefix: "decision/",
      children: [
        {
          text: "models",
          icon: "edit",
          prefix: "models/",
          link: "models/",
          // children: [
          //   { text: "Transaction", icon: "edit", link: "transaction" },
          //   { text: "Index", icon: "edit", link: "index" },
          //   { text: "Lock", icon: "edit", link: "lock" },
          //   { text: "Log", icon: "edit", link: "log" },
          // ]
        },
        // {
        //   text: "Redis",
        //   icon: "edit",
        //   prefix: "redis/",
        //   link: "redis/",
        //   children: [
        //     { text: "Clients", icon: "edit", link: "clients" },
        //     { text: "Commands", icon: "edit", link: "commands" },
        //     { text: "Data structure", icon: "edit", link: "data-structure" },
        //   ]
        // },
      ]},
      {
        text: "COMMERCIAL",
        icon: "edit",
        prefix: "commercial/",
        children: [
          {
            text: "Business Analysis",
            icon: "edit",
            prefix: "ba/",
            link: "ba/",
            // children: [
            //   { text: "Transaction", icon: "edit", link: "transaction" },
            //   { text: "Index", icon: "edit", link: "index" },
            //   { text: "Lock", icon: "edit", link: "lock" },
            //   { text: "Log", icon: "edit", link: "log" },
            // ]
          },
          // {
          //   text: "Redis",
          //   icon: "edit",
          //   prefix: "redis/",
          //   link: "redis/",
          //   children: [
          //     { text: "Clients", icon: "edit", link: "clients" },
          //     { text: "Commands", icon: "edit", link: "commands" },
          //     { text: "Data structure", icon: "edit", link: "data-structure" },
          //   ]
          // },
        ]
      }
    ]
  },
  {
    text: "Standardized",
    icon: "edit",
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
  // { text: "Demo", icon: "discover", link: "/demo/" },
  // {
  //   text: "Unix",
  //   icon: "edit",
  //   link: "/unix/"
  // },
  // {
  //   text: "V2 Docs",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/",
  // },
  // {
  //   text: "Posts",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Apple",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "Apple1", icon: "edit", link: "1" },
  //         { text: "Apple2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "Banana",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "Banana 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "Banana 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "Cherry", icon: "edit", link: "cherry" },
  //     { text: "Dragon Fruit", icon: "edit", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
]);
