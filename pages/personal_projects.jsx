import {
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

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
                Personal Projects
            </Heading>
            <Section
                delay={0.1}
            >
                <SimpleGrid
                    columns={[1, 2, 2]}
                    gap={6}
                >
                    <Section
                        delay={0.2}
                    >
                        <ProjectGridItem
                            title='NFT Marketplace'
                            thumbnail={thumbX}
                            id='nft_marketplace'
                        />
                    </Section>
                    {/* <Section
                        delay={0.3}
                    >
                        <ProjectGridItem
                            title='NFT Marketplace'
                            thumbnail={thumbX}
                            id='nft_marketplace'
                        />
                    </Section> */}
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default PersonalProjects