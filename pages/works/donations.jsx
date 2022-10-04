import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layout/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Donations = () => {
    return (
        <Layout title="Donation Platform">
            <Container pb={2}>
                <Title>
                    Donation Platform <Badge>2021</Badge>
                </Title>
                <WorkImage src="/images/ajudapet/thumb.png" alt="Valepay" />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://doe.ajuda.pet/" target="_blank">
                            Go! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Frontend Stack</Meta>
                        <span>React, Next.js, Material UI</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend Stack</Meta>
                        <span>Node.js, Express, MongoDB</span>
                    </ListItem>
                    <ListItem>
                        <Meta>APIs</Meta>
                        <span>Mercado Pago, SMS Token</span>
                    </ListItem>
                </List>
                <P>
                    Recebi um pedido de um cliente para criar uma plataforma de
                    doações para ajudar pets em necessidade. De acordo com o
                    pedido, a plataforma deve perguntar ao usuário o valor da
                    doaçãao, autenticá-lo, realizar o pagamento da doação e
                    retornar ao usuário o status do pagamento da doação. Além
                    disso, foi pedido também que fosse possível haver múltiplos
                    captadores de doações, como por exemplo petshops, clínicas
                    veterinárias etc.
                </P>
                {/* <P>
                    Para implementar o projeto, no frontend, utilizei o
                    framework React para Produção: Next.js. Para aplicar estilo,
                    utilizei o Material UI
                </P> */}
                <WorkImage src="/images/ajudapet/1.png" alt="Valepay" />
                <P>
                    Após o usuário escolher o valor que irá doar, ele é
                    encaminhado para a página de autenticação.
                </P>
                <P>
                    A autenticação de usuários (doadores) foi feita por
                    verificação via SMS, através da api da SMS Token. Na página
                    de autenticação, o usuário irá inserir o seu celular para
                    realizar a autenticação. Em seguida ele recebera um SMS com
                    um token gerado pela API. A aplicação então pede para o
                    usuário inserir o token recebido. Se o token for válido o
                    usuário é encaminhado para o pagamento da doação.
                </P>
                <WorkImage src="/images/ajudapet/3.png" alt="Valepay" />
                <WorkImage src="/images/ajudapet/4.png" alt="Valepay" />
                <P>
                    <strong>
                        <i>**Obs** </i>
                    </strong>
                    Como parte do pedido do cliente, a autenticação com SMS
                    deveria gerar/logar um usuário no backend de um aplicativo
                    mobile pre existente, de forma que a base de usuários do
                    site de doações e do aplicativo do cliente fosse unificada.
                    Não apenas isso, mas todos os novos schemas e rotas criados
                    para gerenciar as doações teve que ser integrado ao sistema
                    existente. Essa integração de novas funcionalidades e
                    modalidades de autenticação em um sistema ja existente foi
                    um desafio técnico considerável.
                </P>
                <P>
                    Após essa etapa, será realizado o pagamento. Através da
                    integração do meio de pagamentos Mercado Pago via API, foi
                    possível oferecer dois meios de pagamento da doação: cartão
                    de crédito ou PIX
                </P>
                <WorkImage src="/images/ajudapet/5.png" alt="Valepay" />
                <P>
                    Para o pagamento com cartão crédito, foi implementado um
                    checkout transparente, dentro do website. Isso foi alcançado
                    integrando a API de pagamentos ao backend da plataforma, que
                    realizava os pagamentos. O usuário preenche seus dados, que
                    sao enviados ao backend em nodejs da aplicação, que realizam
                    o pagamento via API do processador de pagamentos.
                </P>
                <WorkImage src="/images/ajudapet/6.png" alt="Valepay" />
                <P>
                    Também é possível o pagamento por PIX, que pode ser feito
                    via qr code ou link copia e cola. Ambos sao gerados após o
                    usuários inserir mais alguns dados.
                </P>
                <WorkImage src="/images/ajudapet/7.png" alt="Valepay" />
                <WorkImage src="/images/ajudapet/8.png" alt="Valepay" />
                <WorkImage src="/images/ajudapet/9.png" alt="Valepay" />
                <P>
                    Entreguei o projeto de acordo com o requisitado, e o
                    resultado você pode conferir{' '}
                    <Link href="https://doe.ajuda.pet/" target="_blank">
                        aqui
                    </Link>
                </P>
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

export default Donations
