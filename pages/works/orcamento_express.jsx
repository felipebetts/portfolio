import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const OrcamentoExpress = () => {
    return (
        <Layout title="Orçamento Express">
            <Container>
                <Title>
                    Orçamento Express <Badge>2021</Badge>
                </Title>
                <WorkImage
                    src="/images/orcamento_express/cover.png"
                    alt="Orçamento Express"
                />
                <P>
                    This web application is a home building budget simulator. I
                    was asked by a brazilian realstate company to make this web
                    application, in order to simplify the budgeting process for
                    their clients. Before this webapp went live, the
                    company&apos;s budgeting department was struggling with
                    clients that asked for house budgets, only to find out that
                    the budget was too high for them, generating work that
                    didn&apos;t turned to revenue. The main goal of the app was
                    to generate leads with loads of data about the clients, and
                    to optimize the budgeting department&apos;s time.
                </P>
                <WorkImage
                    src="/images/orcamento_express/2.png"
                    alt="Orçamento Express"
                />
                <P>
                    Based on the user&apos;s input of their income and other
                    financial parameters, it performs a mortgage simulation.
                    With that, it generates the average value of the mortgage,
                    wich will be used as the maximum budget for the house
                    construction.
                </P>
                <WorkImage
                    src="/images/orcamento_express/1.png"
                    alt="Orçamento Express"
                />
                <P>
                    After the financial part, the user is then redirected to an
                    interactive form, where he/she will choose house styles,
                    number of pavements, rooms, bathrooms and many more.
                    Throughout the process the user is able to see how much of
                    the budget is already allocated and how much of it is still
                    available.
                </P>
                <WorkImage
                    src="/images/orcamento_express/3.png"
                    alt="Orçamento Express"
                />
                <WorkImage
                    src="/images/orcamento_express/3_mobile.png"
                    alt="Orçamento Express"
                />
                <P>
                    At the end, the user is asked for contact information in
                    order to have access to the final report. By my
                    client&apos;s request, this data is sent to Bitrix24, via
                    their own api, and stored as a lead. Finally the user is
                    able to see a resumed report of their choices and final
                    budget generated.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://orcamento.ibuildconstrutora.com.br/">
                            https://orcamento.ibuildconstrutora.com.br/{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js, React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Other tecnologies</Meta>
                        <span>Axios, Styled Components</span>
                    </ListItem>
                </List>
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

export default OrcamentoExpress
