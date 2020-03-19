import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    card:{
      margin: '10px 0',
      borderRadius: 10,
      boxShadow: '1px 1px 3px grey',
      borderLeft: 'solid',
      borderLeftWidth: 10,
      minHeight: 120,
    },
    stance:{
      width: 10,
      borderRadius: '10px 0 0 10px',
    },
    image: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
    content: {
      paddingLeft: 10,
    },
    contentText: {
      paddingTop: 5,
      whiteSpace: 'nowrap',
      overflow: 'hidden !important',
      textOverflow: 'ellipsis',
    },
    contentChip: {
      paddingTop: 10,
      paddingBottom: 10,
    },
}));