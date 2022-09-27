import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import thumbNFTMarketplace from '../public/images/nft_marketplace/1.png'

const PersonalProjects = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title={t('projects.title')}>
            <Container>
                <Heading as="h4" fontSize={20} mb={4}>
                    {t('projects.title')}
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <Section delay={0.2}>
                            <ProjectGridItem
                                title={t('projects.nftmarketplace.title')}
                                thumbnail={thumbNFTMarketplace}
                                id="nft_marketplace"
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
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}

export default PersonalProjects
