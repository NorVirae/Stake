import React, { useState } from "react";

interface AprCardInterface{
    stakeAction:any
}

const AprCard:React.FC<AprCardInterface> = ({stakeAction})=>{
    const [isWalletConnected, setIsWalletConnected] = useState(false)
    return <div className='apr-card'>
                <div className='mandela-container'>
                    <h4 className="mandela">Mandela</h4>
                    <h1 className="apr-announce">30%<sub className="sub">APR</sub></h1>
                </div>
                

                <div className='limit-container'>
                    <h5>Limit:</h5>
                    <h3>30,000,000.00 FIS</h3>
                </div>

                <div className='current-container'>
                    <h5>Currently Staked</h5>
                    <h3>3,392,393.79 FIS</h3>
                </div>

                {isWalletConnected?<button className="stake-button">No wallet connected</button>:
                <button onClick
                className="stake-button">stake</button>}

        </div>
}

export default AprCard;