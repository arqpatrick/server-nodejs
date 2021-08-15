const http = require('http') //modulo nodejs
const fs = require('fs') //modulo filesystem

const server = http.createServer(function(request, response) {
  console.log(request.url)

  if (request.url === '/') {
    fs.readFile('../client/index.html', function(error, content) {
      response.end(content)
    })
  }

})

server.listen(8080)
console.log('Servidor executando na porta 8080')