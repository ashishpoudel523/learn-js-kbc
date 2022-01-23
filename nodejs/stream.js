const ashish = require('fs')
const path = require('path')

const rs = ashish.createReadStream(path.join(__dirname, '../files', 'lorem.txt'), 'utf8',
    (err, data) => {
        if (err) throw err
        console.log(data)
    })

const ws = ashish.createWriteStream(path.join(__dirname, '../files', 'new-lorem.txt'), (err, data) => {
    if (err) throw err
    console.log(data)
})

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })
rs.pipe(ws)