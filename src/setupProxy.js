const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8777',
      changeOrigin: true,
    })
  )
  app.use(
    '/email',
    createProxyMiddleware({
      target: 'http://localhost:8777',
      changeOrigin: true,
    })
  )
}