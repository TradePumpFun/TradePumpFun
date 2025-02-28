import { PumpApiClient } from "./main/Client";

const client = new PumpApiClient({
  apiKey: "<api-key>",
});

const mint = "<token-mint>";

const buyImmediatelySell = async () => {
  const buyRes = await client.trade.buy({
    fromWallet: "<wallet>",
    mint,
    amountInLamports: 1000,
    slippage:100
  });

  const sellRes = await client.trade.sellByPercentage({
    fromWallet: "<wallet>",
    mint,
    percentage: 100,
  });

  return { buyRes, sellRes };
};

buyImmediatelySell();
