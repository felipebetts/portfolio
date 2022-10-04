import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const OrcamentoExpress = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title="Orçamento Express">
            <Container pb={2}>
                <Title from={t('common.works')}>
                    {t('works.orcamentoexpress.title')} <Badge>2021</Badge>
                </Title>

                <WorkImage
                    src="/images/orcamento_express/cover.png"
                    alt="Orçamento Express"
                />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link
                            href="https://orcamento.ibuildconstrutora.com.br/"
                            target="_blank"
                        >
                            Go! <ExternalLinkIcon mx="2px" />
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
                <P>{t('works.orcamentoexpress.text.p1')}</P>
                <WorkImage
                    src="/images/orcamento_express/2.png"
                    alt="Orçamento Express"
                />
                <P>{t('works.orcamentoexpress.text.p2')}</P>
                <WorkImage
                    src="/images/orcamento_express/1.png"
                    alt="Orçamento Express"
                />
                <P>{t('works.orcamentoexpress.text.p3')}</P>
                <WorkImage
                    src="/images/orcamento_express/3.png"
                    alt="Orçamento Express"
                />
                <WorkImage
                    src="/images/orcamento_express/3_mobile.png"
                    alt="Orçamento Express"
                />
                <P>{t('works.orcamentoexpress.text.p4')}</P>
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

export default OrcamentoExpress
