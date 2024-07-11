const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ambika',
    database: 'stackwood'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Middleware
app.use(express.json());

// Get all furniture
app.get('/stackwood', (req, res) => {
    const sql = 'SELECT * FROM order';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error retrieving furniture' });
        } else {
            res.send(result);
        }
    });
});

// Get furniture by ID
app.get('/furniture/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM order WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error retrieving furniture' });
        } else {
            if (result.length === 0) {
                res.status(404).send({ error: 'Furniture not found' });
            } else {
                res.send(result[0]);
            }
        }
    });
});

// Add new furniture
app.post('/stackwood', (req, res) => {
    const { name, description, price, quantity } = req.body;
    const sql = 'INSERT INTO stackwood (name, description, price, quantity) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, description, price, quantity], (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error adding furniture' });
        } else {
            res.status(201).send({ message: 'Furniture added successfully', id: result.insertId });
        }
    });
});

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    
;
// Fetch all furniture
axios.get('/stackwood')
    .then(response => {
        console.log(response.data);
        // Handle response data, e.g., display furniture on the webpage
    })
    .catch(error => {
        console.error(error);
    });

// Add new furniture
axios.post('/stackwood', {
    name: 'Chair',
    description: 'Comfortable chair',
    price: 50,
    quantity: 10
})
.then(response => {
    console.log(response.data);
    // Handle response data, e.g., show success message
})
.catch(error => {
    console.error(error);
});