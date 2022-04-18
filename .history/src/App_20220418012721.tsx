import React from 'react';
import './styles/app.css'

function App() {
  return (
    <div className="stake-container">
      <header>
        <nav>
            <a href='logo' className='logo'>Stake Bro</a>
            <ul>
              <li className='connect-wallet-btn'>Connect Wallet</li>
            </ul>
        </nav>
      </header>


      
      <main>
        <section className='info-global'>
          <div className='info-main'>
            <div className='inner-container-left'>
              <h1 className='earn-text'> Stake your FIS earn up-to</h1>
              <h1>100%<sub className='sub'>APR</sub></h1>

            </div>

            <div className='inner-container-right'>
              <p>Click here to Un-stake 'ur $FIS token form old website</p>
              <span>{"=>"}</span>
            </div>
          </div>

          <div className='public-stake-info'>
            <h3 className='total-locked'>Total Value locked</h3>
            <h1 className='total-locked-token'>3,987,834 FIS</h1>
            <h2 className='total'>4,384,383 dollars</h2>

          </div>
          
        </section>

        <section className='connection-info'>
          <div>No Wallet connected</div>
          <div> Connect wallet to see your balance</div>
        </section>

        <section className='reward'>
          <div className='apr-card'>
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
        </section>

      </main>

      <footer>
        <div className='copyright-info'>
          Copyright &copy; Xend finance 2022. All rights reserved.
        </div>
        <ul>
          <li>About</li>
          <li>Repo</li>

        </ul>
      </footer>
    
    </div>
  );
}

export default App;
