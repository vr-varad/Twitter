const Tweet = require('../models/tweet')

class TweetRepository {
  async create(data){
    try {
      const tweet = await Tweet.create(data)
      return tweet
    } catch (error) {
      console.log(error)
    }
  }
  async get(tweetId){
    try {
      const tweet = await Tweet.findById(tweetId)
      return tweet
    } catch (error) {
      console.log(error)
    }
  }

  async getWithComments(tweetId){
    try {
      const tweet = await Tweet.findById(tweetId).populate(
        {
          path: 'comments'
        }
      )
      return tweet
    } catch (error) {
      console.log(error)
    }
  }
  async update(tweetId,data){
    try {
      const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new: true})
      return tweet
    } catch (error) {
      console.log(error)
    }
  }
  async remove(tweetId){
    try {
      const tweet = await Tweet.findByIdAndRemove(tweetId)
      return tweet
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = TweetRepository