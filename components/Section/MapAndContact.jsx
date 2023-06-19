import Link from "next/link"
import { useGetMapAndContact, useGetSocials } from "../../hook/hook"
import { getStrapiMedia } from "../../lib/media"
import { Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import {FaWhatsapp} from "react-icons/fa"
import {MdMailOutline} from "react-icons/md"
import { useContext } from "react"
import { GlobalContext } from "../../pages/_app"
import { motion } from "framer-motion"

const MotionStack = motion(Stack)
const MotionBox = motion(Box)
const MotionText = motion(Text)

export const MapAndContact = ({locale}) => {
    const { data: dataSocials } = useGetSocials(true)
    const socials = dataSocials || []
    const { messagerie } = useContext(GlobalContext);
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
            {mapAndContact && 
                <>
                <Box display={{md: 'none'}} w="100%" mt={8}>
                    <HeadingContact mapAndContact={mapAndContact} />
                </Box>
                <Flex w="100%" justifyContent={'center'} py={{base:8,md:24}} fontFamily={"proxima-nova"}>
                    <Flex w={{base: "100%", lg:'80vw'}} justifyContent={"space-between"}>
                        <Stack px={8} w={"50%"} display={{base: 'none', md: 'initial'}} color="white" spacing={6}>
                            <MotionBox
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{duration: 0.5}}
                                viewport={{ once: true }}
                                w="100%">
                                <HeadingContact mapAndContact={mapAndContact} />
                            </MotionBox>
                            <Stack spacing={1}>
                                <MotionText
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    color="#D7A989"
                                >Email</MotionText>
                                <Link href={`mailto:${mapAndContact?.attributes.mail}`} target="_blank">
                                    <MotionText
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        viewport={{ once: true }}
                                        fontSize="xl">{mapAndContact?.attributes.mail}</MotionText>
                                </Link>
                            </Stack>
                            {mapAndContact?.attributes.phone && mapAndContact?.attributes.phone !== " " &&
                                <Stack spacing={1}>
                                    <MotionText
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{duration: 0.5}}
                                        viewport={{ once: true }}
                                        color="#D7A989"
                                    >{locale && locale !== "fr-FR" ? "Phone" : "Téléphone"}</MotionText>
                                    <MotionText
                                        initial={{ opacity: 0, x:40 }}
                                        whileInView={{ opacity: 1, x:0 }}
                                        transition={{duration: 0.5, delay:0.5}}
                                        viewport={{ once: true }}
                                        fontSize="xl"
                                    >{mapAndContact?.attributes.phone}</MotionText>
                                </Stack>
                            }
                            {messagerie && messagerie !== "" &&
                                <Stack spacing={1}>
                                    <MotionText
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{duration: 0.5}}
                                        viewport={{ once: true }}
                                        color="#D7A989"
                                    >{locale && locale !== "fr-FR" ? 'Social Messenger' : 'Messager social'}</MotionText>
                                    <Link href={messagerie ? messagerie : "#"} target="_blank">
                                        <MotionText
                                            initial={{ opacity: 0, x:40 }}
                                            whileInView={{ opacity: 1, x:0 }}
                                            transition={{duration: 0.5, delay:0.5}}
                                            viewport={{ once: true }}
                                            fontSize="xl"
                                        >WhatsApp</MotionText>
                                    </Link>
                                </Stack>
                            }
                            <Stack spacing={1}>
                                <Text color="#D7A989">{locale && locale !== "fr-FR" ? "Social networks" : "Réseaux sociaux"}</Text>
                                <HStack spacing={2}>
                                    {socials.map((social, idx) => {
                                        return (
                                            <Link key={idx} href={social.attributes.href || "#"} target="_blank">
                                                <MotionText
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: (0.5 + 0.5 * idx)}}
                                                    viewport={{ once: true }}
                                                    fontSize="xl"
                                                >{social.attributes.label}</MotionText>
                                            </Link>
                                        )
                                    })}
                                </HStack>
                            </Stack>
                        </Stack>
                        <MotionStack
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{duration: 1, delay: 0.5}}
                            viewport={{ once: true }}
                            mr={{ base: 0, md: -28 }}
                            w={{ base: "200%", md: "100%" }}
                            position="relative"
                            bgImage={getStrapiMedia(mapAndContact?.attributes.map)}
                            bgPosition="center"
                            bgSize="cover"
                        >
                            <Box
                                minH="450px"
                                w="100%"
                                bgGradient={{ base: "radial(transparent, #0C0023 95%)", md: "radial(transparent, #0C0023 80%)" }}
                            ></Box>
                        </MotionStack>
                    </Flex>
                </Flex>
                <Box w="100%" display={{md: 'none'}}>
                    <Stack align={"center"} w="100%" spacing={12}>
                        <Link href={messagerie ? messagerie : "#"} target="_blank">
                            <Button
                                variant="outline"
                                leftIcon={<FaWhatsapp />}
                                rounded="none"
                                fontWeight={"light"}
                                size="lg"
                                style={{
                                    width: "260px",
                                    color: "#D7A989",
                                    // fontWeight: 'light',
                                    textTransform: "uppercase",
                                    backgroundColor:"rgba(255, 255, 255, 0.15)",
                                    border: "1px solid #D7A989",
                                }}
                            >{locale && locale !== 'fr-FR' ? "Let's discuss" : 'Discutons'}</Button>
                        </Link>

                        <Link href={`mailto:${mapAndContact?.attributes.mail}`} target="_blank">
                            <Button
                                variant="ghost"
                                leftIcon={<MdMailOutline />}
                                fontWeight={'light'}
                                size="lg"
                                style={{
                                    width: "260px",
                                    color: "#D7A989",
                                    // fontWeight: 'light',
                                    textTransform: "uppercase",
                                }}
                            >{locale && locale !== 'fr-FR' ? 'Write us' : 'Nous écrire'}</Button>
                        </Link>
                    </Stack>
                </Box>
            </>
            }
        </>
    )
}