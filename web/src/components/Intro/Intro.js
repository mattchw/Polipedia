import React from 'react';

import styles from './Intro.style'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Element } from 'react-scroll'

const useStyles = styles;

function Intro(props) {
	const classes = useStyles();
	return (
		<Element name="intro">
			<Container maxWidth='xl'>
				<Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
					<Grid item>
						<Typography variant="h4" align="center" color="textPrimary" gutterBottom>
						{props.content.title}
            </Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph>
						{props.content.description1}
						</Typography>
						<Typography variant="body1" paragraph>
						{props.content.description2}
						</Typography>
						<Typography variant="h6" align="center" paragraph>
						{props.content.description3}
						</Typography>
					</Grid>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={12} sm={5} className={classes.card} style={{borderLeftColor: '#ffdf00'}}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
							{props.content.yellow.name}
							</Typography>
							<Typography variant="body1" gutterBottom>
							{props.content.yellow.definition}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={5} className={classes.card} style={{borderLeftColor: '#3b82da'}}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
							{props.content.blue.name}
							</Typography>
							<Typography variant="body1" gutterBottom>
							{props.content.blue.definition}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={5} className={classes.card} style={{borderLeftColor: '#f44336'}}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
							{props.content.red.name}
							</Typography>
							<Typography variant="body1" gutterBottom>
							{props.content.red.definition}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={5} className={classes.card} style={{borderLeftColor: '#0f43a2'}}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
							{props.content.blue2.name}
							</Typography>
							<Typography variant="body1" gutterBottom>
							{props.content.blue2.definition}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}

export default Intro;