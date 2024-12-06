import express from 'express';

const app = express();

let num = 10;

app.get('/api/v1/products', (req, res) => {
    res.status(200).json({
        status: "success",
        data: [
            { id: 1, name: "Iphone"},
            { id: 2, name: "Ipad"}
        ]
    })
});

app.get('/api/v1/users', (req, res) => {
    res.status(200).json({
        status: "success",
        data: [
            { id: 1, name: "John"},
            { id: 2, name: "Anne"}
        ]
    })
});

export default app;