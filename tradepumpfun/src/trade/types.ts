export type IBuyTokenInput = {
  feePayer?: string | null;
  fromWallet: string;
  mint: string;
  amountInLamports: number;
  slippage?: number | null;
  priorityUnitLimit?: number | null;
  priorityUnitPrice?: number | null;
};

export type TokenBuyResponse = {
  result: {
    mint: string;
    wallet: string;
    buyAmount: string;
    preTokenBalance: string;
    postTokenBalance: string;
    signature?: string | null;
    transactionResult: any;
  };
  solscan: {
    mint: string;
    wallet: string;
    tx: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type TokenSellResponse = {
  result: {
    mint: string;
    wallet: string;
    sellAmount: string;
    preTokenBalance: string;
    postTokenBalance: string;
    signature?: string | null;
    transactionResult: any;
    tokenAccountClosed: boolean;
    tokenAccount: string;
  };
  solscan: {
    mint: string;
    wallet: string;
    tx: string;
    tokenAccount: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type TokenTransferResponse = {
  result: {
    mint: string;
    fromWallet: string;
    recipientWallet: string;
    amountInToken: string;
    signature: string;
    fromTokenAccount: string;
    recipientTokenAccount: string;
  };
  solscan: {
    mint: string;
    fromTokenAccount: string;
    recipientTokenAccount: string;
    fromWallet: string;
    recipientWallet: string;
    tx: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type ISellTokenInput = {
  feePayer?: string | null;
  fromWallet: string;
  mint: string;
  amountInToken: number;
  slippage?: number | null;
  priorityUnitLimit?: number | null;
  priorityUnitPrice?: number | null;
};

export type ISellTokenByPercentageInput = {
  feePayer?: string | null;
  fromWallet: string;
  mint: string;
  percentage: number;
  slippage?: number | null;
  priorityUnitLimit?: number | null;
  priorityUnitPrice?: number | null;
};
