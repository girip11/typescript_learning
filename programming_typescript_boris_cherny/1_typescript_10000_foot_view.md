# TypeScript: A 10_000 Foot View

## Usual compilation process

- Compiler converts - Program -> AST -> Bytecode
- Bytecode is then interpreted by runtime to evalute/execute the code.

## Typescript compilation

- Typescript compiler compiles the typescript source to Javascript.

- Typescript compiler - Program -> AST -> Typechecker type checks on AST -> Javascript code

- Once the above process is completed, then the usual compilation process kick in (i.e) browser or nodejs (runtime) consumes the javascript source -> javascript AST -> Bytecode -> Execution.

- Javascript runtime referred to as engine. Currently V8 powers Nodejs, chrome browser.

- Typescript compiler is like **Scala compiler**, in that the compiler can infer types from the definitions(variable types, function return types etc)

> In general, it is good style to let TypeScript infer as many types as it can for you, keeping explicitly typed code to a minimum.

---

## References

- [Programming TypeScript](https://www.oreilly.com/library/view/programming-typescript/9781492037644/)
