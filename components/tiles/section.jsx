import { Box, Link, SimpleGrid } from '@chakra-ui/react'
import NextLink from 'next/link'

export const SectionContainer = ({ children }) => (
    <SimpleGrid columns={[1, 1, 1, 2]} w="full" minH="100vh">
        {children}
    </SimpleGrid>
)

export const SectionBackground = () => (
    <SimpleGrid
        columns={[1, 1, 1, 2]}
        w="full"
        minH="100vh"
        top={0}
        position="sticky"
    >
        <Box bg="black" h={['30vh', , , 'auto']}></Box>
        <Box bg="white" h={['70vh', , , '100vh']}></Box>
    </SimpleGrid>
)

export const SectionLeft = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) {
        translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    }

    return (
        <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            fontSize={['3xl', , '4xl']}
            h={['30vh', , 'auto']}
            style={{
                transform: `translateY(${translateY}px)`
            }}
        >
            <Box lineHeight="2.5rem">{children}</Box>
        </Box>
    )
}

export const SectionRight = ({ children, progress }) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)

    return (
        <Box
            display="flex"
            flex="1"
            justifyContent="center"
            h="100vh"
            alignItems={[, , 'center']}
        >
            {children}
        </Box>
    )
}

export const SectionLink = ({ children, href }) => (
    <NextLink href={href} passHref>
        <Link color="inherit">{children}</Link>
    </NextLink>
)
