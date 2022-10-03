import Layout from '../components/layout/Main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import * as gtag from '../libs/gtag'
import AlertProvider from '../libs/alert'

import NProgress from 'nprogress'
import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'

import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })

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
                <AlertProvider>
                    <Layout router={router}>
                        <AnimatePresence exitBeforeEnter initial={true}>
                            <Component {...pageProps} key={router.route} />
                        </AnimatePresence>
                    </Layout>
                </AlertProvider>
            </ChakraProvider>
            <DefaultSeo />
        </>
    )
}

export default appWithTranslation(App)
