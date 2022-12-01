import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState, createContext } from 'react'

import { CarouselContainer, CarouselViewport } from './styles'
import { useColorModeValue } from '@chakra-ui/react'

export const CarouselContext = createContext({
    embla: undefined,
    selectedIndex: -1
})

const Carousel = ({ children, ...props }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [viewportRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            skipSnaps: false
        },
        [Autoplay()]
    )
    // const carouselBg = useColorModeValue('#f0e7db', '#202023')

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, selectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <CarouselContext.Provider
            value={{
                embla: emblaApi,
                selectedIndex
            }}
        >
            <CarouselViewport ref={viewportRef} {...props}>
                <CarouselContainer>{children}</CarouselContainer>
            </CarouselViewport>
        </CarouselContext.Provider>
    )
}

export default Carousel
