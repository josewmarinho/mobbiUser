import { useCallback } from 'react'

import { useStore } from './store'

export const useAuth = () => {
   const [store, setStore] = useStore();

   const setAuth = useCallback(auth => setStore({auth}), [])

   return [store && store.auth, setAuth]
}