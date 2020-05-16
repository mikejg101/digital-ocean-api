import { DigitalOceanApi } from './models/digital-ocean-api';
import { Account } from './models/account';
import axios from 'axios';
import camelCaseObjectProperties from './camel-case-object-properties';

enum MessageType {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

interface HeaderObject {
    'Content-Type': string;
    Authorization: string;
}

interface RequestConfig {
    method: MessageType;
    headers: HeaderObject;
}

export const createDigitalOceanApi = (apiKey: string): DigitalOceanApi => {
    const baseUrl = 'https://api.digitalocean.com/v2';

    const createHeaders = (): HeaderObject => ({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
    });

    const createConfig = (messageType: MessageType): RequestConfig => ({
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
