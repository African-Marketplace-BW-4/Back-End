const express = require('express')
const data = require('./items-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const items = await data.get()
        res.json(items)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const item = await data.getById(req.params.id)
        res.json(item)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const item = await data.add(req.body)
        res.status(201).json(item)
    } catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const update = await data.update(req.body, req.params.id)
        res.status(200).json(update)
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await data.remove(req.params.id)
        res.status(202).json({message: 'The item has been removed'})
    } catch(err) {
        next(err)
    }
})

module.exports = router