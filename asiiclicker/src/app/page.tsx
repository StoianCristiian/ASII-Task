"use client";
import React from "react";
import { useState, useEffect } from "react";
import {Game, initialGame, incrementPoint, updateAllPrices, updatePrice, updateCurrentPoints, getCurrentPrice, resetGame, buyMultiplier} from "./game";
import {saveGameState, retrieveGameState} from './service';

export default function Main() {
  const [about, setAbout] = useState(false);
  const [testimoniale, setTestimoniale] = useState(false);

  const [gameState, setGameState] = useState<Game| null>(null);
  const [needToUpdate, setNeedToUpdate] = useState(false);
  const handleClick = () => {
    if (gameState){
      incrementPoint(gameState);
      setNeedToUpdate(!needToUpdate);
      console.log(gameState.puncte);
    }
  };

  const switchReset = () => {
    setTestimoniale(false);
    setAbout(false);
  }

  const switchAbout = () => {
    setAbout(!about);
  };

  const switchTestimoniale = () => {
    setTestimoniale(!testimoniale);
  };

    /*ADAUGARE PERIODICA */

  let interval: number;

    const fetchGameState = async () => {
      const currentGameState = await retrieveGameState(); // Fetch game state
      console.log(currentGameState);
      if( currentGameState !== null){
        setGameState({...currentGameState}); // Set the game state in state
        return;
      }
      setGameState({...initialGame});
  };

  useEffect(() => {
    fetchGameState().catch(console.error); // Handle any errors during fetch
  }, []); 

  useEffect(() => {
    interval = window.setInterval(() => {
      if (gameState){
        const game = updateCurrentPoints(gameState);
        setGameState({...game});
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

    /*BUY SECTION */

  const buyItem = (nr: number) => {
    let game = gameState;
    try{
      if (game){
        game = buyMultiplier(game, nr);
        setGameState({... game});
      }
    }catch(e){
      alert("Nu ai destule puncte");
    }

  }
  
  if (testimoniale == false) {
    if (about == false) {
      return (
        <div className="flex flex-col items-center divbody">
          <h1 className="ASII-Title bg-gradient-to-b from-gray-900 to-red-500 bg-clip-text text-center font-sora text-[55px] text-transparent xl:text-[64px]">ASII Clicker</h1>
          <div className="ASII-Logo-container">
            <p className="Punctaj">Puncte: {gameState ? gameState.puncte : 0}</p>
            <button onClick={handleClick} className="ASII-Logo"></button>
          </div>

          <div className="Shop-container">
            <div className="PRM-container boxshop">
              <div id="PRMimg" className="image"></div>
              <p className="parShop">Zana PRM </p>
              <button onClick={() => buyItem(0)} className="buybtn">
                Buy ({gameState ? gameState.preturi[0] : 0})
              </button>
            </div>

            <div className="RE-container boxshop">
            <div id="REimg" className="image"></div>
              <p className="parShop">Spiridus RE</p>
            <button onClick={() => buyItem(1)} className="buybtn">
              Buy ({gameState ? gameState.preturi[1] : 0})
            </button>
            </div>

            <div className="PRO-container boxshop">
              <div id="PROimg" className="image"></div>
              <p className="parShop">Bibliotecara PRO</p>
             <button onClick={() => buyItem(2)} className="buybtn">
              Buy ({gameState ? gameState.preturi[2] : 0})
            </button>
            </div>

            <div className="RI-container boxshop">
              <div id="RIimg" className="image"></div>
              <p className="parShop">Elf RI</p>
            <button onClick={() => buyItem(3)} className="buybtn">
              Buy ({gameState ? gameState.preturi[3] : 0})
            </button>
            </div>

            <div className="IT-container boxshop">
              <div id="ITimg" className="image"></div>
              <p className="parShop">Vrajitor IT</p>
            <button onClick={() => buyItem(4)} className="buybtn">
              Buy ({gameState ? gameState.preturi[4] : 0})
            </button>
            </div>

            <div className="Multiplier-container boxshop">
              <div id="multimg" className="image"></div>
              <p className="parShop">Multiplier</p>
            <button onClick={() => buyItem(5)} className="buybtn">
              Buy ({gameState ? gameState.preturi[5] : 0})
            </button>
            </div>
          </div>

          <nav>
            <button onClick={switchAbout} className="bg-red-500 text-white font-bold py-2 px-4 rounded btn">
              About
            </button>
            <button onClick={switchTestimoniale} className="bg-red-500 text-white font-bold py-2 px-4 rounded btn">
              Testimoniale
            </button>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="About-div">
          <div className="About-div">
            <h1 className="About-Title">About</h1>
          </div>
          <div className="About-div">
            <p className="About-p">
              Asociația Studenților Informaticieni Ieșeni reprezintă o
              organizație non-guvernamentală, apolitică și non-profit ce are ca
              scop promovarea voluntariatului și oferirea de oportunități
              studenților. Activitățile asociației se adresează atât studenților
              și profesorilor Facultății de Informatică Iași, cât și comunității
              IT ieșene. Pe 12 martie 1990, ASII a devenit prima asociație
              studențească înființată la Universitatea „Alexandru Ioan Cuza”.
              Printre obiectivele asociației, se află facilitarea accesului
              membrilor săi la diverse manifestări științifice, culturale și
              sportive, promovarea spiritului civic în rândul studenților și
              tinerilor în general, îmbunătăţirea pregătirii profesionale a
              studenţilor informaticieni, încurajarea şi sprijinirea
              iniţiativelor şi proiectelor ştiinţifice ale studenţilor de la
              informatică, studenţilor alumni ai Facultăţii de Informatică Iaşi
              şi a comunităţii IT.
            </p>
          </div>
          <div >
          <button onClick={switchReset} className="bg-red-500 text-white font-bold py-2 px-4 rounded About-btn">
              Inapoi la Joc
            </button>
            <button onClick={() => {switchReset(); switchTestimoniale()}} className="bg-red-500 text-white font-bold py-2 px-4 rounded About-btn">
              Testimoniale
            </button>
          </div>
        </div>
      );
    }
  }
  else{
    return(
    <div className="Testi-div">
          <div className="Testi-div">
            <h1 className="Testi-title">Testimoniale</h1>
          </div>
          <div className="Testi-div">
            <label htmlFor="userInput" className="Testi-label">Lasa un comentariu:</label>
            <input className="Testi-input"
      type="text"
      id="userInput"
      
      placeholder="Lasa un comentariu"
    />
          </div>
          <div className="Testi-div">
          <button onClick={switchReset} className="Testi-btn bg-red-500 text-white font-bold py-2 px-4 rounded">
              Inapoi la Joc
            </button>
            <button onClick={() => {switchReset(); switchAbout()}} className="Testi-btn bg-red-500 text-white font-bold py-2 px-4 rounded">
              About
            </button>
          </div>
        </div>
    )
  }
}

