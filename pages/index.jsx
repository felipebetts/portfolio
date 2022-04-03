import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Image,
    Link,
    List,
    ListItem,
    SimpleGrid,
    useColorModeValue
} from "@chakra-ui/react"
import Layout from '../components/layout/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from "../components/grid-item"
import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoDiscord,
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius='lg'
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    align='center'
                    mb={6}
                >
                    Hello, I&apos;m a front-end developer based in Spain!
                </Box>

                <Box
                    display={{ md: 'flex' }}
                >
                    <Box flexGrow={1}>
                        <Heading as='h2' variant='page-title'>
                            Felipe Betts
                        </Heading>
                        <p>
                            Web-wizarding since 2020
                        </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align='center'
                    >
                        <Image
                            borderColor='whiteAlpha.800'
                            borderWidth={2}
                            borderStyle='solid'
                            maxWidth='100px'
                            display='inline-block'
                            borderRadius='full'
                            src={'https://github.com/felipebetts.png'}
                            alt='Profile Image'
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading
                        as='h3'
                        variant='section-title'
                    >
                        Work
                    </Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu sollicitudin massa, nec gravida sapien. Vestibulum volutpat dui et euismod imperdiet.
                        Donec elementum porta nulla nec porttitor.
                        Quisque rhoncus ligula nec commodo semper.
                        Praesent euismod cursus tellus vitae tempor.
                        Aenean id ultrices nunc. Maecenas dignissim,
                        ligula nec feugiat venenatis, neque leo finibus ex,
                        a vestibulum tellus tellus vel purus.
                        Sed sagittis quam ex, id rutrum metus fermentum ut.
                        In hac habitasse platea dictumst.
                        Nullam fermentum nulla a sollicitudin varius.
                        Aliquam felis odio, tempus vel libero in, vulputate aliquam elit.
                        Nam arcu nunc, ultricies sed nisl vel, ullamcorper luctus sapien.
                        Nulla suscipit, lorem at fringilla condimentum, leo diam iaculis mi,
                        sed rhoncus nulla sem sit amet risus.
                        Vestibulum euismod ac nibh eget bibendum.
                        Suspendisse potenti. Quisque aliquet pulvinar elit ut auctor{' '}
                        <NextLink href='/works/exemplo'>
                            <Link>
                                Exemplo
                            </Link>
                        </NextLink>.
                    </Paragraph>
                    <Box
                        align='center'
                        my={4}
                    >
                        <NextLink href='/works'>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme='teal'
                            >
                                Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section
                    delay={0.2}
                >
                    <Heading
                        as='h3'
                        variant='section-title'
                    >
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1998</BioYear> Born in Rio de Janeiro, Brazil.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear> Started programming.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 - Now</BioYear> Freelancing web projects.
                    </BioSection>
                </Section>

                <Section
                    delay={0.3}
                >
                    <Heading
                        as='h3'
                        variant='section-title'
                    >
                        I ♥
                    </Heading>
                    <Paragraph>
                        This, this and that.
                    </Paragraph>
                </Section>

                <Section
                    delay={0.3}
                >
                    <Heading
                        as='h3'
                        variant='section-title'
                    >
                        Contact
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href='https://github.com/felipebetts'
                                target='_blank'
                            >
                                <Button
                                    variant='ghost'
                                    colorScheme='teal'
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @felipebetts
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href='https://www.linkedin.com/in/felipe-betts/'
                                target='_blank'
                            >
                                <Button
                                    variant='ghost'
                                    colorScheme='teal'
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    @felipebetts
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page