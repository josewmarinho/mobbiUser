import * as React from 'react';
import { createContext, useEffect, useState, useContext } from 'react';


const StoreContext = createContext([{}, () => {}])

export const useStore = () => {
   const [state, setState] = useContext(StoreContext)
   return [state, setState]
}

export const StoreProvider = ({ children }) => {
   const [state, setState] = useState({});

   return (
      <StoreContext.Provider value={[state, setState]}>
         {children}
      </StoreContext.Provider>
   )
}