import { useRef } from 'react'
import { useContext } from 'react'

import { SizeContext } from '../utils/size-observer'
import useAnimationFrame from '../hooks/use-animation-frame'
import { useCallback } from 'react'
import { Box } from '@chakra-ui/react'

const SliderContainer = ({
    children,
    className,
    contentWidth,
    intialOffsetX,
    speed = 1,
    ...props
}) => {
    const { innerWidth } = useContext(SizeContext)
    const scrollXRef = useRef(intialOffsetX)
    const containerRef = useRef(null)
    const contentRef = useRef(null)

    const enabled = innerWidth < contentWidth

    useAnimationFrame(
        enabled,
        useCallback(() => {
            const { current: containerEl } = containerRef
            const { current: contentEl } = contentRef
            if (containerEl && contentEl) {
                scrollXRef.current += 0.5 * speed
                containerEl.scrollLeft = scrollXRef.current
                if (containerEl.scrollLeft >= contentEl.clientWidth) {
                    scrollXRef.current = 0
                    containerEl.scrollLeft = 0
                }
            }
        }, [])
    )

    return (
        <Box
            ref={containerRef}
            overflowX="hidden"
            whiteSpace="nowrap"
            maxW="full"
            pointerEvents="none"
            {...props}
        >
            <Box ref={contentRef} display="inline-block">
                {children}
            </Box>
            <Box display={enabled ? 'inline-block' : 'hidden'}>{children}</Box>
        </Box>
    )
}

export default SliderContainer

export const SliderItem = ({ children, width }) => (
    <Box
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        mx={4}
        style={{ width }}
    >
        {children}
    </Box>
)
