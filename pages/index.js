import NextLink from 'next/link'
import {
	//Deklarasi untuk property yang diambil dari chakra ui
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue,
	Link,
	List,
	Icon,
	Button,
	ListItem} from "@chakra-ui/react"
import Layout from '../components/layouts/article'	
import Paragraph from "../components/paragraph"
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/layouts/bio'
import {
	IoLogoInstagram
} from 'react-icons/io5'
const Page = () => {
return (
	<Layout>
	<Container>
		<Box borderRadius="lg" 
		bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
		p={3} 
		mb={6} 
		align="center">
			Hello, I&apos;m a Backend Web Developer based on Tangerang Selatan!
	</Box>

	<Box display={{ md:'flex'}}>
		<Box flexGrow={1}>
		<Heading as="h2" variant="page-title">
			Temi Duwi Saputra
		</Heading>
		<p>Back-End Web Developer</p>
		</Box>
		<Box flexShrink={0} 
		mt={{ base: 4, 
		md:0 }} 
		ml={{ md:6 }} 
		align="center">
			{/* Gambar profile */}
			<Image 
			borderColor="whiteAplha.800" 
			borderWidth={2} 
			borderStyle="solid" 
			maxWidth="100px" 
			display="inline-block" 
			borderRadius="full" 
			src="/images/Temi_Duwi.jpg" 
			alt="Profile Image" 
			/>
		</Box>
	</Box>
	{/* Menggunakan tag section untuk animasi */}
	<Section delay={0.1}>
		<Heading as="h3" variant="section-title">
			About Me
		</Heading>	
		<Paragraph>
			Nama saya Temi Duwi Saputra, fresh graduate teknik informatika Universitas Budi Luhur Jakarta. Saya sangat bersemangat tentang dunia IT dan pemrograman. Saya seorang programmer energik yang terampil dalam PHP dan framework seperti Codeigniter. Dengan rasa ingin tahu yang kuat dan suka mempelajari sesuatu yang baru dalam hidup saya, terutama tentang IT dan bahasa pemrograman.
		</Paragraph>
		<Box align="center" my={4}>
			<NextLink href="/works">
				<Button rightIcon={ <ChevronRightIcon />} colorScheme="teal">
				My Portfolio
				</Button>
			</NextLink>
		</Box>
	</Section>

	<Section delay={0.2}>
		<Heading as="h3" variant="section-title">
			Bio
		</Heading>
		<BioSection>
			<BioYear>2000</BioYear>
			Lahir di Tangerang Selatan, Indonesia.
		</BioSection>
		<BioSection>
			<BioYear>2018</BioYear>
			Lulus dari SMAN 10 Tangerang Selatan.
		</BioSection>
		<BioSection>
			<BioYear>2022</BioYear>
			Lulus dari Teknik Informatika, Fakultas Teknologi Informasi, Universitas Budi Luhur Jakarta.
		</BioSection>
	</Section>

	<Section delay={0.3}>
		<Heading as="h3" variant="section-title">
			Hobi
		</Heading>
		<Paragraph>
			Futsal, Mendengarkan Musik, Menonton Film, Bersepeda 
		</Paragraph>
	</Section>

	<Section delay={0.3}>
		<Heading as="h3" variant="section-title">
			Social media
		</Heading>
		<List>
			<ListItem>
			<Link href="https://instagram.com/temisaputra26" target="_blank">
				<Button variant="ghost" colorscheme="teal" leftIcon={ <Icon as={IoLogoInstagram}/>}>
				temisaputra26
				</Button>
			</Link>
			</ListItem>
		</List>
	</Section>
	</Container>
	</Layout>
)
}

export default Page
