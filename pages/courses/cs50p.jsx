import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const CS50P = () => {
    return (
        <Layout title="CS50P">
            <Container pb={2}>
                <Title from="Courses" href="/courses">
                    CS50P <Badge>2022</Badge>
                </Title>
                <P>
                    An introduction to programming using a language called
                    Python. Learn how to read and write code as well as how to
                    test and “debug” it. Designed for students with or without
                    prior programming experience who&apos;d like to learn Python
                    specifically.
                </P>
                <P>
                    Learn about functions, arguments, and return values (oh
                    my!); variables and types; conditionals and Boolean
                    expressions; and loops. Learn how to handle exceptions, find
                    and fix bugs, and write unit tests; use third-party
                    libraries; validate and extract data with regular
                    expressions; model real-world entities with classes,
                    objects, methods, and properties; and read and write files.
                    Hands-on opportunities for lots of practice. Exercises
                    inspired by real-world programming problems.
                </P>
                <List ml={4} my={6}>
                    <ListItem>
                        <Meta>Certificate</Meta>
                        <Link
                            href="https://certificates.cs50.io/cfb33cc2-855a-4599-885d-642359f8f34a.pdf?size=letter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Official Harvard Certificate{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://cs50.harvard.edu/python"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Python, Regular Expressions and a load of libs
                        </span>
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
                    src="/images/courses/CS50P_certificate.png"
                    alt="cs50x_certificate"
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

export default CS50P
