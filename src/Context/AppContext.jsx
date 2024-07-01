/* This file defines a context that will be used to store and share data across multiple
    components of our application.
*/

// I am importing the necessary functions from the React library to manage the state of the dark mode.
import { createContext, useState } from "react";

// I create a new context using the `createContext` function. The argument is the initial value of the context.
export const AppContext = createContext(null);

/* I define a functional component called `AppContextProvider`. This component will be
    used to provide the context to all of its child components.
 */
const AppContextProvider = ({ children }) => {
  // i usee the `useState` hook to create a state variable called `darkMode`.
  // This state variable will keep track of whether the application is in dark mode or not.
  const [darkMode, setDarkMode] = useState(false);

  // I define a function called `toggleDarkMode`. This function will be used to
  //toggle the value of the `darkMode` state variable.
  const toggleDarkMode = () => {
    /* 
        I use the `setDarkMode` function to update the value of the `darkMode` state variable.
        I pass a function as an argument to the `setDarkMode` function. This function takes the
        current value of the `darkMode` state variable and returns the opposite value.
    */
    setDarkMode((darkMode) => !darkMode);
  };

  // I create an object called `darkModeStyle`. This object will provide CSS styles for the app based on the `darkMode` state variable.
  const darkModeStyle = {
    // If the `darkMode` state variable is true, the background color of the app will be "#23272f". Otherwise, it will be "#f6f7f9".
    backgroundColor: darkMode ? "#23272f" : "#f6f7f9",
    // If the `darkMode` state variable is true, the text color of the app will be "white". Otherwise, it will be "#23272f".
    color: darkMode ? "white" : "#23272f",
  };

  // I create an object called `contextValue`. This object will store all of the data that i want to share to all parts of this project.
  const contextValue = {
    darkMode,
    toggleDarkMode,
    darkModeStyle,
  };

  // I return the `AppContext.Provider` component, which will provide the `contextValue` object to all of its child components.
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
