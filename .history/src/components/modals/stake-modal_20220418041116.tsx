import React, { useState } from 'react';


interface StakeModalInterface{
    setShowModal:any,
    showModal:boolean
}

const StakeModal:React.FC = () => {

    const [amountToStake, setAmountToStake] = useState(0)
    return <div className='stake-modal-container'>
            
                <div className='stake-modal'>
                    <div className='stake-inner-left'>
                        <h1>Fis Staking</h1>

                        <h2> Mandela</h2>

                        <form>
                            <fieldset className='form-group'>
                                
                                <label className='form-label'><span>Stake Amount </span> <span>Available amount: 0.00Fis</span></label>
                                <input value={amountToStake} className='form-input'/>

                            </fieldset>
                        </form>

                        <div className='percentage-container'>
                            <div className='btn-percentage'>
                                25%
                            </div>

                            <div className='btn-percentage'>
                                50%
                                
                            </div>

                            <div className='btn-percentage'>
                                75%
                                
                            </div>

                            <div className='btn-percentage'>
                                100%
                                
                            </div>
                        </div>

                    </div>

                    <div className='stake-inner-right'>
                        <ul>
                            <li><span>Start Date</span><span>2022-04-18 03:29</span></li>

                            <li><span>End Date</span><span>2022-04-18 03:29</span></li>

                            <li><span>Period</span><span>90 Days</span></li>

                            <li><span>Minimum Withdrawal Date</span><span>2022-04-18 03:29</span></li>

                            <li><span>Withdrawal Penalty(APR)</span><span>1.50% APR</span></li>

                            <li><span>Best Deal Reward</span><span>30% APR</span></li>

                            <li><span>Est. All Time Rewards</span><span>0.00 FIS</span></li>

                        </ul>

                        <button className='stake-button'>Stake</button>
                    </div>

                </div>

            </div>
                

}
export default StakeModal;