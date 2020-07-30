const knex = require('knex')

const knexfile = require('../knexfile')

const dbEnv = process.env.DB_ENV || 'development' || 'test'

module.exports = knex(knexfile[dbEnv])
