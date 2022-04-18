import React from 'react';

interface Stake

const AccountInfoCard:React.FC = ({}) => {
    return <div className='user-stake-info'>
                <h2 className='staking-balance'>Staking Balance</h2>
                <h1 className='token-balance-fis'>0.00 FIS</h1>
                <h2 className='token-balance-dollars'>$0.00</h2>
            </div>
}

export default AccountInfoCard;