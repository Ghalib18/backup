// Importing the Client class from the 'pg' module to interact with PostgreSQL.
import { Client } from "pg";

// Creating a new instance of the Client with a connection string for the PostgreSQL database.
const pgClient = new Client("postgresql://neondb_owner:npg_PiH4u0WeroJz@ep-sweet-firefly-ab7523ym-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require");
// Connection string kaunse word ka matlab kya hai yeh rha explanation :- 
// The connection string includes:
//   - Protocol: `postgresql://`
//   - Username: `database%201_owner`
//   - Password: `aBE0Nlv3WnYC`
//   - Host: `ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech`
//   - Database name: `database%201`
//   - SSL mode: `sslmode=require` ensures the connection uses SSL for security.


// Defining an asynchronous function to handle the database operations.
async function main() {
    // Establishing the connection to the PostgreSQL database using the connect method.
    await pgClient.connect();

    // SQL query to create a new table called 'users' with specific columns.
    // the table should have to run only once, or we can use some separate file to run query for creating the table
    await pgClient.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL, 
            password VARCHAR(255) NOT NULL, 
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    
    // SQL query to insert a new user record into the 'users' table.
    await pgClient.query(`
        INSERT INTO users (username, email, password)
        VALUES ('Rohan Dev', 'rohan@gmail.com', '123456789')
    `);
    // SQL query to insert another user record into the 'users' table.
    await pgClient.query(`
        INSERT INTO users (username, email, password)
        VALUES ('heroo', 'heroo@gmail.com', '987654321')
    `);
    
    // SQL query to update the password of a user based on the given email condition.
    await pgClient.query(`
        UPDATE users SET password = '123456789'
        WHERE id = '2'; 
    `);

    // SQL query to delete a user record based on the provided ID condition.
    await pgClient.query(`
        DELETE FROM users
        WHERE id = 3;
    `);

    // SQL query to retrieve all records from the 'users' table.
    const response = await pgClient.query(`
        SELECT * FROM users;
    `);
    
    // Logging the response, which contains all rows from the 'users' table.
    console.log(response.rows); // Logs the rows returned by the SELECT query

}

// Calling the main function to execute the database operations.
main();

//                               ************-------------------------*************

 async function getusers(email:string){
    try{
        await pgClient.connect();

        const result =await pgClient.query(`Select * FROM  users WHERE email=$1`,[email]);
  if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await pgClient.end(); // Close the client connection
  }

}

getusers("virat123@gmail.com").catch(console.error);
 
/*
Explanation:
1. The `pg` library is used to interact with a PostgreSQL database.
2. A reusable `pgClient` instance is created using a connection string.
3. The `getUser` function takes an email, connects to the database, and queries for the user.
4. Parameterized queries are used for security against SQL injection.
5. If the user is found, their details are logged and returned; otherwise, `null` is returned.
6. Errors are logged and rethrown for further handling.
7. The client connection is always closed after the query execution, ensuring proper resource cleanup.
8. An example call demonstrates how to use the `getUser` function and handle its output or errors.
*/