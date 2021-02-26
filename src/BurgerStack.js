import React from 'react';
import Ingredient from './Ingredient';

function BurgerStack(props) {
  const { stack, clearIng } = props;
  const listOfIngredients = stack.map((ing, index) => {
    const { name, color } = ing;
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
  })
  return listOfIngredients;
}

export default BurgerStack;