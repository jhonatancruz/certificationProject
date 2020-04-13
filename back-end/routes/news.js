const express = require('express')
const router = express.Router()
const axios = require('axios').default;

const News=require('../models/News')

// Read all news 
router.get('/', (req,res)=>{
    News.find()
        .then(news=>{
            res.json(news)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.get('/query', (req, res) => {
    // querying with a query word
    const date= new Date()
    const formattedDate= date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
    const apiKey= 'e105798436064d8eb738c72a933fa352'
    const {q}= req.query

    axios.get('https://newsapi.org/v2/everything?q='+q+'&from='+formattedDate+'&sortBy=publishedAt&apiKey='+apiKey)
        .then(function(result){
            res.send(result.data.articles)
        })
        .catch(function(error){
            res.send(error)
        })
})
router.get('/breaking', (req, res) => {
    // querying by category
    const apiKey= 'e105798436064d8eb738c72a933fa352'
    const {category}= req.query
    
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category='+category+'&apiKey='+apiKey)
        .then(function(result){
            // console.log(result.data.articles)
            var allNews=[]
            for(i=0; i<result.data.articles.length; i++){
                const sourceName= result.data.articles[i].source.name
                const author= result.data.articles[i].author
                const title= result.data.articles[i].title
                const description= result.data.articles[i].description
                const url= result.data.articles[i].url
                const urlToImage= result.data.articles[i].urlToImage
                const publishedAt= result.data.articles[i].publishedAt
                const content= result.data.articles[i].content

                const news= new News()
                news.soureName= sourceName
                news.author= author
                news.title= title
                news.description= description
                news.type= category
                news.url= url
                news.urlToImage= urlToImage
                news.publishedAt= publishedAt
                news.content= content

                allNews.push(news)
            }
            News.insertMany(allNews)
                .then(newNews=>{
                    res.send('Added news to database')
                })
                .catch(err => {
                    res.status(400).json(err)
                })
        })
        .catch(function(error){
            res.send(error)
        })

    
})
module.exports = router;