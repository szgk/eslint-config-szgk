[![CircleCI](https://circleci.com/gh/szgk/eslint-config-szgk.svg?style=svg)](https://circleci.com/gh/szgk/eslint-config-szgk)

# eslint-config-szgk
eslint extends.

```
.
├── README.md
├── base.js // base config
├── browser.js // for browser
├── node.js // for node
├── node_modules
├── package-lock.json
├── package.json
└── react.js // for react
```

## installation
```
npm i -D https://github.com/szgk/eslint-config-szgk
```

## usage
- .eslintrc.js
```js
// browser
module.exports = {
  extends: ['szgk/browser']
}

// node
module.exports = {
  extends: ['szgk/node']
}

// react
module.exports = {
  extends: ['szgk/react']
}
```

## How to

- check file is valid as .eslintrc.js
```
npm run check:base
npm run check:browser
npm run check:node
npm run check:react
```

- test
```
npm run test
```

- exec ci in local
```
npm run ci
```
