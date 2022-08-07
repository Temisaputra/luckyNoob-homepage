import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Text,
    Divider,
    Button
} from '@chakra-ui/react'

 const NotFound = () => {
    return (
        <Container my={100}>
            <Heading as="h1">
            Halaman Belum Tersedia
            </Heading>
            <Text>
                Halaman yang anda lihat belum tersedia.
            </Text>
            <Divider my={6}/>
            <Box my={6} align="center"> 
                <NextLink href="/">
                    <Button colorScheme="teal">Kembali ke halaman utama</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
