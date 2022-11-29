import {
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Icon
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoGlobeOutline } from 'react-icons/io5'

const LanguageToggleButton = () => {
    const router = useRouter()

    const handleToggleLanguage = newLocale => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<Icon as={IoGlobeOutline} />}
                variant="outline"
                aria-label="Options"
                mr={2}
            />
            <MenuList>
                <MenuItem
                    display="flex"
                    alignItems="center"
                    onClick={() => handleToggleLanguage('en')}
                >
                    <Image
                        boxSize="1.8rem"
                        borderRadius="full"
                        src="/images/flags/us.svg"
                        alt="us_flag"
                        mr="12px"
                    />
                    <span>English</span>
                </MenuItem>
                <MenuItem onClick={() => handleToggleLanguage('pt')}>
                    <Image
                        boxSize="1.8rem"
                        borderRadius="full"
                        src="/images/flags/br.svg"
                        alt="br_flag"
                        mr="12px"
                    />
                    <span>Português</span>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default LanguageToggleButton
