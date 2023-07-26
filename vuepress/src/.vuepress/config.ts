import { defineUserConfig } from "vuepress";




import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  host:"localhost",
  // 修改端口号
  port:9028,

  locales: {
    "/": {
      lang: "zh-CN",
      title: "工具库",
      description: "私人工具库",
    },
  },

  theme,
  plugins: [],

  shouldPrefetch: false,
});
