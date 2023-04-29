import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionBox = motion(Box)

export const Concept = ({data}) => {
    const refConcept = useRef(null)
    const [heightConcept, setHeightConcept] = useState(0)
    
    useEffect(() => {
        if (data && refConcept) {
            setHeightConcept(refConcept.current.offsetHeight)
        }
    }, [data, refConcept])
    
    return (
        <Flex
            justifyContent={'center'}
            width='100%'
            py={24}
            bgGradient="radial(#061B61, #0C0023 60%)"
            position="relative"
        >
            <Stack
                ref={refConcept}
                w={{base:"90vw", md: "70vw"}}
                border={'1px solid #D7A989'}
                px={{base:4, md:20}}
                py={{base:8, md:16}}
                rounded='xl'
                position={'relative'}
                spacing={4}
            >
            <MotionHeading
                initial={{ filter:"blur(10px)" }}
                whileInView={{ filter:"blur(0px)" }}
                transition={{duration: 1}}
                viewport={{ once: true }}
                pb={4}
                maxWidth={{base:'80vw', md:'70vw'}}
                textAlign={'center'}
                fontWeight={'normal'}
                fontFamily="meno-banner"
                as='h2'
                size={{base:'xl', md:'2xl'}}
                color="white"
            >{data?.conceptTitle}</MotionHeading>
            <MotionText
                initial={{ scale: 0, filter:"blur(10px)" }}
                whileInView={{ scale: 1, filter:"blur(0px)" }}
                transition={{duration: 1, delay: 0.5}}
                viewport={{ once: true }}
                fontSize={{base:'md', md:'xl'}}
                textAlign={'center'}
                py={2}
                color="white"
            >{data?.conceptContentOne}</MotionText>
            <MotionText
                initial={{ scale: 0, filter:"blur(10px)" }}
                whileInView={{ scale: 1, filter:"blur(0px)" }}
                transition={{duration: 1, delay: 1}}
                viewport={{ once: true }}
                fontSize={{base:'md', md:'xl'}}
                textAlign={'center'}
                pt={2}
                color="white"
            >{data?.conceptContentTwo}</MotionText>
            </Stack>
            <MotionBox
                display={{base: 'none', md:'initial'}}
                initial={{ transform:"rotate(0deg)" }}
                whileInView={{ transform:"rotate(-3deg)" }}
                transition={{duration: 0.3, delay: 2}}
                viewport={{ once: true }}
                rounded="lg"
                position={'absolute'}
                w={{base:"90vw", md:'70vw'}}
                h={`${heightConcept}px`}
                border="1px dashed #D7A989"
            ></MotionBox>
            <MotionBox
                display={{md:'none'}}
                initial={{ transform:"rotate(0deg)" }}
                whileInView={{ transform:"rotate(-2deg)" }}
                transition={{duration: 0.3, delay: 2}}
                viewport={{ once: true }}
                rounded="lg"
                position={'absolute'}
                w={{base:"90vw", md:'70vw'}}
                h={`${heightConcept}px`}
                border="1px dashed #D7A989"
            ></MotionBox>
        </Flex>
    )
}