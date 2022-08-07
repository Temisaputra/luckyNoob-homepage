import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from '../components/layouts/article'	
import { WorkGridItem } from "../components/grid-item";
import myProject from '../public/images/works/penjualan_sepatu.jpg'
import myProject2 from '../public/images/works/sistem_helpdesk.jpg'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="shoesaleproject" title="Shopping Cart" thumbnail={myProject}>
                        Shopping Cart
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="helpdesk" title="IT Helpdesk System" thumbnail={myProject2}>
                        IT helpdesk system
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
        </Layout>
    )
}

export default Works
export { getServerSideProps } from '../components/chakra'