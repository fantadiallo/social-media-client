import { logout } from "../src/js/api/auth/logout.js";
import { remove } from "../src/js/storage/remove.js";

jest.mock("../src/js/storage/remove.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should clear the token and profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
    expect(remove).toHaveBeenCalledTimes(2);
  });
});
