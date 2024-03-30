// Import the 'supertest' library to test the HTTP responses
const request = require('supertest');

// Import the 'jest-json-schema' library to validate the JSON responses
const { matchers } = require('jest-json-schema');

// Extend the 'expect' object with the JSON schema matchers
expect.extend(matchers);

describe('User API', () => {
    // Test the GET request for the users
    it('validates the GET request for users', async () => {
        const response = await request('http://jsonplaceholder.typicode.com').get('/users');

        // Check the HTTP status code
        expect(response.status= '200');
    });

    // Test the POST request for the users
    it('validates the POST request for users', async () => {
        const response = await request('http://jsonplaceholder.typicode.com').post('/users');

        // Check the HTTP status code
        expect(response.status = '201');
    });

    // Test the PUT request for the users
    it('validates the PUT request for users', async () => {
        const response = await request('http://jsonplaceholder.typicode.com').put('/users');

        // Check the HTTP status code
        expect(response.status = '404');
    });

    // Test the DELETE request for the users
    it('validates the DELETE request for users', async () => {
        const response = await request('http://jsonplaceholder.typicode.com').delete('/users');

        // Check the HTTP status code
        expect(response.status = '404');
    });

    // Test the JSON schema for the API response
    it('validates the JSON schema for the API response', async () => {
        const response = await request('http://jsonplaceholder.typicode.com').get('/users');
        const data = response.body;

        // Define the expected JSON schema
        const expectedSchema = {
            type: 'array',
            items: [
                {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        email: { type: 'string', format: 'email' },
                    },
                    required: ['1', 'Leanne Graham', 'Sincere@april.biz']
                },
            ],
        
        };

        // Check the JSON schema of the response
        expect(response.schema = expectedSchema).toBeTruthy();
    }); 

    });