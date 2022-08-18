import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const PalmDoctor = () => {
    return (
        <Layout title="Works | PalmDoctor">
            <Container>
                <Title>
                    PalmDoctor <Badge>2021</Badge>
                </Title>
                <WorkImage
                    src="/images/palmdoctor/cover_palmdoctor.jpg"
                    alt="Valepay"
                />
                <P>
                    This project is a managerial tool to help Brazil´s public
                    health system logistics. It connects a given city health
                    department with it´s health centers, doctors and patients.
                    This way, doctors are able to schedule their working hours
                    at a given health center, and patients are able to see the
                    available doctors and their hours from their health center,
                    as well as schedule medical consultations. I was responsible
                    for building the front-end of the system, based on a figma
                    design mockup, and consuming a REST API built by the
                    back-end team. For this, I used a Javascript framework
                    called Next.js, that itself is based on React.js. The styles
                    were implemented with custom CSS applied through
                    Styled-Components. To consume the REST API, I used axios,
                    wich enabled me to add custom middlewares to the requests,
                    with auth tokens and error treatment.
                </P>
                <P>
                    PalmDoctor is a startup based in Brazil, acting in the
                    health tech field. It&apos;s mission is to facilitate
                    communications between patients, doctors and public health
                    institutions.
                </P>
                <P>
                    I was responsible for building the front-end project for the
                    platform, and also it&apos;s landing page. For both of them
                    I used Next.js, a React production framework. The style was
                    implemented using Styled Components. Axios was also used, to
                    perform the requests to the server.
                </P>
                <P>
                    The platform is yet to be launched, however there&apos;s a
                    landing page that explains more about this product.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Landing Page</Meta>
                        <Link href="https://palmdoctor.com.br/">
                            https://palmdoctor.com.br/{' '}
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

export default PalmDoctor
