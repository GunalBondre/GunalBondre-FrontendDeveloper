import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
