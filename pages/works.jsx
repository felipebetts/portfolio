import {
    Container,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPalmDoctor from '../public/images/palmdoctor/cover_palmdoctor.jpg'
import thumbValepay from '../public/images/valepay/login.png'
import thumbOrcamentoExpress from '../public/images/orcamento_express/cover.png'
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
                            id='valepay'
                            title='Valepay'
                            thumbnail={thumbValepay}
                        >
                            Digital bank
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id='palmdoctor'
                            title='PalmDoctor'
                            thumbnail={thumbPalmDoctor}
                        >
                            Health Tech Platform
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id='orcamento_express'
                            title='Orçamento Express'
                            thumbnail={thumbOrcamentoExpress}
                        >
                            House Construction Budget Simulator
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works