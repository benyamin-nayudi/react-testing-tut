import { render, screen } from "@testing-library/react";
import Header from "../Header";

// query by text of the header
it("should render same text passed into title prop1", async () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByText(/My Header/i);

  expect(headingElement).toBeInTheDocument();
});

// //* query by the Role of the header and its inner text
// it("should render  same text passed into title prop2", async () => {
//   render(<Header title="My Header" />);

//   const headingElement = screen.getByRole("heading", { name: "My Header" });

//   expect(headingElement).toBeInTheDocument();
// });

// //* query by the title attribute of the header
// it("should render  same text passed into title prop3", async () => {
//   render(<Header title="My Header" />);

//   const headingElement = screen.getByTitle("Header");

//   expect(headingElement).toBeInTheDocument();
// });

// //* query by the data-testid of the header
// it("should render  same text passed into title prop4", async () => {
//   render(<Header title="My Header" />);

//   const headingElement = screen.getByTestId("header-1");

//   expect(headingElement).toBeInTheDocument();
// });

// //* findBy will fail if you don't provide async-await syntax for it
// it("should render same text passed into title prop4", async () => {
//   render(<Header title="my header" />);

//   const headingElement = await screen.findByText(/my header/i);

//   expect(headingElement).toBeInTheDocument();
// });

// //* queryBy
// it("should render same text passed into title prop5", async () => {
//   render(<Header title="my header" />);

//   const headingElement = screen.queryByText(/dogs/i);

//   expect(headingElement).not.toBeInTheDocument();
// });

// //* getAllBy
// it("should render same text passed into title prop6", async () => {
//   render(<Header title="my header" />);

//   const headingElements = screen.getAllByRole("heading");

//   expect(headingElements.length).toBe(2);
// });
