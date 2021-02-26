import React from 'react';
import Ingredient from './Ingredient';

function IngredientList(props) {
  const { ingredients, stackBurger } = props;
  const list = ingredients.map((ing, index) => {
    const { name, color, } = ing;
    
    return <Ingredient key={`ing-${index}`} name={name} color={color} stackBurger={stackBurger} />
  });

  return <div className="ingListDiv">{list}</div>
}

export default IngredientList;