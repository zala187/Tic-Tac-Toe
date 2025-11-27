import React, {  useState } from 'react'
import "./TicTacToe.css"
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png"

const TicTacToe = () => {
    let [data , setData] = useState(["","","","","","","","",""]);

    let [count , setCount] = useState(0);
    let [lock ,setLock] = useState(false);



    const toggle =(e,num)=>{
        let newData = [...data];

        if(data[num] !== "")return;

        if(lock){
            return 0;
        }
        if(count %2===0){
            e.currentTarget.innerHTML = `<img src = '${cross}'>`;
            newData[num] = "x";
            
        }
        else   {
            e.currentTarget.innerHTML = `<img src = '${circle}'>`;
            newData[num] = "o";
            
        }
        setData(newData);
        CheckWin(newData);
        setCount(count + 1);

    }
    const CheckWin=()=>{
        const win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8]
        ];

        for(let combo of win){
            const [ a,b,c] = combo;

            if(data[a] && data[a] === data[b] && data[a]===data[c]){
                alert(data[a] +  "won !")
               setLock(true);
               return true
              
            }
        }
        return false;

    }

    const resetGame=()=>{
         setData(["","","","","","","","",""]);
        setLock(false);
        setCount(0);

      document.querySelectorAll(".boxes").forEach(box=>{
        box.innerHTML = " ";
      })  

    }
   
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-5'>
        <h1 className='title text-white text-2xl'>Tic Tac Toe Game In<span>React</span></h1>
        <div className="board flex">
            <div className="row1">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>

            </div>
             <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>

            </div>
             <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>

            </div>
        </div>
        <button className='reset bg-red-500 text-white p-5 w-30 rounded' onClick={resetGame}>Reset</button>
      
    </div>
  )
}

export default TicTacToe
