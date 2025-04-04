// src/App.jsx
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import { useState } from 'react';

import './App.css';

const App = () => {
  const availableIngredients = [
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
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

   // initialize new useState variable called stack
   const [stack, setStack] = useState([]);
   // new state variable to track list
   const [ingredientsList, setIngredientsList] = useState([]);

   // handleAddToBurger function
   const handleAddToBurger = (ingredient) => {
    console.log(ingredient);
    // reversing order so first ingredient is on the bottom
    const burgerStack = [ingredient, ...stack];
    setStack(burgerStack);
};

 // passing index parameter here and in BurgerStack.jsx
 const handleRemoveFromBurger = (index) => {
  const updatedBurgerStack = stack.filter((ingredient, i) => i !== index);
        setStack(updatedBurgerStack);
    };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
       {/* List & Stack components */}
       <IngredientList 
                    availableIngredients={availableIngredients} 
                    handleAddToBurger={handleAddToBurger}
                />
                <BurgerStack 
                    stack={stack}
                    handleRemoveFromBurger={handleRemoveFromBurger}
                />
      </section>
    </main>
  );
};

export default App;