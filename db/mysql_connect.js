const mysql = require("mysql2/promise")
const config = require("./config")

async function query(sql) {
    const conn = await mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    })
    const [ rows, fields ] = await conn.execute(sql)
    await conn.end()

    return rows
}

module.exports = query