import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

useStyles = makeStyles (theme) =>
	grow:
		flexGrow: 1

export default PrimaryAppBar = () =>
	classes = useStyles()

	<AppBar position="static" className={classes.appBar}>
		<Toolbar variant="dense" className={classes.toolbar}>
			<Typography component="h1" variant="h5" noWrap className={classes.grow}>
				React Application
			</Typography>
			<IconButton color="inherit">
				<AccountCircle />
			</IconButton>
		</Toolbar>
	</AppBar>
