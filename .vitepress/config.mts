import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MRT文档",
  description: "一个基于Vue3的表格组件",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '表格演示', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '演示',
        items: [
          { text: 'Filter Examples', link: '/markdown-examples' },
          { text: 'Edit Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
