import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import { IoLogoLinkedin, IoLogoGithub, IoMail } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '../components/layout/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import CoinFlippingImage from '../components/coin-flipping-image'
import Skills from '../components/landing/skills'

const Page = props => {
    const { t } = useTranslation('common')

    return (
        <Layout>
            <Container pb={2}>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    align="center"
                    mb={6}
                    mt={2}
                >
                    {t('home.greetings')}
                </Box>

                <Box
                    display={{ md: 'flex' }}
                    justifyContent={{ md: 'space-between' }}
                >
                    <Box marginBottom={{ base: 0, md: 8 }}>
                        <Heading as="h1" variant="page-title">
                            Felipe Betts
                        </Heading>
                        <p>{t('home.jobtitle')}</p>
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
                        {t('home.work.title')}
                    </Heading>
                    <Paragraph>{t('home.work.description')}</Paragraph>
                    <Box align="center" mt={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                {t('home.portfolio')}
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1998</BioYear> {t('home.bio.1998')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear> {t('home.bio.2020')}
                    </BioSection>
                    <BioSection>
                        <BioYear>{t('home.bio.2021title')}</BioYear>{' '}
                        {t('home.bio.2021label')}
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Skills
                    </Heading>
                    <Paragraph>
                        Utilizo muitas ferramentas e tecnologias para
                        desenvolver projetos de software. Minha stack favorita
                        eh a PERN - Postgres, Express, React e Node. Tenho
                        utilizado bastante o Next.js no frontend aproveitando
                        suas melhorias em performance.
                    </Paragraph>
                    <Skills />
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        {t('home.courses.title')}
                    </Heading>
                    <Paragraph>{t('home.courses.description')}</Paragraph>
                    <Flex my={4} align="center" justify="space-evenly">
                        <Image
                            src="/images/courses/harvard_logo.png"
                            alt="harvard"
                            className="grid-item-thumbnail"
                            placeholder="blur"
                            maxWidth="140px"
                        />
                        <Image
                            src="/images/courses/alura_logo.png"
                            alt="alura"
                            className="grid-item-thumbnail"
                            placeholder="blur"
                            maxWidth="150px"
                        />
                    </Flex>

                    <Box align="center" my={4}>
                        <NextLink href="/courses">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                {t('home.courses.title')}
                            </Button>
                        </NextLink>
                    </Box>
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

                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        {t('home.contact')}
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
                </Section>
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}

export default Page
