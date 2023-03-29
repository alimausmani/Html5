// const mysql = require('mysql2');

// Connect to the database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'database_name'
// });

// // Insert data into the database
// const data = { name: 'John Doe', email: 'john.doe@example.com' };
// connection.query('INSERT INTO users SET ?', data, (error, result) => {
//   if (error) throw error;
//   console.log(result.affectedRows + ' row(s) inserted');
// });

// // Close the connection
// connection.end();






// const express = require('express');
// const app = express();

// app.get('/data', (req, res) => {
//   // Retrieve data from the database
//   const data = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

//   // Return the data as JSON
//   res.json(data);
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });



// fetch('http://localhost:3000/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Do something with the data
//   })
//   .catch(error => {
//     console.error(error);
//   });


