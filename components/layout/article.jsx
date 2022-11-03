import { Box, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import ThreeSphere from '../three/Sphere'
import ThreeContainer from '../three/ThreeContainer'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title, description }) => (
    <Box as="main" pb={8}>
        <Navbar />
        <Container maxW="container.md" pt={14}>
            {/* <NoSsr>
                <ThreeContainer>
                    <ThreeSphere />
                </ThreeContainer>
            </NoSsr> */}
            <Box position="relative">
                <motion.article
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{
                        duration: 0.4,
                        type: 'easeInOut'
                    }}
                    style={{ position: 'relative' }}
                >
                    <>
                        {(title || description) && (
                            <Head>
                                {title && <title>{title}</title>}
                                {description && (
                                    <meta
                                        name="description"
                                        content={description}
                                    ></meta>
                                )}
                            </Head>
                        )}
                        {children}
                        <GridItemStyle />
                    </>
                </motion.article>
            </Box>
        </Container>
    </Box>
)

export default Layout
