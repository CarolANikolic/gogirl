import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "goGirl",
    password: "Bazingadatabase$",
    port: 5432
})

export default db