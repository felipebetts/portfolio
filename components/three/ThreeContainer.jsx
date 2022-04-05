import { Box } from "@chakra-ui/react"
import { Physics } from "@react-three/cannon"
import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


const ThreeContainer = ({
    children
}) => {
    return (
        <Box
            position='absolute'
            height='50vh'
            left='0'
            width='100%'
            mb={4}
        >
            {/* <Box
                position='abolute'
                // height='400px'
                left='-50vw'
                mb={4}
            > */}
                <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 15, 10]} angle={0.3} />
                    <Stars />
                    <Physics>
                        {children}
                    </Physics>
                </Canvas>
            {/* </Box> */}
        </Box>
    )
}

export default ThreeContainer