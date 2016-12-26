const mysql = require('mysql')

const database = 'camp'
const connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : 'root',
 database: database
})

connection.connect(function(err) {
 if (err) {
   console.error('error connecting: ' + err.stack)
   return
 }

 // console.log('connected as id ' + connection.threadId)
})

module.exports = connection
