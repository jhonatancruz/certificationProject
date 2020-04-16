const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const News = require('../models/News')


async function getTopNews() {
    return newsapi.v2.topHeadlines({
        language: 'en',
        country: 'us'
    }).then(response => {
        let allNews = []
        response.articles.forEach((article) => {
            let sourceName = article.source.name
            let author = article.author
            let title = article.title
            let description = article.description
            let type = 'topnews'
            let url = article.url
            let urlToImage = article.urlToImage
            let publishedAt = article.publishedAt
            let content = article.content

            const document = new News()
            document.sourceName = sourceName
            document.author = author
            document.title = title
            document.description = description
            document.type = type
            document.url = url
            document.urlToImage = urlToImage
            document.publishedAt = publishedAt
            document.content = content
            allNews.push(document)
        })
        return allNews
    })
    .catch(function (error) {
        return error
    });

}

async function getSportNews() {
    return newsapi.v2.topHeadlines({
        category:'sports',
        language: 'en',
        country: 'us'
    }).then(response => {
        let allNews = []
        response.articles.forEach((article) => {
            let sourceName = article.source.name
            let author = article.author
            let title = article.title
            let description = article.description
            let type = 'sports'
            let url = article.url
            let urlToImage = article.urlToImage
            let publishedAt = article.publishedAt
            let content = article.content

            const document = new News()
            document.sourceName = sourceName
            document.author = author
            document.title = title
            document.description = description
            document.type = type
            document.url = url
            document.urlToImage = urlToImage
            document.publishedAt = publishedAt
            document.content = content
            allNews.push(document)
        })
        return allNews
    })
    .catch(function (error) {
        return error
    });

}

async function query(query) {
    return newsapi.v2.topHeadlines({
        q:query,
        language: 'en',
        country: 'us'
    }).then(response => {
        let allNews = []
        response.articles.forEach((article) => {
            let sourceName = article.source.name
            let author = article.author
            let title = article.title
            let description = article.description
            let type = query
            let url = article.url
            let urlToImage = article.urlToImage
            let publishedAt = article.publishedAt
            let content = article.content

            const document = new News()
            document.sourceName = sourceName
            document.author = author
            document.title = title
            document.description = description
            document.type = type
            document.url = url
            document.urlToImage = urlToImage
            document.publishedAt = publishedAt
            document.content = content
            allNews.push(document)
        })
        return allNews
    })
    .catch(function (error) {
        return error
    });

}




module.exports = {
    getTopNews: getTopNews,
    getSportNews:getSportNews,
    query:query
}