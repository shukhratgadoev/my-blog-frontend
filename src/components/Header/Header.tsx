import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Header = () => {
  return (
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Shukhrat's blog
          </Typography>
        </Toolbar>
				<Router>
					<div>
						<nav>
							<ul>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/resume">Resume</Link>
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
    </Router>

      </AppBar>
  );
}

export default Header;