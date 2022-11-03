import Image from 'next/image'
import {
    SectionBackground,
    SectionContainer,
    SectionLeft,
    SectionRight
} from './section'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/react'

const Wall = () => {
    return (
        <TileWrapper numOfPages={3}>
            <TileBackground>
                <SectionBackground />
            </TileBackground>
            <TileContent>
                <Tile
                    page={0}
                    renderContent={({ progress }) => (
                        <SectionContainer>
                            <SectionLeft progress={progress}>
                                Veja alguns dos meus{' '}
                                <NextLink href="/works" passHref>
                                    <Link
                                        color="inherit"
                                        textDecoration="underline"
                                    >
                                        trabalhos
                                    </Link>
                                </NextLink>
                            </SectionLeft>
                            <SectionRight progress={progress}>
                                <Image
                                    src="/images/nft_marketplace/1.png"
                                    width={278}
                                    height={96}
                                />
                            </SectionRight>
                        </SectionContainer>
                    )}
                />
            </TileContent>
            <TileContent>
                <Tile
                    page={1}
                    renderContent={({ progress }) => (
                        <SectionContainer>
                            <SectionLeft progress={progress}>
                                Veja alguns dos meus{' '}
                                <NextLink href="/works" passHref>
                                    <Link
                                        color="inherit"
                                        textDecoration="underline"
                                    >
                                        trabalhos
                                    </Link>
                                </NextLink>
                            </SectionLeft>
                            <SectionRight progress={progress}>
                                <Image
                                    src="/images/nft_marketplace/1.png"
                                    width={278}
                                    height={96}
                                />
                            </SectionRight>
                        </SectionContainer>
                    )}
                />
            </TileContent>
            <TileContent>
                <Tile
                    page={2}
                    renderContent={({ progress }) => (
                        <SectionContainer>
                            <SectionLeft progress={progress}>
                                Veja alguns dos meus{' '}
                                <NextLink href="/works" passHref>
                                    <Link
                                        color="inherit"
                                        textDecoration="underline"
                                    >
                                        trabalhos
                                    </Link>
                                </NextLink>
                            </SectionLeft>
                            <SectionRight progress={progress}>
                                <Image
                                    src="/images/nft_marketplace/1.png"
                                    width={278}
                                    height={96}
                                />
                            </SectionRight>
                        </SectionContainer>
                    )}
                />
            </TileContent>
        </TileWrapper>
    )
}

export default Wall
