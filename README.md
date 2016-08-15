# eslint-config-standard-deviation--es5

[![npm version](https://badge.fury.io/js/eslint-config-standard-deviation--es5.svg)](https://badge.fury.io/js/eslint-config-standard-deviation--es5)


> ESLint [shared configuration](http://eslint.org/docs/developer-guide/shareable-configs) for javascript `ES5` projects based on `standard` shared eslint-config


* [eslint-config-standard][standard]
* [eslint-config-standard-react](https://github.com/feross/eslint-config-standard-react)

## What is different from `standard` eslint-config ?
[standard][standard] shared eslint-config rules are almost fine but we do not like to force us to ...
* not use semicolon `;`
* put space before function parens `function foo ()`

![eslint-config-standard-deviation--es5][eslint-config-standard-deviation--es5]
[eslint-config-standard-deviation--es5]:./semicolon.jpg

[standard]: https://github.com/feross/eslint-config-standard

## Installation

### npm

```bash
npm install eslint-config-standard-deviation--es5 eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise --save-dev
```

## Easy add to project
```bash
npm install eslint eslint-modules-standard-deviation--es5 --save-dev
```

## Usage
Add `extends` to project `.eslintrc`
```json
{
  "extends": ["standard-deviation--es5"]
}
```

### [optional] enable/disable [eslint rules](http://eslint.org/docs/rules/)
```json
{
  "extends": ["standard-deviation--es5"],
  "rules": {
    "space-before-function-paren": ["2", "always"]
  }
}
```

### Add scripts to `package.json`
```json
"scripts": {
  "lint": "eslint . --ext .js",
  "testonly": "echo \"Error: no test specified\" && exit 1",
  "test": "npm run lint && npm run testonly"
}
```

## Javascript `ES5`, `ES2015`, `ES.next`, and `React` support
* [eslint-config-standard-deviation](https://github.com/bySabi/eslint-config-standard-deviation)
* [eslint-modules-standard-deviation](https://github.com/bySabi/eslint-modules-standard-deviation)


## Projects using `eslint-config-standard-deviation--es5`
* [karma-tap](https://github.com/bySabi/karma-tap)
* [karma-tap-pretty-reporter](https://github.com/bySabi/karma-tap-pretty-reporter)
* [tap-lochnest](https://github.com/bySabi/tap-lochnest)
* [tapa](https://github.com/bySabi/tapa)

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
