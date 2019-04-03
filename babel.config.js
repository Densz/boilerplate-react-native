module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            appStyles: './src/styles',
            actions: './src/redux/actions',
            reducers: './src/redux/reducers',
            selectors: './src/redux/selectors',
            shared: './src/components/shared',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
