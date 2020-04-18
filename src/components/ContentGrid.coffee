import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

useStyles = makeStyles (theme) =>
	root:
		display: 'flex'
		paddingTop: theme.spacing(4)
		paddingBottom: theme.spacing(4)

	paper:
		padding: theme.spacing(2)
		textAlign: 'center'
		height: '20vh'

export default Content = () =>

	classes = useStyles()

	<div className={classes.root}>
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					xs=12
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Paper className={classes.paper}>
					xs=12 sm=6
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Paper className={classes.paper}>
					xs=12 sm=6
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper className={classes.paper}>
					xs=6 sm=3
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper className={classes.paper}>
					xs=6 sm=3
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper className={classes.paper}>
					xs=6 sm=3
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper className={classes.paper}>
					xs=6 sm=3
				</Paper>
			</Grid>
		</Grid>
	</div>
