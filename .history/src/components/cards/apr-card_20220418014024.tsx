import React from "react";


function AprCard:React.F = () => {
    return <div className='apr-card'>
    <div className='mandela-container'>
      <h4>Mandela</h4>
      <h1>30%<sub>APR</sub></h1>
    </div>
    

    <div className='limit-container'>
      <h5>Limit:</h5>
      <h3>30,000,000.00 FIS</h3>
    </div>

    <div className='current-container'>
      <h5>Currently Staked</h5>
      <h3>3,392,393.79 FIS</h3>
    </div>

    <button>No wallet connected</button>
  </div>
}

export default AprCard;