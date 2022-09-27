import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Work = () => {
    return (
        <Layout title="Example">
            <Container>
                <Title>
                    Example <Badge>2022</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eu sollicitudin massa, nec gravida sapien. Vestibulum
                    volutpat dui et euismod imperdiet. Donec elementum porta
                    nulla nec porttitor. Quisque rhoncus ligula nec commodo
                    semper. Praesent euismod cursus tellus vitae tempor. Aenean
                    id ultrices nunc. Maecenas dignissim, ligula nec feugiat
                    venenatis, neque leo finibus ex, a vestibulum tellus tellus
                    vel purus. Sed sagittis quam ex, id rutrum metus fermentum
                    ut. In hac habitasse platea dictumst. Nullam fermentum nulla
                    a sollicitudin varius. Aliquam felis odio, tempus vel libero
                    in, vulputate aliquam elit. Nam arcu nunc, ultricies sed
                    nisl vel, ullamcorper luctus sapien. Nulla suscipit, lorem
                    at fringilla condimentum, leo diam iaculis mi, sed rhoncus
                    nulla sem sit amet risus. Vestibulum euismod ac nibh eget
                    bibendum. Suspendisse potenti. Quisque aliquet pulvinar elit
                    ut auctor{' '}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="/works/example#example">
                            www.example.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Next.js, Styled Components</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="/works/example#example">
                            A post from my blog about this project{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/valepay/1.jpg" alt="Valepay" />
                <WorkImage src="/images/valepay/2.jpg" alt="Valepay" />
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

export default Work
