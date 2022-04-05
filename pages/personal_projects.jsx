import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbX from '../public/images/valepay/1.jpg'

const PersonalProjects = () => (
    <Layout
        title='Personal Projects'
    >
        <Container>
            <Heading
                as='h4'
                fontSize={20}
                mb={4}
            >
                Projects
            </Heading>
            <Section
                delay={0.1}
            >
                <SimpleGrid
                    columns={[1, 2, 2]}
                    gap={6}
                >
                    <GridItem
                        title='Exemplo de projeto'
                        thumbnail={thumbX}
                        href='/personal_projects/#'
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default PersonalProjects