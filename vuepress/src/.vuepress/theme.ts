import { hopeTheme } from "vuepress-theme-hope";
import {  zhNavbar } from "./navbar/index.js";
import {  zhSidebar } from "./sidebar/index.js";




export default hopeTheme({
  // 主题色
  themeColor: {
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  // 全屏
  fullscreen: true,

  // hostname: "https://banmag.cn",

  author: {
    name: "长夜",
    url: "https://banmag.cn",
  },

  // iconAssets: "iconfont",
  iconAssets: "//at.alicdn.com/t/c/font_3778457_2xj6cntj29p.css",

  logo: "/logo.png",

  // 仓库地址
  // repo: "http://banmagnas.fun:6080/project/vuepress2_frame.git",


  // docsDir: "demo/theme-docs/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    // "/": {
    //   // navbar
    //   navbar: zhNavbar,

    //   // sidebar
    //   sidebar: zhSidebar,

    //   footer: "Default footer",

    //   displayFooter: true,

    //   metaLocales: {
    //     editLink: "Edit this page on GitHub",
    //   },
    // },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "长夜",

      // displayFooter: true,
      contributors:false,//是否显示页面贡献者
      lastUpdated:false,//是否显示页面最后更新时间

      // page meta
      // metaLocales: {
      //   editLink: "在 GitHub 上编辑此页",
      //   // editLink: "true",
      //   // contributors:'false',
      // },
    },
  },

  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
      // "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // 评论插件
    comment: {
      /**
       * Using Giscus
       */

      /* 
      App ID: 251991

Client ID: Iv1.ae0f80a6a3ac18ee
      Client secrets  68dc47b41623901c01abc75345c4f77e3c4cc247

name vuepress2giscus
    password   UYbEjDEBDgHFZiAv


网址 https://pjukxcfzbjnquqbjfzmr.supabase.co

    anonpublic   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdWt4Y2Z6YmpucXVxYmpmem1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0NDg1NDgsImV4cCI6MTk4MjAyNDU0OH0.m79FqCfID72_18-lpt-4FlkT08mXxrWZDdhRh_O9ubg
      service_role  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdWt4Y2Z6YmpucXVxYmpmem1yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjQ0ODU0OCwiZXhwIjoxOTgyMDI0NTQ4fQ.w6inOpvl9pgEyzmAiy0mGDbMDcENvaV9VPHgCYXzwQU
      */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",
      // provider: "Giscus",
      // repo: "mengyuan1997/vuepress2giscus",
      // repoId: "R_kgDOISU3kw",
      // category: "Announcements",
      // categoryId: "DIC_kwDOISU3k84CSJEW",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don't want here
    // md文档提升
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },
// 提供渐进式网络应用程序支持
    pwa: {
      favicon: "/logo.png",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "favicon",
        statusBarColor: "black",
      },
      msTile: {
        image: "/logo.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/logo.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        // shortcuts: [
        //   {
        //     name: "Demo",
        //     short_name: "Demo",
        //     url: "/demo/",
        //     icons: [
        //       {
        //         src: "/assets/icon/guide-maskable.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/guide-monochrome.png",
        //         sizes: "192x192",
        //         purpose: "monochrome",
        //         type: "image/png",
        //       },
        //     ],
        //   },
        // ],
      },
    },
    // 版权信息插件
    copyright:{
      hostname:"http://banmagnas.fun:9822/",//域名
      author:"长夜",//作者
      global:true,//全局开启
    }
  },
});


