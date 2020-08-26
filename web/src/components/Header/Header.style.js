import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	container: {
    backgroundColor: '#282c34',
  },
  containerItem: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
	link:{
		textDecoration: 'none',
	}
}));