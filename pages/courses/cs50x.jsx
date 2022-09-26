import {
    Badge,
    Container,
    Link,
    List,
    ListItem,
    Image,
    Flex
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const CS50x = () => {
    const { t } = useTranslation('common')
    return (
        <Layout title="CS50x">
            <Container pb={2}>
                <Title from={t('common.courses')} href="/courses">
                    {t('courses.cs50x.title')} <Badge>2021</Badge>
                </Title>
                <Flex w="full" justify="center" my={8}>
                    <Image
                        src="/images/courses/harvard_logo.png"
                        alt="cs50x_certificate"
                        maxWidth="160px"
                    />
                </Flex>
                <P>{t('courses.cs50x.text.p1')}</P>
                <P>{t('courses.cs50x.text.p2')}</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{t('courses.certificate')}</Meta>
                        <Link
                            href="https://certificates.cs50.io/5e6679ed-cd2f-456a-8832-436eb03b51c1.pdf?size=letter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('courses.cs50x.certificate')}{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://cs50.harvard.edu/x"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            C, Python, SQL, and JavaScript plus CSS and HTML
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
                    src="/images/courses/CS50x_certificate.png"
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

export default CS50x
