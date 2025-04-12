import express from "express"
import axios from "axios"
import bodyParser from "body-parser"


const app = express()
const port = 3000
const apiKey = 'CG-MPVtg1V1hNTiDnjKA3NzgXBG';


app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/crypto", async (req,res) =>{
    let divId = (req.query.id).toLowerCase();
    try{
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

        const chartResult = await axios.get(`https://api.coingecko.com/api/v3/coins/${divId}/market_chart`,{
            headers:{
                'x-cg-demo-api-key': apiKey,
            },
            params: {
                vs_currency: 'usd',
                days: '7',
                precision: '0'

            }
        })
        const chartData = chartResult.data
        const data = result.data
        console.log(chartData.prices)

        res.render('index.ejs',{
            content: data[0],
            prices: chartData.prices
        })
    } catch(error){
        console.log(error.message)
        res.status(404).send("some thing went wrong")
    }  
})

app.listen(port, ()=>{
console.log(`Server running on port ${port}`)
})