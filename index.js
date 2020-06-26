const express = require('express');
const app = express();

const page = `
<html>
<head>
    <title>Myrin Wouterse</title>
</head?
<body>
    <h1>What's yellow and can't swim?</h1>
    <p>A bus full of children</p>
</body>
</html>
`;

app.get('/', function(request, response){
    response.send(page);
})

const port = 3000;
app.listen(port, function(){
    console.log(`listening on port: ${port}`);
})