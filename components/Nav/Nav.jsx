import { useGetNavLinks, useGetSocials } from "./../../hook/hook"
import {
    Box,
    Img,
    HStack,
    Text,
    Icon,
    Drawer,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    List,
    ListItem,
    ListIcon,
    Flex,
    Link,
    Button
} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"
import {FaWhatsapp} from "react-icons/fa"
import { GiSquare } from 'react-icons/gi'
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../pages/_app"
import { useDialogContext } from "../Dialog/DialogContext"

const MotionBox = motion(Box)
const MotionHStack = motion(HStack)
export const Nav = () => {
    const router = useRouter()
    const locale = router.locale
    console.log(locale)
    const { urlReservation, messagerie } = useContext(GlobalContext);
    const { setOpenDialog } = useDialogContext()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data } = useGetNavLinks(locale)
    const { data: socials } = useGetSocials()
    const dataSocials = socials || []
    const [reserve, setReserve] = useState("Réserver une nuit")

    useEffect(() => {
        if (locale && locale !== 'fr-FR') {
            setReserve("Book a night")
        } else {
            setReserve("Réserver une nuit")
        }
    }, [locale])
    const onTest = () => {
        onOpen()
    }
    return (
        <>
            {data &&
            <>
                {/* Desktop Nav */}
                <Box
                    position="fixed"
                    zIndex='1000'
                    top={36}
                    right={0}
                    display={{base: 'none', md:'initial'}}
                >
                    <MotionBox
                        initial={{ x: 42}}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <HStack
                            mt={"60px"}
                            mr={(locale && locale !== "fr-FR") ? "-125px" : "-140px"}
                            spacing={0}
                            align="center"
                            transform={'rotate(-90deg)'}
                            cursor="pointer"
                            height="60px"
                        >
                            <MotionBox
                                as="button"
                                alignItems={"center"}
                                aria-label={'whatsapp-button'}
                                whileHover={{height: "60px", paddingBottom: "18px"}}
                                display={"flex"}
                                justifyContent='center'
                                height="42px"
                                pt={2}
                                pb={1}
                                px={3}
                                bgColor="white"
                                onClick={() => window.open(messagerie, '_blank')}
                            >
                                <Icon
                                    width={"1.5em"}
                                    color={"#D7A989"}
                                    height={"1.5em"}
                                    as={FaWhatsapp}
                                    transform={'rotate(90deg)'}
                                />
                            </MotionBox>
                            <MotionBox
                                as="button"
                                aria-label={'reservation-button'}
                                whileHover={{height: "60px", paddingBottom: "36px"}}
                                bgColor="#D7A989"
                                py={3}
                                px={8}
                                onClick={() => urlReservation
                                    ? window.open(urlReservation, "_blank")
                                    : setOpenDialog(true)
                                }
                            >
                                <Text
                                    textTransform={"uppercase"}
                                    fontSize="xs"
                                    color="white"
                                >{reserve}</Text>
                            </MotionBox>
                            <MotionHStack
                                role="group"
                                as="button"
                                aria-label={'menu-button'}
                                whileHover={{height: "60px", paddingBottom: "36px"}}
                                type="button"
                                spacing={2}
                                bgColor={"white"}
                                p={3}
                                mr={-10}
                                onClick={onTest}
                            >
                                <Text textAlign={"center"} textTransform={'uppercase'} fontWeight={"light"} letterSpacing={"wider"} fontSize="xs">Menu</Text>
                                <HamburgerIcon transform={'rotate(90deg)'} />
                            </MotionHStack>
                        </HStack>
                    </MotionBox>
                {/* Mobile Nav */}
                </Box>
                <Box zIndex={1100} w="full" position="fixed" top="4" left="4" display={{md:"none"}}>
                    <HamburgerIcon fontSize='2xl' color="#D7A989" onClick={onTest} />
                </Box>
            </>
            }
            {/* DRAWER WITH MENU */}
            <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody p={0}>
                        <Box position="relative" w="100%" h="100vh"
                            bgColor="#0C0023">
                            <Flex
                                w="100%"
                                position="absolute"
                                top={0}
                                left={0}
                                display={{md:"none"}}
                                h={{base: "100px", md: "130px"}}
                                justifyContent={'center'}
                                p={8}
                                bgGradient="radial(#061B61, #0C0023 60%)"
                            ></Flex>
                            <Box
                                display={{base:"none", md:'initial'}}
                                position="absolute"
                                top={0}
                                left={0}
                                w="100%"
                                h="100vh"
                                bgImage="/images/imageMenu.png"
                                bgSize="cover"
                                filter='auto'
                                blur='7px'
                            ></Box>
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                w="100%"
                                h="100vh"
                                maxH="100vh"
                                bgColor="#0C0023"
                                opacity={0.5}
                            ></Box>
                            <Box
                                display={{base:"none", md:'initial'}}
                                position="absolute"
                                top={0}
                                left={0}
                                w="100%"
                                h="100vh"
                                maxH="100vh"
                                bgGradient="radial(transparent, #0C0023 90%)"
                            ></Box>
                            <Box
                                position={"absolute"}
                                zIndex={3000}
                                left={0}
                                color="white"
                                pt={8}
                                w="100%"
                            >
                                <Flex /*justifyContent={{base: "center", xl:"start"}}*/ justifyContent={"center"} w="100%">
                                    <Img
                                        ml={{base:-4, lg:-12, xl:-12}}
                                        src="/images/logoColor.png"
                                        // style={{ width: "269px", height: "132px" }}
                                        width={{base:"135px", md:"200px"}}
                                        height={{base:"66px", md:"103px"}}
                                        alt="Logo Xtase by Luxuria"
                                    />
                                </Flex>
                                <List spacing={2} pt={20} ml={{base:12, md:24, lg:'38%', xl:'42%'}}>
                                    {data && data.map((navLink, idx=0) => (
                                        <Box
                                            key={idx}
                                            onClick={() => {
                                                onClose()
                                                router.push(navLink.attributes.href)
                                            }}
                                        >
                                            <MotionBox
                                                initial={{opacity:0, y:50}}
                                                animate={{opacity:1, y:0}}
                                                transition={{duration:0.2, delay:(0.5 + (idx * 0.1))}}
                                            >
                                                <ListItem
                                                    display="flex"
                                                    pb="5"
                                                    pt="4"
                                                    alignItems={"center"}
                                                    cursor="pointer"
                                                    color="rgba(255,255,255,0.3)"
                                                    _hover={{ color: "white" }}
                                                >
                                                    <ListIcon
                                                        color='#D7A989'
                                                        as={GiSquare}
                                                        w="3"
                                                        h="3"
                                                        transform="rotate(45deg)"
                                                        mr={{ base: "5", md: "9" }}
                                                    />
                                                    <Text
                                                        mt="-3"
                                                        mr="4"
                                                        fontWeight={"medium"}
                                                        fontSize="sm"
                                                    >{navLink.attributes.num}</Text>
                                                    <Text
                                                        fontSize={{ base: "2xl", md: "28px" }}
                                                        lineHeight="1"
                                                        fontWeight="light"
                                                    >{navLink.attributes.label}</Text>
                                                </ListItem>
                                            </MotionBox>
                                        </Box>
                                    ))}
                                </List>
                                {/* <Button className="startButton"
                                    display={{md:"none"}}
                                    // w={'250px'}
                                    // h={"55px"}
                                    mt={4}
                                    fontFamily={'proxima-nova'}
                                    textTransform='uppercase'
                                    // style={{color: "white", fontSize: "16px"}}
                                    rounded={'none'}
                                    shadow='lg'
                                    onClick={() => urlReservation
                                        ? window.open(urlReservation, "_blank")
                                        : setOpenDialog(true)
                                    } > */}
                                {/* <Flex mt={8} w="100%" justifyContent={"center"}>
                                    <Button className="startButton" aria-label="startButton" rounded="full" fontWeight={'bold'} 
                                        size="lg" px="12" onClick={() => urlReservation
                                            ? window.open(urlReservation, "_blank")
                                            : setOpenDialog(true)
                                        }
                                    >
                                        Réserver
                                    </Button>
                                </Flex> */}
                            </Box>
                            <Flex
                                justifyContent={"center"}
                                position="absolute"
                                bottom={0}
                                left={0}
                                w="100%"
                                gap={3}
                                p={8}
                            >
                                {dataSocials.map((social, idx) => {
                                    return (
                                        <MotionBox key={idx}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 1.5 + 0.3 * idx}}
                                        >
                                            <a
                                                key={social.id}
                                                href={social.attributes.label || "#"}
                                                target="_blank"
                                            >
                                                <Text
                                                    fontSize={{base:'md', md:'lg'}}
                                                    className="text-primary"
                                                >{social.attributes.label}</Text>
                                            </a>
                                            <Text
                                                fontSize={{base:'md', md:'lg'}}
                                                className="text-primary"
                                                _last={{ display: 'none' }}
                                            >/</Text>
                                        </MotionBox>
                                    )
                                })}
                            </Flex>
                            <CloseIcon
                                position="absolute"
                                top={4}
                                left={4}
                                color="#D7A989"
                                display={{ md: 'none' }}
                                zIndex={3100}
                                onClick={onClose} />
                            <MotionBox
                                display={{base: 'none', md: 'initial'}}
                                initial={{ x: 42}}
                                animate={{ x: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                position="absolute"
                                right={"20px"}
                                top={20}
                                mr={-4}
                                color="white"
                                zIndex={3100}
                            >
                                <HStack
                                    type="button"
                                    spacing={4}
                                    p={3}
                                    transform={"rotate(-90deg)"}
                                    onClick={onClose}
                                    cursor="pointer"
                                    marginRight="-20px"
                                >
                                    <Text
                                        textAlign={"center"}
                                        textTransform={'uppercase'}
                                        fontWeight={'light'}
                                        pb={0}
                                        fontSize="xs"
                                    >{(locale && locale !== 'fr-FR') ? "Close" : "Fermer"}</Text>
                                    <CloseIcon transform={'rotate(90deg)'} />
                                </HStack>
                            </MotionBox>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}