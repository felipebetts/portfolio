import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Link,
    Icon
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'next-i18next'
import { IoGlobeOutline } from 'react-icons/io5'

const LanguageToggleButton = () => {
    const { t } = useTranslation('common')
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
            >
                {router.locale}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => handleToggleLanguage('en')}>
                    {t('english')}
                </MenuItem>
                <MenuItem onClick={() => handleToggleLanguage('pt')}>
                    {t('portuguese')}
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default LanguageToggleButton
