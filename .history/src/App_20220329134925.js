import logo from './logo.svg';
import rewardIcon from "./assets/stakingAssets/coin.svg";
import circuit from "../assets/stakingAssets/spawn-circuit.svg";

import './App.css';
import SpawnStaking from "./components/staking/SpawnStaking";


function App() {
  return (
    <>
      <header>
       Header
      </header>
      
      <section className="stk__hero">
       
        <div className="stk__spawn-circuit-container">
          <h3>Cyber Spawn Staking Dashboard</h3>
          <img src={circuit} alt="circuit" className="stk__spawn-circuit" />
        </div>

        <div className="stk__staking-container">
          <SpawnStaking />
          <div className="stk__staking-amount-container">
            <div className="stk__staking-amount-box-2">
              <div className="stk__light-up-4"></div>
              <h3>Spawn Stats</h3>
              <div className="stk__staking-stats">
                <div>
                  <h6>SPAWN PRICE</h6>
                  <p className="stk__amount">$74.36</p>
                </div>
                <div>
                  <h6>DAILY REWARDS</h6>
                  <p className="stk__amount">50,516,13 CSS</p>
                </div>
                <div>
                  <h6>CIRCULATING SUPPLY</h6>
                  <p className="stk__amount">69,888,733 CSS</p>
                </div>
              </div>
            </div>

            <div className="stk__staking-amount-box-1">
              <div className="stk__staked">
                <div className="stk__light-up-2"></div>
                <div className="stk__staked-container">
                  <h3>Total Staked</h3>
                  <span className="stk__spawn">
                    <p>2,420,064</p>
                    <p>CSS</p>
                  </span>
                  <h6 className="stk__spawn-price">$207</h6>
                </div>
                <div className="stk__staked-image">
                  <img
                    src={stakingIcon}
                    alt="staking"
                    className="stk__staking-icon"
                  />
                </div>
              </div>
              <div className="stk__reward">
                <div className="stk__light-up-3"></div>

                <div className="stk__staked-container">
                  <h3>Estimated Rewards</h3>
                  <p>78%</p>
                </div>
                <div className="stk__staked-image">
                  <img
                    src={rewardIcon}
                    alt="rewards"
                    className="stk__staking-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default App;
