import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import PrimaryAppBar from './PrimaryAppBar'
import ContentGrid from './ContentGrid'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

export default function App() {
	return <ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<PrimaryAppBar />
		<Container maxWidth="xl">
			<ContentGrid />
		</Container>
	</ThemeProvider>
}
