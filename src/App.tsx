import React from 'react';
import './App.css';
import {
  Routes ,
  Route,
} from "react-router-dom";
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Travel from './pages//Travel/Travel';
import Blog from './pages/Blog/Blog';
import Header from './components/Header/Header';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
			<Container>
					<Routes >
						<Route path="/about" element={<About />}/>
						<Route path="/resume" element={<Resume />}/>
						<Route path="/travel" element={<Travel />}/> 
						<Route path="/blog" element={<Blog />}/>
					</Routes>
			</Container>
    </div>
  );
}

export default App;
