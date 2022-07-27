import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Resume = () => {
	return (
		<div>
			<Typography variant="h3" component="div" gutterBottom style={{textAlign: 'center'}}>
				RESUME
			</Typography>
			<Grid container spacing={2}>
        <Grid item xs={12}>
					<Typography variant="h4" component="div" gutterBottom>
					Shukhrat Gadoev
					</Typography>
					<Typography variant="h4" component="div" gutterBottom>
					Junior Python Developer
					</Typography>
					<Typography variant="body1" gutterBottom>
						I am also interested in many other areas of business and computer science.<br/>
						I am not afraid of difficulties and I am always open to new knowledge.
					</Typography>
        </Grid>
        <Grid item xs={12}>
				<Typography variant="h6" component="div" gutterBottom>
				shukhratgadoev@gmail.com
					</Typography>
				<Typography variant="h6" component="div" gutterBottom>
						+998(97)719-98-96
					</Typography>
					<ul style={{display:'flex', paddingLeft: '20px'}}>
						<li style={{marginRight: '45px'}}>
							<Link href="https://www.linkedin.com/in/shukhrat-gadoev/" underline="hover">
								Github
							</Link>
						</li>
						<li> 
							<Link href="https://www.linkedin.com/in/shukhrat-gadoev/" underline="hover">
        					Linkedin
      				</Link>
						</li>
					</ul>
        </Grid>
				<Grid item xs={6} style={{ paddingRight: '50px'}}>
					<Typography variant="h5" component="div" gutterBottom>
						WORK EXPERIENCE
					</Typography>
					<hr />
						<Typography variant="h6" component="div" gutterBottom>
							Front-end developer
						</Typography>
						<Typography variant="h6" component="div" gutterBottom>
							Light Digital Progress
						</Typography>
						<Typography variant="overline" display="block" gutterBottom>
							01 / 2021 - Present
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Tashkent, Uzbekistan
						</Typography>
					<hr />
						<Typography variant="h6" component="div" gutterBottom>
							Front-end developer
						</Typography>
						<Typography variant="h6" component="div" gutterBottom>
							Jafton
						</Typography>
						<Typography variant="overline" display="block" gutterBottom>
							11 / 2019 - 12 / 2020
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Tashkent, Uzbekistan
						</Typography>
					<hr />
					<Typography variant="h6" component="div" gutterBottom>
							Front-end developer
						</Typography>
						<Typography variant="h6" component="div" gutterBottom>
							Super Dispatch
						</Typography>
						<Typography variant="overline" display="block" gutterBottom>
							01 / 2019 - 06 / 2019
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Tashkent, Uzbekistan
						</Typography>
					<hr />
					<Typography variant="h6" component="div" gutterBottom>
							HTML/CSS-coder
						</Typography>
						<Typography variant="h6" component="div" gutterBottom>
							AB.DIGITAL
						</Typography>
						<Typography variant="overline" display="block" gutterBottom>
							06 / 2018 - 01 / 2019
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Tashkent, Uzbekistan
						</Typography>
					<hr />
					<Typography variant="h6" component="div" gutterBottom>
							HTML/CSS-coder
						</Typography>
						<Typography variant="h6" component="div" gutterBottom>
						Smart Outsourcing Solutions
						</Typography>
						<Typography variant="overline" display="block" gutterBottom>
							02 / 2017 - 10 / 2017
						</Typography>
						<Typography variant="subtitle1" gutterBottom component="div">
							Tashkent, Uzbekistan
						</Typography>
					<hr />
					<Typography variant="h5" component="div" gutterBottom>
						EDUCATION
					</Typography>
					<Typography variant="h6" component="div" gutterBottom>
						Kuyluk professional College of Services
					</Typography>
					<Typography variant="h6" component="div" gutterBottom>
						Management and the economy
					</Typography>
					<Typography variant="overline" display="block" gutterBottom>
							09 / 2003 - 06 / 2006
						</Typography>
				</Grid>
				

				<Grid item xs={6}>
					<Typography variant="h5" component="div" gutterBottom>
						SKILLS
					</Typography>
					<br />
					<Stack direction="row" spacing={2}>
						<Chip label="Python"  color="warning" />
						<Chip label="Django"  color="warning" />
						<Chip label="SQL"  color="warning" />
						<Chip label="Django REST framework"  color="warning" />
					</Stack>
					<br />
					<Stack direction="row" spacing={2}>
						<Chip label="Unit testing"  color="warning" />
						<Chip label="CI/CD"  color="warning" />
					</Stack>
					<br />
					<Stack direction="row" spacing={2}>
						<Chip label="React.js" color="warning" />
						<Chip label="Redux.js"  color="warning" />
						<Chip label="HTML5" color="warning" />
						<Chip label="CSS3"  color="warning" />
					</Stack>
					<br />
					<br />
					<Typography variant="h5" component="div" gutterBottom>
						LANGUAGES
					</Typography>
					<br />
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Typography variant="h6" component="div" gutterBottom>
								English
							</Typography>
							<Typography variant="subtitle1" component="div" gutterBottom>
								Professional Working Proficiency
							</Typography>
							<Typography variant="h6" component="div" gutterBottom>
								Russian
							</Typography>
							<Typography variant="subtitle1" component="div" gutterBottom>
								Native or Bilingual Proficiency
							</Typography>
							</Grid>
						<Grid item xs={6}>
							<Typography variant="h6" component="div" gutterBottom>
								Uzbek
							</Typography>
							<Typography variant="subtitle1" component="div" gutterBottom>
								Native or Bilingual Proficiency
							</Typography>
							<Typography variant="h6" component="div" gutterBottom>
								Tajik
							</Typography>
							<Typography variant="subtitle1" component="div" gutterBottom>
								Professional Working Proficiency
							</Typography>
						</Grid>
					</Grid>
						<br />
						<br />
					<Typography variant="h5" component="div" gutterBottom>
						INTERESTS
					</Typography>
					<br/>
					<Stack direction="row" spacing={2}>
						<Chip label="Programming" color="primary"  />
						<Chip label="Languages"  color="primary" />
						<Chip label="Traveling"  color="primary" />
					</Stack>
					<br />
					<Stack direction="row" spacing={2}>
						<Chip label="Computer Science"  color="primary" />
						<Chip label="Businesses Administration"  color="primary" />
						<Chip label="Sport"  color="primary" />
					</Stack>
				</Grid>

      </Grid>
<br />
<br />
<br />
		</div>
	 );
}

export default Resume;