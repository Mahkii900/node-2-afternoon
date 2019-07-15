//necessary variables
let messages = []
let id = 0;

module.exports = {
    createMess: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    readMess: (req, res) => {
        res.status(200).send(messages)
    },
    updateMess: (req, res) => {
        const {text} = req.body
        const updateID = req.params.id
        const messageIndex = messages.findIndex(message => message.id === +updateID)
        
        if (text) {
            let message = messages[messageIndex]
    
            messages[messageIndex] = {
                id: message.id,
                text: text,
                time: message.time
            }
        }

        res.status(200).send(messages)
    },
    deleteMess: (req, res) => {
        const deleteID = req.params.id
        messageIndex = messages.findIndex(message => message.id == deleteID)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}