import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbExample from '../public/images/octopus.png'
import Layout from '../components/layout/article'


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading
                    as='h3'
                    fontSize={20}
                    my={4}
                >
                    Works
                </Heading>

                <SimpleGrid
                    columns={[1, 1, 2]}
                    gap={6}
                >
                    <Section>
                        <WorkGridItem
                            id='example'
                            title='Exemplo'
                            thumbnail={thumbExample}
                        >
                            Apenas um exemplo de trabalho
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id='example'
                            title='Exemplo'
                            thumbnail={thumbExample}
                        >
                            Apenas um exemplo de trabalho
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id='example'
                            title='Exemplo'
                            thumbnail={thumbExample}
                        >
                            Apenas um exemplo de trabalho
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id='example'
                            title='Exemplo'
                            thumbnail={thumbExample}
                        >
                            Apenas um exemplo de trabalho
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works