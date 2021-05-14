# Modules and Namespaces

- Loading and running JS blocks the browser's UI. But we can make the JS load dynamically after the page loaded.

- CommonJS module system came from NodeJS. Browserify made available the use of commonJS on web environment.

```Javascript
var x = require('some_module');
var y = require('some_other_module');

module.exports.z = function () {
  // some implementation that uses x and y
}
```

- AMD module standard

```Javascript
define('emailBaseModule',
  ['require', 'exports', 'emailListModule', 'emailComposerModule'],
  function(require, exports, emailListModule, emailComposerModule) {
  exports.renderBase = function() {
  // ...
  }
  }
)
```

- ES6 introduced clean syntax and it was statically analyzable. This syntax is now used in Javascript and typescript.

```Javascript
import emailList from 'emailListModule'
import emailComposer from 'emailComposerModule

export function renderBase() {

}
```

Typescript can compile modules into globals(adding properties to the `window` object), ES6 standard, commonjs, AMD, SystemJS or UMD.

**NOTE**: ES6 `import ..export` syntax is recommended for frontend.

## Using ES6 import exports

Module paths used are the filenames.

```Typescript
// wildcard import. relative module path
import * from `./some_module
```

- Import the module itself(give wildcard a name)

```Typescript
// wildcard import. relative module path
import * as some_module from `./some_module

some_module.callAMethod();
```

- Import the module for side effects only

```Typescript
import "./some_module"
```

Default exports is supported. (no need to enclose the member inside `{}` when importing)

```Typescript
// something was exported as `export default something;` in the some_module
// default exported modules don't required { }
import something from `./some_module';
```

Importing non default members from a module

```Typescript
import { nondefaultExportedMember } from './some_module';
```

We can also **reexport** imported members.

```Typescript
export { nonDefaultMember } from './some_module1';
export someDefaultMember from './some_module2';
```

We can export type aliases, interfaces in typescript.

## Dynamic imports

- Import when required.

- Supported only when the module is set to `esnext` in the tsconfig.json.

- Split JS files into many smaller files. Files can be downloaded in parallel.

- To safely use dynamic imports, be sure to either:

  - Pass a string literal directly to import, without assigning the string to a variable first.

  ```Typescript
  //dynamic import by passing the module name
  let module = await import('module_name');
  ```

  - Pass an expression to import and manually annotate the module’s signature. Typescript will compile away(remove) the import that we did for typechecking when emitting the JS code.

  ```Typescript
  // observe that locale is used as a type only
  // locale is not used as a value
  import { locale } from './locales/locale-us';

  let path = locales_path + "/" + us_locale;
  // explicitly type when passing expression to import
  let localeUS: typeof locale = await import(path)
  ```

## Namespaces

- uses the `namespace` keyword.

> Note that although namespaces are supported by TypeScript, **they’re not** the preferred way to encapsulate code; if you’re not sure whether to use namespaces or modules, choose modules.

- A namespace must have a name and it can export functions, variables, types, interfaces, or other namespaces.

- Unexported members within a namespace are private to that namespace.

- Like interfaces, namespaces can be augmented, making it convenient to split them across files.

- Aliases can be used to shorten long namespaces.

```Typescript
// braces should not be used for namespace aliases.
import d = A.B.C.d;
```

**NOTE** - Namespaces always compile to global variables. They don't respect the `module` setting in tsconfig.json.

**NOTE** - Prefer modules to namespaces.

## Module resolution

- Always use `"moduleResolution": "node"` in the tsconfig.json

> Modules prefixed with a `.`, `/`, or `~` (like `./my/file`) are resolved from the local filesystem, either **relative to the current file**, or using an absolute path (relative to your / directory, or whatever your tsconfig.json’s baseUrl is set to), depending on the prefix you use. **TypeScript loads module paths that don’t have a prefix from your node modules folder, the same as NodeJS**.

---

## References

- [Programming TypeScript](https://www.oreilly.com/library/view/programming-typescript/9781492037644/)
