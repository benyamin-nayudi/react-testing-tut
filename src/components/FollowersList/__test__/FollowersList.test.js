import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("FollowersList", () => {
  beforeEach(() => {
    console.log("running before each test");
  });

  beforeAll(() => {
    console.log("RUNNING ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("running after each test");
  });

  afterAll(() => {
    console.log("RUNNING ONCE after ALL TESTS");
  });

  it("should renders follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");

    expect(followerDivElement).toBeInTheDocument();
  });

  it("should renders follower items2", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");

    expect(followerDivElement).toBeInTheDocument();
  });

  it("should renders follower items3", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");

    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("should render multiple follower items", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item-/i);

  //     expect(followerDivElements.length).toBe(5);
  //   });
});
