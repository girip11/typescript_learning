# Asynchronous programming, concurrency and parallelism

## Javascript event loop

- Every main thread has it own event loop in JS.
- When we call native asynchronous APIs like `setTimeout`, `readFile`, `XMLHTTPRequest` from the main thread, these calls are sent to the platform for execution.
- Main thread resumes executing the subsequent statements on its way.
- When the platform completes the processing/finishes executing the async methods, it will create a task in the main thread of the event loop.
- Main thread once it completes executing all the statements(call stack is empty), it will look for tasks in the event queue.
- Then it will start executing tasks from its event queue.
- If a task calls into one of the async api's, then next task will be picked up from the event queue for execution by the main thread.
- Basically the main thread does preemptive multitasking. But the preemption happens only when the task waits for IO.
- Suppose the main thread itself is computationally intensive, then the tasks in the event loop has to wait till the main thread comes back to the event queue tasks.

```Typescript
// This will execute only when main thread has executed all its statements
setTimeout(() => console.log("Hello"), 100);

for (let i = 1; i < 100; i++) {
  console.log(`${i}`)
}

console.log("After the execution of this statement, the main thread should execute the tasks from the event loop.")
```

## Callback

- Use callbacks only for simple asynchronous tasks.

- Callbacks could lead to callback hell when you have to chain multiple async operations.

- Also in case of the third party async code, a bug could lead to calling the callback multiple times which is undesirable in some cases(payment related callbacks).

Refer the below sections from the book.

## Promises

- Promises wrap asynchronous code and can either be resolved or rejected.
- We can chain promises using `then..catch..finally` method.

## [Async and await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

- These constructrs provide a synchronous way to work with promises.

## Async streams

- Publish subscribe model

---

## References

- [Programming TypeScript](https://www.oreilly.com/library/view/programming-typescript/9781492037644/)
