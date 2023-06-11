import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SliderHeader = ({ slides }) => {
    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            transitionTime={800}
            interval={5000}
            stopOnHover={true}
            showThumbs={false}
            infiniteLoop>
            {slides && slides.map((slide, idx) => {
                return (
                    <Box w="100vw" h="80vh" bgImage={slide.image} bgSize={"cover"} bgPosition="center" bgRepeat="no-repeat" />
                )
            })}
        </Carousel>
    )
}


                    {/* <Image key={idx} alt="" src={slide.image} height="70vh" width="100vw" /> */}