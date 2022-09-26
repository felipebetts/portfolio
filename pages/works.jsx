import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPalmDoctor from '../public/images/palmdoctor/cover_palmdoctor.jpg'
import thumbValepay from '../public/images/valepay/login.png'
import thumbOrcamentoExpress from '../public/images/orcamento_express/cover.png'
import Layout from '../components/layout/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Works = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title="Felipe Betts | Works">
            <Container>
                <Heading as="h3" fontSize={20} my={4}>
                    {t('works.title')}
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="valepay"
                            title={t('works.valepay.title')}
                            thumbnail={thumbValepay}
                        >
                            {t('works.valepay.description')}
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="palmdoctor"
                            title={t('works.palmdoctor.title')}
                            thumbnail={thumbPalmDoctor}
                        >
                            {t('works.palmdoctor.description')}
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id="orcamento_express"
                            title={t('works.orcamentoexpress.title')}
                            thumbnail={thumbOrcamentoExpress}
                        >
                            {t('works.orcamentoexpress.description')}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
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

export default Works
