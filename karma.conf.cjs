// karma.conf.cjs
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    files: [
      { pattern: 'src/tests/**/*.spec.jsx', watched: false }
    ],
    preprocessors: {
      'src/**/*.jsx': ['webpack', 'coverage'],
      'src/**/*.js': ['webpack', 'coverage'],
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          { test: /\.[jt]sx?$/, use: 'babel-loader', exclude: /node_modules/ },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.(png|jpg|jpeg|gif|svg)$/, type: 'asset/resource' }
        ]
      },
      resolve: { extensions: ['.js', '.jsx'] }
    },
    // 👇 quitamos el reporter HTML para evitar "appendChild" del reporter
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' }
      ]
    },
    // 👇 también quitamos clearContext (solo sirve para kjhtml)
    // client: { clearContext: false },
    singleRun: true
  });
};

