import { createContext } from "react";

// I create a new context using the `createContext` function. The argument is the initial value of the context.
export const AppContext = createContext(null);

import { recentUpdatesData } from "../Data/Data";

const AppContextProvider = ({ children }) => {
  const contextValue = {
    recentUpdatesData,
  };

  // I return the `AppContext.Provider` component, which will provide the `contextValue` object to all of its child components.
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
