import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Iced",
  description: "Reliable cross-platform GUI toolkit for Rust.",
  cleanUrls: "without-subfolders",
  head: [
    ["meta", { name: "theme-color", content: "#38bdf8" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide/" },
      { text: "Docs", link: "https://docs.rs/iced/" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Iced?", link: "/guide/getting-started" },
          { text: "Getting Started", link: "/guide/what-is-iced" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    }, // TODO: replace with repo
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/3xZJ65GAhd" },
      { icon: "github", link: "https://github.com/iced-rs/iced" },
    ],
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    }, // TODO: replace with Iced's
    logo: "/logo.svg",
  },
});
