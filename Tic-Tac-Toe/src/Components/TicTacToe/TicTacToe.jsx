import React, { useState } from 'react';
import "./TicTacToe.css";
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png";

const TicTacToe = () => {
  let [data, setData] = useState(Array(9).fill(""));
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (num) => {
    if (lock || data[num] !== "") return;

    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);

    const winner = CheckWin(newData);
    if (winner) {
      alert(`${winner.toUpperCase()} Won!`);
      setLock(true);
      return;
    }

    setCount(prev => prev + 1);
  };

  const CheckWin = (newData) => {
    const win = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let [a,b,c] of win) {
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        return newData[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setData(Array(9).fill(""));
    setLock(false);
    setCount(0);
  };

  const Box = ({ index }) => (
    <div
      onClick={() => toggle(index)}
      className="boxes w-24 h-24 bg-gray-800 flex justify-center items-center cursor-pointer"
    >
      {data[index] === "x" && <img src={cross} alt="cross" id="img" />}
      {data[index] === "o" && <img src={circle} alt="circle" id="img" />}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="font-bold mb-8 text-2xl">
        Tic Tac Toe Game In <span className="text-red-500">React</span>
      </h1>

      <div className="grid grid-cols-3 gap-2">
        {data.map((_, i) => <Box key={i} index={i} />)}
      </div>

      <button
        onClick={resetGame}
        className="bg-red-500 text-white px-6 py-4 rounded-lg hover:bg-red-600 mt-10"
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
