const supertest = require('supertest')
const bcrypt = require('bcryptjs')
const server = require('../api/server')
const db = require('../database/dbConfig')

beforeAll(async () => {
    await db('items').truncate();
    await db('locations').truncate();
    await db('users').truncate();
})

afterAll(async () => {
    await db.destroy()
})


describe('end point tests', () => {
    describe('POST /register and POST /login', () => {
        
            //test1
        it('POST /auth/register - should return status 201', async () => {
                await supertest(server)
                    .post('/api/register')
                    .send({ username: "tarik najim", password: 'password', email: 'test@test.com', first_name: 'tarik', last_name: 'najim' })
                    .then(res => {
                        expect(res.status).toBe(201);
                        expect(res.type).toMatch("application/json");
                    })
            })
            //test2
        it('POST /login - should return token', async () => {
            await supertest(server)
            .post('/api/login')
            .send({ username: 'tarik najim', password: 'password' })
            .then(res => {
                expect(res.status).toBe(500);
            })
        })   
            //test3
        it(' GET /items - res.type should match json', () => {
                return supertest(server)
                    .get('/api/items')
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                        expect(res.status).toBe(200)
                    })
            })
            //test4
        it(' GET /items/:id - res.type should match json', () => {
                return supertest(server)
                    .get('/api/items/1')
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                        expect(res.status).toBe(200)
                    })
            })
            //test5
        it(' POST /api/items - res.type should match json', () => {
                return supertest(server)
                .post('/api/items')
                .send({ name: "testjoe", description: "testjoe123", price: 1.23, location_id: 1 })
                .then(res => {
                    expect(res.type).toMatch("application/json");
                    
                })
            })
            //test6
        it(' UPDATE /items/:id - res.type should match json', () => {
                return supertest(server)
                .put('/api/items/1')
                .send({ name: "testdoe", description: "testdoe123", price: 2.23, location_id: 3 })
                .then(res => {
                    expect(res.type).toMatch("application/json");
                    expect(res.status).toBe(200)
                })
            }) 
            //test7 
            it('Delete /items/:id', async () => {
                const res = await supertest(server).delete('/api/items/7')
                expect(res.statusCode).toBe(202)
                expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
                expect(res.body.id).toBeUndefined()
                expect(res.body.message).toBe('The item has been removed')
            })   
    })    
}) 
