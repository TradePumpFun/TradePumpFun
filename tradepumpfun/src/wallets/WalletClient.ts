import axios from "axios";
import {
  ICreateWalletInput,
  IRetrieveOneWalletInput,
  WalletCreateResponse,
  WalletFindAllResponse,
  WalletFindOneResponse,
} from "./types";
import { apiHost as defaultApiHost, isFailedStatus } from "../utils";

export class PumpApiWalletClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  readonly headers: {
    "x-api-key": string;
  };

  constructor({ apiKey, apiHost = defaultApiHost }: { apiKey: string, apiHost?: string }) {
    this.apiKey = apiKey;
    this.baseUrl = `${apiHost}/wallet`;
    this.headers = {
      "x-api-key": this.apiKey,
    };
  }

  async retrieveAll(): Promise<WalletFindAllResponse> {
    const response = await axios.get<WalletFindAllResponse>(`${this.baseUrl}`, {
      method: "GET",
      headers: this.headers,
    });

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }

  async retrieveById({
    id,
  }: IRetrieveOneWalletInput): Promise<WalletFindOneResponse> {
    const response = await axios.get<WalletFindOneResponse>(
      `${this.baseUrl}/${id}`,
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

  async create({
    nickname,
    description,
  }: ICreateWalletInput): Promise<WalletCreateResponse> {
    const response = await axios.post<WalletCreateResponse>(
      `${this.baseUrl}`,
      {
        nickname,
        description,
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
