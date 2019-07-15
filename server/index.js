//Set up server
const express = require('express')
const app = express()
const PORT = 3001
//using messCtrl module
const messCtrl = require('./controllers/messages_controller')

//middleware
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

//endpoints
app.post('/api/messages', messCtrl.createMess) //Makes new post
app.get('/api/messages', messCtrl.readMess) //Gets all posts
app.put('/api/messages/:id', messCtrl.updateMess) //Updates a post
app.delete('/api/messages/:id', messCtrl.deleteMess) //Deletes a post

//listener
app.listen(PORT, () => {
    console.log(`Captain's Log #${PORT}: We have been lost in space...`)
})