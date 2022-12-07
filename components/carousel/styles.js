import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const CarouselViewport = styled(Box)`
    width: 100%;
    overflow: hidden;

    &:global(.is-draggable) {
        cursor: move;
        cursor: grab;
    }

    &:global(.is-dragging) {
        cursor: grabbing;
    }
`

export const CarouselContainer = styled.div`
    display: flex;

    user-select: none;
`

export const CarouselItemContainer = styled.div`
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    max-width: min(70%, 620px);
    opacity: 0.4;
    transition: opacity 0.4s;

    ${props => (props.active ? 'opacity: 1;' : '')}
`
