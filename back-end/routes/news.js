const express = require('express')
const router = express.Router()

const News = require('../models/News')
const auth = require('../middlewares/auth')
const newsApi = require('../middlewares/newsApi')

// Create news
router.post('/', auth, (req, res) => {
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

// find one by id
router.get('/:id', (req, res) =>
{
    const { id } = req.params

    News.findById(id)
        .then(news => {
            if (news){
                res.json(news)
            } else{
                res.status(404).json({
                    msg: 'News not found'
                })
            }
        })
        .catch(err => res.status(400).json(err))
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
router.delete('/:id', auth, (req, res) => {
    const { id } = req.params

    News.findByIdAndRemove(id)
        .then(news => res.json(news))
        .catch(err => res.status(400).json(err))
})

// Get news based on query you provide
router.get('/query', auth, async (req, res) => {
    const { query } = req.body
    newsApi.query(query).then(result => {
        News.insertMany(result)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
})

// Get headline breaking news
router.get('/breaking', auth, async (req, res) => {
    newsApi.getTopNews().then(result => {
        News.insertMany(result)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
})

// Get headline sport news
router.get('/sports', auth, async (req, res) => {
    newsApi.getSportNews().then(result => {
        News.insertMany(result)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
})



module.exports = router;
