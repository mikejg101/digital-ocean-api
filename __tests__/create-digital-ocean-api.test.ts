import { createDigitalOceanApi } from '../src/create-digital-ocean-api';

describe('createDigitalOceanApi', () => {
    test('sets api key', () => {
        const apiKey = 'apiKey';
        const digitalOceanApi = createDigitalOceanApi(apiKey);
        expect(digitalOceanApi.apiKey).toBe(apiKey);
    });
});
