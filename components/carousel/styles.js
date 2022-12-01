import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const CarouselViewport = styled(Box)`
    width: 100%;
    overflow: hidden;

    /* box-shadow: 0 20px 0px 0px ${props => props.bg || 'black'} inset,
        0 -20px 0px 0px ${props => props.bg || 'black'} inset,
        24px 0 15px 8px ${'black'} inset, -24px 0 15px 8px ${'black'} inset; // 0 0 -15px 15px black inset; */

    &:global(.is-draggable) {
        cursor: move;
        cursor: grab;
    }

    &:global(.is-dragging) {
        cursor: grabbing;
    }
`

//

export const CarouselContainer = styled.div`
    display: flex;

    user-select: none;
`

export const CarouselItemContainer = styled.div`
    position: relative;
    flex: 0 0 auto;
    max-width: min(70%, 620px);
    opacity: 0.4;
    transition: opacity 0.4s;

    ${props => (props.active ? 'opacity: 1;' : '')}
`
