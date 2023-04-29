import { useGetMapAndContact } from "../../hook/hook"
import { getStrapiMedia } from "../../lib/media"
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import {FaWhatsapp} from "react-icons/fa"

export const MapAndContact = () => {
    const { data: mapAndContact } = useGetMapAndContact()

    const HeadingContact = ({mapAndContact}) => {
        return (
            <Stack w="100%">
                <Heading textAlign={{base:"center", md:'left'}} color="white" fontFamily="meno-banner" as="h2">{mapAndContact?.attributes.contactTitle}</Heading>
                <Heading textAlign={{base:"center", md:'left'}} size={{base:'sm',md:'md'}} textTransform={"uppercase"} fontWeight='light' className="text-primary" fontFamily="proxima-nova" as="h3">{mapAndContact?.attributes.contactSubTitle}</Heading>
            </Stack>
        )
    } 
    return (
        <>
            <Box display={{md: 'none'}} w="100%" mt={8}>
                <HeadingContact mapAndContact={mapAndContact} />
            </Box>
            <Flex w="100%" justifyContent={'center'} py={{base:8,md:24}} px={8}>
                <Flex w={{base: "100%", lg:'70vw'}} justifyContent={"space-between"}>
                    <Stack w={"50%"} display={{base: 'none', md: 'initial'}} color="white" spacing={8}>
                        <Box w="100%">
                            <HeadingContact mapAndContact={mapAndContact} />
                        </Box>
                        <Stack>
                            <Text className="text-primary">E-mail:</Text>
                            <Text>{mapAndContact?.attributes.mail}</Text>
                        </Stack>
                        <Stack>
                            <Text className="text-primary">Téléphone:</Text>
                            <Text>{mapAndContact?.attributes.phone}</Text>
                        </Stack>
                        <Stack>
                            <Text className="text-primary">Messager social:</Text>
                            <Text>{mapAndContact?.attributes.whatsApp}</Text>
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