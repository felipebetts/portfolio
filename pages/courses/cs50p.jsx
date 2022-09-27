import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const CS50P = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title="CS50P">
            <Container pb={2}>
                <Title from={t('common.courses')} href="/courses">
                    {t('courses.cs50p.title')} <Badge>2022</Badge>
                </Title>
                <P>{t('courses.cs50p.text.p1')}</P>
                <P>{t('courses.cs50p.text.p2')}</P>
                <List ml={4} my={6}>
                    <ListItem>
                        <Meta>{t('courses.certificate')}</Meta>
                        <Link
                            href="https://certificates.cs50.io/cfb33cc2-855a-4599-885d-642359f8f34a.pdf?size=letter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('courses.cs50p.certificate')}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://cs50.harvard.edu/python"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Python, Regular Expressions and a load of libs
                        </span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="/works/example#example">
                            A post from my blog about this project{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>
                <WorkImage
                    src="/images/courses/CS50P_certificate.png"
                    alt="cs50x_certificate"
                />
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

export default CS50P
