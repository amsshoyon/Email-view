import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import {Theme} from 'helpers/theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
