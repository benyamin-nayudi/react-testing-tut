# Describe blocks

> we can use the `describe blocks` to group the common `tests`

```js
describe("TodoFooter", () => {
  it("should render the correct amount of incomplete tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    const paragraphElement = screen.getByText(/5 tasks left/i);

    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render 'task' when the number of incomplete tasks is one", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);

    expect(paragraphElement).toBeInTheDocument();
  });
});
```

> we can also have some `describe blocks` (children describe blocks) inside a `describe block`

```js
describe("TodoFooter", () => {
  describe("functionality 1", () => {
    it("should render the correct amount of incomplete tasks", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);

      const paragraphElement = screen.getByText(/5 tasks left/i);

      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe("functionality 2", () => {
    it("should render 'task' when the number of incomplete tasks is one", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);

      const paragraphElement = screen.getByText(/1 task left/i);

      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
```
