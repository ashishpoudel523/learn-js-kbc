const {
    format
} = require('date-fns')



const {
    v4: uuid
} = require('uuid')

const fs = reqiure('fs')

const fsPromises = require('fs').promises

const path = require('path');

const logEvents = asyc(message) => {
        const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}

    console.log(logItem)
    try{
        await fsPromses.appendFile(path.join(__dirname, '))
    }catch {err} {
        console.err(err)
    }
}

module.exports = logEvents;