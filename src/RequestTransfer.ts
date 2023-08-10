import { RequestContract } from "./RequestContract";

export class RequestTransfer extends RequestContract {
  constructor(args: {
    chainId: string | number;
    recipientAddress: string;
    isPayment?: boolean;
    amount: string;
  }) {
    super({
      chainId: args.chainId,
      contractAddress: args.recipientAddress,
      functionName: "",
      isPayment: args.isPayment,
      params: ["value"],
      values: [args.amount],
    });
  }
}
