import { DigitalOceanApi } from './models/digital-ocean-api';
import { Account } from './models/account';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import camelCaseObjectProperties from './utils/camel-case-object-properties';
import { MessageType } from './models/message-type';

export const createDigitalOceanApi = (apiKey: string): DigitalOceanApi => {
    const baseUrl = 'https://api.digitalocean.com/v2';

    const createHeaders = (): AxiosRequestHeaders => ({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
    });

    const createConfig = (messageType: MessageType): AxiosRequestConfig => ({
        method: messageType,
        headers: createHeaders(),
    });

    const account = (): Promise<Account> =>
        axios
            .get(`${baseUrl}/account`, createConfig(MessageType.GET))
            .then((r) => camelCaseObjectProperties.shallow<Account>(r.data));

    return {
        apiKey,
        baseUrl,
        account,
    };
};
