import createDummyData from "../createDummyData.js";

describe("test-file", () => {
  it.skip("createDummyData", async () => {
    try {
      createDummyData();
    } catch (error) {
      console.log("Error in generate-invoice", error);
    }
  }, 30000);
  it("createDummyData", async () => {
    try {
      createDummyData();
    } catch (error) {
      console.log("Error in generate-invoice", error);
    }
  }, 30000);
});
