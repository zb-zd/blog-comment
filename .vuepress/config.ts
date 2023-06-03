import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "日渐肥胖的左",
  description: "只是在玩",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/head.JPG",
    author: "左",
    authorAvatar: "/head.JPG",
    docsRepo: "",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["api"],
        }
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "分类", link: "/categories/suibi/1/" },
      // { text: "标签", link: "/tags/jilu/1/" },
      // {
      //   text: "文档",
      //   children: [
      //     { text: "主题模块", link: "/docs/theme-reco/theme" },
      //     { text: "引导模块", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `慎入！！！
          这是作者发泄情绪的地方`,
          style: "font-size: 12px;",
        },
        // {
        //   type: "hr",
        // },
      ],
    },
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
