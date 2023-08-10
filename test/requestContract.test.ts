import { RequestContract } from "../src/RequestContract";

describe("CallContract", () => {
  it("it should create class object with default values", () => {
    const callContract = new RequestContract({
      chainId: 1,
      contractAddress: "0x1",
      functionName: "test",
    });
    console.log(callContract.getUrl());
    expect(callContract).toBeInstanceOf(RequestContract);
  });

  it("it should create class object with parameters", () => {
    const callContract = new RequestContract({
      chainId: 1,
      contractAddress: "0x1",
      functionName: "test",
      isPayment: false,
      params: ["x", "y"],
      values: ["1", "2"],
    });
    console.log(callContract.getUrl());
    expect(callContract).toBeInstanceOf(RequestContract);
  });
});
