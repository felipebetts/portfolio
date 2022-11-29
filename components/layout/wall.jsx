// import Image from 'next/image'
import {
    SectionBackground,
    SectionContainer,
    SectionLeft,
    SectionRight
} from '../tiles/section'
import { Tile, TileBackground, TileContent, TileWrapper } from '../tiles/tile'
import NextLink from 'next/link'
import { Box, Flex, Link, Stack, Image } from '@chakra-ui/react'

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
                                <Box h="full">
                                    <div>Veja alguns dos meus </div>
                                    <NextLink href="/works" passHref>
                                        <Link
                                            color="inherit"
                                            textDecoration="underline"
                                        >
                                            trabalhos
                                        </Link>
                                    </NextLink>
                                </Box>
                            </SectionLeft>
                            <SectionRight progress={progress}>
                                <Box h="full" w="full">
                                    <Image
                                        src="/images/valepay/1.jpg"
                                        width={278}
                                        height={128}
                                        borderRadius={4}
                                        my="auto"
                                    />
                                </Box>
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
                                <div>Veja alguns dos meus </div>
                                <NextLink href="/courses" passHref>
                                    <Link
                                        color="inherit"
                                        textDecoration="underline"
                                    >
                                        cursos
                                    </Link>
                                </NextLink>
                            </SectionLeft>
                            <SectionRight progress={progress}>
                                <Box h="full" w="full">
                                    <Image
                                        src="/images/nft_marketplace/1.png"
                                        width={278}
                                        height={128}
                                        borderRadius={4}
                                        my="auto"
                                    />
                                </Box>
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
                                <div>Veja alguns dos meus </div>
                                <NextLink href="/personal_projects" passHref>
                                    <Link
                                        color="inherit"
                                        textDecoration="underline"
                                    >
                                        projetos pessoais
                                    </Link>
                                </NextLink>
                            </SectionLeft>
                            <SectionRight progress={progress}>
                                <Box h="full" w="full">
                                    <Image
                                        src="/images/nft_marketplace/1.png"
                                        width={278}
                                        height={128}
                                        borderRadius={4}
                                        my="auto"
                                    />
                                </Box>
                            </SectionRight>
                        </SectionContainer>
                    )}
                />
            </TileContent>
        </TileWrapper>
    )
}

export default Wall
