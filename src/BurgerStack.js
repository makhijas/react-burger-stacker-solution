import React from 'react';
import Ingredient from './Ingredient';

//this is a functional component: 
function BurgerStack(props) { //props are defined below
  const { stack, clearIng } = props; 
  //lines 8 and 9 traverse over the burger stack 
  const listOfIngredients = stack.map((ing, index) => {
    const { name, color } = ing; // inside map

    if (index === 0) {
      return (
        <div key={`ing-${index}`}>
          <button onClick={clearIng}>Remove Last Ingredient</button>
          <Ingredient name={name} color={color}/>
        </div>
      )
    } else {
      return <Ingredient key={`ing-${index}`} name={name} color={color} />
    }
  });

  return listOfIngredients;
}

export default BurgerStack;