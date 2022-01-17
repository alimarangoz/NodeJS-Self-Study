const express = require('express');
const routes = require('./routes/api')
const app = express();
const port = process.env.PORT || 3000;

app.use("/api",routes);




app.listen(port);
console.log("Server is running");