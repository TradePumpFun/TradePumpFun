export type TokenMetadataResponse = {
  tokenMetadata: {
    id: string;
    name: string;
    symbol: string;
    uri: string;
    description?: string;
    website?: string;
    image?: string;
    metaFetched: boolean;
  };
  solscan: {
    mint: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type IRetrieveTokenMetadataInput = {
  mint: string;
};

export type IRetrieveTokenBalanceInput = {
  mint: string;
  wallet: string;
};

export type TokenBalanceResponse = {
  result: {
    mint: string;
    tokenAmount: string;
    tokenAccount: string;
    tokenAmountInSol: string;
    wallet: string;
  };
  solscan: {
    mint: string;
    tokenAccount: string;
    wallet: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type ITransferTokenInput = {
  feePayer?: string | null;
  mint: string;
  fromWallet: string;
  recipientWallet: string;
  amountInToken: number;
  internalTransfer?: boolean;
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

export type ITransferTokenByPercentageInput = {
  feePayer?: string | null;
  mint: string;
  fromWallet: string;
  recipientWallet: string;
  percentage: number;
  internalTransfer?: boolean;
};

export type TokenCloseAccountResponse = {
  result: {
    mint: string;
    tokenAccount: string;
    signature: string;
    wallet: string;
  };
  solscan: {
    mint: string;
    tokenAccount: string;
    tx: string;
    wallet: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type TokenAccountResponse = {
  result: {
    mint: string;
    wallet: string;
    tokenAccount: string;
  };
  solscan: {
    mint: string;
    tokenAccount: string;
    wallet: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type ITokenAccountInput = {
  mint: string;
  wallet: string;
};

export type ICloseTokenAccountInput = {
  mint: string;
  fromWallet: string;
  feePayer?: string | null;
};

export type IRetrieveTokenMarketCapInput = {
  mint: string;
};

export type TokenMarketCapResponse = {
  result: {
    mint: string;
    marketCapLamports: number;
    marketCapSol: number;
    marketCapUsd: number;
  };
  solscan: {
    mint: string;
  };
  pumpfun: {
    mint: string;
  };
};

export type ICreateTokenInput = {
  file: Blob;
  name: string;
  symbol: string;
  description: string;
  website?: string | null;
  twitter?: string | null;
  telegram?: string | null;
  fromWallet: string;
  buyAmountInLamports?: number | null;
  feePayer?: string | null;
};

export type CreateTokenResponse = {
  result: {
    mint: string;
    tx: string;
  };
  solscan: {
    mint: string;
    tx: string;
  };
  pumpfun: {
    mint: string;
  };
};
