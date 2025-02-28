import axios from "axios";
import { apiHost, isFailedStatus } from "../utils";
import {
  IRetrieveOneTransactionInput,
  IRetrieveTransactionsInput,
  TransactionFindAllResponse,
  TransactionResponse,
} from "./types";

/**
 * Transaction API client
 */
export class PumpApiTransactionClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  readonly headers: {
    "x-api-key": string;
  };
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
    this.baseUrl = `${apiHost}/transaction`;
    this.headers = {
      "x-api-key": this.apiKey,
    };
  }

  /**
   * @name retrieveAll
   */
  async retrieveAll({
    page,
    limit,
  }: IRetrieveTransactionsInput): Promise<TransactionFindAllResponse> {
    const response = await axios.get<TransactionFindAllResponse>(
      `${this.baseUrl}`,
      {
        method: "GET",
        headers: this.headers,
        params: {
          page,
          limit,
        },
      }
    );

    if (isFailedStatus(response.status)) {
      throw new Error(response.statusText);
    }

    return response.data;
  }
  /**
   * @name retrieveById
   */
  async retrieveById({
    id,
  }: IRetrieveOneTransactionInput): Promise<TransactionResponse> {
    const response = await axios.get<TransactionResponse>(
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
}
