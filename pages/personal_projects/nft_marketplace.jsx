import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage, Meta, Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const NFTMarketplace = () => {
    const { t } = useTranslation('common')
    return (
        <>
            <Layout
                title="NFT Marketplace"
                description="A NFT Marketplace personal project. I built this while studying blockchain development. Smart contracts written in Solidity."
            >
                <Container>
                    <Title from={t('common.personal-projects')}>
                        {t('projects.nftmarketplace.title')}
                    </Title>
                    <WorkImage
                        src="/images/nft_marketplace/1.png"
                        alt="Valepay"
                    />
                    <P>{t('projects.nftmarketplace.text.p1')}</P>
                    <P>{t('projects.nftmarketplace.text.p1')}</P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>LINK</Meta>
                            <Link href="https://tokenizei.vercel.app/">
                                https://tokenizei.vercel.app/{' '}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source</Meta>
                            <Link href="https://github.com/felipebetts/nft-marketplace">
                                Github <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>Next.js, Solidity</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Other tecnologies</Meta>
                            <span>Hardhat, Styled Components</span>
                        </ListItem>
                    </List>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}

export default NFTMarketplace
