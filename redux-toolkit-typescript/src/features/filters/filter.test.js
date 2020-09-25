import { setFilter, filterType } from "./filterSlice";

describe("filter test code", () => {
  it("filter", () => {
    expect(setFilter(filterType.SHOW_ALL)).toEqual({
      type: setFilter.type,
      payload: filterType.SHOW_ALL,
    });
  });
});
