import {
    Button,
    Container,
    Heading,
    Input,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import axios from 'axios'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useAlert } from 'react-alert'

import Layout from '../components/layout/article'

const EmailContact = () => {
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

    const [name, setName] = useState('')
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')

    const { t } = useTranslation('common')
    const alert = useAlert()

    const handleSendEmail = async e => {
        e.preventDefault()
        setIsLoadingSubmit(true)
        try {
            const emailData = { name, from, subject, text }
            const res = await axios.post('/api/send-contact-email', emailData)
            console.log('res:', res)
            alert.success(
                <div style={{ textTransform: 'initial' }}>
                    {t('email.feedback.success')}
                </div>
            )
        } catch (err) {
            console.log('err:', err)
            alert.error(
                <div style={{ textTransform: 'initial' }}>
                    {t('email.feedback.error')}
                </div>
            )
        } finally {
            setIsLoadingSubmit(false)
        }
    }

    return (
        <Layout title={t('email.title')}>
            <Container pb={2}>
                <Heading as="h1" mt={2} variant="page-title" fontSize={32}>
                    {t('email.title')}
                </Heading>
                <form onSubmit={handleSendEmail}>
                    <Stack spacing={4} my={4}>
                        <Input
                            variant="filled"
                            placeholder={t('email.form.name')}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            variant="filled"
                            placeholder={t('email.form.email')}
                            type="email"
                            value={from}
                            onChange={e => setFrom(e.target.value)}
                        />
                        <Input
                            variant="filled"
                            placeholder={t('email.form.subject')}
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                        <Textarea
                            variant="filled"
                            placeholder={t('email.form.message')}
                            resize="vertical"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <Button
                            colorScheme="teal"
                            type="submit"
                            isLoading={isLoadingSubmit}
                        >
                            {t('email.form.btn')}
                        </Button>
                    </Stack>
                </form>
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

export default EmailContact
