export type IBundleBuyPumpFunTokenBuyInput = {
  fromWallet: string;
  amountInLamports: number;
  slippage?: number;
}
export type IBundleBuyPumpFunTokenInput = {
  buys: IBundleBuyPumpFunTokenBuyInput[];
  mint: string;
  feePayer: string;
  slippage?: number;
  priorityUnitLimit?: number;
  priorityUnitPrice?: number;
}

export type IBundleSellPumpFunTokenSellInput = {
  fromWallet: string;
  amountInToken: number;
  slippage?: number;
}
export type IBundleSellPumpFunTokenInput = {
  sells: IBundleSellPumpFunTokenSellInput[];
  mint: string;
  feePayer: string;
  slippage?: number;
  priorityUnitLimit?: number;
  priorityUnitPrice?: number;
}


export type IBundleSellByPercentagePumpFunTokenSellInput = {
  fromWallet: string;
  percentage: number;
  slippage?: number;
}
export type IBundleSellByPercentagePumpFunTokenInput = {
  sells: IBundleSellByPercentagePumpFunTokenSellInput[];
  mint: string;
  feePayer: string;
  slippage?: number;
  priorityUnitLimit?: number;
  priorityUnitPrice?: number;
}

export type IBundleExitPumpFunTokenInput = {
  mint: string;
  feePayer: string;
  slippage?: number;
  priorityUnitLimit?: number;
  priorityUnitPrice?: number;
}
export type BundleResponse = {
  result: {
    mint: string;
    signature: string;
    transactionResult: any;
  };
  solscan: {
    mint: string;
    tx: string;
  };
  pumpfun: {
    mint: string;
  };
}