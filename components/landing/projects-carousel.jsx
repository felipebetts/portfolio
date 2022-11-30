import { Box, Center, Image } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { SizeContext } from '../../utils/size-observer'

import Carousel from '../carousel'
import CarouselItem from '../carousel/carousel-item'

const ProjectImage = ({ src, alt }) => (
    <Center px={2} w="full" maxW="517.5px">
        <Image
            borderRadius="lg"
            w="full"
            // maxH
            src={src}
            alt={alt}
            my={4}
        />
    </Center>
)

const projects = [
    {
        src: '/images/valepay/1.jpg',
        alt: 'valepay-1'
    },
    {
        src: '/images/ajudapet/thumb.png',
        alt: 'ajudapet-thumb'
    },
    {
        src: '/images/orcamento_express/1.png',
        alt: 'orcamento-express-1'
    },
    {
        src: '/images/valepay/2.jpg',
        alt: 'valepay-2'
    },
    {
        src: '/images/orcamento_express/2.png',
        alt: 'orcamento-express-2'
    },
    {
        src: '/images/palmdoctor/cover_palmdoctor.jpg',
        alt: 'palmdoctor-cover'
    },
    {
        src: '/images/ajudapet/4.png',
        alt: 'ajudapet-4'
    },
    {
        src: '/images/orcamento_express/3.png',
        alt: 'orcamento-express-3'
    }
]

const ProjectsCarousel = () => {
    return (
        <Carousel my={6} maxW="container.lg" w="full">
            {projects.map((project, i) => (
                <CarouselItem index={i} key={project.alt}>
                    <ProjectImage src={project.src} alt={project.alt} />
                </CarouselItem>
            ))}
        </Carousel>
    )
}

export default ProjectsCarousel

// const { innerWidth } = useContext(SizeContext)
//     const carouselRef = useRef()
//     const carouselItemRef = useRef()

//     const left =
//         innerWidth && carouselRef.current
//             ? Math.min((517.5 - innerWidth) / 2, -16)
//             : -16

//     const height = carouselRef.current ? carouselRef.current.clientHeight : 280

//     <Box
//             position="relative"
//             w="full"
//             h={`${height}px`}
//             maxH="280px"
//             // overflow="hidden"
//         >
//             <Box
//                 ref={carouselRef}
//                 position="absolute"
//                 minW="100vw"
//                 left={`${left}px`}
//                 // px="auto"
//                 display="flex"
//                 justifyContent="center"
//             ></Box>
//         </Box>
