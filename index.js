import express from "express"
import axios from "axios"
import bodyParser from "body-parser"


const app = express()
const port = 3000
const apiKey = 'CG-MPVtg1V1hNTiDnjKA3NzgXBG';

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/crypto", async (req,res) =>{
    let divId = (req.body.id).toLowerCase();
    console.log(divId);

    const result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets`,{
        headers:{
            'x-cg-demo-api-key': apiKey,
        },
        params:{
            vs_currency: 'usd',
            ids: divId
        }
    }
    )
    const data = result.data
    console.log(data)
})

app.listen(port, ()=>{
console.log(`Server running on port ${port}`)
})