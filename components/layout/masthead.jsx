import { Box, Center, Heading, Icon } from '@chakra-ui/react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { ScrollContext } from '../../utils/ScrollObserver'

const Masthead = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const containerRef = useRef(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: containerEl } = containerRef
    if (containerEl) {
        progress = Math.min(1, scrollY / containerEl.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])

    return (
        <Box
            ref={containerRef}
            minH="100vh"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            position="sticky"
            top="0"
            zIndex="-10"
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            >
                <source
                    src="/videos/matrix-bg.mp4"
                    type="video/mp4; codecs=hvc1"
                />
                <source
                    src="/videos/matrix-bg.webm"
                    type="video/webm; codecs=vp9"
                />
            </video>
            <Box></Box>
            <Box
                pt={12}
                fontWeight="bold"
                color="white"
                zIndex="10"
                textAlign="center"
                flex="1"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                style={{
                    textShadow: '0 5px 3px rgba(0,0,0,0.4)'
                }}
            >
                <Heading as="h1" mb={6} fontSize="4xl">
                    Felipe Betts
                </Heading>
                <Heading as="h2" mb={2} fontSize="2xl" lineHeight="short">
                    Software Developer
                </Heading>
            </Box>
            <Center
                zIndex="10"
                flexGrow="0"
                pb={10}
                color="white"
                style={{
                    textShadow: '0 5px 3px rgba(0,0,0,0.4)'
                }}
            >
                <Icon as={IoChevronDown} w={14} h={14} />
            </Center>
        </Box>
    )
}

export default Masthead
