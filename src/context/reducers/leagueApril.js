export const initialStateLeagueApril = {
	munOfTeams: 0,
	numOfVenues: 5,
	leagueName: 'League April',
	location: 'World Wide'
}

export const leagueAprilReducer = (state, action) => {
	switch(action.type) {
		case "UPDATE_LEAGUE_APRIL": {
			return ({
				...state,
				leagueName: action.leagueName
			})
		}
		default: return state;
	}
}