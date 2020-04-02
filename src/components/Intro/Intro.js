import React from 'react';

import styles from './Intro.style'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Element } from 'react-scroll'

const useStyles = styles;

function Intro() {
	const classes = useStyles();
	return (
		<Element name="intro" className={classes.introContainer}>
			<Container maxWidth='xl'>
				<Grid container direction="column" justify="center" alignItems="center" className={classes.containerItem}>
					<Grid item>
						<Typography variant="h4" align="center" color="textPrimary" gutterBottom>
							點分黃藍？
            </Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" paragraph>
							點樣去區分藍絲？大部份人都認為只要係撐中國、撐政府、撐警，都被歸類為藍絲，相信大家都唔會反對呢個定義。
						</Typography>
						<Typography variant="body1" paragraph>
							咁黃絲呢？抗爭發展至今，網上開始出現苛刻嘅分級定義，除咗去遊行、食黃店呢啲基本門檻之外，仲要有捐錢、撐手足，總之要黃到發金先叫黃。基於呢個標準嘅淺黃，最終都會比人批鬥到標纖成「偽黃」藍絲。
							
							但係，喺呢個時刻不畏強權、願意發聲表態嘅人已經係難能可貴，「偽黃」發聲都要付出代價，除非有實質證據證明某人撐政府撐警，所以請緊記：
						</Typography>
						<Typography variant="h6" align="center" paragraph>
							不分化，團結一致
						</Typography>
					</Grid>
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={12} sm={5} className={classes.card} style={{borderLeftColor: '#ffdf00'}}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
								黃
							</Typography>
							<Typography variant="body1" gutterBottom>
								在不公義的時代勇於發聲，表態支持反送中示威者
							</Typography>
						</Grid>
						<Grid item xs={12} sm={5} className={classes.card} style={{borderLeftColor: '#3b82da'}}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
								藍
							</Typography>
							<Typography variant="body1" gutterBottom>
								表態支持政府修例、支持警察暴力打壓示威者
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Element>
	);
}

export default Intro;