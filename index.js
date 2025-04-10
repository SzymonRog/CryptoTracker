import express from "express"
import axios from "axios"
import bodyParser from "body-parser"


const app = express()
const port = 3000
const apiKey = 'CG-MPVtg1V1hNTiDnjKA3NzgXBG';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/crypto", (req,res) =>{
    let divId = (req.body.id).toLowerCase();
    console.log(divId);
})

app.listen(port, ()=>{
console.log(`Server running on port ${port}`)
})