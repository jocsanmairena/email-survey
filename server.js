const express = require('express');
const app = express();


//app represents the underlyiong running express server.
//The express server has route handlers associated with it. Like "get"
app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
