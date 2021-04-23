# Control structures

## For loops

- Prefer using `let` for loop variables compared to `var`

### Classic `for` loop

```Typescript
for(let i = 0; i < 10; i++) {
  console.log(i);
}
```

### `for..of` loop

```Typescript
let arr = [10, 20, 30, 40];
for (let i of arr) {
  console.log(i);
}

// this could be used to iterate over a string as well
let text = "Hello world";
for (let ch of text) {
  console.log(ch);
}
```

### `for..in` loop

- This can be used to iterate over array, tuple but not strings.

```Typescript
let arr = [10, 20, 30, 40];
for (let i in arr) {
  console.log(i);
}
```
