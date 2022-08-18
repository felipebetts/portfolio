import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage, Meta, ProjectTitle } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const NFTMarketplace = () => {
    return (
        <>
            <Layout
                title="NFT Marketplace"
                description="A NFT Marketplace personal project. I built this while studying blockchain development. Smart contracts written in Solidity."
            >
                <Container>
                    <ProjectTitle>NFT Marketplace</ProjectTitle>
                    <WorkImage
                        src="/images/nft_marketplace/1.png"
                        alt="Valepay"
                    />
                    <P>
                        Tokenizei is a Fullstack Marketplace of NFTs, built
                        using Next.js on the Ethereum network with Polygon*.
                        Smart contracts were made in solidity and compiled with
                        hardhat. The cryptocurrency used in the transactions is
                        from the Polygon network (MATIC), and the dApp interacts
                        with the MetaMask wallet.
                    </P>
                    <P>
                        This project was based on a tutorial. During the
                        construction of the project, I was able to develop
                        several web 3.0 concepts and create dApps. I explored
                        Solidity for the first time, creating the contracts and
                        interacting with the blockchain. I learned a lot in this
                        development, hope you like it! *The network currently
                        used is still the test network, the Mumbai Testnet. The
                        Polygon Mainnet network is not yet being used
                    </P>
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

export default NFTMarketplace
