const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var name = req.body.name;
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var heightM=height/100
    var BMI = weight / (heightM ** 2);
    res.send(`Hello ${name}, your BMI is ${BMI}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
