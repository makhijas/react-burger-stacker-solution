import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

function BurgerPane(props) {
  const { stack, clear, clearIng } = props;
  
  return(
    <div className="burgPaneDiv">
      <BurgerStack stack={stack} clearIng={clearIng} />
      <ClearBurger clear={clear} />
    </div>
  )
}

export default BurgerPane;