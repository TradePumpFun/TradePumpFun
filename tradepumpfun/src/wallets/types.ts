export type WalletResponse = {
  wallet: {
    id: string;
    fkAccountId: string;
    nickname?: string;
    description?: string;
    primary: boolean;
    exp: string;
    level: number;
    createdAt: Date;
    updatedAt: Date;
  };
  solscan: {
    wallet: string;
  };
};

export type WalletFindAllResponse = { wallets: WalletResponse[] };
export type WalletFindOneResponse = WalletResponse;
export type WalletCreateResponse = WalletResponse;

export type IRetrieveOneWalletInput = {
  id: string;
};

export type ICreateWalletInput = {
  nickname?: string | null;
  description?: string | null;
};
