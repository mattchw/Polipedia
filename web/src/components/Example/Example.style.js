import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  introContainer:{
    backgroundColor: '#f3f3f3',
  },
	containerItem: {
		padding: 20,
  },
  card:{
    margin: 10,
    borderRadius: 10,
    boxShadow: '1px 1px 3px grey',
    borderLeft: 'solid',
    borderLeftWidth: 10,
    minHeight: 120,
    padding: 10,
    backgroundColor: '#ffffff',
  },
}));