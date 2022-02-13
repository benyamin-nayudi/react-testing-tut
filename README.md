# async elements

> we want to `test` the render of one of the `cards` on the page and it is `async` because at the first the card is not available in the `dom`. we just gave the div a `test-id` and here `asserting` it.

```js
describe("FollowersList", () => {
  it("should renders follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");

    expect(followerDivElement).toBeInTheDocument();
  });
});
```

> the problem here that `testing` an external `API` may `not` be the best solution because:

1. `Requests Cost Money:` in the future you would have `a lot of tests` and requesting all of the from an external `api` will cost you or them a lot of money.

2. `Requests are Slow`

3. `our tests dependent on something external :` we want to test our `front-end` side , so if for some reasons our `api` fails, the whole tests will `fails`

> so we can actually `mock` the interaction between the `front-end` and the `api`

<!--  -->

> for making our `mock` request

1. make a folder name `__mocks__`

2. you want to make an `axios` mock request so your file name should be `axios.js`

3. we just want to use a little of our `api` info so we can make it `manually`

```js
const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "laith",
          last: "harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        login: {
          username: "TheGoat",
        },
      },
    ],
  },
};

export default {
  // get for the get request
  get: jest.fn().mockResolvedValue(mockResponse), // here we are giving the object that we have created and making a get request
};
```

and we can go to this dir > react-scripts => scripts => utility => createJestConfig => line 69 and change the `resetMocks: false,`
