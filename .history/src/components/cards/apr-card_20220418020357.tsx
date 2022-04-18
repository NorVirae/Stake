import React from "react";


const AprCard:React.FC = ()=>{
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

                <button className="stake-buuton">No wallet connected</button>
        </div>
}

export default AprCard;