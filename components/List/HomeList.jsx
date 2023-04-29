import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
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
                    >
                        <Image
                            width={{ base: "25px", md: "50px" }}
                            height={{ base: "25px", md: "50px" }}
                            alt=""
                            src={getStrapiMedia(jeu?.attributes.icon)}
                        />
                        <Text color="white">{jeu?.attributes.label}</Text>
                    </MotionFlex>
                )
            })}
        </Box>
    )
}