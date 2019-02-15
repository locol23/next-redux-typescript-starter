const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const routes = require('./routes')
const { createReadStream } = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)

    handle(req, res, parsedUrl)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
