const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://takutora.ddev.site',
      changeOrigin: true,
      secure: false, // Ignore SSL certificate issues
      pathRewrite: {
        '^/api': '', // Remove /api prefix when forwarding to backend
      },
      onProxyReq: (proxyReq, req, res) => {
        // Add CORS headers
        console.log('Proxying request to:', proxyReq.path);
      },
      onProxyRes: (proxyRes, req, res) => {
        // Add CORS headers to response
        proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Authorization, Accept, X-Requested-With';
      }
    })
  );
};
