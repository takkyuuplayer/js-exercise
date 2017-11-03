module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/forbid-prop-types": "off",
    "react/no-array-index-key": "off",
  },
  "env": {
    "mocha": true,
    "browser": true,
  }
};
