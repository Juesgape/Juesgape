const {join} = require('path')

module.exports = {
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
      autoprefixer: {},
    },
  },
};