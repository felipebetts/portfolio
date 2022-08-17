import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps, router }) => {
    // src="https://www.googletagmanager.com/gtag/js?id=G-7SVKVB47N2"
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default App
