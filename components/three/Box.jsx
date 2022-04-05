import ThreeContainer from './ThreeContainer'

const ThreeBox = () => {
    return (
        <mesh position={[0, 2, 0]}>
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='hotpink' />
        </mesh>
    )
}

export default ThreeBox