import { Box, Flex, Img } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav"
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next"

const MotionImg = motion(Img)
export const Layout = ({ children, logo, copyright }) => {
    const [isActive, setIsActive] = useState('')
    const router = useRouter()
    const location = router.asPath
    const { t } = useTranslation('common')

    useEffect(() => {
        const handleScroll = (event) => {
            if (window.scrollY > 80) {
                setIsActive('active')
            } else {
                setIsActive('')
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <Box
            width='100%'
            minHeight='100vh'
            position='relative'
            bgColor="#0C0023"
            pb={56}
            className="headerContainer"
        >
            <Flex
                zIndex={1000}
                justifyContent={'center'}
                p={{base:4, md:8}}
                position="fixed"
                top={0}
                left={0}
                w="100%"
                className={`header ${isActive}`}
            >
                <MotionImg
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    ml={{ base: 0, lg: -12 }}
                    mr={{base:-4, lg:0}}
                    width={{base:"128px", md: "256px"}}
                    height={{base:"66px", md: "132px"}}
                    src="/images/logoColor.png"
                    alt="Logo Xtase by Luxuria"
                />
            </Flex>
            <Nav />
            <Box zIndex="1000" position="fixed" top="4" right="4" color="white">
                <Link
                    href={location}
                    locale={router.locale === 'en' ? 'fr-FR' : 'en'}>
                    <Box color={'white'} cursor="pointer">
                        {router.locale === 'en' ? 'ENG' : 'FR'}
                    </Box>
                </Link>
            </Box>
            {children}
            <Footer copyright={copyright} />
        </Box>
    )
}