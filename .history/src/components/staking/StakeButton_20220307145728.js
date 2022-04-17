import React, { useState, useEffect } from "react";
import ButtonImg from "../../assets/stakingAssets/stake-button.svg";
import unStakeImg from "../../assets/stakingAssets/unstake-button.svg";
import { FaTimes } from "react-icons/fa";
import stakeArrow from "../../assets/stakingAssets/stake-arrow.svg";
import { BsCheck } from "react-icons/bs";
import UnStakeModal from "../../components/staking/UnStakeModal";
import stakeBtn from "../../assets/stakingAssets/stake-btn.png";
import CheckButton from "../checkbutton/user/checkButton";

const StakeButton = ({ setIsStaked }) => {
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [typeClickedOption, setTypeClickedOption] = useState(1);
  const [durationClickedOption, setDurationClickedOption] = useState(1);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [stakeAccountBalance, setStakeAccountBalance] = useState(3000);
  const [maxedOut, setMaxedOut] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [isUnstake, setIsUnStake] = useState(false);

  const handleClickOption = (id, type) => {
    if (type == "duration") {
      setDurationClickedOption(id);
    } else if (type == "type") {
      setTypeClickedOption(id);
    }
  };

  const fetchRemainingAccountBalance = () => {
    setMaxedOut(true);
    setStakeAmount(stakeAccountBalance);
  };

  useEffect(() => {
    return () => {
      setIsChecked(false);
      setStakeAmount(0);
    };
  }, [ismodalOpen]);

  return (
    <div className="stk__stake-btn-container">
      <button
        className="stk__active-btn"
        onClick={() => setIsModalOpen(!ismodalOpen)}
      >
        <img src={ButtonImg} alt="stake button" />
        <span>stake</span>
      </button>
      {ismodalOpen && (
        <div className="stk__drop-down-overlay">
          {/* beginning of modal */}
          <div className="stk__drop-down-content">
            <header className="stk__drop-down-header">
              <span className="stk__drop-down-stake">
                <img src={stakeArrow} alt="back" />
                <p>stake</p>
              </span>

              <span
                onClick={() => setIsModalOpen(false)}
                className="stk__drop-down-close-btn"
              >
                <FaTimes />
              </span>
            </header>
            <div className="stk__drop-down-btn-container">
              <h6 className="stk__type-title">Type</h6>
              <div>
                <button
                  type="button"
                  className={
                    typeClickedOption == 1
                      ? "stk__drop-down-active-btn"
                      : "stk__drop-down-btn"
                  }
                  value={1}
                  onClick={(e) => {
                    handleClickOption(1, "type");
                    setIsLocked(false);
                  }}
                >
                  Flexible
                </button>
                <button
                  type="button"
                  value={2}
                  onClick={(e) => {
                    handleClickOption(2, "type");
                    setIsLocked(true);
                  }}
                  className={
                    typeClickedOption == 2
                      ? "stk__drop-down-active-btn"
                      : "stk__drop-down-btn"
                  }
                >
                  Locked
                </button>
              </div>
              {/* duration */}
              {isLocked && (
                <div>
                  <h6 className="stk__duration-title">Duration</h6>
                  <button
                    type="button"
                    className={
                      durationClickedOption == 1
                        ? "stk__drop-down-active-btn"
                        : "stk__drop-down-btn"
                    }
                    onClick={(e) => handleClickOption(1, "duration")}
                  >
                    3 months
                  </button>
                  <button
                    type="button"
                    className={
                      durationClickedOption == 2
                        ? "stk__drop-down-active-btn"
                        : "stk__drop-down-btn"
                    }
                    onClick={(e) => handleClickOption(2, "duration")}
                  >
                    6 months
                  </button>
                  <div style={{ marginTop: "1rem" }}>
                    <button
                      type="button"
                      className={
                        durationClickedOption == 3
                          ? "stk__drop-down-active-btn"
                          : "stk__drop-down-btn"
                      }
                      onClick={(e) => handleClickOption(3, "duration")}
                    >
                      9 months
                    </button>
                    <button
                      type="button"
                      className={
                        durationClickedOption == 4
                          ? "stk__drop-down-active-btn"
                          : "stk__drop-down-btn"
                      }
                      onClick={(e) => handleClickOption(4, "duration")}
                    >
                      12 months
                    </button>
                  </div>
                </div>
              )}

              <div className="stk__drop-down-amount-container stk__drop-down-stake-amount-container">
                <div className="stk__drop-down-amount">
                  <p>AMOUNT</p>
                  <input
                    type={"number"}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="stk__amount-box"
                    value={stakeAmount}
                  />
                </div>
                <div className="stk__drop-down-amount">
                  <p>AVAILABLE: 50 CSS</p>
                  <div className="stk__drop-down-crypto">
                    <button
                      className={
                        maxedOut ? "stk__max-active-btn" : "stk__max-btn"
                      }
                      onClick={(e) => fetchRemainingAccountBalance()}
                      type="button"
                    >
                      MAX
                    </button>
                    <div className="stk__drop-down-circle"></div>
                    <p>CSS</p>
                  </div>
                </div>
              </div>
              <div className="stk__drop-down-reward-container">
                <div>
                  <h6>Best Deal Reward (APY)</h6>
                  <h6>Estimated Reward</h6>
                </div>

                <div>
                  <p>15% APY</p>
                  <p>0.0000000CSS</p>
                </div>
              </div>
              <div className="stk__drop-down-terms">
                <label className="lgn__remember-me-label">
                <CheckButton isChecked={isChecked} setIsChecked={setIsChecked} />

                </label>

                <p>
                  I have read and agree to the above <br /> stated statement
                </p>
              </div>
              <div className="stk__drop-down-stake-btn-container">
                <button
                  onClick={(e) => {
                    setIsStaked(true);
                    setIsModalOpen(false);
                  }}
                  disabled={!isChecked}
                >
                  <img
                    src={stakeBtn}
                    className="stk__drop-down-stake-btn"
                    alt="stake"
                  />
                  <span className="stk__drop-down-stake-text">stake</span>
                </button>
              </div>
            </div>
          </div>
          {/* end of modal */}
        </div>
      )}

      <button
        onClick={() => setIsUnStake(!isUnstake)}
        className="stk__active-btn"
      >
        <img src={unStakeImg} alt="unstake button" />
        <span>Unstake</span>
      </button>
      {isUnstake && (
        <UnStakeModal
          setIsUnStake={setIsUnStake}
          setIsStaked={setIsStaked}
          setStakeAmount={setStakeAmount}
        />
      )}
    </div>
  );
};

export default StakeButton;
