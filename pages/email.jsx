import {
    Button,
    Container,
    Heading,
    Input,
    Stack,
    Textarea
} from '@chakra-ui/react'
import axios from 'axios'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import Layout from '../components/layout/article'

const EmailContact = () => {
    const [name, setName] = useState('')
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')

    const handleSendEmail = async e => {
        e.preventDefault()
        try {
            const emailData = { name, from, subject, text }
            const res = await axios.post('/api/send-contact-email', emailData)
            console.log('res:', res)
        } catch (err) {
            console.log('err:', err)
        }
    }

    return (
        <Layout>
            <Container pb={2}>
                <Heading as="h1" my={2} variant="page-title">
                    Email
                </Heading>
                <form onSubmit={handleSendEmail}>
                    <Stack spacing={4} my={4}>
                        <Input
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            placeholder="E-mail"
                            type="email"
                            value={from}
                            onChange={e => setFrom(e.target.value)}
                        />
                        <Input
                            placeholder="Assunto"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                        <Textarea
                            placeholder="Mensagem"
                            resize="vertical"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <Button colorScheme="teal" type="submit">
                            Enviar email
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
