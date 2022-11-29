import { useSphere } from '@react-three/cannon'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const ThreeSphere = () => {
    const colorMap = useLoader(TextureLoader, '/textures/earth.jpg')
    // const colorMap = useLoader(TextureLoader, '/textures/NASA-co2-plumes.png')

    const sphereRef = useRef()

    useFrame(({ clock }) => {
        sphereRef.current.rotation.y = clock.getElapsedTime() / 2
    })

    return (
        <mesh
            ref={sphereRef}
            scale={1.7}
            position={[0, 0, 0]}
            onWheel={e => console.log('e:', e)}
            // onClick={() => api.velocity.set(0, 10, 0)}
        >
            <sphereBufferGeometry attach="geometry" />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}

export default ThreeSphere
