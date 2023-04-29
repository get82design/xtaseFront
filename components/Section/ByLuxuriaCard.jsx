import { useGetCardByLuxuria } from "../../hook/hook"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionText = motion(Text)
const MotionHeading = motion(Heading)
export const ByLuxuriaCard = () => {
    const { data } = useGetCardByLuxuria()
    return (
        <Flex
            w='100%'
            alignItems={'center'}
            flexDirection={'column'}
            pt={{base:12, md:24}}
            pb={{base:24, md:48}}
            px={8}
            gap={8}
        >
            <MotionHeading
                initial={{ filter:"blur(10px)" }}
                whileInView={{ filter:"blur(0px)" }}
                transition={{duration: 1,}}
                viewport={{ once: true }}
                pb={4}
                px={8}
                width={{base:'100vw', md:'70vw'}}
                textAlign={'center'}
                fontWeight={'normal'}
                fontFamily="meno-banner"
                as='h2'
                size='2xl'
                color="white"
            >{data?.attributes.title}</MotionHeading>
            <Box w={{base:'100vw', md:'70vw'}} px={8}>
                <MotionText
                    initial={{ scale: 0, filter:"blur(10px)" }}
                    whileInView={{ scale: 1, filter:"blur(0px)" }}
                    transition={{duration: 1, delay: 0.5}}
                    viewport={{ once: true }}
                    fontSize={{base:'md', md:'xl'}}
                    textAlign={'center'}
                    py={2}
                    color="white"
                >{data?.attributes.contentOne}</MotionText>
                <MotionText
                    initial={{ scale: 0, filter:"blur(10px)" }}
                    whileInView={{ scale: 1, filter:"blur(0px)" }}
                    transition={{duration: 1, delay: 1}}
                    viewport={{ once: true }}
                    fontSize={{base:'md', md:'xl'}}
                    textAlign={'center'}
                    py={2}
                    color="white"
                >{data?.attributes.contentTwo}</MotionText>
            </Box>
        </Flex>
    )
}