const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()
const postgres = require('./db/index.js')



app.set('view engine', 'ejs')

app.use('/articles',articleRouter)
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    }]
    res.render('articles/index', {articles: articles})
})


app.listen(5000)