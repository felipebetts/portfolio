import { Box, Center } from '@chakra-ui/react'
import Image from 'next/image'

import Carousel from '../carousel'
import CarouselItem from '../carousel/carousel-item'

// calc(100% - 16px)

const ProjectImage = ({ src, alt }) => (
    <Center px={2} h="200px" w="full">
        <Box
            w="full"
            h="full"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
        >
            <Image
                src={src}
                alt={alt}
                layout="fill"
                style={{ margin: '8px 0' }}
            />
        </Box>
    </Center>
)

const projects = [
    {
        src: '/images/valepay/1.jpg',
        alt: 'valepay'
    },
    {
        src: '/images/ajudapet/thumb.png',
        alt: 'ajudapet'
    },
    {
        src: '/images/orcamento_express/1.png',
        alt: 'orcamento-express-1'
    },
    {
        src: '/images/valepay/2.jpg',
        alt: 'valepay'
    },
    {
        src: '/images/orcamento_express/2.png',
        alt: 'orcamento-express-2'
    },
    {
        src: '/images/palmdoctor/cover_palmdoctor.jpg',
        alt: 'palmdoctor'
    },
    {
        src: '/images/ajudapet/4.png',
        alt: 'ajudapet'
    },
    {
        src: '/images/orcamento_express/3.png',
        alt: 'orcamento-express-3'
    }
]

const ProjectsCarousel = () => {
    return (
        <Carousel my={6}>
            {projects.map((project, i) => (
                <CarouselItem index={i} key={`${project.alt}_${i}`}>
                    <ProjectImage src={project.src} alt={project.alt} />
                </CarouselItem>
            ))}
        </Carousel>
    )
}

export default ProjectsCarousel
