import React from 'react'
import { createTheme } from '@mui/material/styles'
import { Box, Grid, Paper } from '@mui/material'

const theme = createTheme()

export default function Content() {
	return <Box sx={{
		display: 'flex',
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	}}>
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper sx={{
					textAlign: 'center',
					height: '20vh'
				}}>
					xs=12
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Paper sx={{
					textAlign: 'center',
					height: '20vh'
				}}>
					xs=12 sm=6
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Paper sx={{
					textAlign: 'center',
					height: '20vh'
				}}>
					xs=12 sm=6
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper sx={{
					textAlign: 'center',
					height: '20vh'
				}}>
					xs=6 sm=3
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper sx={{
					textAlign: 'center',
					height: '20vh'
				}}>
					xs=6 sm=3
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper sx={{
					textAlign: 'center',
					height: '20vh'
				}}>
					xs=6 sm=3
				</Paper>
			</Grid>
			<Grid item xs={6} sm={3}>
				<Paper sx={{
					textAlign: 'center',
					height: '20vh'
				}}>
					xs=6 sm=3
				</Paper>
			</Grid>
		</Grid>
	</Box>
}
