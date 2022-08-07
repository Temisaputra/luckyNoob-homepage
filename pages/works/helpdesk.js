import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="IT Helpdesk">
            <Container>
                <Title>
                    IT Helpdesk <Badge>Kuliah Kerja Praktek</Badge>
                </Title>
                <P>
                    projek ini merupakan tugas dari kuliah kerja praktek pada semester 6, dimana pada projek ini saya bersama kelompok saya yang berisi 3 orang membuat sebuah sistem pengaduan kerusakan alat kantor.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="#"><ExternalLinkIcon mx="2px"/>
                        Tidak dipublish
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, Html, CSS, Javascript, Framework Codeigniter</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/sistem_helpdesk.jpg" alt="helpdesk"/>
                <WorkImage src="/images/works/sistem_helpdesk2.jpg" alt="helpdesk"/>
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'