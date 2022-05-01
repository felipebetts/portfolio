import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Script from 'next/script'

const App = ({ Component, pageProps, router }) => {
    return (
        <>
            <Head>
                <Script
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=G-7SVKVB47N2"
                />
                <Script strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {dataLayer.push(arguments)}
                        gtag('js', new Date());
                        gtag('config', 'G-7SVKVB47N2', {
                            page_path: window.location.pathname
                        });
                    `}
                </Script>
            </Head>
            <ChakraProvider theme={theme}>
                <Fonts />
                <Layout router={router}>
                    <AnimatePresence exitBeforeEnter initial={true}>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
            </ChakraProvider>
        </>
    )
}

export default App
