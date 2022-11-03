import { Box } from '@chakra-ui/react'
import { useRef } from 'react'
import { useContext } from 'react'
import { ScrollContext } from '../utils/ScrollObserver'

const blockOpacity = (sectionProgress, blockNo) => {
    const progress = sectionProgress - blockNo
    console.log('progress:', progress)
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

const ScrollText = ({ texts }) => {
    const { scrollY } = useContext(ScrollContext)
    const containerRef = useRef(null)

    const numOfBlocks = texts?.length || 3
    let progress = 0

    const { current: containerEl } = containerRef
    if (containerEl) {
        const { clientHeight, offsetTop } = containerEl
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY =
            Math.min(
                clientHeight + halfH,
                Math.max(-screenH, scrollY - offsetTop) + halfH
            ) / clientHeight
        progress = Math.min(
            numOfBlocks - 0.5,
            Math.max(0.5, percentY * numOfBlocks)
        )
    }

    return (
        <Box ref={containerRef} bg="black" color="white">
            <Box
                minH="100vh"
                maxW="container.md"
                mx="auto"
                px={[10, , 20]}
                py={[24, 28, 36]}
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                fontSize={['4xl', '5xl', '6xl']}
                fontWeight="semibold"
                letterSpacing="tight"
            >
                <Box lineHeight="1.15">
                    {texts &&
                        texts.map((text, i) => (
                            <Box
                                style={{
                                    display: 'inline-block',
                                    opacity: blockOpacity(progress, i),
                                    transition: 'opacity 0.4s'
                                }}
                            >
                                {text}
                            </Box>
                        ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ScrollText
