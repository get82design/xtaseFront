import { Box, Center, Heading, IconButton, Image, Stack, Text } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getStrapiMedia } from "../../lib/media";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

export const SliderImage = ({ datas }) => {
    const [isMobile, setIsMobile] = useState(null)
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsMobile("mobile")
        } else {
            setIsMobile('desktop')
        }
    }, [])
    return (
        <>
            {isMobile === "desktop" &&
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    autoPlay={true}
                    showIndicators={false}
                    transitionTime={800}
                    interval={5000}
                    stopOnHover={true}
                    showThumbs={false}
                    infiniteLoop
                    renderArrowPrev={(onClickHandler) => (
                        <IconButton
                            variant='outline'
                            onClick={onClickHandler}
                            aria-label='prev-img'
                            fontSize='20px'
                            position="absolute"
                            top={'calc(40% - 15px)'}
                            left={"36px"}
                            zIndex={2}
                            rounded={'full'}
                            icon={<MdKeyboardArrowLeft />}
                        />
                    )}
                    renderArrowNext={(onClickHandler) => (
                        <IconButton
                            variant='outline'
                            onClick={onClickHandler}
                            aria-label='next-img'
                            fontSize='20px'
                            position="absolute"
                            top={'calc(40% - 15px)'}
                            right={"36px"}
                            zIndex={2}
                            rounded={'full'}
                            icon={<MdKeyboardArrowRight />}
                        />
                    )}
                >
                    {datas && datas.map((data, idx) => {
                        return (
                            <>
                                <Image
                                    key={idx}
                                    alt=""
                                    src={getStrapiMedia(data.attributes.img)}
                                    height="100vh"
                                    width="auto"
                                />
                                <Center>
                                    <Stack w="70vw" spacing={4} my={8}>
                                        <Heading
                                            as="h3"
                                            fontFamily={'meno-banner'}
                                            size='xl'
                                            color="white"
                                        >{data.attributes.title}</Heading>
                                        <Text fontSize='xl' color="white">{data.attributes.desc}</Text>
                                    </Stack>
                                </Center>
                            </>
                        )
                    })}
                </Carousel>
            }
            {isMobile === "mobile" &&
                <Stack w="100%" align={"center"} spacing={8}>
                    {datas && datas.map((data, idx) => {
                        return (
                            <Image
                                key={idx}
                                alt=""
                                src={getStrapiMedia(data.attributes.img)}
                                w='90vw'
                                h='auto'
                            />
                        )
                    })}
                </Stack>
            }
        </>
    )
}