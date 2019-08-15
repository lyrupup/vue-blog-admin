const express = require('express')

const app = express()
app.use(require('cors')())
app.use(express.json())


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/vue-blog-admin', {
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true
})
const Article = mongoose.model('Article', new mongoose.Schema({
    title: {type: String},
    body: {type: String}
}))

app.listen(3000, () => {
    console.log("The server has been started at port 3000")
})
// 文章列表
app.get('/api/articles', async (req, res) => {
    const articles = await Article.find()
    res.send(articles)
})
// 新建文章
app.post('/api/articles', async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})
// 文章详情
app.get('/api/articles/:id', async (req, res) =>{
    const article = await Article.findById(req.params.id)
    res.send(article)
})
// 修改文章
app.put('/api/articles/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(article)
})
// 删除文章
app.delete('/api/articles/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: "ok"
    })
})