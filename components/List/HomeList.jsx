import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { getStrapiMedia } from "../../lib/media"

const MotionFlex = motion(Flex)
export const HomeList = ({img, title, list}) => {
    return (
        <Box w="100%" border="1px solid #D7A989">
            <Flex
                w="100%"
                h="250px"
                align="center"
                justifyContent={"center"}
                bgImage={getStrapiMedia(img)}
                bgSize="cover"
                filter='grayscale(60%)'
                bgPosition='center'
            >
                <Heading
                    textAlign={'center'}
                    as="h2"
                    size='xl'
                    fontWeight={'normal'}
                    fontFamily="meno-banner"
                    color="white"
                >{title}</Heading>
            </Flex>
            {list && list.map((jeu) => {
                return(
                    <MotionFlex
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 0.5, delay: 0.3}}
                        viewport={{ once: true }}
                        key={jeu.id}
                        w="100%"
                        gap={{base:4, md:8}}
                        align="center"
                        py={4}
                        px={{base:4, md:8}}
                        borderTop="1px solid #D7A989"
                        fontFamily={"proxima-nova"}
                    >
                        <Image
                            display={{md:"none"}}
                            width={"25px"}
                            height={"25px"}
                            alt=""
                            src={getStrapiMedia(jeu?.attributes.icon)}
                        />
                        <Image
                            display={{base:"none", md:"initial"}}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                            src={getStrapiMedia(jeu?.attributes.icon)}
                        />
                        <Text color="white" fontWeight={"light"}>{jeu?.attributes.label}</Text>
                    </MotionFlex>
                )
            })}
        </Box>
    )
}