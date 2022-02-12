# Integration tests

> we want to test the interaction between the addInput component and the list below it. so when we type and add an input , the exact text shows there. for this we should make our test in the parent component.

```js
describe("Todo", () => {
  it("should render input element", async () => {
    render(<MockTodo />); // make a MockTodo to avoid the browserRouter error

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i); // select the input element
    const buttonElement = screen.getByRole("button"); // select the button element

    // fire the change event
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });

    // fire the click event
    fireEvent.click(buttonElement);

    // select the div below the input by the text passed to the input (here when we fire the event the text Go Grocery ... must be placed in the div)
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    // we are expecting that the divElement should be in the DOM
    expect(divElement).toBeInTheDocument();
  });
});
```

> rest of the tests inside the [Todo](./src/components/Todo/__test__/Todo.test.js) test file
