/* eslint-disable @typescript-eslint/camelcase */
import { createDigitalOceanApi } from '../src/create-digital-ocean-api';
import mockAxios from 'jest-mock-axios';
import camelCaseObjectProperties from '../src/camel-case-object-properties';

const mockAccountResponse = {
    droplet_limit: 25,
    floating_ip_limit: 5,
    volume_limit: 10,
    email: 'sammy@digitalocean.com',
    uuid: 'b6fr89dbf6d9156cace5f3c78dc9851d957381ef',
    email_verified: true,
    status: 'active',
    status_message: '',
};

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

describe('account', () => {
    test('sets api key', () => {
        const apiKey = 'apiKey';
        const digitalOceanApi = createDigitalOceanApi(apiKey);
        expect(digitalOceanApi.apiKey).toBe(apiKey);
    });

    test('account calls axios with correct params', () => {
        const apiKey = 'apiKey';
        const digitalOceanApi = createDigitalOceanApi(apiKey);
        const baseUrl = digitalOceanApi.baseUrl;
        digitalOceanApi.account();
        expect(mockAxios.get).toHaveBeenCalledWith(`${baseUrl}/account`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
    });

    test('account returns camel cased account object', () => {
        // Assemble
        const apiKey = 'apiKey';
        const responseObj = { data: mockAccountResponse };
        const digitalOceanApi = createDigitalOceanApi(apiKey);
        const mockAccount = camelCaseObjectProperties.shallow(mockAccountResponse);
        const baseUrl = digitalOceanApi.baseUrl;

        // Act
        const account = digitalOceanApi.account();
        mockAxios.mockResponseFor({ url: `${baseUrl}/account` }, responseObj);

        // Assert
        account.then((account) => expect(account).toEqual(mockAccount));
    });
});
