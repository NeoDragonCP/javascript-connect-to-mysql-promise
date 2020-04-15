const mysql = require("mysql");

function connectToDatabase(config) {
  return new Promise((resolve, reject) => {
    // Create a new connection using the passed config
    const connection = mysql.createConnection(config);

    // Try connect
    connection.connect((error) => {
      error ? reject(error) : resolve(connection);
    });
  });
}

connectToDatabase({
  // Example login cred
  host: "localhost",
  user: "root",
  password: "",
  database: "test_database",
})
  .then((connection) => {
    console.log("Connection Successful");

    // do whatever once connected

    // end the connection when finished
    connection.end();
  })
  .catch((err) => {
    console.log("There was an error connecting to the database!");
    console.log(`${err}`);
  });
