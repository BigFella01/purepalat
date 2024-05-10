import { createContext } from 'react'

const UserContext = createContext()

function UserProvider({ children }) {
  
    const initialState = {
    users: [
      {
        username: 'Hayden',
        password: 'LordMonke68'
      }
    ]
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'createUser':
        return {
          ...state, 
        }

      default: {
        return state
      }
    }
  }
}
