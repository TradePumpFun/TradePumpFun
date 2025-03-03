import axios from "axios";
import { PingResponse } from "./types";
import { PumpApiWalletClient } from "../wallets";
import { apiHost as defaultApiHost, isFailedStatus } from "../utils";
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
  constructor({
    apiKey,
    apiHost = defaultApiHost,
  }: {
    apiKey: string,
    apiHost?: string
  }) {
    this.apiKey = apiKey;
    this.baseUrl = apiHost;
    this.headers = {
      "x-api-key": this.apiKey,
    };
    // Clients
    this.wallet = new PumpApiWalletClient({ apiKey, apiHost });
    this.solana = new PumpApiSolanaClient({ apiKey, apiHost });
    this.token = new PumpApiTokenClient({ apiKey, apiHost });
    this.trade = new PumpApiTradeClient({ apiKey, apiHost });
    this.transaction = new PumpApiTransactionClient({ apiKey, apiHost });
    this.bundle = new PumpApiBundleClient({ apiKey, apiHost });
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
