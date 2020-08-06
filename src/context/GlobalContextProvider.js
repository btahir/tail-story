import React, { useReducer, createContext } from 'react';

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
    theme: 'light'
}

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        }
        default: {
            throw new Error('Bad Action Type')
        }
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider;