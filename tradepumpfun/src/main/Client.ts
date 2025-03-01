import axios from "axios";
import { PingResponse } from "./types";
import { PumpApiWalletClient } from "../wallets";
import { apiHost, isFailedStatus } from "../utils";
import { PumpApiSolanaClient } from "../solana";
import { PumpApiTokenClient } from "../token";
import { PumpApiTradeClient } from "../trade";
import { PumpApiTransactionClient } from "../transaction";
import { PumpApiBundleClient } from "../bundle";
export class PumpApiClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  readonly wallet: PumpApiWalletClient;
  readonly solana: PumpApiSolanaClient;
  readonly token: PumpApiTokenClient;
  readonly trade: PumpApiTradeClient;
  readonly transaction: PumpApiTransactionClient;
  readonly bundle: PumpApiBundleClient;
  readonly headers: {
    "x-api-key": string;
  };
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
    this.baseUrl = apiHost;
    this.headers = {
      "x-api-key": this.apiKey,
    };
    // Clients
    this.wallet = new PumpApiWalletClient({ apiKey });
    this.solana = new PumpApiSolanaClient({ apiKey });
    this.token = new PumpApiTokenClient({ apiKey });
    this.trade = new PumpApiTradeClient({ apiKey });
    this.transaction = new PumpApiTransactionClient({ apiKey });
    this.bundle = new PumpApiBundleClient({ apiKey });
  }

  async ping(): Promise<PingResponse> {
    const response = await axios.get<PingResponse>(`${this.baseUrl}`, {
      method: "GET",
      headers: this.headers,
    });

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }
}
