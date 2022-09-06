const express = require("express")

const app = express ();


app.get("/",(request, response )=>{
    response.send("hello World")
});

app.listen(3000, ()=> console.log ("server rodando na porta http://localhost:3000"));