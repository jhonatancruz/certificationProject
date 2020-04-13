const express = require('express')
const router = express.Router()
const axios = require('axios').default;


const News = require('../models/News')
const auth = require('../middlewares/auth')

// Create news
router.post('/',auth, (req, res) => {
    const { sourceName, author, title, description, type, url, urlToImage, content } = req.body

    const news = new News()

    news.sourceName = sourceName
    news.author = author
    news.title = title
    news.description = description
    news.type = type
    news.url = url
    news.urlToImage = urlToImage
    news.publishedAt = new Date()
    news.content = content

    news.save()
        .then(list => res.json(list))
        .catch(err => res.status(400).json(err))
})

// Read all news 
router.get('/', (req, res) => {
    News.find()
        .then(news => {
            res.json(news)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

//Update by id
router.put('/:id', auth, (req, res) => {
    const { id } = req.params
    const { sourceName, author, title, description, type, url, urlToImage, content } = req.body

    const data = {
        sourceName: sourceName,
        author: author,
        title: title,
        description: description,
        type: type,
        url: url,
        urlToImage: urlToImage,
        content: content
    }
    News.findOneAndUpdate(id, data)
        .then(updatedList => {
            res.json(updatedList)
        })
        .catch(err => res.status(400).json(err))
})


//delete news by id
router.delete('/:id',auth, (req, res) => {
    const { id } = req.params

    News.findByIdAndRemove(id)
        .then(news => res.json(news))
        .catch(err => res.status(400).json(err))
})


// Get news by query word
router.get('/query', auth,(req, res) => {
    const date = new Date()
    const formattedDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
    const apiKey = 'e105798436064d8eb738c72a933fa352'
    const { q } = req.query

    axios.get('https://newsapi.org/v2/everything?q=' + q + '&from=' + formattedDate + '&sortBy=publishedAt&apiKey=' + apiKey)
        .then(function (result) {
            res.send(result.data.articles)
        })
        .catch(function (error) {
            res.send(error)
        })
})

// Get news by category
router.get('/breaking', auth,(req, res) => {
    const apiKey = 'e105798436064d8eb738c72a933fa352'
    const { category } = req.query

    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=' + category + '&apiKey=' + apiKey)
        .then(function (result) {
            var allNews = []
            for (i = 0; i < result.data.articles.length; i++) {
                const sourceName = result.data.articles[i].source.name
                const author = result.data.articles[i].author
                const title = result.data.articles[i].title
                const description = result.data.articles[i].description
                const url = result.data.articles[i].url
                const urlToImage = result.data.articles[i].urlToImage
                const publishedAt = result.data.articles[i].publishedAt
                const content = result.data.articles[i].content

                const news = new News()
                news.sourceName = sourceName
                news.author = author
                news.title = title
                news.description = description
                news.type = category
                news.url = url
                news.urlToImage = urlToImage
                news.publishedAt = publishedAt
                news.content = content

                allNews.push(news)
            }
            News.insertMany(allNews)
                .then(newNews => {
                    res.send('Added news to database')
                })
                .catch(err => {
                    res.status(400).json(err)
                })
        })
        .catch(function (error) {
            res.send(error)
        })


})
module.exports = router;