"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Main() {
  const [puncte, setpuncte] = useState(0);

  const [vrajitorIT, setVrajitorIT] = useState(0);
  const [pret_vrajitor, setPret_vrajitor] = useState(50);

  const [multiplier, setMultiplier] = useState(1);
  const [pret_multiplier, setPret_multiplier] = useState(60);

  const [zanaPR, setZanaPR] = useState(0);
  const [pret_zana, setPret_zana] = useState(10);

  const [spiridusRE, setSpiridusRE] = useState(0);
  const [pret_spiridus, setPret_spiridus] = useState(20);

  const [bibliotecara, setBibliotecara] = useState(0);
  const [pret_bibliotecara, setPret_bibliotecara] = useState(30);

  const [elfRI, setElfRI] = useState(0);
  const [pret_elf, setPret_elf] = useState(40);

  const [about, setAbout] = useState(false);
  const [testimoniale, setTestimoniale] = useState(false);

  const handleClick = () => {
    setpuncte(puncte + multiplier);
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

  {
    /*ADAUGARE PERIODICA */
  }
  let interval: number;
  useEffect(() => {
    if (vrajitorIT) {
      interval = window.setInterval(() => {
        setpuncte((prevPuncte) => prevPuncte + vrajitorIT * 4);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [vrajitorIT]);

  useEffect(() => {
    if (zanaPR) {
      interval = window.setInterval(() => {
        setpuncte((prevPuncte) => prevPuncte + zanaPR);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [zanaPR]);

  useEffect(() => {
    if (spiridusRE) {
      interval = window.setInterval(() => {
        setpuncte((prevPuncte) => prevPuncte + spiridusRE * 2);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [spiridusRE]);

  useEffect(() => {
    if (bibliotecara) {
      interval = window.setInterval(() => {
        setpuncte((prevPuncte) => prevPuncte + bibliotecara * 3);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [bibliotecara]);

  useEffect(() => {
    if (elfRI) {
      interval = window.setInterval(() => {
        setpuncte((prevPuncte) => prevPuncte + elfRI * 4);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [elfRI]);

  {
    /*BUY SECTION */
  }
  const buyVrajitorIT = () => {
    if (puncte >= pret_vrajitor) {
      setpuncte(puncte - pret_vrajitor);
      setPret_vrajitor(Math.ceil(pret_vrajitor + pret_vrajitor / 10));
      setVrajitorIT(vrajitorIT + 1);
    } else {
      alert("Nu ai destule puncte!");
    }
  };

  const buyZanaPR = () => {
    if (puncte >= pret_zana) {
      setpuncte(puncte - pret_zana);
      setPret_zana(Math.ceil(pret_zana + pret_zana / 10));
      setZanaPR(zanaPR + 1);
    } else alert("Nu ai destule puncte!");
  };

  const buySpiridusRE = () => {
    if (puncte >= pret_spiridus) {
      setpuncte(puncte - pret_spiridus);
      setPret_spiridus(Math.ceil(pret_spiridus + pret_spiridus / 10));
      setSpiridusRE(spiridusRE + 1);
    } else alert("Nu ai destule puncte!");
  };

  const buyBibliotecara = () => {
    if (puncte >= pret_bibliotecara) {
      setpuncte(puncte - pret_bibliotecara);
      setPret_bibliotecara(
        Math.ceil(pret_bibliotecara + pret_bibliotecara / 10)
      );
      setBibliotecara(bibliotecara + 1);
    } else alert("Nu ai destule puncte!");
  };

  const buyElfRI = () => {
    if (puncte >= pret_elf) {
      setpuncte(puncte - pret_elf);
      setPret_elf(Math.ceil(pret_elf + pret_elf / 10));
      setElfRI(elfRI + 1);
    } else alert("Nu ai destule puncte!");
  };

  const buyMultiplier = () => {
    if (puncte >= pret_multiplier) {
      setpuncte(puncte - pret_multiplier);
      setMultiplier(multiplier + 1);
      setPret_multiplier(pret_multiplier * 2);
    } else {
      alert("Nu ai destule puncte!");
    }
  };

  {
    /*FRONT */
  }
  if (testimoniale == false) {
    if (about == false) {
      return (
        <div className="flex flex-col items-center divbody">
          <h1 className="ASII-Title bg-gradient-to-b from-gray-900 to-red-500 bg-clip-text text-center font-sora text-[55px] text-transparent xl:text-[64px]">ASII Clicker</h1>
          <div className="ASII-Logo-container">
            <p className="Punctaj">Puncte: {puncte}</p>
            <button onClick={handleClick} className="ASII-Logo"></button>
          </div>

          <div className="Shop-container">
            <div className="PRM-container boxshop">
              <div id="PRMimg" className="image"></div>
              <p className="parShop">Zana PRM </p>
              <button onClick={buyZanaPR} className="buybtn">
                Buy ({pret_zana})
              </button>
            </div>

            <div className="RE-container boxshop">
            <div id="REimg" className="image"></div>
              <p className="parShop">Spiridus RE</p>
            <button onClick={buySpiridusRE} className="buybtn">
              Buy ({pret_spiridus})
            </button>
            </div>

            <div className="PRO-container boxshop">
              <div id="PROimg" className="image"></div>
              <p className="parShop">Bibliotecara PRO</p>
             <button onClick={buyBibliotecara} className="buybtn">
              Buy ({pret_bibliotecara})
            </button>
            </div>

            <div className="RI-container boxshop">
              <div id="RIimg" className="image"></div>
              <p className="parShop">Elf RI</p>
            <button onClick={buyElfRI} className="buybtn">
              Buy ({pret_elf})
            </button>
            </div>

            <div className="IT-container boxshop">
              <div id="ITimg" className="image"></div>
              <p className="parShop">Vrajitor IT</p>
            <button onClick={buyVrajitorIT} className="buybtn">
              Buy ({pret_vrajitor})
            </button>
            </div>

            <div className="Multiplier-container boxshop">
              <div id="multimg" className="image"></div>
              <p className="parShop">Multiplier</p>
            <button onClick={buyMultiplier} className="buybtn">
              Buy ({pret_multiplier})
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

