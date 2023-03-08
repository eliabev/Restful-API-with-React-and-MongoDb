// current https://www.youtube.com/watch?v=K5QaTfE5ylk&t=345s
const express = require('express')
const app = express()

// way to read/parse JSON
// middlewares are resources executed between req and response
app.use( // create middleware
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// initial route

// delivers a port