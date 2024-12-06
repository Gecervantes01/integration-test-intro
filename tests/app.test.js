import app from './../src/app.js';
import supertest from 'supertest';

describe('Products endpoint', () => {
    test('Should be available', async () => {
        const response = await supertest(app)
            .get('/api/v1/products')
            .expect(200);
    });
    
    test('Should return correct data', async () => {
        const response = await supertest(app)
            .get('/api/v1/products')
            .expect(200);
        
        expect(response.body.status).toBe("success");
        expect(response.body.data).toEqual([
            { id: 1, name: "Iphone"},
            { id: 2, name: "Ipad"}
        ]);
    });
});

describe('Users endpoint', () => {
    test('Should be available', async () => {
        const response = await supertest(app)
            .get('/api/v1/users')
            .expect(200);
    });
    
    test('Should return correct data', async () => {
        const response = await supertest(app)
            .get('/api/v1/users')
            .expect(200);
        
        expect(response.body.status).toBe("success");
        expect(response.body.data).toEqual([
            { id: 1, name: "John"},
            { id: 2, name: "Anne"}
        ]);
    });
});
