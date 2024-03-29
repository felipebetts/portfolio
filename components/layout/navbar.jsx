import Logo from '../logo'
import NextLink from 'next/link'
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../theme-toggle-button'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageToggleButton from '../language-toggle-button copy'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const { t } = useTranslation('common')

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            h="56px"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                h="100%"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        {t('common.works')}
                    </LinkItem>
                    <LinkItem href="/personal_projects" path={path}>
                        {t('common.personal-projects')}
                    </LinkItem>
                    <LinkItem href="/courses" path={path}>
                        {t('common.courses')}
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right" my="auto">
                    <LanguageToggleButton />
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>
                                        {t('common.about')}
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>
                                        {t('common.works')}
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/personal_projects" passHref>
                                    <MenuItem as={Link}>
                                        {t('common.personal-projects')}
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/courses" passHref>
                                    <MenuItem as={Link}>
                                        {t('common.courses')}
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
