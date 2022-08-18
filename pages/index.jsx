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
} from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import CoinFlippingImage from '../components/coin-flipping-image'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    align="center"
                    mb={6}
                    mt={2}
                >
                    Hello, I&apos;m a front-end developer based in Brazil!
                </Box>

                <Box
                    display={{ md: 'flex' }}
                    justifyContent={{ md: 'space-between' }}
                >
                    <Box marginBottom={{ base: 0, md: 8 }}>
                        <Heading as="h1" variant="page-title">
                            Felipe Betts
                        </Heading>
                        <p>Web-wizarding since 2020</p>
                    </Box>
                    <Box
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        mx={{ base: 'auto', md: 0 }}
                        display={{ base: 'flex' }}
                        justifyContent="center"
                        position="relative"
                        height={{ base: '120px', md: 'auto' }}
                        width="100px"
                    >
                        <CoinFlippingImage />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Bright and dedicated Software Developer experienced in
                        developing Full-Stack web applications. Worked with
                        different technologies solving problems of variated
                        complexity, including React, Next.js, and Node.js. Team
                        playing, fast learning, and highly creative skills,
                        striving for the best in each task undertaken.
                        Proficient in Software Engineering, Web Development and
                        Design, Database Design and Management.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
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

                {/* <Section
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
                </Section> */}

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Contact
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://github.com/felipebetts"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @felipebetts
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
