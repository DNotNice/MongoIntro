const express = require('express');
const connect  = require('./config/database')
const app = express();
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')
app.listen( 3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('mongo db connected');
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('63dcc11d3b00a4fb2a92fce6')
    console.log(tweet);
});