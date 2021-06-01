const {Pool, Client} = require('pg')
const connectionString = 'postgressql://postgres:lollol@localhost:5432/postgres'

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT * from usuarios',(err,res)=>{
    //console.log(err,res)
    console.log(res.rows)
    client.end()
})

