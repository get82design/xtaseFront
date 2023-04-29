import { Box, Heading, Image, Stack } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { getStrapiMediaInArray } from "../../lib/media"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FreeMode, Navigation } from "swiper";

const MotionHeading = motion(Heading)
export const EnImagesSection = ({ data }) => {
    const [nbImg, setNbImg] = useState(0)

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
            <Stack w='100%' align="center">
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
                    letterSpacing={'wider'}
                    fontWeight={'normal'}
                    fontFamily="proxima-nova"
                    as='h3'
                    size='md'
                    color="#D7A989"
                >{data?.gallerySubTitle}</MotionHeading>
            </Stack>
            {data?.galleryImgs &&
            <Box py={16}> 
                <Swiper
                    slidesPerView={nbImg}
                    spaceBetween={10}
                    freeMode={true}
                    loop={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                >
                    {data?.galleryImgs.data.map((img, idx) => {
                    return (
                        <SwiperSlide key={idx}><Image src={getStrapiMediaInArray(img)} alt="" /></SwiperSlide>
                    )
                    })}
                </Swiper>
            </Box>
            }
        </Box>
    )
}