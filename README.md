# Permanent HTTP redirects built in Node

This tiny app permanently redirects an old URL domain to a new one.
The most useful use-case is when updating the "domain" of an app.

## Behaviour

Let the old URL be `http://old-domain.com` and the `NEW_BASE_URL` environmental
variable equals to `http://new-shinny-domain.com`

When request the following:
```
GET /foo/bar?param=value
Host: old-domain.com
```

It should respond with:
```
HTTP/1.1 301 Moved Permanently
Location: http://new-shinny-domain.com/foo/bar?param=value
```

## Development

1. Copy `.sample.env` to `.env`
2. Run `npm i` to install development dependencies
3. Run `npm start` to run the server
4. Run `npm test` to run functional tests

## Contributing

If you want to contribute you can:
1. Submit an issue to this repo
2. Open a new PR agains `master` branch

## Security concerns

If you find any security concer, please open an issue and tag it with `security` label. 
