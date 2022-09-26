import {
    Badge,
    Container,
    Flex,
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
                <Flex w="full" justify="center" my={8}>
                    <Image
                        src="/images/courses/alura_logo.png"
                        alt="cs50x_certificate"
                        maxWidth="160px"
                    />
                </Flex>
                <P>
                    These were two sequential courses I took from the brazilian
                    edtech company Alura. Through them, I learned how to
                    implement an auth system for a node.js server, using JWT.
                    During the course, I implemented:
                </P>
                <List my={4}>
                    <ListItem>
                        <ListIcon>
                            <AddIcon />
                        </ListIcon>
                        Multiple user roles
                    </ListItem>
                    <ListItem>
                        <ListIcon>
                            <AddIcon />
                        </ListIcon>
                        Authenticated routes
                    </ListItem>
                    <ListItem>
                        <ListIcon>
                            <AddIcon />
                        </ListIcon>
                        Access token and refresh token
                    </ListItem>
                    <ListItem>
                        <ListIcon>
                            <AddIcon />
                        </ListIcon>
                        User registration confirmation with email service
                    </ListItem>
                </List>
                <List ml={4} my={6}>
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
                        <span>Javascript, Node.js, Express, JWT, and more</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="/works/example#example">
                            A post from my blog about this project{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>
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
