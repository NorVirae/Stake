import React, { useState } from 'react';


interface StakeModalInterface{
    setShowModal?:any,
    showModal:boolean
}

const StakeModal:React.FC<StakeModalInterface> = ({setShowModal, showModal}) => {

    const [amountToStake, setAmountToStake] = useState(0)
    return <div onClick={e=>setShowModal(false)} className='stake-modal-container'>
            
                <div onClick={e=>null} className='stake-modal'>
                    <div className='stake-inner-left'>
                        <h1>FIS Staking</h1>

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

                        <div className='stake-type'>

                        </div>

                    </div>

                    <div className='stake-inner-right'>
                        
                        <div className='type-title'>Type</div>
                        <div className='type-btn-container'>
                            <div className='btn-percentage'>
                                    Fixed  
                            </div>
                        </div>

                        <button className='stake-button'>Stake</button>
                    </div>

                </div>

            </div>
                

}
export default StakeModal;