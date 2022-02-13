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
  get: jest.fn().mockResolvedValue(mockResponse),
};
