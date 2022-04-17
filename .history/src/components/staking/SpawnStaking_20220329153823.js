import React, { useState } from "react";
import StakeButton from "./StakeButton";
import eye from "../../assets/stakingAssets/eye.svg";
import eyeOff from "../../assets/stakingAssets/eye-off.svg";
import RestakeModal from "../../components/staking/RestakeModal";
import ClaimModal from "../../components/staking/ClaimModal";
import { useDispatch } from "react-redux";

const SpawnStaking = () => {
  const [staked, setStaked] = useState(false);
  const [availableInWallet, setAvailableInWallet] = useState(500);
  const [totalStaked, setTotalStaked] = useState(500);
  const [hideNumbers, setHideNumbers] = useState(false);
  const [isStaked, setIsStaked] = useState(false);
  const [isRestake, setIsRestake] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);
  const [isRestakePopUp, setIsRestakePopUp] = useState(false);
  const dispatch = useDispatch()

  // function switchPopUp(isStaked, isRestakePopUp) {
  //   switch ((isStaked, isRestakePopUp)) {
  //     case isStaked && !isRestakePopUp:
  //       return (
  //         <>
  //           <span>
  //             <h6>CLAMABLE REWARDS</h6>
  //             <p>400CSS</p>
  //           </span>
  //           <div>
  //             <button
  //               type="button"
  //               className="stk__restake-btn"
  //               onClick={() => setIsRestake(true)}
  //             >
  //               restake
  //             </button>
  //             <button
  //               type="button"
  //               className="stk__claim-btn"
  //               onClick={() => setIsClaimed(true)}
  //             >
  //               claim
  //             </button>
  //           </div>
  //         </>
  //       );
  //       break;
  //     case isRestakePopUp && !isStaked:
  //       return (
  //         <>
  //           <span>
  //             <h6>PENDING REWARDS</h6>
  //             <p>400 CSS</p>
  //           </span>
  //           <div>
  //             <p>
  //               Next claim in <br />
  //               200156 blocks of gold
  //             </p>
  //           </div>
  //         </>
  //       );
  //       break;
  //     case !isStaked && !isRestakePopUp:
  //       return <></>;
  //       break;
  //     default:
  //       return <></>;
  //   }
  // }

  return (
    <section className="stk__spawn-staking-container">
      <div className="stk__staking-progress">
        <div className="stk__light-up-1"></div>
        <div className="stk__spawn-staking">
          <h3 style={{fontFamily:"monospace"}}>Stake It Bro</h3>
          {hideNumbers ? (
            <span onClick={(e) => setHideNumbers(false)} className="stk__hide">
              <img src={eye} alt="hide" />
              <p>Show all Numbers</p>
            </span>
          ) : (
            <span onClick={(e) => setHideNumbers(true)} className="stk__hide">
              <img src={eyeOff} alt="hide" />
              <p>Hide all Numbers</p>
            </span>
          )}
        </div>
        <div className="stk__wallet">
          <p>akjdfl00w0r0....34j3j5</p>
        </div>
      </div>
      <div className="stk__staking-portfolio">
        <div>
          <h4 className="stk__total-staked">TOTAL STAKED</h4>
          {hideNumbers ? (
            <p className="stk__hide-number">****** CSS ******</p>
          ) : (
            <span className="stk__amount-cnd">
              <p>
                {totalStaked} CSS <span> =1300</span>{" "}
              </p>
            </span>
          )}
        </div>
        <div>
          <h4 className="stk__total-staked">AVAILABLE IN WALLET</h4>
          {hideNumbers ? (
            <p className="stk__hide-number">****** CSS ******</p>
          ) : (
            <span className="stk__amount-cnd">
              <p>
                {availableInWallet} CSS <span>=1300</span>{" "}
              </p>
            </span>
          )}
        </div>
      </div>

      {/* stake popup  */}
      {isStaked && !isRestakePopUp && (
        <div className="stk__stake-pop-up">
          <span>
            <h6>CLAMABLE REWARDS</h6>
            <p>400CSS</p>
          </span>
          <div>
            <button
              type="button"
              className="stk__restake-btn"
              onClick={() => setIsRestake(true)}
            >
              restake
            </button>

            <button
              type="button"
              className="stk__claim-btn"
              onClick={() => setIsClaimed(true)}
            >
              claim
            </button>

            {/* unclaim modal  */}
          </div>
        </div>
      )}

      {/* restake modal  */}
      {isRestake && (
        <RestakeModal
          setIsRestake={setIsRestake}
          setIsRestakePopUp={setIsRestakePopUp}
          setIsStaked={setIsStaked}
        />
      )}

      {/* restake popup  */}
      {isRestakePopUp && !isStaked && (
        <div className="stk__stake-pop-up">
          <span>
            <h6>PENDING REWARDS</h6>
            <p>400 CSS</p>
          </span>
          <div>
            <p>
              Next Claim in <br />
              200156 blocks of gold
            </p>
          </div>
        </div>
      )}

      {isClaimed && (
        <ClaimModal
          setIsClaimed={setIsClaimed}
          setIsRestakePopUp={setIsRestakePopUp}
          setIsStaked={setIsStaked}
        />
      )}

      <StakeButton setIsStaked={setIsStaked} />
    </section>
  );
};

export default SpawnStaking;
