import React, { useContext } from 'react';
import { StateContext } from './context';

export const Details = () => {
	const { state, dispatch } = useContext(StateContext);
	console.log(state)
	return (
		<div className="details">
			{Object.entries(state).map(([key, value]) => {
				return <div className="state-details">
					<h2>{key}</h2>
					<div className="state-values">
						{
							Object.entries(value).map(([stateKey, stateValue]) => {
								return <span>
									<h4 key={`state-key-${stateKey}`}>{stateKey}:</h4>
									<p key={`state-value-${stateKey}`}>{stateValue}</p>
								</span>

							})
						}
					</div>
				</div>
			})}
			{
				/*
					Check below for usage of the reducers and dispatch
				*/
			}
			<div className="form">
				<div>
					<label>League April</label>
					<input
						value={state.leagueApril.leagueName}
						onChange={(event) => dispatch({
							type: 'UPDATE_LEAGUE_APRIL',
							leagueName: event.target.value
						})}
					/>
				</div>
				<div>
					<label>League May</label>
					<input
						value={state.leagueMay.leagueName}
						onChange={(event) => dispatch({
							type: 'UPDATE_LEAGUE_MAY',
							leagueName: event.target.value
						})}
					/>
				</div>
			</div>

		</div>
	)
};