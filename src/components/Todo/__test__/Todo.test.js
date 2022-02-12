import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

// make a function that fireEvents for an array of todo items
const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button");

  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render input element", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/Go Grocery Shopping/i);

    expect(divElement).toBeInTheDocument();
  });

  it("should render input elements", async () => {
    render(<MockTodo />);

    addTask(["Go Grocery Shopping", "pet my cat", "wash my hands"]);

    const divElements = screen.getAllByTestId("task-container");

    expect(divElements.length).toBe(3);
  });

  it("task should not have completed class when initially rendered", async () => {
    render(<MockTodo />);

    addTask(["Go Grocery Shopping"]);

    const divElement = screen.getByText(/Go Grocery Shopping/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should  have completed class when clicked", async () => {
    render(<MockTodo />);

    addTask(["Go Grocery Shopping"]);

    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);

    expect(divElement).toHaveClass("todo-item-active");
  });
});
