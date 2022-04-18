import React from 'react';



const StakeModal:React.FC = () => {

            
    return <div className='stake-modal-container'>
            
                <div className='stake-modal'>
                    <div className='stake-inner-left'>
                        <h1>Fis Staking</h1>

                        <h2> Mandela</h2>

                        <form>
                            <fieldset>
                                
                                <label><span>Stake Amount </span> <span>Available amount: 0.00Fis</span></label>
                                <input className='form-input'/>

                            </fieldset>
                        </form>

                        <div className='percentage-container'>
                            <div className='percentage-twenty-five'>
                                25%
                            </div>

                            <div className='percentage-fifty'>
                                50%
                                
                            </div>

                            <div className='percentage-seventy-five'>
                                75%
                                
                            </div>

                            <div className='percentage-hundred'>
                                100%
                                
                            </div>
                        </div>

                    </div>

                    <div className='stake-inner-right'>
                        <ul>
                            <li><span>Start Date</span></li>

                            <li><span>End Date</span></li>

                            <li><span></span>Period</li>

                            <li><span></span>Minimum Withdrawal Date</li>

                            <li><span></span>Withdrawal Penalty(APR)</li>

                            <li><span></span>Best Deal Reward</li>

                            <li><span></span>Est. All Time Rewards</li>

                        </ul>
                    </div>

                </div>

            </div>
                

}
export default StakeModal;