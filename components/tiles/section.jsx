import { Box, Link, Grid } from '@chakra-ui/react'
import NextLink from 'next/link'

export const SectionContainer = ({ children }) => (
    <Grid
        templateColumns={{ sm: '1fr', lg: 'repeat(2, 1fr)' }}
        w="full"
        minH="100vh"
    >
        {children}
    </Grid>
)

export const SectionBackground = () => (
    <Grid
        templateColumns={{ sm: '1fr', lg: 'repeat(2, 1fr)' }}
        w="full"
        minH="100vh"
        top="0"
        position="sticky"
    >
        <Box bg="black" h={{ sm: '30vh', lg: 'auto' }}></Box>
        <Box bg="white" h="70vh" minH={{ lg: '100vh' }}></Box>
    </Grid>
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
            overflow="hidden"
            fontSize={{ sm: '3xl', lg: '4xl' }}
            h={{ sm: '30vh', lg: 'auto' }}
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
            alignItems="center"
            style={{
                transform: `translateY(${translateY}px)`
            }}
        >
            <Box
                w="full"
                maxW="container.md"
                pt={{ sm: 10, lg: 0 }}
                px={{ sm: 10, md: 0 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {children}
            </Box>
        </Box>
    )
}

export const SectionLink = ({ children, href }) => (
    <NextLink href={href} passHref>
        <Link color="inherit">{children}</Link>
    </NextLink>
)
