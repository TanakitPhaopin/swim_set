import postgres from 'postgres';

var sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'postgres'
});
export default sql;

// Test the connection 
export async function testDbConnection(testError) {
    var didConnect = false;
    try {
        if (testError) {
            throw new Error("could not connect to database");
        }
        const result = await sql`SELECT NOW();`;
        console.log(`connection was successful ${result[0].now}`);
        return true;
    } catch (error) {
        console.error(`Failed to connect to the DB: ${error}`);
        throw new Error("could not connect to database")
    }
}

// run "node ./config/db.js" to test the database connection
//testDbConnection();