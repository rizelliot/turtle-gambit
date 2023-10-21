const express = require('express');
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.listen(8081, () => {
    console.log('Website server is running on port 8081');
  });