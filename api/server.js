const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('../auth/auth-router');
const itemsRouter = require('../items/items-router')
const restrict = require('../auth/auth-middleware')


const server = express();
server.use(helmet())
// var corsOptions = {
// 	origin: "http://localhost:3000/sign-up",
// 	optionsSuccessStatus: 200,
//   };
const origin =
process.env.JWT_SECRET === 'development' ? 'http://localhost:3000' : 'http://example.com';
server.use(cors({ credentials: true, origin }));

// server.use(cors(corsOptions))
server.use(express.json());
server.use(cookieParser())

server.use('/api', authRouter);
server.use('/api/items', itemsRouter, restrict());

server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;