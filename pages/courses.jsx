import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GeneralGridItem } from '../components/grid-item'
import Layout from '../components/layout/article'
import Section from '../components/section'
import cs50xThumb from '../public/images/courses/CS50x_certificate.png'
import cs50PThumb from '../public/images/courses/CS50P_certificate.png'
import this_is_cs50 from '../public/images/courses/this_is_cs50.png'
import harvard_logo from '../public/images/courses/harvard_logo.png'
import alura_logo from '../public/images/courses/alura_logo.png'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Courses = () => {
    const { t } = useTranslation('common')
    return (
        <Layout
            title={t('courses.title')}
            description="During my journey as a software developer, I had to
            study a lot to learn all the skills I have know. These
            are some of the most relevant courses I took"
        >
            <Container>
                <Heading as="h3" fontSize={20} my={4}>
                    {t('courses.title')}
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <GeneralGridItem
                            id="cs50x"
                            href="/courses/cs50x"
                            title={t('courses.cs50x.title')}
                            thumbnail={harvard_logo}
                        >
                            {t('courses.cs50x.description')}
                        </GeneralGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <GeneralGridItem
                            id="cs50p"
                            title={t('courses.cs50p.title')}
                            href="/courses/cs50p"
                            thumbnail={harvard_logo}
                        >
                            {t('courses.cs50p.description')}
                        </GeneralGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <GeneralGridItem
                            id="cs50p"
                            title={t('courses.node-auth.title')}
                            href="/courses/node-auth"
                            thumbnail={alura_logo}
                        >
                            {t('courses.node-auth.description')}
                        </GeneralGridItem>
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

export default Courses
