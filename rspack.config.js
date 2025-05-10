const path = require('path');

module.exports = {
  entry: './src/index.tsx',       // .tsx로 변경
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',  // TSX/TS 처리
              tsx: true,             // .tsx 파일 지원
              jsx: true              // JSX도 함께
            },
            transform: {
              react: {
                runtime: 'classic',   // createElement 호출
                pragma: 'createElement',
                pragmaFrag: 'Fragment'
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],  // 순서대로 ts/tsx도 해석
  },
};
