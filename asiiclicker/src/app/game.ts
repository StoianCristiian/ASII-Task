import { saveGameState, resetGameState } from "./service";
export interface Game {
    puncte: number;
    preturi: number[];
    multipliers: number[];
    current: number[];
}

export const initialGame: Game = {
    puncte: 0,
    multipliers: [1, 2, 3, 4, 5, 6], // zana, spiridus, bibliotecara, elf, vrajitor, multiplier
    preturi: [10, 20, 30, 40, 50, 60], // zana, spiridus, bibliotecara, elf, vrajitor, multiplier
    current: [0, 0, 0, 0, 0, 0]
}

export function updatePrice(game: Game, index: number): Game {
    if (index >= 0 && index < game.preturi.length) {
        game.preturi[index] += Math.floor(game.preturi[index]/10);
    } else {
        console.error('Index out of range');
    }
    saveGameState(game);
    return game;
}

export function updateAllPrices(game: Game): Game {
    for (let i = 0; i < game.preturi.length; i++) {
        game.preturi[i] += Math.floor(game.preturi[i]/10);
    }
    saveGameState(game);
    return game;
}

export function updateCurrentPoints(game: Game): Game {
    for (let i = 0; i < game.multipliers.length; i++){
        game.puncte += game.multipliers[i] * game.current[i];
    }
    saveGameState(game);
    return game;
}
export function incrementPoint(game: Game): Game{
    game.puncte ++;
    saveGameState(game);
    return game;
}

export function resetGame(game:Game): void {
    game = {...initialGame}
    resetGameState();
}

export function addPoints(game: Game, points: number): Game {
    game.puncte += points;
    saveGameState(game);
    return game;
}

export function getCurrentPrice(game: Game, index: number): number | null {
    if (index >= 0 && index < game.preturi.length) {
        return game.preturi[index];
    } else {
        console.error('Index out of range');
        return null;
    }
}

export function buyMultiplier(game:Game, index:number): Game{
    if (index >= 0 && index < game.preturi.length) {
        if(game.puncte < game.preturi[index]){
            throw Error("Nu ai destule puncte!");
        }

        game.current[index] ++;    
        game.puncte -= game.preturi[index];
        game = updatePrice(game, index);
    } else {
        console.error('Index out of range');
    }
    saveGameState(game);
    return game;
}

