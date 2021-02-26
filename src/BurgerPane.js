import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

//this is a functional component: 
function BurgerPane(props) { //props is defined below
  const { stack, clear, clearIng } = props; //the function props parameter is { stack, clear, clearIng}
  
  return(
    <div className="burgPaneDiv">
      <BurgerStack stack={stack} clearIng={clearIng} /> 
      {/* BurgerStack is coming from BurgerStack.js */}
      {/* clearIng is coming from App.js */}
      <ClearBurger clear={clear} />
      {/* ClearBurger is coming from ClearBurger.js */}
    </div>
  )
}

export default BurgerPane; //this exports BurgerPane for use in other files like App.js