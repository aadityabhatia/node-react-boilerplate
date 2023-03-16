import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function PrimaryAppBar() {
	return <AppBar position="static">
		<Toolbar variant="dense">
			<Typography component="h1" variant="h5" noWrap sx={{
				flexGrow: 1,
				"font-variant": "small-caps"
			}}>
				React Application
			</Typography>
			<IconButton color="inherit">
				<AccountCircleIcon />
			</IconButton>
		</Toolbar>
	</AppBar >
}
