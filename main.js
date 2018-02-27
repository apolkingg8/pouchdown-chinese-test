const leveldown = require("rocksdb")
const path = require("path")

leveldown(path.resolve(__dirname, '中文', '123')).open(function (res) {
    debugger
})

/*const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-rocksdb').default)

let test = new PouchDB(path.resolve(__dirname, '中文2', '123'), {adapter: 'rocksdb'})*/