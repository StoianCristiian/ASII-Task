const express = require('express');
const { MongoClient, Db, Collection, ObjectId } = require('mongodb');

const initialGame = {
    puncte: 0,
    multipliers: [1, 2, 3, 4, 5, 6], // zana, spiridus, bibliotecara, elf, vrajitor, multiplier
    preturi: [10, 20, 30, 40, 50, 60], // zana, spiridus, bibliotecara, elf, vrajitor, multiplier
    current: [0, 0, 0, 0, 0, 0]
}

const app = express();
const port = 3000;  // You can change this to any port you prefer

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB setup
const uri = 'mongodb://root:example@127.0.0.1:27017/';  // Update this with your MongoDB URI
const client = new MongoClient(uri);
let db;
let gamesCollection;

// Connect to MongoDB
async function connectToDatabase() {
    await client.connect();
    db = client.db('gameDB');  // Specify your database name
    gamesCollection = db.collection('games');  // Specify your collection name
}
connectToDatabase().catch(console.error);

// Save game state to MongoDB
async function saveGameToDatabase(game) {
    await gamesCollection.updateOne({ _id: 'gameState' }, { $set: game }, { upsert: true });
}

// Endpoints

app.post('/game', async (req, res) => {
    try {
        const game = req.body;
        await gamesCollection.updateOne(
            {_id: 'gameState'}, 
            { $set: game }, 
            { upsert: true });
        res.status(200).json({ message: 'Game state saved successfully!' });
    }catch(error){
        console.error('Error saving game state:', error);
        res.status(500).json({ error: 'Failed to save game state' });
    }
})

app.get('/game', async (req, res) => {
    try {
        const game = await gamesCollection.findOne({ _id: 'gameState' });
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).json({ message: 'Game state not found' });
        }
    } catch (error) {
        console.error('Error retrieving game state:', error);
        res.status(500).json({ error: 'Failed to retrieve game state' });
    }
});

app.delete('/game', async (req, res) => {
    try {
        await gamesCollection.updateOne(
            { _id: 'gameState' },
            { $set: initialGame },
            { upsert: true }
        );
        res.status(200).json({ message: 'Game state reset successfully!' });
    } catch (error) {
        console.error('Error resetting game state:', error);
        res.status(500).json({ error: 'Failed to reset game state' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});