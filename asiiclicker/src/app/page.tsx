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
        <div className="flex flex-col text-center mt-12">
          <h1>ASII Clicker</h1>
          <p>Numar Puncte: {puncte}</p>
          <div className="flex-col bg-cyan-400 w-1/3 ml-auto justify-end mt-60">
            <button onClick={handleClick} style={buttonStyle}>
              Click ASII!
            </button>
          </div>

          <div className="flex flex-col w-1/3 bg-red-600 text-center mt-auto">
            <button onClick={buyZanaPR} style={buttonStyle}>
              Buy Zana PRM ({pret_zana})
            </button>

            <button onClick={buySpiridusRE} style={buttonStyle}>
              Buy Spiridus RE ({pret_spiridus})
            </button>

            <button onClick={buyBibliotecara} style={buttonStyle}>
              Buy Bibliotecara PRO ({pret_bibliotecara})
            </button>

            <button onClick={buyElfRI} style={buttonStyle}>
              Buy Elf RI ({pret_elf})
            </button>

            <button onClick={buyVrajitorIT} style={buttonStyle}>
              Buy Vrajitor IT ({pret_vrajitor})
            </button>

            <button onClick={buyMultiplier} style={buttonStyle}>
              Buy Multiplier ({pret_multiplier})
            </button>
          </div>
          <div>
            <button onClick={switchAbout} style={buttonStyle}>
              About
            </button>
            <button onClick={switchTestimoniale} style={buttonStyle}>
              Testimoniale
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col flex-wrap mt-10">
          <div className="flex flex-col justify-center font-bold text-2xl text-center">
            <h1>About</h1>
          </div>
          <div className="flex flex-row flex-wrap">
            <p>
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
          <div className="flex w-full flex-col bg-red-600 rounded-lg justify-center font-bold">
            <button onClick={switchAbout} className="flex flex-col">
              Close
            </button>
          </div>
        </div>
      );
    }
  }
  else{
    return(
    <div className="flex flex-col flex-wrap mt-10">
          <div className="flex flex-col justify-center font-bold text-2xl text-center">
            <h1>Testimoniale</h1>
          </div>
          <div className="flex flex-row flex-wrap">
            <label htmlFor="userInput">Lasa un comentariu:</label>
            <input
      type="text"
      id="userInput"
      className="flex flex-col p-2 w-1/2 rounded-lg"
      placeholder="Lasa un comentariu"
    />
          </div>
          <div className="flex w-full flex-col bg-red-600 rounded-lg justify-center font-bold">
            <button onClick={switchTestimoniale} className="flex flex-col">
              Close
            </button>
          </div>
        </div>
    )
  }
}

{
  /*STYLES */
}
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  margin: "10px",
  border: "red",
  cursor: "pointer",
};
