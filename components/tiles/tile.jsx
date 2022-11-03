import { Box } from '@chakra-ui/react'
import { createContext, useContext, useRef } from 'react'
import { ScrollContext } from '../../utils/ScrollObserver'

export const TileContext = createContext({
    numOfPages: 0,
    currentPage: 0
})

export const TileWrapper = ({ numOfPages, children }) => {
    const { scrollY } = useContext(ScrollContext)
    const containerRef = useRef(null)
    let currentPage = 0

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
        currentPage = percentY * numOfPages
    }

    return (
        <TileContext.Provider value={{ numOfPages, currentPage }}>
            <Box
                ref={containerRef}
                position="relative"
                bg="black"
                color="white"
                style={{
                    height: numOfPages * 100 + 'vh'
                }}
            >
                {children}
            </Box>
        </TileContext.Provider>
    )
}

export const TileBackground = ({ children }) => (
    <Box position="absolute" height="100%" width="100%">
        {children}
    </Box>
)

export const TileContent = ({ children }) => (
    <Box position="sticky" top={0} height="100vh" overflow="hidden">
        {children}
    </Box>
)

export const Tile = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(TileContext)
    const containerRef = useRef(null)
    const progress = Math.max(0, currentPage - page)

    let opacity = Math.min(1, Math.max(0, progress * 4))
    if (progress > 0.85 && page < numOfPages - 1) {
        opacity = Math.max(0, (1.0 - progress) * 4)
    }

    return (
        <Box
            ref={containerRef}
            position="absolute"
            top={0}
            width="full"
            style={{
                pointerEvents:
                    progress <= 0 || progress >= 1 ? 'none' : undefined,
                opacity
            }}
        >
            {renderContent({ progress })}
        </Box>
    )
}
