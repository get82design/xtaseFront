import { Box, Button, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { useContext, useEffect, useRef, useState } from "react"
import { getStrapiMedia } from "../../lib/media"
import { MdKeyboardArrowRight } from "react-icons/md";
import { GlobalContext } from "../../pages/_app";
import { useDialogContext } from "../Dialog/DialogContext";

export const ByLuxuriaSection = ({ data }) => {
    const { urlReservation } = useContext(GlobalContext);
    const { setOpenDialog } = useDialogContext()
    const refHeight = useRef(null)
    const [height, setHeight] = useState(400)
    useEffect(() => {
        if (data) {
            const heightOfContent = refHeight.current.clientHeight + 100
            setHeight(heightOfContent)
        }
    }, [data])

    const DescElm = ({section}) => {
        return (
            <Stack
                spacing={4}
                px={4}
            >
                <Heading
                    size={{ base: 'sm', md: "md" }}
                    textTransform={'uppercase'}
                    className="text-primary"
                    fontWeight={"normal"}
                    mb={4}
                >{section.title}</Heading>
                <Text
                    color="white"
                    fontSize={{ base: 'sm', md: 'md' }}
                >{section.content}</Text>
                <Text
                    color="white"
                    fontSize={{ base: 'sm', md: 'md' }}
                >{section.contentTwo}</Text>
                <Box>
                    <Button
                        onClick={() => urlReservation
                            ? window.open(urlReservation, "_blank")
                            : setOpenDialog(true)
                        }
                        rightIcon={<MdKeyboardArrowRight />}
                        color="#D7A989"
                        textTransform={"uppercase"}
                        variant="link"
                    >Réserver</Button>
                </Box>
            </Stack>
        )
    }

    return (
        <Box
            w="100%"
            h={height}
            bgColor="#0C0023"
            position="relative"
            my={8}
        >
            <Center display={{base: 'none', lg: 'flex'}}>
                <Box height={height} w="1px" bgColor="#D7A989"></Box>
            </Center>
            <Stack
                spacing={{ base: 24, md: 60 }}
                position="absolute"
                top={{ md: 16 }}
                left={0}
                w='100%'
                px={{ base: 4, md: 8 }}
                py={{ base: 8, md: 24 }}
                align="center"
                ref={refHeight}
            >
                {data?.attributes.sectionOne &&
                    <Flex
                        gap={8}
                        w={{ base: '100vw', md: '80vw' }}
                        color='white'
                        align="center"
                        flexWrap={{ base: "wrap", lg: "nowrap" }}
                        px={4}
                    >
                        <Box w={{ base: '100%', lg: '45%' }}>
                            <DescElm section={data?.attributes.sectionOne} />
                        </Box>
                        <Box
                            w={{ base: '100%', lg: '55%' }}
                            bgImage={getStrapiMedia(data?.attributes.sectionOne.img)}
                            h={{ base: "300px", md: "452px" }}
                            bgSize="cover"
                        ></Box>
                    </Flex>
                    
                }
                {data?.attributes.sectionTwo &&
                    <Flex
                        gap={8}
                        w={{ base: '100vw', md: '80vw' }}
                        color='white'
                        align="center"
                        flexWrap={{ base: "wrap", lg: "nowrap" }}
                        px={4}
                    >
                        <Box
                            w={{ base: '100%', lg: '55%' }}
                            bgImage={getStrapiMedia(data?.attributes.sectionTwo.img)}
                            h={{ base: "300px", md: "452px" }}
                            bgSize="cover"
                        ></Box>
                        <Box w={{ base: '100%', lg: '45%' }}>
                            <DescElm section={data?.attributes.sectionTwo} />
                        </Box>
                    </Flex>
                }
                {data?.attributes.sectionThree &&
                    <Flex
                        gap={8}
                        w={{ base: '100vw', md: '80vw' }}
                        color='white'
                        align="center"
                        flexWrap={{ base: "wrap", lg: "nowrap" }}
                        px={4}
                    >
                        <Box w={{ base: '100%', lg: '45%' }}>
                            <DescElm section={data?.attributes.sectionThree} />
                        </Box>
                        <Box
                            w={{ base: '100%', lg: '55%' }}
                            bgImage={getStrapiMedia(data?.attributes.sectionThree.img)}
                            h={{ base: "300px", md: "452px" }}
                            bgSize="cover"
                        ></Box>
                    </Flex>
                }
            </Stack>
        </Box>
    )
}