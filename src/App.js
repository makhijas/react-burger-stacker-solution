//useState is part of the component life cycle; 
//this indicates that we will be using functions and states not classes
import React, {useState} from 'react'; 
import './style.css';//this imports the styling and css 
import BurgerPane from './BurgerPane'; //this 
import IngredientList from './IngredientList';
import IngForm from './IngForm';

//the starter data:
let ingredientSeed = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
];

function App(props) { //this is a function that consists of states and functions
  let [ingredients, setIngredients] = useState(ingredientSeed); //this is making it possible to use the ingredient seed dynamically by using setIngredient
  let [stack, setStack] = useState([]);//this is the list of ingredients that will populate on the burger(right pane) after the user clicks on the ingredient(left pane)

  // TODO declare some functions
  function stackBurger(e) { //this function adds the clicked ingredient to the burger stack
    const ingToAdd = ingredients.filter(ing => ing.name === e.target.innerText);//this is an array of all the ingredients added to the burger
    setStack([ingToAdd[0], ...stack]); //this adds clicked ingredients to the array by spreading the original array
  }

  function clear() { //this function clears the whole burger pane and sets the stack to empty
    setStack([]);
  }

  function addIng(e) { //adds iingredients to list of ingredient choices that a user can choose to put on the burger stack
    e.preventDefault(); //this ensures that the default list is not displayed
    let ingName = document.querySelector('#ingName').value;//this is coming from IngForm.js
    let ingColor = document.querySelector('#ingColor').value;//this is coming from IngForm.js
    const ing = { name: ingName, color: ingColor }; //sets the user input values (ingName and ingColor) to name and color respectively
    setIngredients([ing, ...ingredients]); //...ingredients spread the ingredients array and adds the ingredient from the user input
  }

  function clearIng() { //this function clears the most recently added topping to the burger but keeps the rest of the list in the burger pane
    const tempStack = stack;
    tempStack.shift();//removes last added ingredient and also returns that removed ingredient
    setStack([...tempStack]);//partial stack without the most recent ingredient
  }

  return (
    <div className="appDiv">
      {/* the following is the user input form where a user can add an ingredient to the ingredient pane */}
      <IngForm addIng={addIng} /> 
      {/* the following is the list of all ingredients available for the burger */}
      <IngredientList ingredients={ingredients} stackBurger={stackBurger} />
      {/* the following is the burger stack where clicked ingredients (from ingredient pane) get added */}
      {/* the following also has a clear button to fully clear out the list and a button to remove the most recent ingredient */}
      <BurgerPane stack={stack} clear={clear} clearIng={clearIng} />
    </div>
  )
}

export default App;//exports App for use in other files