import React, { createContext, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'

export const UserContext = createContext();


export default function UserContextProvider(props) {
  const [token, setToken] = useLocalStorage('token',null);
  const [userData, setUserData] = useLocalStorage('username',null);

  return (
    <UserContext.Provider value={{ token, setToken, userData, setUserData }}>
    {props.children}
  </UserContext.Provider>
  )
}
