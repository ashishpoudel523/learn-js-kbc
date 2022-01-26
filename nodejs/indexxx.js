const fsPromises = require('fs').promises
const path = require('path')


//BY USING ASYNC AWAIT 
const fileOps = async () => {
    try {
        //READ FILE
        const data = await fsPromises.readFile(path.join(__dirname, '../files', 'starter.txt'), 'utf8')
        console.log(data)

        //DELETE
        await fsPromises.unlink(path.join(__dirname, '../files', 'starter.txt'), data)

        //WRITE
        await fsPromises.writeFile(path.join(__dirname, '../files', 'promises.txt'), data)

        //APPEND OR UPDATE
        await fsPromises.appendFile(path.join(__dirname, '../files', 'promises.txt'), "\n\n Added something here")

        //RENAME 
        await fsPromises.rename(path.join(__dirname, '../files', 'promises.txt'), path.join(__dirname, '../files', 'promiseComplete.txt'))


        //FINAL READ
        const newData = await fsPromises.readFile(path.join(__dirname, '../files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)

    } catch (err) {
        console.error(err)
    }
}

fileOps()


/*
fs.readFile(path.join(__dirname, '../files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})
console.log('hello....')


fs.writeFile(path.join(__dirname, '../files', 'reply.txt'), 'Nice to see youu', (err) => {
    if (err) throw err
    console.log('write complete')

    fs.appendFile(path.join(__dirname, '../files', 'reply.txt'), '\n \n hey hey  hey yes it  i s', (err) => {
        if (err) throw err
        console.log('append complete')

        fs.rename(path.join(__dirname, '../files', 'reply.txt'), path.join(__dirname, '../files', 'newreply.txt'), (err) => {
            if (err) throw err
            console.log("Rename completed.")
        })

    })
})
*/


//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})