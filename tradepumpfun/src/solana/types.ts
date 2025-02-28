export type SolanaBalanceResponse = {
  result: {
    wallet: string;
    lamports: number;
    sol: number;
  };
  solscan: {
    wallet: string;
  };
};

export type SolanaTransferResponse = {
  result: {
    fromWallet: string;
    recipientWallet: string;
    amountInLamports: number;
    signature: string;
  };
  solscan: {
    fromWallet: string;
    recipientWallet: string;
    tx: string;
  };
};

export type ISolanaTransferInput = {
  fromWallet: string;
  recipientWallet: string;
  amountInLamports: number;
  feePayer?: string | null;
  internalTransfer?: boolean | null;
};

export type ISolanaBalanceInput = {
  wallet: string;
};
