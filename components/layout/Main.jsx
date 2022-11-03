import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import ThreeContainer from '../three/ThreeContainer'
import ThreeSphere from '../three/Sphere'
import Layout from './article'

const Main = ({ children, title, description }) => {
    return (
        <Box as="main" pb={8}>
            <Navbar />
            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <ThreeContainer>
                        <ThreeSphere />
                    </ThreeContainer>
                </NoSsr>
                <Box position="relative" top="50vh">
                    <Layout title={title} description={description}>
                        {children}
                    </Layout>
                </Box>
            </Container>
        </Box>
    )
}

export default Main
