const express = require("express");
const bodyParser = require('body-parser');
const router = require("./src/routes/web.router");
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// config static files
app.use(express.static('public'));
// config routes
app.use(router)
// congif view engine - ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});