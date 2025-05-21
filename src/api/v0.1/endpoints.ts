// src/api/v0.1/endpoints.ts
// This file contains information about all API endpoints for documentation/homepage purposes.

export const homePageApi = [
    {
        path: '/v0.1/user',
        method: 'GET',
        description: 'Get a random user or user by country. Optionally pass a country code as a parameter.'
    },
    {
        path: '/v0.1/user/:country',
        method: 'GET',
        description: 'Get a user by specific country code. Returns 404 if the country code is invalid.'
    },
    {
        path: '/v0.1/trade',
        method: 'GET',
        description: 'Get a list of all available trade data.'
    },
    {
        path: '/v0.1/trade/:symbol/overview',
        method: 'GET',
        description: 'Get overview data for a specific trade symbol.'
    },
    {
        path: '/v0.1/trade/:symbol/high-low',
        method: 'GET',
        description: 'Get high/low data for a specific trade symbol.'
    }
];

export default homePageApi;
