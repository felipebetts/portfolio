import {
    Badge,
    Container,
    Link,
    List,
    ListItem,
    Image,
    Flex
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const CS50x = () => {
    return (
        <Layout title="CS50x">
            <Container pb={2}>
                <Title from="Courses" href="/courses">
                    CS50x <Badge>2021</Badge>
                </Title>
                <Flex w="full" justify="center" my={8}>
                    <Image
                        src="/images/courses/harvard_logo.png"
                        alt="cs50x_certificate"
                        maxWidth="160px"
                    />
                </Flex>
                <P>
                    This is CS50x , Harvard University&apos;s introduction to
                    the intellectual enterprises of computer science and the art
                    of programming for majors and non-majors alike, with or
                    without prior programming experience.
                </P>
                <P>
                    Topics include abstraction, algorithms, data structures,
                    encapsulation, resource management, security, software
                    engineering, and web development. Languages include C,
                    Python, SQL, and JavaScript plus CSS and HTML. Problem sets
                    inspired by real-world domains of biology, cryptography,
                    finance, forensics, and gaming. The on-campus version of
                    CS50x , CS50, is Harvard's largest course.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Certificate</Meta>
                        <Link
                            href="https://certificates.cs50.io/5e6679ed-cd2f-456a-8832-436eb03b51c1.pdf?size=letter"
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
                            href="https://cs50.harvard.edu/x"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            C, Python, SQL, and JavaScript plus CSS and HTML
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
                    src="/images/courses/CS50x_certificate.png"
                    alt="cs50x_certificate"
                />
            </Container>
        </Layout>
    )
}

export default CS50x
