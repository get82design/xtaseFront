import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { getStrapiMedia } from "../../lib/media"

const MotionFlex = motion(Flex)
const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
export const ByLuxuriaHeading = ({ data }) => {
    return (
        <Flex w='100%' justifyContent={"center"}>
            <MotionBox
                initial={{ filter:"blur(10px)" }}
                animate={{ filter:"blur(0px)" }}
                transition={{ duration: 1 }}
                w='80%'
                h='100vh'
                position='relative'
                bgImage={getStrapiMedia(data?.attributes.imgHero)}
                bgSize="cover"
                bgPosition="center"
            >
                <Box
                    position='absolute'
                    top={0}
                    left={0}
                    w='100%'
                    h="100vh"
                    bgGradient="radial(transparent, #0C0023 70%)"
                ></Box>
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
                    <MotionHeading
                        initial={{ scale: 0, filter:"blur(10px)" }}
                        animate={{ scale: 1, filter:"blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        textAlign={'center'}
                        fontFamily="meno-banner"
                        as='h1'
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
                        fontFamily="proxima-nova"
                        as='h2'
                        size={{base:'sm', md:'md'}}
                        color="white"
                    >{data?.attributes.hero.subTitle}</MotionHeading> 
                </Flex>  
                <MotionFlex
                    initail={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{delay: 0.5, duration: 1}}
                    position="absolute"
                    bottom={0}
                    left={0}
                    w="100%"
                    p={8}
                    justifyContent={'center'}
                >
                    <Text
                        color="white"
                        fontSize={{base:'sm', md:'lg'}}
                        textTransform={"uppercase"}
                    >Scroll to discover</Text>
                </MotionFlex>
            </MotionBox>
        </Flex>
    )
}