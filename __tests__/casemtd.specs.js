const request = require ('supertest')
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

it('validaçao verbo get', async () => {
    const resposta = await request('http://jsonplaceholder.typicode.com').get('/users')
    expect(resposta.status).toBe(200) // Verifica o código de status
    
});

it('validaçao verbo post', async () => {
    const resposta = await request('http://jsonplaceholder.typicode.com').post('/users')
    expect(resposta.status).toBe(201) // Verifica o código de status
    
});

it('validaçao verbo put', async () => {
    const resposta = await request('http://jsonplaceholder.typicode.com').put('/users')
    expect(resposta.status).toBe(404) // Verifica o código de status
    
});

it('validaçao verbo delete', async () => {
    const resposta = await request('http://jsonplaceholder.typicode.com').delete('/users')
    expect(resposta.status).toBe(404) // Verifica o código de status
    
});

// Validação do JSON Schema

      it('Valida o JSON schema da resposta da API', async () => {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const expectedSchema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                email:{type: 'string',format: 'email'}
              },
              required: ['1', 'Leanne Graham', 'Sincere@april.biz']
            },
        }
      });