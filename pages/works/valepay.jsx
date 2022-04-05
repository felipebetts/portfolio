import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react"
import Layout from "../../components/layout/article"
import { Meta, Title, WorkImage } from "../../components/work"
import P from '../../components/paragraph'
import { ExternalLinkIcon } from "@chakra-ui/icons"


const Valepay = () => {
    return (
        <Layout
            title='Example'
        >
            <Container>
                <Title>
                    PalmDoctor <Badge>2021</Badge>
                </Title>
                <WorkImage
                    src='/images/valepay/login.png'
                    alt='Valepay'
                />
                <P>
                    This project is a digital banking platform built to suit specifical needs from the tourism industry.
                    It can perform transactions, payment antecipation, manage users, and much more. 
                </P>
                <P>
                    I was responsible for building the front-end project for the platform&apos;s multiple scopes. 
                    I used Next.js, a React production framework.
                    The style was implemented using Styled Components. 
                    This allowed me to build custom components such as calendars, responsive sidebar, paginated tables and a lot others.
                    Axios was used to perform the requests to the server. 
                    By using axios, I was able to treat requests and responses with custom middlewares, adding authetication and error treatment. 
                </P>
                <P>
                    The platform is yet to be launched, but very soon it will be.
                </P>
                <List
                    ml={4}
                    my={4}
                >
                    <ListItem>
                        <Meta>
                            Platform
                        </Meta>
                        <Link href='/#valepay'>
                            {/* https://palmdoctor.com.br/ <ExternalLinkIcon mx='2px' /> */}
                            Soon
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>
                            Stack
                        </Meta>
                        <span>Next.js, React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>
                            Other tecnologies
                        </Meta>
                        <span>
                            Axios, Styled Components, Chart.js, Quill
                        </span>
                    </ListItem>
                </List>


                <WorkImage
                    src='/images/valepay/2.jpg'
                    alt='Valepay'
                />
            </Container>
        </Layout>
    )
}

export default Valepay