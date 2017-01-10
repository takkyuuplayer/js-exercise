module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/forbid-prop-types": "off",
  },
  "env": {
    "mocha": true,
    "browser": true,
  }
};
