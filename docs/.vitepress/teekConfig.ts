import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  sidebarTrigger: true,
  author: { name: "Teeker", link: "https://github.com/Kele-Bingtang" },
  footerInfo: {
    theme: {
      show: false,
    },
    copyright: {
      createYear: 2025,
      suffix: "jimuqu.com",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  post: {
    showCapture: true,
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
  markdown: {
    demo: {
      githubUrl:
        "https://github.com/chengliang4810/jimuqu-docs/blob/master/docs",
    },
  },
});
