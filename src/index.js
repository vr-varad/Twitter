const express = require('express')
const connect = require('./config/database')
const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comment')
const app = express()

const port = 3000
app.listen(port,async()=>{
  console.log('Server started on port', port)
  await connect()
  console.log('MongoDB connected')
  // const tweet = await  Tweet.create({
  //   content: 'Third Tweet',
  // })
  const tweetRepo = new TweetRepository()
  const tweet = await tweetRepo.getAll(0,2)
  console.log(tweet[0].contentWithEmail)
})