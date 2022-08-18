import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../libs/gtag'
import { DefaultSeo } from 'next-seo'

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
        <>
            <DefaultSeo title="Felipe Betts | Software Developer" />
            <ChakraProvider theme={theme}>
                <Fonts />
                <Layout router={router}>
                    <AnimatePresence exitBeforeEnter initial={true}>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
            </ChakraProvider>
            <DefaultSeo />
        </>
    )
}

export default App

{
    /* <NextSeo
                title="Felipe Betts | Software Developer"
                description="I'm a Software Developer based in Brazil"
            /> */
}
