import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [rows, setRows] = useState(8); 
  const [cols, setCols] = useState(10); 
  const [grid, setGrid] = useState(createGrid()); 


function getRandomInteger(min, max){
    return Math.round(Math.random() * (max - min))
  }

function createGrid() {
  let intialgrid = []; //int [][] grid

  for (let i = 0; i < rows; i++){
    let row = []; 
    for (let j = 0; j < cols; j++){
      const num = getRandomInteger(0, 1); 
      if (num == 0){
      row.push('Box_G');  
      }
      else{
        row.push('Box_B'); 
      }
    }
    intialgrid.push(row); 
  }

  return intialgrid; 
 

};



  const performDFS = (i, j) =>{
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1 || grid[i][j] ==='Box_R' || grid[i][j] === 'Box_B' ){
      return; 
    }

    const newGrid = [...grid]; 
    newGrid[i][j] = 'Box_R';
    setGrid(newGrid); 


    performDFS (i + 1, j);
    performDFS(i - 1, j); 
    performDFS(i, j + 1); 
    performDFS(i, j -1); 



  }

  const renderGrid = () =>{
    
    return grid.map((row, i) =>(
      <tr className = "table_row" key ={i}>
        {row.map((cell, j) => (
          <td key = {j} onClick= {() => performDFS(i,j)}>
            <div className = {cell}></div>
          </td>

        ))}
      </tr>
    ))
  }


  return (
    <div className="App">
      <h1>Depth First Search Algorthim</h1>
      <div className = "table-container">
     <table className ="table">
      <tbody>
        {renderGrid()}
      </tbody>
     </table>
     </div>
    </div>
  );
}

export default App;
