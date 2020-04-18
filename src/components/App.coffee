import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PrimaryAppBar from './PrimaryAppBar.coffee'
import ContentGrid from './ContentGrid.coffee'

darkTheme = createMuiTheme
	palette:
		type: 'dark'

export default App = () =>
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<PrimaryAppBar />
		<Container maxWidth="xl">
			<ContentGrid />
		</Container>
	</ThemeProvider>
