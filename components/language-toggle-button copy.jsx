import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Link,
    Icon,
    Image
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'next-i18next'
import { IoGlobeOutline } from 'react-icons/io5'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
// import Image from 'next/image'

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
            />
            <MenuList>
                <MenuItem onClick={() => handleToggleLanguage('en')}>
                    {/* <Icon as={GiUsaFlag} /> */}
                    {/* <Image
                        boxSize="2.1rem"
                        borderRadius="full"
                        src="/images/flags/ergf.png"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                    /> */}
                    EN - {t('common.english')}
                </MenuItem>
                <MenuItem onClick={() => handleToggleLanguage('pt')}>
                    {/* <Icon as={GiBrazilFlag} /> */}
                    {/* <Image
                        boxSize="2.1rem"
                        borderRadius="full"
                        src="/images/flags/brasil.png"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                    /> */}
                    PT - {t('common.portuguese')}
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default LanguageToggleButton
