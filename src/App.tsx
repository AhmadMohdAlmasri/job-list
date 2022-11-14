import React from 'react';
import Card from './components/card-componetnt/card.component';
import './App.css';
import Data from './data.json';
function App() {
  // const data = Data[1];
  // console.log(data)
  return (
    <div className="App">
      {/* -------------------------------------   */}
      <div className="header">
        <div className="headerImage"></div>
        <div className="filterCard"></div>
      </div>
      {/* -------------------------------------------  */}
      {/* <div className="filterCardContainer">
      
    </div> */}

      {/* -------------------------------------- */}

      <div className="wraper">
        {Data.map((job) => (
          <Card vacancy={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
