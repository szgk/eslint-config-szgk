[![CircleCI](https://circleci.com/gh/szgk/eslint-config-szgk.svg?style=svg)](https://circleci.com/gh/szgk/eslint-config-szgk)

# eslint-config-szgk
eslint extends.

## installation
```
npm i -D https://github.com/szgk/eslint-config-szgk
```

## usage
- .eslintrc.js
```js
// browser
module.exports = {
  extends: ['szgk/configs/browser']
}

// node
module.exports = {
  extends: ['szgk/configs/node']
}

// react
module.exports = {
  extends: ['szgk/configs/react']
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
