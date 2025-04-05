import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/node";

// establish API mocking before all tests.
beforeAll(() => server.listen());

// reset any request hnadlers that we may add during the tests
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// clean up after the tests are finished.
afterAll(() => server.close());
