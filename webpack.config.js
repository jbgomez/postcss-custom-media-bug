const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({
                    preserve: false,
                    stage: 2,
                    features: {
                      'custom-media-queries': true,
                    },
                    importFrom: [
                      {
                        customMedia: {
                          '--min-width-small': `(min-width: 1024px)`,
                          '--max-width-medium': `(max-width: 1440px)`,
                        },
                      },
                    ],
                  }),
                ],
              },
            },
          },
          // { loader: path.resolve('./postCssLoaderFix') }, // uncommment to apply fix
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
