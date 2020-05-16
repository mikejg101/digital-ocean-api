import { Account } from './account';

export interface DigitalOceanApi {
    readonly apiKey: string;
    readonly baseUrl: string;
    account: () => Promise<Account>;
}
