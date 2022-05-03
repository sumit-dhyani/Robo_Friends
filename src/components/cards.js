import React from 'react';
import 'tachyons';
const Card =({name,email,Id}) => {
    // if(true){
    //     throw new Error("nooooo");
    // }
    return(
        <div className=' bg-washed-green br3 pa1 ma2 dib grow shadow-5 bw-2 '>
            <img alt='robots' src= {`https://robohash.org/${Id}?200x200`}  />
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;