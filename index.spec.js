const http = require('http')
const assert = require('assert')

const port = process.env.PORT
const baseUrl = `http://localhost:${port}`
const redirectUrl = process.env.NEW_BASE_URL

describe('/', () => {
  const url = `${baseUrl}/`

  it('should return 301', (done) => {
    http.get(url, (res) => {
      assert.equal(301, res.statusCode)
      done()
    })
  })

  it('should have Location header', (done) => {
    http.get(url, (res) => {
      assert.equal(`${redirectUrl}/`, res.headers.location)
      done()
    })
  })
})

describe('/foo/bar?param=value', () => {
  const url = `${baseUrl}/foo/bar?param=value`

  it('should return 301', (done) => {
    http.get(url, (res) => {
      assert.equal(301, res.statusCode)
      done()
    })
  })

  it('should have Location header', (done) => {
    http.get(url, (res) => {
      assert.equal(`${redirectUrl}/foo/bar?param=value`, res.headers.location)
      done()
    })
  })
})
