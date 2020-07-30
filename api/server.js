const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('../auth/auth-router');
const itemsRouter = require('../items/items-router')
const restrict = require('../auth/auth-middleware')


const server = express();
server.use(helmet())

const origin =
process.env.JWT_SECRET === 'production' ? 'https://build-week-app.herokuapp.com': 'http://localhost:3000';
server.use(cors({ credentials: true, origin }));

server.use(express.json());


server.use('/api', authRouter);
server.use('/api/items', itemsRouter, restrict());

server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;