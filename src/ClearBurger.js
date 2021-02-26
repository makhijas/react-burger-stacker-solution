import React from 'react';

//function that clears the whole burger stack 
function ClearBurger(props) {
  return(
    <div>
      {/* the clearing of the burger stack will happen when button is CLICKED (onClick) */}
      <button onClick={(e) => props.clear(e)}>CLEAR</button> 
      
    </div>
  )
}
//the following exports ClearBurger function for use in other files 
export default ClearBurger;