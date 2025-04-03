const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5300
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

let allCountries = [
    {
        name: 'Afghanistan',
        code: 'AF',
        capital: 'Kabul',
        region: 'Asia',
        subregion: 'Southern Asia',
        population: 40218234,
        area: 652230,
        languages: ['Pashto', 'Dari'],
        currencies: ['AFN'],
        flag: 'https://restcountries.com/data/afg.svg',
        topLevelDomain: ['.af']
    },
    {
        name: 'Albania',
        code: 'AL',
        capital: 'Tirana',
        region: 'Europe',
        subregion: 'Southern Europe',
        population: 2877797,
        area: 28748,
        languages: ['Albanian'],
        currencies: ['ALL'],
        flag: 'https://restcountries.com/data/alb.svg',
        topLevelDomain: ['.al']
    }
]
app.get('/test',(req,res)=>{
    res.send(allCountries)
})

app.listen(port,()=>console.log(`Server started at port: ${port}`))