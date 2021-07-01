module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/ModuleLauncher.Re.Document/',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'ModuleLauncher.Re - 文档',
      description: 'ModuleLauncher.Re的文档页面',
    },
    '/en/': {
      lang: 'en-US',
      title: 'ModuleLauncher.Re - Docuemention',
      description: 'Documention site of ModuleLauncher.Re library',
    },
  },
  themeConfig: {
    sidebar: 'auto',
    locales: {
      '/': {
        selectText: 'Languages',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        algolia: {},
        nav: [
          { text: '项目结构', link: '/structure/' },
          { text: '启动', link: '/launch/' },
          { text: '下载', link: '/downloader/' }
      ],
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        algolia: {},
        nav: [{ text: 'Structure', link: '/zh/structure/', ariaLabel: 'Structure' }],
      },
    },
  },
}
