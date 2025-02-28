# Pump Fun Rest API Client

Trade Pump Fun is a platform for trading Pump Fun tokens. This client is used to interact with the Trade Pump Fun Rest API. Visit [Trade Pump Fun](https://tradepump.fun) and get started for free in minutes.

Our npm package "tradepumpfun" is a TypeScript/JavaScript client for interacting with the Trade Pump Fun Rest API.

## Installation

```bash
npm install tradepumpfun
```

## Usage

```typescript
import { PumpApiClient } from "tradepumpfun";

const client = new PumpApiClient({
  apiKey: "<api-key>",
});

const mint = "<token-mint>";

const buyRes = await client.trade.buy({
    fromWallet: "<wallet>",
    amountInLamports: 50000,
    mint,
    slippage: 100,
  });
```

## API/Client Documentation

For full API and client documentation, visit [Trade Pump Fun API Documentation](https://tradepump.fun/api).


## Supported Functionality

Some of our API functionality includes:


| Method                    | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `Buy Token`               | Buy pump fun token from a specified wallet.         |
| `Sell Token`              | Sell pump fun token from a specified wallet.        |
| `Transfer Token`          | Transfer tokens between wallets.                    |
| `Retrieve Token Balance`  | Retrieves the token balance for a specified wallet. |
| `Retrieve Token Metadata` | Retrieve token metadata for a specified token.      |
| `Create A Wallet`         | Create a new wallet.                                |

and many more...

## Support

For support, please contact us through our platform [tradepump.fun](https://tradepump.fun).










