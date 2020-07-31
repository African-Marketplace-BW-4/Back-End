const supertest = require('supertest')
const server = require('../api/server')
const db = require('../database/dbConfig')

beforeEach(async () => {
    await db.seed.run()
})


afterAll(async () => {
    await db.destroy()
})

describe('items integration tests', () => {
    it('Get /api/items', async () => {
        const res = await supertest(server).get('/api/items')
        expect(res.statusCode).toBe(200)
        expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        expect(res.body).toHaveLength(6)
        expect(res.body[0].name).toBe('eggs')
    })
    it('Get /api/items/:id', async () => {
        const res = await supertest(server).get('/api/items/5')
        expect(res.statusCode).toBe(200)
        expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        expect(res.body.id).toBe(5)
        expect(res.body.name).toBe('tomato')
    })
    it('post /api/items', async () => {
        const res = await supertest(server)
                .post('/api/items')
                .send({name:'beans', description:'green beans', price: 2.66, location_id: 1})
        expect(res.statusCode).toBe(201)
        expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        expect(res.body.id).toBeDefined()
        expect(res.body.name).toBe('beans')
    })
    it('Delete /api/items/:id', async () => {
        const res = await supertest(server).delete('/api/items/7')
        expect(res.statusCode).toBe(202)
        expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        expect(res.body.id).toBeUndefined()
        expect(res.body.message).toBe('the item has been removed')
    })
    it('Put /accounts/:id', async () => {
        const res = await supertest(server).put('/accounts/6')
                .send({name:'watermelon', description:'delicious', price: 5.00, location_id: 1})
        expect(res.statusCode).toBe(200)
        expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        expect(res.body.name).toBe('watermelon')
    })
})