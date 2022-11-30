import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layout/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useTranslation } from 'next-i18next'

const Donations = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title={t('works.donations.title')}>
            <Container pb={2}>
                <Title>
                    {t('works.donations.title')} <Badge>2021</Badge>
                </Title>
                <WorkImage src="/images/ajudapet/thumb.png" alt="ajudaPet" />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://doe.ajuda.pet/" target="_blank">
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Frontend Stack</Meta>
                        <span>React, Next.js, Material UI</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend Stack</Meta>
                        <span>Node.js, Express, MongoDB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>APIs</Meta>
                        <span>Mercado Pago, SMS Token</span>
                    </ListItem>
                </List>
                <P>{t('works.donations.text.p1')}</P>
                <WorkImage src="/images/ajudapet/1.png" alt="ajudaPet" />
                <P>{t('works.donations.text.p2')}</P>
                <P>{t('works.donations.text.p3')}</P>
                <WorkImage src="/images/ajudapet/3.png" alt="ajudaPet" />
                <WorkImage src="/images/ajudapet/4.png" alt="ajudaPet" />
                <P>
                    <strong>
                        <i>**Obs** </i>
                    </strong>
                    {t('works.donations.text.p4')}
                </P>
                <P>{t('works.donations.text.p5')}</P>
                <WorkImage src="/images/ajudapet/5.png" alt="ajudaPet" />
                <P>{t('works.donations.text.p6')}</P>
                <WorkImage src="/images/ajudapet/6.png" alt="ajudaPet" />
                <P>{t('works.donations.text.p7')}</P>
                <WorkImage src="/images/ajudapet/7.png" alt="ajudaPet" />
                <WorkImage src="/images/ajudapet/8.png" alt="ajudaPet" />
                <WorkImage src="/images/ajudapet/9.png" alt="ajudaPet" />
                {/* <P>
                    {t('works.donations.text.p8')}{' '}
                    <Link href="https://doe.ajuda.pet/" target="_blank">
                        {t('works.donations.text.here')}
                    </Link>
                </P> */}
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

export default Donations
