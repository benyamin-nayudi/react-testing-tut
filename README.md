# fire events

> so our `AddInput` components does have two `props`, the first one an `array` and the second one is a `hook`(a function that we don't care about) . for the function we can use the `jest.fn()` function to just pass it a `mock function`

```js
import { render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    // here we select our element by the placeholder
    const inputElement = screen.getByPlaceholderText(/Add a New task here.../i);

    expect(inputElement).toBeInTheDocument();
  });
});
```

> the second `test` that we want to make, is that when we fire the `change` event, the `input` value `changes` to whatever we have written

```js
import { render, screen, fireEvent } from "@testing-library/react";
// we can fire events with the fireEvent function

it("should be able to type in the input", async () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/Add a New task here.../i);

  // we can fire the change event like this. it takes two arguments. the first one is the element that we want to fire the event (in this case our inputElement) and the second one is our value that we want to pass to it
  fireEvent.change(inputElement, {
    target: { value: "Go Grocery Shopping" },
  });

  // here we are expecting that the value of the inputElement must be the value that we have given in the target property
  expect(inputElement.value).toBe("Go Grocery Shopping");
});
```

> our third `test` is that we want to `test` when we fire the `click` event , our `input` should be empty

```js
it("should have empty input when add button is clicked", async () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/Add a New task here.../i);
  const buttonElement = screen.getByRole("button"); // select the button by its role

  fireEvent.click(buttonElement); // fire the click event

  expect(inputElement.value).toBe(""); // assert that our input's value should be empty
});
```
