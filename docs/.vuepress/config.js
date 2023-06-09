module.exports = {
  base: '/tla/',
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Yiki - Be a cool coder',
      description: 'Yiki - Be a cool coder'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'Tiffany270/YIkiBlog-VuePress',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: '文学相关',
            items: [
              { text: '文学理论-杨宁', link: '/LiteraryTheory/' },
              { text: 'vue3.0', link: '/Vue3/' },
              { text: 'Angular', link: '/Angular/' },
              { text: '小程序', link: '/mini-program/' },
            ]
          },
          { text: '中国文学史', link: '/HistoryOfCL/' },
          { text: 'BLOG', link: '/Diary/' },
          { text: 'Project Demo', link: '/PJwrapper/GuiderLink/' },
        ],
        sidebar: {
          '/Diary/': [
            {
              collapsable: false,
              children: [
                '',
                '2022-06',
                '2020-08',
                '2020-06',
                '2019-11',
                '2019-10',
              ]
            }
          ],
          '/Language/': [
            {
              collapsable: false,
              children: [
                '',
                'English',
              ]
            }
          ],
          '/HistoryOfCL/': [
            {
              collapsable: false,
              children: [
                '',
                '01',
                '02'
              ]
            }
          ],
          '/mini-program/': [
            {
              collapsable: false,
              children: [
                '',
                'base',
                'advance',
                'yiki'
              ]
            }
          ],
          '/Vue-extra-library/': [
            {
              collapsable: false,
              children: [
                '',
                '01',
                '02',
                '03',
                '04',
                '05',
                '06'
              ]
            }
          ],
          '/LiteraryTheory/': [
            {
              collapsable: false,
              children: [
                '',
              ]
            }
          ],
          '/Vue3/': [
            {
              collapsable: false,
              children: [
                '',
                'learn04',
                'learn05',
                '01',
                '02',
                '02-1',
                '03',
                'diff'
              ]
            }
          ],
        }
      }
    }
  }
}


