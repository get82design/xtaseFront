import Link from "next/link"
import { useGetMapAndContact, useGetSocials } from "../../hook/hook"
import { getStrapiMedia } from "../../lib/media"
import { Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import {FaWhatsapp} from "react-icons/fa"

export const MapAndContact = ({locale}) => {
    const { data: dataSocials } = useGetSocials()
    const socials = dataSocials || []
    const { data: mapAndContact } = useGetMapAndContact(locale)


    const HeadingContact = ({mapAndContact}) => {
        return (
            <Stack w="100%">
                <Heading textAlign={{base:"center", md:'left'}} color="white" fontFamily="meno-banner" as="h2">{mapAndContact?.attributes.contactTitle}</Heading>
                <Heading textAlign={{base:"center", md:'left'}} size={{base:'xs',md:'sm'}} textTransform={"uppercase"} letterSpacing={'widest'} fontWeight='light' className="text-primary" fontFamily="proxima-nova" as="h3">{mapAndContact?.attributes.contactSubTitle}</Heading>
            </Stack>
        )
    } 
    return (
        <>
            <Box display={{md: 'none'}} w="100%" mt={8}>
                <HeadingContact mapAndContact={mapAndContact} />
            </Box>
            <Flex w="100%" justifyContent={'center'} py={{base:8,md:24}} px={8} fontFamily={"proxima-nova"}>
                <Flex w={{base: "100%", lg:'80vw'}} justifyContent={"space-between"}>
                    <Stack w={"50%"} display={{base: 'none', md: 'initial'}} color="white" spacing={6}>
                        <Box w="100%">
                            <HeadingContact mapAndContact={mapAndContact} />
                        </Box>
                        <Stack spacing={1}>
                            <Text color="#D7A989">Email</Text>
                             <Link href={`mailto:${mapAndContact?.attributes.mail}`} target="_blank">
                                <Text fontSize="xl">{mapAndContact?.attributes.mail}</Text>
                            </Link>
                        </Stack>
                        <Stack spacing={1}>
                            <Text color="#D7A989">{locale && locale !== "fr-FR" ? "Phone" : "Téléphone"}</Text>
                            <Text fontSize="xl">{mapAndContact?.attributes.phone}</Text>
                        </Stack>
                        <Stack spacing={1}>
                            <Text color="#D7A989">{locale && locale !== "fr-FR" ? 'Social Messenger' : 'Messager social'}</Text>
                            <Link href="https://wa.me/33660395848" target="_blank">
                                <Text fontSize="xl">WhatsApp</Text>
                            </Link>
                        </Stack>
                        <Stack spacing={1}>
                            <Text color="#D7A989">{locale && locale !== "fr-FR" ? "Social networks" : "Réseaux sociaux"}</Text>
                            <HStack spacing={2}>
                                {socials.map((social, idx) => {
                                    return (
                                        <Link key={idx} href={social.attributes.href || "#"} target="_blank">
                                            <Text fontSize="xl">{social.attributes.label}</Text>
                                        </Link>
                                    )
                                })}
                            </HStack>
                        </Stack>
                    </Stack>
                    <Stack mr={{base: 0, md:-28}} w={{base:"200%", md:"100%"}} position="relative" bgImage={getStrapiMedia(mapAndContact?.attributes.map)} bgSize="cover">
                        <Box minH="450px" w="100%" bgGradient="radial(transparent, #0C0023 80%)"></Box>
                    </Stack>
                </Flex>
            </Flex>
            <Box w="100%" display={{md: 'none'}}>
                <Stack align={"center"} w="100%" spacing={12}>
                    <Button
                        variant="outline"
                        leftIcon={<FaWhatsapp />}
                        rounded="none"
                        size="lg"
                        style={{
                            width: "260px",
                            color: "#D7A989",
                            fontWeight: 'normal',
                            textTransform: "uppercase",
                            backgroundColor:"rgba(255, 255, 255, 0.3)",
                            border: "1px solid #D7A989",
                        }}
                    >Discutons</Button>
                    <Button
                        variant="ghost"
                        leftIcon={<FaWhatsapp />}
                        size="lg"
                        style={{
                            width: "260px",
                            color: "#D7A989",
                            fontWeight: 'normal',
                            textTransform: "uppercase",
                        }}
                    >Discutons</Button>
                </Stack>
            </Box>
        </>
    )
}