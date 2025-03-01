import axios from "axios";
import { apiHost, isFailedStatus } from "../utils";
import {
  CreateTokenResponse,
  ICloseTokenAccountInput,
  ICreateTokenInput,
  IRetrieveTokenBalanceInput,
  IRetrieveTokenMarketCapInput,
  IRetrieveTokenMetadataInput,
  ITokenAccountInput,
  ITransferTokenByPercentageInput,
  ITransferTokenInput,
  TokenAccountResponse,
  TokenBalanceResponse,
  TokenCloseAccountResponse,
  TokenMarketCapResponse,
  TokenMetadataResponse,
  TokenTransferResponse,
} from "./types";

/**
 * Token API client
 */
export class PumpApiTokenClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  readonly headers: {
    "x-api-key": string;
  };
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
    this.baseUrl = `${apiHost}/token`;
    this.headers = {
      "x-api-key": this.apiKey,
    };
  }

  /**
   * @name retrieveTokenMetadata
   */
  async retrieveTokenMetadata({
    mint,
  }: IRetrieveTokenMetadataInput): Promise<TokenMetadataResponse> {
    const response = await axios.get<TokenMetadataResponse>(
      `${this.baseUrl}/${mint}/metadata`,
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
   * @name retrieveTokenBalance
   */
  async retrieveTokenBalance({
    mint,
    wallet,
  }: IRetrieveTokenBalanceInput): Promise<TokenBalanceResponse> {
    const response = await axios.get<TokenBalanceResponse>(
      `${this.baseUrl}/${mint}/balance/${wallet}`,
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
   * @name transferToken
   */
  async transferToken({
    mint,
    fromWallet,
    recipientWallet,
    amountInToken,
    internalTransfer,
    feePayer,
  }: ITransferTokenInput): Promise<TokenTransferResponse> {
    const response = await axios.post<TokenTransferResponse>(
      `${this.baseUrl}/transfer`,
      {
        mint,
        fromWallet,
        recipientWallet,
        amountInToken,
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

  /**
   * @name transferToken
   */
  async transferTokenByPercentage({
    mint,
    fromWallet,
    recipientWallet,
    percentage,
    internalTransfer,
    feePayer,
  }: ITransferTokenByPercentageInput): Promise<TokenTransferResponse> {
    const response = await axios.post<TokenTransferResponse>(
      `${this.baseUrl}/transfer-by-percentage`,
      {
        mint,
        fromWallet,
        recipientWallet,
        percentage,
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

  /**
   * @name tokenAccount
   */
  async tokenAccount({
    mint,
    wallet,
  }: ITokenAccountInput): Promise<TokenAccountResponse> {
    const response = await axios.get<TokenAccountResponse>(
      `${this.baseUrl}/${mint}/token-account/${wallet}`,
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
   * @name closeTokenAccount
   */
  async closeTokenAccount({
    mint,
    fromWallet,
    feePayer,
  }: ICloseTokenAccountInput): Promise<TokenCloseAccountResponse> {
    const response = await axios.post<TokenCloseAccountResponse>(
      `${this.baseUrl}/close-token-account`,
      {
        mint,
        fromWallet,
        feePayer,
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
   * @name retrieveTokenMarketCap
   */
  async retrieveTokenMarketCap({
    mint,
  }: IRetrieveTokenMarketCapInput): Promise<TokenMarketCapResponse> {
    const response = await axios.get<TokenMarketCapResponse>(
      `${this.baseUrl}/${mint}/market-cap`,
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
   * @name createToken
   */
  async createToken({
    file,
    name,
    symbol,
    description,
    website,
    twitter,
    telegram,
    fromWallet,
    buyAmountInLamports,
    feePayer,
  }: ICreateTokenInput): Promise<CreateTokenResponse> {
    const form = new FormData();
    form.append("file", file);
    form.append("fromWallet", fromWallet);
    form.append("name", name);
    form.append("symbol", symbol);
    form.append("description", description);
    if (website) {
      form.append("website", website);
    }
    if (twitter) {
      form.append("twitter", twitter);
    }
    if (telegram) {
      form.append("telegram", telegram);
    }

    if (feePayer) {
      form.append("feePayer", feePayer);
    }
    if (buyAmountInLamports) {
      form.append("buyAmountInLamports", buyAmountInLamports.toString());
    }

    const response = await axios.post<CreateTokenResponse>(
      `${this.baseUrl}/create`,
      form,
      {
        headers: {
          ...this.headers,
          "Content-Type": `multipart/form-data;`,
        },
      }
    );

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }
}
