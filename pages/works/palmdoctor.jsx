import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const PalmDoctor = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title="Works | PalmDoctor">
            <Container pb={2}>
                <Title from={t('common.works')}>
                    {t('works.palmdoctor.title')} <Badge>2021</Badge>
                </Title>
                <WorkImage
                    src="/images/palmdoctor/cover_palmdoctor.jpg"
                    alt="Valepay"
                />
                <P>{t('works.palmdoctor.text.p1')}</P>
                <P>{t('works.palmdoctor.text.p2')}</P>
                <P>{t('works.palmdoctor.text.p3')}</P>
                <P>{t('works.palmdoctor.text.p4')}</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Landing Page</Meta>
                        <Link href="https://palmdoctor.com.br/" target="_blank">
                            https://palmdoctor.com.br/{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js, React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Other tecnologies</Meta>
                        <span>Axios, Styled Components</span>
                    </ListItem>
                </List>
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

export default PalmDoctor
