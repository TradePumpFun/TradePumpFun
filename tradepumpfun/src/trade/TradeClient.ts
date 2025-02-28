import axios from "axios";
import { apiHost, isFailedStatus } from "../utils";
import {
  IBuyTokenInput,
  ISellTokenByPercentageInput,
  ISellTokenInput,
  TokenBuyResponse,
  TokenSellResponse,
} from "./types";

/**
 * Trade API client
 */
export class PumpApiTradeClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  readonly headers: {
    "x-api-key": string;
  };
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
    this.baseUrl = `${apiHost}/trade`;
    this.headers = {
      "x-api-key": this.apiKey,
    };
  }

  /**
   * @name buy
   */
  async buy({
    mint,
    fromWallet,
    amountInLamports,
    feePayer,
    priorityUnitLimit,
    priorityUnitPrice,
    slippage,
  }: IBuyTokenInput): Promise<TokenBuyResponse> {
    const response = await axios.post<TokenBuyResponse>(
      `${this.baseUrl}/buy`,
      {
        mint,
        fromWallet,
        amountInLamports,
        feePayer,
        priorityUnitLimit,
        priorityUnitPrice,
        slippage,
      },
      {
        method: "POST",
        headers: this.headers,
      }
    );

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }
  /**
   * @name sell
   */
  async sell({
    mint,
    fromWallet,
    amountInToken,
    feePayer,
    priorityUnitLimit,
    priorityUnitPrice,
    slippage,
  }: ISellTokenInput): Promise<TokenSellResponse> {
    const response = await axios.post<TokenSellResponse>(
      `${this.baseUrl}/sell`,
      {
        mint,
        fromWallet,
        amountInToken,
        feePayer,
        priorityUnitLimit,
        priorityUnitPrice,
        slippage,
      },
      {
        method: "POST",
        headers: this.headers,
      }
    );

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }

  /**
   * @name sell
   */
  async sellByPercentage({
    mint,
    fromWallet,
    percentage,
    feePayer,
    priorityUnitLimit,
    priorityUnitPrice,
    slippage,
  }: ISellTokenByPercentageInput): Promise<TokenSellResponse> {
    const response = await axios.post<TokenSellResponse>(
      `${this.baseUrl}/sell-by-percentage`,
      {
        mint,
        fromWallet,
        percentage,
        feePayer,
        priorityUnitLimit,
        priorityUnitPrice,
        slippage,
      },
      {
        method: "POST",
        headers: this.headers,
      }
    );

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }
}
