import { Box, useColorModeValue } from '@chakra-ui/react'

const Card = ({ children, maxW, p = 6, mt = 6 }) => {
    const cardBackground = useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')
    const boxShadow = useColorModeValue(
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important',
        'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px !important'
    )
    return (
        <Box
            w="100%"
            maxW={maxW}
            // borderWidth="1px"
            borderRadius="lg"
            bg={cardBackground}
            p={p}
            mt={mt}
            mx="auto"
            shadow={boxShadow}
        >
            {children}
        </Box>
    )
}

export default Card
