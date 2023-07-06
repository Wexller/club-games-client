export default [
  'nuxt-svgo',
  {
    defaultImport: 'component',
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              inlineStyles: {
                onlyMatchedOnce: false,
              },
              removeDoctype: false,
              removeDimensions: false,
              removeViewBox: false,
              removeUselessStrokeAndFill: false,
            },
          },
        },
      ],
    },
  },
]
