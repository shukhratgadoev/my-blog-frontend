import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Travel from './pages//Travel/Travel';
import Blog from './pages/Blog/Blog';

const App = () => {
	const routes = useRoutes([
			{ path: '/about', element: <About /> },
			{ path: '/resume', element: <Resume /> },
			{ path: '/travel', element: <Travel /> },
			{ path: '/blog', element: <Blog /> },
	]);

	return routes;
};
export default App;
