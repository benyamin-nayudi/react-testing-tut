# react-testing-tut

## benefits of testing our applications

- Catch bugs

- Increase confidence in application

- Speeds up QA time

- Can server as documentations

## most common test

- `Unit Tests` : test a piece of code or `component` in `isolation`

- `Integration Tests` : test `interaction` between the components

- `End to End (E2E) Tests` : what is the user is ultimately going to do.

---

### a common structure of a test

1. first we have a test block and the first parameter `renders learn react link` is basically tell what we ultimately are going to test

> we can either choose `test` or `it` for writing the test

```js
test("renders learn react link", () => {});

//or

it("renders learn react link", () => {});
```

2. in the test block we should tell what component are we testing and we are going to tell this by rendering the component in the actual DOM.

```js
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
});
```

2. we want to find the component that we want to interact with

```js
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // here we find that element by screen
});
```

> `screen` in fact looks at the `DOM` and provides us some `methods`

3. interact with those `elements` and test the events (`click`, etc.)

4. assert that the `results` are as expected . we do this with `expect()` function that is known by default by the `test` function (that uses `jest`)

```js
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInDocument();
});
```
