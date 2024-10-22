import {Game} from './game';
const apiBaseUrl = 'http://localhost:3000';  // Replace with the actual API base URL if different



async function saveGameState(game: Game) {
    try {
        const response = await fetch(`${apiBaseUrl}/game`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Game state saved:', data.message);
        } else {
            console.error('Error saving game state:', data.error);
        }
    } catch (error) {
        console.error('Failed to communicate with the API:', error);
    }
}

async function retrieveGameState(): Promise<Game | null> {
    try {
        const response = await fetch(`${apiBaseUrl}/game`, {
            method: 'GET',
        });
        if (response.ok) {
            const game = await response.json();
            console.log('Game state retrieved:', game);
            return game;
        } else {
            const data = await response.json();
            console.error('Error retrieving game state:', data.message || data.error);
        }
    } catch (error) {
        console.error('Failed to communicate with the API:', error);
    }
    return null;
}

async function resetGameState() {
    try {
        const response = await fetch(`${apiBaseUrl}/game`, {
            method: 'DELETE',
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Game state reset:', data.message);
        } else {
            console.error('Error resetting game state:', data.error);
        }
    } catch (error) {
        console.error('Failed to communicate with the API:', error);
    }
}

export { saveGameState, retrieveGameState, resetGameState };