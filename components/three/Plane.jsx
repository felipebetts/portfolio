import { usePlane } from "@react-three/cannon"


const ThreePlane = () => {

    const [ref] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }))

    return (
        <mesh
            ref={ref}
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='transparent' transparent />
        </mesh>
    )
}

export default ThreePlane