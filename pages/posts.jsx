import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbX from '../public/images/valepay/1.jpg'

const Posts = () => (
    <Layout
        title='Posts'
    >
        <Container>
            <Heading
                as='h4'
                fontSize={20}
                mb={4}
            >
                Popular posts
            </Heading>
            <Section
                delay={0.1}
            >
                <SimpleGrid
                    columns={[1, 2, 2]}
                    gap={6}
                >
                    <GridItem
                        title='Exemplo de post'
                        thumbnail={thumbX}
                        href='/posts/#'
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts