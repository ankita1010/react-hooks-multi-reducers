export const initialStateLeagueMay = {
	munOfTeams: 0,
	numOfMatches: 0,
	leagueName: 'League May',
	location: 'Spain'
}

export const leagueMayReducer = (state, action) => {
	switch(action.type) {
		case "UPDATE_LEAGUE_MAY": {
			return ({
				...state,
				leagueName: action.leagueName
			})
		}
		default: return state;
	}
}