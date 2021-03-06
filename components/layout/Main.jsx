import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from '../navbar'
import VoxelDog from '../voxel-dog'
import NoSsr from "../no-ssr"
import ThreeBox from "../three/Box"
import ThreePlane from "../three/Plane"
import ThreeContainer from "../three/ThreeContainer"
import ThreeSphere from "../three/Sphere"


const Main = ({
    children,
    router
}) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Felipe Betts</title>
            </Head>

            <Navbar path={router.path} />

            <Container
                maxW='container.md'
                pt={14}
            >
                <NoSsr>
                    {/* <VoxelDog /> */}
                    <ThreeContainer>
                        <ThreeSphere />
                    </ThreeContainer>
                </NoSsr>
                <Box
                    position='relative'
                    top='50vh'
                >
                    {children}
                </Box>
            </Container>
        </Box>
    )
}

export default Main