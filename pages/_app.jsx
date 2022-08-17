import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../libs/gtag'

const App = ({ Component, pageProps, router }) => {
    const nextRouter = useRouter()
    useEffect(() => {
        const handleRouteChange = url => {
            gtag.pageview(url)
        }
        nextRouter.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            nextRouter.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [nextRouter.events])

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
