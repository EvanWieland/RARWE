/** @type {import("tailwindcss").Config} */

const { join } = require('path');

module.exports = {
  content: [
    join('app', 'components', '**', '*.hbs'),
    join('app', 'templates', '**', '*.hbs'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
