const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    res.json({
        message: 'Dados do backend!',
        timestamp: new Date().toISOString()
    });
});

app.listen(25000, () => {
    console.log('Backend rodando na porta 25000');
});
