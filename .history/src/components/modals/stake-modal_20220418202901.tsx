import React, { useState } from 'react';


interface StakeModalInterface{
    setShowModal?:any,
    showModal:boolean
}

const StakeModal:React.FC<StakeModalInterface> = ({setShowModal, showModal}) => {

    const [amountToStake, setAmountToStake] = useState(0)
    const [type, setType] = useState('flexible')
    const [duration, setDuration] = useState<number>(0)
    return <div  className='stake-modal-container'>
            
                <div onClick={e=>null} className='stake-modal'>
                    <div className='stake-inner-left'>
                        <h1>FIS Staking</h1>

                        <h2> Mandela</h2>

                        <form>
                            <fieldset className='form-group'>
                                
                                <label className='form-label'><span>Stake Amount </span> <span>Available amount: 0.00 FIS</span></label>
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
                            <div  className={`btn-type ${type == 'flexible'? ' btn-type-active': " "}`}>
                                    Fixed  
                            </div>

                            <div className={`btn-type ${type == 'fixed'? ' btn-type-active': ''}`}>
                                    Flexible  
                            </div>
                        </div>

                        <div className='duration-container'>

                            <div onClick={e=>setDuration(0)} className={`duration-btn ${duration == 0? " duration-btn-active": " " }`}>
                                3 Months
                            </div>

                            <div onClick={e=>setDuration(1)} className={`duration-btn ${duration == 1? " duration-btn-active": " " }`}>
                                6 Months
                            </div>


                            <div onClick={e=>setDuration(2)} className={`duration-btn ${duration == 2? " duration-btn-active": " " }`}>
                                9 Months
                            </div>

                            <div onClick={e=>setDuration(3)} className={`duration-btn ${duration == 3? " duration-btn-active": " " }`}>
                                12 Months
                            </div>

                        </div>

                        <button className='stake-button'>Stake</button>
                    </div>

                </div>

            </div>
                

}
export default StakeModal;