import axios from "axios";
import { apiHost as defaultApiHost, isFailedStatus } from "../utils";
import {
  BundleResponse,
  IBundleBuyPumpFunTokenInput,
  IBundleExitPumpFunTokenInput,
  IBundleSellByPercentagePumpFunTokenInput,
  IBundleSellPumpFunTokenInput,
} from "./types";

/**
 * Bundle API client
 */
export class PumpApiBundleClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  readonly headers: {
    "x-api-key": string;
  };
  constructor({ apiKey, apiHost = defaultApiHost }: { apiKey: string, apiHost?: string }) {
    this.apiKey = apiKey;
    this.baseUrl = `${apiHost}/trade/bundle`;
    this.headers = {
      "x-api-key": this.apiKey,
    };
  }

  /**
   * @name buy
   */
  async buy({
    mint,
    buys,
    feePayer,
    priorityUnitLimit,
    priorityUnitPrice,
    slippage,
  }: IBundleBuyPumpFunTokenInput): Promise<BundleResponse> {
    const response = await axios.post<BundleResponse>(
      `${this.baseUrl}/buy`,
      {
        mint,
        buys,
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
    sells,
    feePayer,
    priorityUnitLimit,
    priorityUnitPrice,
    slippage,
  }: IBundleSellPumpFunTokenInput): Promise<BundleResponse> {
    const response = await axios.post<BundleResponse>(
      `${this.baseUrl}/sell`,
      {
        mint,
        sells,
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
 * @name sellByPercentage
 */
  async sellByPercentage({
    mint,
    sells,
    feePayer,
    priorityUnitLimit,
    priorityUnitPrice,
    slippage,
  }: IBundleSellByPercentagePumpFunTokenInput): Promise<BundleResponse> {
    const response = await axios.post<BundleResponse>(
      `${this.baseUrl}/sell/by-percentage`,
      {
        mint,
        sells,
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
* @name sellExit
*/
  async sellExit({
    mint,
    feePayer,
    priorityUnitLimit,
    priorityUnitPrice,
    slippage,
  }: IBundleExitPumpFunTokenInput): Promise<BundleResponse> {
    const response = await axios.post<BundleResponse>(
      `${this.baseUrl}/sell/exit`,
      {
        mint,
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
