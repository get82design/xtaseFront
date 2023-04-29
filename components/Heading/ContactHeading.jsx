import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { getStrapiMedia } from "../../lib/media"

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

export const ContactHeading = ({ data }) => {
    return (
        <Flex w='100%' justifyContent={"center"}>
            <Box
                    w='1000%'
                    h='80vh'
                    position='relative'
                    bgImage={getStrapiMedia(data?.attributes.imgHero)}
                    bgSize="cover"
                    bgPosition="center"
                    filter='grayscale(40%)'
                >
                    <Box
                        position='absolute'
                        top={0}
                        left={0}
                        w='100%'
                        h="80vh"
                        bgColor="#0C0023"
                        opacity={0.6}
                    ></Box>
                    <Box
                        position='absolute'
                        top={0}
                        left={0}
                        w='100%'
                        h="80vh"
                        bgGradient="radial(transparent, #0C0023 70%)"
                    ></Box>
                    <Flex
                        w="100%"
                        position="absolute"
                        h={{base: "100px", md: "196px"}}
                        bgGradient="radial(#FFFFFF, transparent 40%)"
                        opacity={0.2}
                    ></Flex>
                    <Flex
                        position={'absolute'}
                        top={{base:'35vh', md:'40vh'}}
                        left={0}
                        w='100%'
                        justifyContent={'center'}
                        align='center'
                        flexDirection={'column'}
                        gap={8}
                    >
                        <MotionBox display={{md: 'none'}}>
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
                        </MotionBox>
                        <MotionHeading
                            initial={{ scale: 0, filter:"blur(10px)" }}
                            animate={{ scale: 1, filter:"blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            textAlign={'center'}
                            fontFamily="meno-banner"
                            as='h1'
                            cursor="default"
                            size={'2xl'}
                            color="white"
                        >{data?.attributes.hero.title}</MotionHeading>  
                        <MotionHeading
                            initial={{ scale: 0, filter:"blur(10px)" }}
                            animate={{ scale: 1, filter:"blur(0px)" }}
                            transition={{ duration: 0.8, delay: 1 }}
                            width={{base:'70vw', md:'50vw'}}
                            textAlign={'center'}
                            fontWeight={'normal'}
                            textTransform="uppercase"
                            fontFamily="proxima-nova"
                            cursor="default"
                            as='h2'
                            size={{ base: 'sm', md: 'md' }}
                            color="#D7A989"    
                        >{data?.attributes.hero.subTitle}</MotionHeading> 
                    </Flex>
                </Box>
            </Flex>
    )
}