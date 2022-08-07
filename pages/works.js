import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from '../components/layouts/article'	
import { WorkGridItem } from "../components/grid-item";
import MyProject from '../public/images/works/penjualan_sepatu.png'
import MyProject2 from '../public/images/works/sistem_helpdesk.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="shoesaleproject" title="Shopping Cart" thumbnail={MyProject}>
                        Shopping Cart
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="helpdesk" title="IT Helpdesk System" thumbnail={MyProject2}>
                        IT helpdesk system
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

        </Container>
        </Layout>
    )
}

export default Works