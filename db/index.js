/*import postgres from 'postgres'

const sql = postgres

export default sql*/

const { Pool} = require('pg')

/*const client = new Client({
    user:  'blog_user',
    host: 'localhost',
    database: 'mydb',
    password: 'encartado',
    port: 5000,
})*/
const res = await Pool.query('SELECT NOW()')
await Pool.end()