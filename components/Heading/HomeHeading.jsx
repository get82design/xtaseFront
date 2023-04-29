import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react";
import { getStrapiMediaInArray, getStrapiMedia } from "../../lib/media";
import { GlobalContext } from "../../pages/_app";
import { useDialogContext } from "../Dialog/DialogContext";
import { SliderHeader } from "../Slider/SliderHeader";

const MotionBox = motion(Box)
export const HomeHeading = ({data}) => {
  const { urlReservation } = useContext(GlobalContext);
  const { setOpenDialog } = useDialogContext()
  const [slideData, setSlideData] = useState([])
  useEffect(() => {
    if (data) {
      const imagesHeader = data.heroDesktopImgs.data.map((image) => (
        {image: getStrapiMediaInArray(image)}
      ))
      setSlideData(imagesHeader)
    }
  }, [data])
  return (
    <Box w='100%' h='100vh' position='relative' mb={16}>
      {/* slider */}
      <Box w="100%" display={{base:'none', md:'initial'}}>
        <SliderHeader slides={slideData} />
      </Box>
      <Box
        w="100%"
        h="100vh"
        display={{ md: 'none' }}
        bgSize="cover"
        bgImage={getStrapiMedia(data.heroMobileImg)}
      ></Box>
      {/* overlay sur slider */}
      <Box
        position='absolute'
        top={0}
        left={0}
        w='100%'
        h="100vh"
        bgGradient="radial(transparent, #0C0023 80%)"></Box>
      {/* Title */}
      {data &&
        <Flex
          position={'absolute'}
          top={{base:'15vh', md:'25vh'}}
          left={0}
          w='100%'
          justifyContent={'center'}
          align='center'
          flexDirection={'column'}
          gap={4}
        >
          <MotionBox
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 0.8}}
          >
            <Heading
              textAlign={'center'}
              fontFamily="meno-banner"
              as='h1'
              px={8}
              size={{base:'xl', md:'2xl'}}
              color="white"
            >{data?.hero.title}</Heading>  
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5}}
          >
            <Heading
              maxWidth={{base:'88vw', md:'50vw'}}
              textAlign={'center'}
              fontWeight={'normal'}
              fontFamily="proxima-nova"
              as='h2'
              size={{base:'sm', md:'md'}}
              color="white"
              >{data?.hero.subTitle}</Heading> 
          </MotionBox>
          <MotionBox
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{delay:1.2, duration: 0.3}}
          >
            <Button
              className="resaButton"
              w={{base:'250px', md:"330px"}}
              h={{base:"55px", md:"65px"}}
              mt={4}
              fontFamily={'proxima-nova'}
              textTransform='uppercase'
              style={{color: "white", fontSize: "16px"}}
              rounded={'none'}
              shadow='lg'
              onClick={() => urlReservation
                ? window.open(urlReservation, "_blank")
                : setOpenDialog(true)
              }
              >{data?.buttonResa.label}</Button>
          </MotionBox>
        </Flex> 
      }
    </Box>
  )
}