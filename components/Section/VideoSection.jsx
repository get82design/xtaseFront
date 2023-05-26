import { Box, Flex, Heading, Icon, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { getStrapiMedia } from "../../lib/media"
import {MdPlayArrow} from "react-icons/md"
import { useRef, useState } from "react"

const MotionHeading = motion(Heading)
const MotionStack = motion(Stack)
const variants = { opacity: { opacity: 0, transition: { duration: 0.5}}}
export const VideoSection = ({ data }) => {
    const [showTitle, setShowTitle] = useState(true)
    const refVideo = useRef(null)
    const play = (e) => {
        refVideo.current.play()
    }
    return (
        <>
            <Box w="100%" px={0} my={{base: 8, md:24}} position="relative">
                <video ref={refVideo} style={{width:'100%', height:"100vh"}} muted loop playsInline preload="auto">
                    <source src={getStrapiMedia(data.videoBg)} type="video/mp4" />
                </video>
                <Box position="absolute" w="100%" h="150px" bottom={0} left={0} bgGradient={'linear(to-t, #0C0023, transparent)'}></Box>
                <MotionStack
                    variants={variants}
                    animate={showTitle ? '' : 'opacity'}
                    w='100%'
                    align="center"
                    position="absolute"
                    top={{base:'20%', lg:"35%"}}
                    onClick={() => setShowTitle(false)}>
                    <MotionHeading
                        initial={{ filter:"blur(10px)" }}
                        whileInView={{ filter:"blur(0px)" }}
                        transition={{duration: 1}}
                        viewport={{ once: true }}
                        pb={0}
                        maxWidth={'70vw'}
                        textAlign={'center'}
                        fontWeight={'normal'}
                        fontFamily="meno-banner"
                        as='h2'
                        size={{base:"lg", md:'2xl'}}
                        color="white"
                    >{data?.backgroundVideo.titleOnVideo}</MotionHeading>
                    <MotionHeading
                        initial={{ scale: 0, filter:"blur(10px)" }}
                        whileInView={{ scale: 1, filter:"blur(0px)" }}
                        transition={{duration: 1, delay: 0.5}}
                        viewport={{ once: true }}
                        textAlign={'center'}
                        textTransform='uppercase'
                        letterSpacing={'widest'}
                        fontWeight={'normal'}
                        fontFamily="proxima-nova"
                        as='h3'
                        fontSize={{base: "16px", md:"18px"}}
                        color="#D7A989"
                    >{data?.backgroundVideo.subTitleOnVideo}</MotionHeading>
                    <Flex justifyContent={"center"} w="100%" pt={4}>
                        {/* <Box bgColor={"#D7A989"} rounded="full" px={4} py={1}>
                            <Icon w={8} h={8} color="white" as={MdPlayArrow} />
                        </Box> */}
                        <Box className="videoBgIcon" cursor="pointer" onClick={(e) => play()}>
                            <Icon w={{base: 8, md:16}} h={{base:8, md:16}} color="white" as={MdPlayArrow} />
                            <div className="oreoleVideoBgIcon"></div>
                        </Box>
                    </Flex>
                </MotionStack>
            </Box>
        </>
    )
}