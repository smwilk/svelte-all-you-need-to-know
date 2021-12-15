module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [
    "svelte3"
  ],
  "overrides": [
    {
      "files": ["**/*.svelte"],
      "processor": "svelte3/svelte3"
    }
  ],
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "semi": [
      "warn",
      "never"
    ]
  },
}