export type IRetrieveTransactionsInput = {
  page?: number | null;
  limit?: number | null;
};

export type IRetrieveOneTransactionInput = {
  id: string;
};

export type TransactionResponse = {
  result: {
    id: string;
    transactionResult: any;
  };
  solscan: {
    tx: string;
  };
};

export type TransactionFindAllResponse = {
  transactions: TransactionResponse[];
  total: number;
};
