import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './style.module.scss'


export const Header = () => {
  return (
		<>
      <AppBar position="fixed">
					<div style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '0 30px'}}>
						<Typography variant="h6" color="inherit" component="div">
							<Link to="/layout">Shukhrat's blog</Link>
						</Typography>
						<nav>
							<ul>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/resume">Resume</Link>
								</li>
								<li>
									<Link to="/portfolio">Portfolio</Link>
								</li>
								<li>
									<Link to="/travel">Travel</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
							</ul>
						</nav>
      </div>
			
      </AppBar>
			<br />
			<br />
			<br />
			<br />
			<br />
			</>
  );
}