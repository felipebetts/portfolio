import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    List,
    ListIcon,
    ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { AddIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NodeAuth = () => {
    return (
        <Layout title="Node Auth">
            <Container pb={2}>
                <Title from="Courses" href="/courses">
                    Node Auth <Badge>2021</Badge>
                </Title>
                <Flex w="full" justify="center" mt={8}>
                    <Image
                        src="/images/courses/alura_logo.png"
                        alt="cs50x_certificate"
                        maxWidth="160px"
                    />
                </Flex>
                <List ml={4} mt={6} mb={8}>
                    <ListItem>
                        <Meta>Certificate 1</Meta>
                        <Link
                            href="https://cursos.alura.com.br/user/felipe-a-betts/course/node-jwt-autenticacao-tokens/certificate"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Official Certificate <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website Course 1</Meta>
                        <Link
                            href="https://cursos.alura.com.br/course/node-jwt-autenticacao-tokens"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Certificate 2</Meta>
                        <Link
                            href="https://cursos.alura.com.br/user/felipe-a-betts/course/nodejs-refresh-tokens-confirmacao-cadastro/certificate"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Official Certificate <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Website Course 2</Meta>
                        <Link
                            href="https://cursos.alura.com.br/course/nodejs-refresh-tokens-confirmacao-cadastro"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Javascript, Node.js, Express, Redis, JWT, and more
                        </span>
                    </ListItem>
                </List>
                <P>
                    These were two sequential courses I took from the brazilian
                    edtech company Alura. Through them, I learned how to
                    implement an auth system for a node.js server, using JWT and
                    Redis. The project was a server for a blog, where users can
                    register, post and comment. During the course, I
                    implemented:
                </P>
                <Accordion allowMultiple my={8}>
                    <AccordionItem>
                        <Heading as="h4">
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    fontWeight="600"
                                    fontSize={17}
                                >
                                    Access token and refresh token
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            Implemented through the creation of an allowlist for
                            the access tokens and a blocklist for the refresh
                            tokens. Both of those were created using Redis, so
                            that it would be readily available when accessed
                            from auth middlewares.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <Heading as="h4">
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    fontWeight="600"
                                    fontSize={17}
                                >
                                    Multiple user roles
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            In this case, only editors can write/delete posts,
                            and everyone can comment. In order to ensure this
                            business rule, I implemented an auth middleware that
                            checked if the user role was valid based on the
                            access token received in the request.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <Heading as="h4">
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    fontWeight="600"
                                    fontSize={17}
                                >
                                    Authenticated routes
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            Some of the routes can only be accessed if you're
                            logged in, like commenting on posts. To enforce
                            this, I used a middleware that checked for the
                            access token on the authorization header as a Bearer
                            token. That token contains info about the user that
                            is used to fetch user data and check whether is
                            valid.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <Heading as="h4">
                            <AccordionButton>
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    fontWeight="600"
                                    fontSize={17}
                                >
                                    User registration confirmation with email
                                    service
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            Using nodemailer, implemented an email verification
                            register, in such a way that the user is only 100%
                            validated after he opens the link with a token sent
                            to his email. This ensures that the user in fact
                            owns that email address.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <WorkImage
                    src="/images/courses/node-auth-certificate-1.png"
                    alt="node_auth_1_certificate"
                />
                <WorkImage
                    src="/images/courses/node-auth-certificate-2.png"
                    alt="node_auth_2_certificate"
                />
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

export default NodeAuth
