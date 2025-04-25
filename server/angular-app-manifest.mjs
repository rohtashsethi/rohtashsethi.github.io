
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/hello/hello.component.ts": [
    {
      "path": "chunk-WX7NF7XO.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/about/about.component.ts": [
    {
      "path": "chunk-QYMRGSRG.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-7X2YD72P.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/projects/projects.component.ts": [
    {
      "path": "chunk-NVHBOILH.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-OMUDVDNH.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-7X2YD72P.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/talks/talks.component.ts": [
    {
      "path": "chunk-S4N6SMCD.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-OMUDVDNH.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-7X2YD72P.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/blogs/blogs.component.ts": [
    {
      "path": "chunk-PNERUVQU.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/contact/contact.component.ts": [
    {
      "path": "chunk-XMRUPNPT.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 8874, hash: '21790716c1d960380484708d083bb8d12e39b5aaba0d35b84c85b73a8d689e4e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3480, hash: 'd238e22edcace911baa68e0b1d1c7eddb8457b3394bd9830cf8f8eba8b8f4a05', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-D66ENUZZ.css': {size: 147859, hash: 'FH5yVTgJqEc', text: () => import('./assets-chunks/styles-D66ENUZZ_css.mjs').then(m => m.default)}
  },
};
