import React, { createContext, useReducer } from 'react';
import combineReducers from 'react-combine-reducers';
import {
	initialStateLeagueApril,
	initialStateLeagueMay,
	leagueAprilReducer,
	leagueMayReducer
} from './reducers';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {

	// combined reducer and initial state

	const [rootReducer, initialStateCombined] = combineReducers(
		{
			leagueApril: [leagueAprilReducer, initialStateLeagueApril],
			leagueMay: [leagueMayReducer, initialStateLeagueMay],
		}
	);
	const [state, dispatch] = useReducer(rootReducer, initialStateCombined);

	return (
		<StateContext.Provider
			value={
				{state,
				dispatch}
			}
		>
			{children}
		</StateContext.Provider>
	)
}