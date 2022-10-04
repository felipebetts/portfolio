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
import { useTranslation } from 'next-i18next'

const NodeAuth = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title="Node Auth">
            <Container pb={2}>
                <Title from={t('courses.title')} href="/courses">
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
                        <Meta>{t('courses.certificate')} 1</Meta>
                        <Link
                            href="https://cursos.alura.com.br/user/felipe-a-betts/course/node-jwt-autenticacao-tokens/certificate"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('courses.node-auth.certificate')}{' '}
                            <ExternalLinkIcon mx="2px" />
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
                        <Meta>{t('courses.certificate')} 2</Meta>
                        <Link
                            href="https://cursos.alura.com.br/user/felipe-a-betts/course/nodejs-refresh-tokens-confirmacao-cadastro/certificate"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('courses.node-auth.certificate')}{' '}
                            <ExternalLinkIcon mx="2px" />
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
                        <span>{t('courses.node-auth.stack')}</span>
                    </ListItem>
                </List>
                <P>{t('courses.node-auth.text.p1')}</P>
                <P>{t('courses.node-auth.text.p2')}</P>
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
                                    {t('courses.node-auth.text.a1.title')}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            {t('courses.node-auth.text.a1.text')}
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
                                    {t('courses.node-auth.text.a2.title')}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            {t('courses.node-auth.text.a2.text')}
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
                                    {t('courses.node-auth.text.a3.title')}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            {t('courses.node-auth.text.a3.text')}
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
                                    {t('courses.node-auth.text.a4.title')}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                            {t('courses.node-auth.text.a4.text')}
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
