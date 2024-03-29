import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children, from = 'Works', href = '/works' }) => (
    <Box>
        <NextLink href={href}>
            <Link>{from}</Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const ProjectTitle = ({ children }) => (
    <Box>
        <NextLink href="/personal_projects">
            <Link>Personal Projects</Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} my={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)
