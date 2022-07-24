import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header/Header';
import { Container } from '@mui/material';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
		 <Container>
				<Header/>
						<br />
						<Router>
							<App />
						</Router>
		 </Container>
  </React.StrictMode>
);