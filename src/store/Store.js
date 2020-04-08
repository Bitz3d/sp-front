import React from 'react'
import immer from 'immer'
import * as initialState from './initialState'
import * as actions from './actions.js'

export const storeContext = React.createContext();

export default function StoreProvider({ children }) {
    const [state, setState] = React.useState(initialState.initialState);

    // Wrapping our actions in setState and immer
    const immerActions = {};
    Object.keys(actions.actions).forEach(key => {
        immerActions[key] = (...args) =>
            setState(old => {
                const newState = immer(old, draft => actions.actions[key](draft, ...args));
                return newState;
            });
    });
    const contextValue = React.useMemo(() => [state, immerActions], [state]);
    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    );
}