import React from 'react';

interface StakeInfoParams {
    title:string,
    token:string,
    dollarEquiv:string
}

const AccountInfoCard:React.FC<StakeInfoParams> = ({title, token, dollarEquiv}) => {
    return <div className='user-stake-info'>
                <h2 className='staking-balance'>{title}</h2>
                <h1 className='token-balance-fis'>0.00 FIS</h1>
                <h2 className='token-balance-dollars'>$0.00</h2>
            </div>
}

export default AccountInfoCard;