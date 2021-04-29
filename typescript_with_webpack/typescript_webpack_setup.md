# Using webpack and typescript

- Webpack bundles all resources to a distributable format (scss to css, jsx to js, ts to js etc).

- Webpack in typescript project can be used to compile typescript to javascript

## [Webpack, browserify, gulp, grunt, npm scripts](https://stackoverflow.com/a/35064297/2369053)

- Webpack and browserify are bundlers.
- Gulp, grunt and npm scripts are task runners.

I chose webpack due to its popularity. For task running this project uses grunt, while I could have just used npm scritps.

## Installing typescript and webpack

```bash
npm install --save-dev typescript webpack webpack-cli ts-loader
```

## Webpack configuration file

Create a webpack configuration file called `webpack.config.js` at the project root directory. [Webpack configuration documentation](https://webpack.js.org/configuration/mode/)

## Bundling TS files with Webpack

```bash
npm run build-dev
# or
npm run build
```

## Using webpack server

Starting with `webpack 4.x`, `**webpack serve**` option comes builtin with the **webpack-cli**. But we still need to install the `webpack-dev-server`.

- Install the dependency `npm install -D webpack-dev-server html-webpack-plugin`
- Add the dev server configuration to `webpack.config.json`

```json
devServer: {
  // https://webpack.js.org/configuration/dev-server/
  contentBase: path.resolve(__dirname, 'typescript_with_webpack/public'),
  port: 9000,
  hot: true,
  open: true
},
```

- Create a npm script for the webpack server `"serve": "webpack serve"`
- Run `npm run serve`

---

## References

- [Typescript with webpack](https://www.youtube.com/watch?v=sOUhEJeJ-kI&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=1)

- [Webpack and typescript github repo for above youtube playlist](https://github.com/iamshaunjp/webpack-and-typescript)

- [Typescript with webpack](https://webpack.js.org/guides/typescript/)
