export class RequestContract {
  chainId: string;
  contractAddress: string;
  functionName: string;
  isPayment: boolean = false;
  params: string[];
  values: string[];

  constructor(args: {
    chainId: string | number;
    contractAddress: string;
    functionName: string;
    isPayment?: boolean;
    params?: string[];
    values?: string[];
  }) {
    this.chainId = args.chainId.toString();
    this.contractAddress = args.contractAddress;
    this.functionName = args.functionName;
    this.isPayment = args.isPayment || false;
    this.params = args.params || [];
    this.values = args.values || [];
  }

  private getQuery(): string {
    if (this.params.length === 0) return "";
    let query = "?";
    for (let i = 0; i < this.params.length; i++) {
      query += `${this.params[i]}=${this.values[i]}${
        i !== this.params.length - 1 ? "&" : ""
      }`;
    }
    return query;
  }

  getUrl(): string {
    const prefix = this.isPayment ? "pay-" : "";
    const functionName = this.functionName ? "/" + this.functionName : "";
    const query = this.getQuery();

    const url = `ethereum:${prefix}${this.contractAddress}@${this.chainId}${functionName}${query}`;
    return url;
  }
}
