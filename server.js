const http = require('http')

const host = 'localhost'
const port = 8080

const mainEndpoint = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200)
  res.end(JSON.stringify({msg: `Server online at ${new Date()}`}))
}

const server = http.createServer(mainEndpoint);

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
})