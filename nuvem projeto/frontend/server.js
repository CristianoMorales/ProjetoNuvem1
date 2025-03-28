const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/api', createProxyMiddleware({
  target: 'http://10.0.129.172:25000',
  changeOrigin: true
}));

app.use(express.static(__dirname));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Frontend rodando em http://localhost:${PORT}`);
});
