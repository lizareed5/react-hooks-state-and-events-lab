import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkModeOn, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(prevMode => !prevMode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkModeOn ? "App dark" : "App light"

  const darkModeButtonText = isDarkModeOn ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkModeButtonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
