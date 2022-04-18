import React from 'react';



const StakeModal:React.FC = () => {
    return <div className='stake-modal'>
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

                        </div>

                        <div className='percentage-fifty'>
                            
                        </div>

                        <div className='percentage-seventy-five'>
                            
                        </div>

                        <div className='percentage-hundred'>
                            
                        </div>
                    </div>

                </div>

                <div className='stake-inner-right'>

                </div>

            </div>

}
export default StakeModal;