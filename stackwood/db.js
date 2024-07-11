// Require the MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'stackwood';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB server');

        // Select the database
        // const db = client.db(dbName);

        // Perform operations using the client
        // Example: Insert a document
        // const collection = db.collection('myCollection');
        // await collection.insertOne({ name: 'John', age: 30 });
        console.log('Document inserted successfully');
    } finally {
        // Close the client when you're done
        await client.close();
        console.log('Disconnected from MongoDB server');
    }
}

// Call the main function
main().catch(console.error);


