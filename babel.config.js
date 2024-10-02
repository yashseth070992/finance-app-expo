module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', '@babel/preset-env'], // Add @babel/preset-env for broader compatibility
    plugins: [
      // Plugin to enable ES Module and CommonJS interoperability
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};