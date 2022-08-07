import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts' //memanggil file fonts
import theme from '../libs/theme'
import { AnimatePresence } from "framer-motion";
const Website =({ Component, pageProps, router,}) => {
        return (
            <ChakraProvider theme={theme}>
                <Layout router = {router}>
                    {/* Memanggil tag fonts */}
                    <Fonts/> 
                    <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                </Layout>
            </ChakraProvider>
    )
}

export default Website