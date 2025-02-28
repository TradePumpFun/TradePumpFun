import axios from "axios";
import { apiHost, isFailedStatus } from "../utils";
import {
  ISolanaBalanceInput,
  ISolanaTransferInput,
  SolanaBalanceResponse,
  SolanaTransferResponse,
} from "./types";

/**
 * Solana API client
 * @description
 * The Solana API provides essential functionalities for interacting with Solana wallets.
 * It allows users to retrieve the current balance of a specified wallet, enabling them to monitor their assets.
 * The API also facilitates the sending and transferring of Solana (Sol) tokens between wallets.
 * With the Solana API, developers can handle the flow and insights of Sol amoung their trading wallets.
 */
export class PumpApiSolanaClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  readonly headers: {
    "x-api-key": string;
  };
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
    this.baseUrl = `${apiHost}/solana`;
    this.headers = {
      "x-api-key": this.apiKey,
    };
  }

  /**
   * @name balance
   * @description
   * Retrieve the solana balance of a wallet.
   * @param walletAddress - The address of the wallet to get the balance of
   * @returns The balance of the specified wallet
   */
  async balance({
    wallet,
  }: ISolanaBalanceInput): Promise<SolanaBalanceResponse> {
    const response = await axios.get<SolanaBalanceResponse>(
      `${this.baseUrl}/balance/${wallet}`,
      {
        method: "GET",
        headers: this.headers,
      }
    );

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }

  /**
   * @name transfer
   * @description
   * Transfer Solana (Sol) tokens between wallets.
   * @param fromWalletAddress - The address of the wallet to transfer from
   * @param toWalletAddress - The address of the wallet to transfer to
   * @param amountInLamports - The amount of Solana (Sol) tokens to transfer
   * @returns The transaction result
   */
  async transfer({
    fromWallet,
    recipientWallet,
    amountInLamports,
    feePayer,
    internalTransfer,
  }: ISolanaTransferInput): Promise<SolanaTransferResponse> {
    const response = await axios.post<SolanaTransferResponse>(
      `${this.baseUrl}/transfer`,
      {
        fromWallet,
        recipientWallet,
        amountInLamports,
        feePayer,
        internalTransfer,
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
