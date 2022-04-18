export interface StakeModalInterface{
    setShowModal?:any,
    showModal:boolean,
    setStaked:any,
    staked:boolean
}

export interface UnStakeModalInterface{
    setShowModal?:any,
    showModal:boolean, 
    setStaked:any,
    staked:boolean
}

export interface StakeInfoParams {
    title:string,
    token:string,
    dollarEquiv:string
}

interface AprCardInterface{
    stakeAction:any
}