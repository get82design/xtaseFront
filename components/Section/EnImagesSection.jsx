import { Box, Button, Flex, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { getStrapiMediaInArray } from "../../lib/media"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FreeMode, Navigation } from "swiper";
import { ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router";
import Link from "next/link";

const MotionHeading = motion(Heading)
const MotionBox = motion(Box)

export const EnImagesSection = ({ data }) => {
    const [nbImg, setNbImg] = useState(0)
    const router = useRouter()
    const locale = router.locale

    useEffect(() => {
        if (window.innerWidth < 769) {
            setNbImg(1)
        }
        if (window.innerWidth > 768) {
            setNbImg(3)
        }
    }, [])
    return (
        <Box w="100%" px={{base:4, md:8, lg:16}} py={24}>
            <Stack w='100%' align="center" spacing={0}>
                <MotionHeading
                    initial={{ filter:"blur(10px)" }}
                    whileInView={{ filter:"blur(0px)" }}
                    transition={{duration: 1}}
                    viewport={{ once: true }}
                    pb={4}
                    maxWidth={'70vw'}
                    textAlign={'center'}
                    fontWeight={'normal'}
                    fontFamily="meno-banner"
                    as='h2'
                    size='2xl'
                    color="white"
                >{data?.galleryTitle}</MotionHeading>
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
                    fontSize="18px"
                    color="#D7A989"
                >{data?.gallerySubTitle}</MotionHeading>
            </Stack>
            {data?.galleryImgs &&
            <Box py={16}> 
                <Swiper
                    id="my-gallery"
                    slidesPerView={nbImg}
                    spaceBetween={10}
                    grabCursor={true}
                    freeMode={true}
                    loop={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                >
                    {data?.galleryImgs.data.map((img, idx) => {
                    return (
                        <SwiperSlide key={idx}><Image src={getStrapiMediaInArray(img)} alt="" loading="lazy" /></SwiperSlide>
                    )
                    })}
                </Swiper>
            </Box>
            }
            <Flex w="100%" justifyContent={'flex-end'}>
                <Link href={locale && locale !== 'fr-FR' ? "/en/en-images" : "/en-images"}>
                    <Button
                        aria-label="playForward"
                        variant="unstyled"
                        size={{base:'md', md:"lg"}}
                        role="group"
                        // onClick={() => urlReservation
                        //     ? window.open(urlReservation, "_blank")
                        //     : setOpenDialog(true)
                        // }
                    >
                        <HStack spacing="3" position="relative" fontWeight={'light'}>
                            <Text color="#D7A989">{locale && locale !== 'fr-FR' ? "SEE MORE" : "VOIR PLUS"}</Text>
                            <Box _groupHover={{opacity:0}} transition="opacity 0.5s">
                                <MotionBox mt="-1"
                                    initial={{x:0}}
                                    animate={{x:[-5, 0, -5]}}
                                    transition={{duration: 0.5, repeat: Infinity, ease: "linear"}}
                                >
                                    <ChevronRightIcon color="#D7A989"/>
                                </MotionBox>
                            </Box>
                            <ArrowForwardIcon opacity="0" color="#D7A989" _groupHover={{opacity:1}} transition="opacity 1s" position="absolute" top="1" right="1"/>
                        </HStack>
                        <Flex w="full" display="flex" justifyContent={"flex-end"}>
                            <Box w="full" h="1px" bgColor="#D7A989" transition="width 0.5s ease" _groupHover={{width:"0"}}></Box>
                        </Flex>
                    </Button>
                </Link>
            </Flex>
        </Box>
    )
}