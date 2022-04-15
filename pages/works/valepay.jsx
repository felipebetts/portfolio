import { Badge, Box, Container, Link, List, ListItem } from "@chakra-ui/react"
import Layout from "../../components/layout/article"
import { Meta, Title, WorkImage } from "../../components/work"
import P from '../../components/paragraph'
import { ExternalLinkIcon } from "@chakra-ui/icons"


const Valepay = () => {
    return (
        <Layout
            title='Valepay'
        >
            <Container>
                <Title>
                    Valepay <Badge>2021 - NOW</Badge>
                </Title>
                <WorkImage
                    src='/images/valepay/login.png'
                    alt='Valepay'
                />
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
                {/* <Box
                    my={3}
                >
                    <ul>
                        <li>
                            An admin dashboard used to manage transactions, accounts, and a lot more for this Brazilian fintech startup.
                        </li>
                        <li>
                            It's built on React and Next.js (JavaScript), styled using styled components, and no UI libraries, and built components from scratch based on the mockups made by the UI team.
                        </li>
                        <li>
                            The dashboard has an expandable sidebar, calendar components, and a lot of custom styles. All done in Portuguese since this is a  Brazilian company.
                        </li>
                        <li>
                            In order to build it, it was decided to use React.js with the Next.js framework due to performance gains.
                        </li>
                        <li>
                            Built the multiple pages, with role authentication, and multiple graphs, tables, and forms using only styled-components with custom CSS to style it all.
                        </li>
                        <li>
                            It communicates with the team's backend using Axios, with auth interceptors applied.
                        </li>
                        <li>
                            This product is a fully capable digital bank, focused on the tourism market. It&apos;s able to perform payments, provide credit, and many other features.
                        </li>
                    </ul>
                </Box> */}

                <WorkImage
                    src='/images/valepay/1.jpg'
                    alt='Valepay'
                />
                <WorkImage
                    src='/images/valepay/2.jpg'
                    alt='Valepay'
                />
            </Container>
        </Layout>
    )
}

export default Valepay