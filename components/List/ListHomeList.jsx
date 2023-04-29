import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useGetListJeuxItems, useGetListSituationItems } from "../../hook/hook"
import { HomeList } from "./HomeList"

const MotionBox = motion(Box)
export const ListHomeList = ({ data }) => {
    const [isJeux, setIsJeux] = useState(null)
    const [isSituations, setIsSituations] = useState(null)
    const { data: listJeuxItems } = useGetListJeuxItems(true)
    const listJeux = listJeuxItems || []
    const { data: listSituationItems } = useGetListSituationItems(true)
    const listSituation = listSituationItems || []

    useEffect(() => {
        setIsJeux(true)
        if (window.screen.width > 767) {
            setIsSituations(true)
        } else {
            setIsSituations(false)
        }
    }, [])
    return (
        <>
            <Box w="100%" display={{md:"none"}}>
                <Flex w="100%" justifyContent={"center"}>
                <Flex w="90vw" zIndex={1000}>
                    <Box align="center" w="50%" fontFamily={"proxima-nova"}>
                    <Text
                        fontSize="md"
                        textTransform={"uppercase"}
                        py={3}
                        border="1px solid #D7A989"
                        textAlign="center"
                        color="white"
                        onClick={() => {
                            setIsSituations(false)
                            setIsJeux(true)
                        }}
                        bgColor={isJeux ? "#D7A989" : "transparent"}
                        _hover={{backgroundColor: "#D7A989"}}
                    >Aire de Jeux</Text>
                    </Box>
                    <Box align="center" w="50%" fontFamily={"proxima-nova"}>
                    <Text
                        fontSize="md"
                        textTransform={"uppercase"}
                        py={3}
                        border="1px solid #D7A989"
                        textAlign="center"
                        color="white"
                        onClick={() => {
                            setIsJeux(false)
                            setIsSituations(true)
                        }}
                        bgColor={isSituations ? "#D7A989" : "transparent"}
                        _hover={{backgroundColor: "#D7A989"}}
                    >Situations</Text>
                    </Box>
                </Flex>
                </Flex>
            </Box>
            <Flex w="100%" justifyContent={'center'} pt={{base:8, md:24}} pb={24}>
                <SimpleGrid w={{ base: '90vw', lg: '70vw' }} columns={{base:1, md:2}} spacing={4}>
                    {isJeux &&
                        <MotionBox
                            initial={{ x: -24, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <HomeList
                                title={data?.listJeuxTitle}
                                img={data?.listJeuxImg}
                                list={listJeux}
                            />
                        </MotionBox>
                    }
                    {isSituations &&
                        <MotionBox
                            initial={{ x: 24, opacity:0 }}
                            whileInView={{ x: 0, opacity:1}}
                            transition={{duration: 0.8}}
                            viewport={{ once: true }}
                        >
                            <HomeList
                                title={data?.listSituationTitle}
                                img={data?.listSituationImg}
                                list={listSituation} 
                            />
                        </MotionBox>
                    }
                </SimpleGrid>
            </Flex>
        </>
    )
}