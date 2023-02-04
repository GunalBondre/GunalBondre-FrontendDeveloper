import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Suspense fallback={<div>....loading</div>}>
					<Routes>
						<Route exact path='/' element={<Home />} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
};

export default App;
