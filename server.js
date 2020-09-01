// wee example for webserver built with json-server
// https://www.npmjs.com/package/json-server
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// set server on /api
server.use('/api', router)

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom route: GET request
server.get('/ping', (req, res) => {
	res.jsonp("pong")
})

// Add custom route: POST request
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	if (req.method === 'POST') {
		res.sendStatus(200)
	} else {
		res.sendStatus(501)
	}
})

server.use(router)
server.listen(3000, () => {
	console.log('Running ...')
})

