import ScrollText from '../scroll-text'
import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'

const content = [
    'Olá, sou um desenvolvedor de software fullstack!',
    'Apaixonado por inovacao, dedicado ao desenvolvimento de aplicações web fullstack.',
    <>
        As linguagens que eu mais utilizo sao <strong>JavaScript</strong>,{' '}
        <strong>TypeScript</strong> e <strong>Python</strong>
    </>
    // <>
    //     Veja alguns dos meus{' '}
    //     <NextLink href="/works" passHref>
    //         <Link color="inherit" textDecoration="underline">
    //             trabalhos
    //         </Link>
    //     </NextLink>
    // </>
]

const Intro = () => {
    return (
        <>
            <ScrollText texts={content} />
            {/* <Box
                w="full"
                minH="20vh"
                textAlign="center"
                bg="black"
                p={4}
                fontSize={['2xl', '3xl', '4xl']}
            >
                Algumas coisas que eu codei
            </Box> */}
        </>
    )
}

export default Intro
