import React from 'react';
import Card from './cards';




const Cardlist=({robots})=> {
    return(
    <div className='tc'>
        {
        robots.map(user=>{
        return (<Card key={user.id} Id={user.id} name={user.name} email={user.email}/>);
  }
  )}</div>
  );
}
export default Cardlist;