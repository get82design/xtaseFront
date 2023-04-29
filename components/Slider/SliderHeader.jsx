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
                    <Image key={idx} alt="" src={slide.image} height="100vh" width="auto" />
                )
            })}
        </Carousel>
    )
}