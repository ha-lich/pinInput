import '@testing-library/jest-dom';
// import server from '__MOCK__/server';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// Object.defineProperty(window, "matchMedia", {
//   writable: true,
//   value: jest.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // deprecated
//     removeListener: jest.fn(), // deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });
