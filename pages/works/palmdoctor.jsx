import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
    return (
        <Layout
            title='Example'
        >
            <Container>
                <Title>
                    PalmDoctor <Badge>2021</Badge>
                </Title>
                <WorkImage
                    src='/images/palmdoctor/cover_palmdoctor.jpg'
                    alt='Valepay'
                />
                <P>
                    PalmDoctor is a startup based in Brazil, 
                    acting in the health tech field.
                    It&apos;s mission is to facilitate communications between 
                    patients, doctors and public health institutions. 
                </P>
                <P>
                    I was responsible for building the front-end project for the platform, 
                    and also it&apos;s landing page. For both of them I used Next.js, a React production framework.
                    The style was implemented using Styled Components. Axios was also used, to perform the requests to the server.
                </P>
                <P>
                    The platform is yet to be launched, however there&apos;s a landing page that explains more about this product.
                </P>
                <List
                    ml={4}
                    my={4}
                >
                    <ListItem>
                        <Meta>
                            Landing Page
                        </Meta>
                        <Link href='https://palmdoctor.com.br/'>
                            https://palmdoctor.com.br/ <ExternalLinkIcon mx='2px' />
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
                            Axios, Styled Components
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

export default Work