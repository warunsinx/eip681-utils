import { RequestContract } from "./RequestContract";

export class RequestERC20 extends RequestContract {
  constructor(args: {
    chainId: string | number;
    tokenAddress: string;
    recipientAddress: string;
    isPayment?: boolean;
    amount: string;
  }) {
    super({
      chainId: args.chainId,
      contractAddress: args.tokenAddress,
      functionName: "transfer",
      isPayment: args.isPayment,
      params: ["address", "value"],
      values: [args.recipientAddress, args.amount],
    });
  }
}
