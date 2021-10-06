module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@modules': './src/modules',
          '@main': './src/main',
          '@shared': './src/shared'
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }