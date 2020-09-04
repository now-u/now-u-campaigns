module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "ignorePatterns": [".eslintrc.js"],
  "rules": {
    "indent": [2,2],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
