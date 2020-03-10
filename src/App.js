import React from 'react';
import { StateProvider } from './context';
import './App.scss';
import { Details } from './Details';

const App = () => {
	return (
		<StateProvider>
			<Details/>
		</StateProvider>

	)
};
export default App;