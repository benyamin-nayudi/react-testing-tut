# Assertions

> in the `TodoFooter` component we have an `Error` says that `we can't use the Link outside of BrowserRouter`. that's because we are trying to `render` a `component` that has a `Link` tag (from `react-router-dom`) in isolation without wrapping it in the `BrowserRouter` tag. so we can make a `MockTodoFooter` and wrap it inside a `BrowserRouter` tag and return it and then `render` it by passing the desire `prop` and see if we can get the proper `result`.

```js
import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={5} />
    </BrowserRouter>
  );
};

it("should render the correct amount of incomplete tasks", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);

  const paragraphElement = screen.getByText(/5 tasks left/i);

  expect(paragraphElement).toBeInTheDocument();
});
```

> there is so much `assertions` method we can use. you can use the `autoComplete` to see what is the different `methods` and `hover` of them to read their `actions`

- `toBeVisible()` : used when a for exp the `opacity` of a text is `0`. it is there but not visible so it will `fail`.

- `toContainHTML("p")` : expect that a specific element contains a specific `HTML` element

- `toHaveTextContent('1 task left')` : we can get the `element` and `expect` that the element has the text `'1 task left'` in it

> we can get the opposite of any method by adding the .not before the method

- `expect(someElement).not.ToBeVisible()`

---

> we can get the textContent of the `element` and `assert` its content like this. (for input we can use .`value` instead of `.textContent`)

```js
it("should render 'task' when the number of incomplete tasks is one", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElement = screen.getByText(/1 task left/i);

  // here we are asserting that the element's content is '1 task left'
  expect(paragraphElement.textContent).toBe("1 task left");
});
```

> ## we can make more that one `assertion` in one test.
