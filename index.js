const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    
    res.send('Manu Probandot');
});

app.post('/user/', (req, res) => {
    console.log(req.body);
    res.send('Request working');
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Method POST being applied..');
});

app.delete('/user/:userId', (req, res) => {
    res.send('User ${req.params.userId} deleted.');
});


app.listen(2300, () => {
    console.log('Server on port 2300');
});