import { useCallback } from 'react'
import { forwardRef } from 'react'
import { useContext } from 'react'
import { CarouselContext } from '.'
import { CarouselItemContainer } from './styles'

const CarouselItem = ({ children, index }) => {
    const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
    const isActive = selectedIndex === index

    const handleClick = useCallback(() => {
        if (emblaApi === undefined) return
        emblaApi.scrollTo(index)
    }, [emblaApi, index])

    return (
        <CarouselItemContainer onClick={handleClick} active={isActive}>
            {children}
        </CarouselItemContainer>
    )
}

export default CarouselItem
