# first test

> the first `test` is the `header` component (TODO). we want to `test` that if our component `renders` properly (right now the header is a `prop` given by its `parent` and in different `routes` is shows different `heading`)

<!--  -->

> to `test` a `module` or `component` (for example the `header` of our app) we should create a folder `__test__` and add a `Header.test.js` file in it to write our `test`.

```js
import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByText(/My Header/i);

  expect(headingElement).toBeInTheDocument();
});
```

## test the heading

1. first `import` the `components` and `render` the `heading`
2. pass the `prop` to the `component` and get the desired `text` from the `screen(DOM)`
3. `expect` the result in the `Document`

---

> here if we make two heading in the Header component

```js
<>
  <h1 title="Header" className="header">
    {title}
  </h1>
  <h3 className="header">Cats</h3>
</>
```

> the second `test` will `fail` because there is two elements that matches the `getByRole` selector and it will `throw` an `error`. for this we can use the inner `text` of the `heading` tag and use it as an `identifier`.
> remember that we always want to use a `condition` that matches `one` element

```js
it("should render same text passed into title prop1", () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByText(/My Header/i);

  expect(headingElement).toBeInTheDocument();
});

it("should render  same text passed into title prop2", () => {
  render(<Header title="My Header" />);

  //   const headingElement = screen.getByRole("heading"); => will throw an error
  const headingElement = screen.getByRole("heading", { name: "My Header" });

  expect(headingElement).toBeInTheDocument();
});

// query by the title attribute of the header
it("should render  same text passed into title prop3", async () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByTitle("Header");

  expect(headingElement).toBeInTheDocument();
});
```

> we can specify a data-testid attribute and query the element byTestId

```js
// query by the data-testid of the header
it("should render  same text passed into title prop4", async () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByTestId("header-1");

  expect(headingElement).toBeInTheDocument();
});
```

> the `findBy...` will fail if you don't provide `async-await` syntax for it

```js
it("should render same text passed into title prop4", async () => {
  render(<Header title="my header" />);

  const headingElement = await screen.findByText(/my header/i);

  expect(headingElement).toBeInTheDocument();
});
```

> the `queryBy...` selectors returns `null` if there was no `match` for it. so if we specify for exp `/dogs/i` condition for it, it will return `null`. also we can tell that we don't expect that the `dogs` text exists in our `screen`. we can do this:

```js
//* queryBy
it("should render same text passed into title prop5", async () => {
  render(<Header title="my header" />);

  const headingElement = screen.queryByText(/dogs/i);

  expect(headingElement).not.toBeInTheDocument(); // not here reverse the condition
});
```

> the `getAllBy...` matches the condition and return us an `array`. so we can `test` like this:

```js
//* getAllBy
it("should render same text passed into title prop6", async () => {
  render(<Header title="my header" />);

  const headingElements = screen.getAllByRole("heading");

  expect(headingElements.length).toBe(2); // here we expect that the headingElements array's length is 2
});
```
