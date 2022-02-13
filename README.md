# beforeEach and BeforeAll - afterEach and afterAll

> with this two hooks we can run a function before our codes. the beforeEach hook runs a function before running each test and the beforeAll hook runs a function before all of the tests

```js
describe("FollowersList", () => {
  beforeEach(() => {
    console.log("running before each test");
  });

  beforeAll(() => {
    console.log("RUNNING ONCE BEFORE ALL TESTS");
  });
  afterEach(() => {
    console.log("running AFTER each test");
  });

  afterAll(() => {
    console.log("RUNNING ONCE after ALL TESTS);
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





});

```
