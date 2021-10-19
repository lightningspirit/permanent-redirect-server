const http = require("http");

const baseurl = process.env.NEW_BASE_URL;
const port = process.env.PORT;
const redirectStatusCode = 301;

const server = http.createServer((req, res) => {
  res.writeHead(redirectStatusCode, {
    Location: `${baseurl}${req.url}`,
  });
  res.end();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}. Redirect to ${baseurl}`);
});
