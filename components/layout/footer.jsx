import {
    Box,
    Button,
    Icon,
    Link,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import { IoLogoLinkedin, IoLogoGithub, IoMail } from 'react-icons/io5'
import NextLink from 'next/link'

const Footer = () => {
    return (
        <Box
            as="footer"
            w="full"
            bg={useColorModeValue('#ffffff40', '#20202380')}
        >
            footer
            <List>
                <ListItem>
                    <Link href="https://github.com/felipebetts" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoGithub} />}
                            // rightIcon={<ExternalLinkIcon />}
                        >
                            Github
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        href="https://www.linkedin.com/in/felipe-betts/"
                        target="_blank"
                    >
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoLinkedin} />}
                        >
                            Linkedin
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <NextLink href="/email" passHref>
                        <Link>
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoMail} />}
                            >
                                Email
                            </Button>
                        </Link>
                    </NextLink>
                </ListItem>
            </List>
        </Box>
    )
}

export default Footer
