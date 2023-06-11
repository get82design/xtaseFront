import { useGetNavLinks, useGetSocials } from "./../../hook/hook"
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const Footer = ({ locale }) => {
    const { data: dataSocials } = useGetSocials()
    const socials = dataSocials || []
    const { data: dataNavLinks } = useGetNavLinks(locale)
    const navLinks = dataNavLinks || []
    const [pageActive, setPageActive] = useState("")

    useEffect(() => {
        var urlcourante = window.location.pathname; 
        console.log('url', urlcourante)
        setPageActive(urlcourante)
    }, [])
    return (
        <Stack
            spacing={4}
            align="center"
            w='100%'
            position='absolute'
            bottom={0}
            left={0}
            my={8}
            fontFamily={"proxima-nova"}
        >
            {/* <SimpleGrid
                // align="center"
                columns={locale && locale !== "fr-FR" ? 4 : 3}
                py={6}
                w='100%'
                color='white'
                borderBottom="1px solid rgba(255,255,255, 0.5)"
                fontSize={{ base: 'xs', md: 'lg' }}
            > */}
            <Flex
                justifyContent={"space-between"}
                w="100%" py={6}
                color='white'
                borderBottom="1px solid rgba(255,255,255, 0.5)"
                fontSize={{ base: 'xs', md: 'lg' }}
                textAlign={"center"}
                flexWrap={"wrap"}
            >
                {navLinks.length > 0 && navLinks.map((link) => {
                    return (
                        <Box w={{base:"50%",lg:"25%"}} textAlign="center" /*_first={{textAlign:"left"}} _last={{textAlign:"right"}}*/ px={{base:4, md:8}} key={link.id}>
                            <Link 
                                my={1}
                                style={{ textTransform: "uppercase", fontWeight: "400" }}
                                color="white"
                                href={link.attributes.href || "#"}
                                className={"text-hover-primary"}
                            >
                                {link.attributes.label}
                            </Link>
                        </Box> 
                    )
                })}
                </Flex>
            {/* </SimpleGrid> */}
            <Flex justifyContent={"center"} gap={4} w='100%'>
                {socials.length > 0 && socials.map((social) => {
                    return (
                        <a
                            key={social.id}
                            href={social.attributes.label || "#"}
                            target="_blank"
                        >
                            <Text
                                fontSize={{ base: 'md', md: 'lg' }}
                                fontWeight={'light'}
                                className="text-primary"
                            >{social.attributes.label}</Text>
                        </a>
                    )
                })}
            </Flex>
            <Flex
                justifyContent={"center"}
                w='100%'
                py={6}
                borderTop="1px solid rgba(255,255,255, 0.5)"
            >
                <Text color='white' fontSize={{base:'sm', md:"md"}}>{(locale && locale !== 'fr-FR') ? "© Copyright 2023 All rights reserved." : "© Copyright 2023 Tous droits réservés."}</Text>
            </Flex>
        </Stack>
    )
}