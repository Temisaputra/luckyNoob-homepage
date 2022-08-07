import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Shopping Cart">
            <Container>
                <Title>
                    Shopping Cart Website <Badge>Java Web Programming Class</Badge>
                </Title>
                <P>
                    projek ini merupakan tugas akhir dari mata kuliah java web programming pada semester 5, dimana pada projek ini saya bersama kelompok saya yang berisi 5 orang membuat sebuah aplikasi penjualan sepatu  yang memiliki fitur shopping cart (keranjang belanja). Fitur shopping cart sendiri bertujuan agar semua barang yang disimpan oleh satu user dapat tertampung sebelum dimasukkan kedalam database.
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
                        <span>Java, JSP, Html, CSS, Javascript</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/PenjualanSepatu.png" alt="shoesaleproject"/>
            </Container>
        </Layout>
    )
}

export default Work
export { getServerSideProps } from '../../components/chakra'