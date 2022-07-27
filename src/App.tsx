import './App.css';
import {
  Routes ,
  Route,
} from "react-router-dom";
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Travel from './pages//Travel/Travel';
import Blog from './pages/Blog/Blog';
import { Container } from '@mui/material';
import {Header} from './components/Header';
import { Portfolio } from 'pages/Portfolio';
import { Layout } from 'pages/Layout';





function App() {
  return (
		<Container>
			<Header/>
				<Routes >
					<Route path="/"  element={<Layout />}/>
					<Route path="/about" element={<About />}/>
					<Route path="/resume" element={<Resume />}/>
					<Route path="/portfolio" element={<Portfolio />}/>
					<Route path="/travel" element={<Travel />}/> 
					<Route path="/blog" element={<Blog />}/>
				</Routes>
		</Container>
  );
}

export default App;
