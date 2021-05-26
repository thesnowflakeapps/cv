const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('hello world sever');
  req.on('data', (chunk) => {
    console.log('You received a chunk of data', chunk)
  })
  res.end('some data')


  app.get('/products', (req, res) => {
    console.log("Products have been accessed")
  })
  
  app.post('/products', (req, res) => {
    // handle the request
  })
  


});



server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})