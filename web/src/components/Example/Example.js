import React from 'react';

import styles from './Example.style'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ContentItem from '../Content/Content.component'

const useStyles = styles;

function Example(props) {
  const classes = useStyles();

  return (
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
					<Typography variant="body1" paragraph>
						{props.content.description3}
					</Typography>
        </Grid>
        <Grid item>
          <ContentItem category="persons" item={props.content.example1} content={props.filters} />
        </Grid>

        <Grid item>
          <ContentItem category="persons" item={props.content.example2} content={props.filters} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Example;