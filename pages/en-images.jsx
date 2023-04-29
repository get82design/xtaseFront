import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { EnImagesHeading } from "../components/Heading/EnImagesHeading";
import { ByLuxuriaCard } from "../components/Section/ByLuxuriaCard";
import Seo from "../components/Seo/Seo"
import { SliderImage } from "../components/Slider/SliderImage";
import {
    useGetEnImagesPage,
    useGetGalerieChambre,
    useGetGalerieCuisine,
    useGetGalerieSalleDeBain,
    useGetGalerieSalon
} from "../hook/hook";
import { fetchAPI } from "../lib/api";

const EnImages = ({ seo }) => {
    const [loadChambre, setLoadChambre] = useState(true)
    const [loadSalon, setLoadSalon] = useState(false)
    const [loadSalleDeBain, setLoadSalleDeBain] = useState(false)
    const [loadCuisine, setLoadCuisine] = useState(false)
    const { error, isLoading, data } = useGetEnImagesPage()
    const {
        error: errorChambre,
        isLoading: isLoadingChambre,
        data: dataChambre
    } = useGetGalerieChambre(loadChambre)
    const {
        error: errorSalon,
        isLoading: isLoadingSalon,
        data: dataSalon
    } = useGetGalerieSalon(loadSalon)
    const {
        error: errorSalleDeBain,
        isLoading: isLoadingSalleDeBain,
        data: dataSalleDeBain
    } = useGetGalerieSalleDeBain(loadSalleDeBain)
    const {
        error: errorCuisine,
        isLoading: isLoadingCuisine,
        data: dataCuisine
    } = useGetGalerieCuisine(loadCuisine)

    if (isLoading) {
        return (
            <Flex alignItems={"center"} h="100vh" justifyContent={"center"} w="100%">
                <Spinner size="xl" color="white" />
            </Flex>
        )
    }
    return (
        <>
            <Seo seo={seo} />
            {/*Mini Header */}
            <Flex
                w="100%"
                // h="196px"
                h={{base: "100px", md: "150px"}}
                justifyContent={'center'}
                p={8}
                bgGradient="radial(#061B61, #0C0023 60%)"
            ></Flex>
            <EnImagesHeading data={data} />
            <Flex
                py={32}
                w="100%"
                justifyContent={"center"}
            >
                <Flex w={{ base: '90vw', md:'70vw'}} cursor="pointer" zIndex={1100} flexWrap={'wrap'}>
                    <Box align="center" w={{base:'50%', lg:"25%"}} fontFamily={"proxima-nova"}>
                        <Text
                            fontSize={{base:'md', lg:"lg"}}
                            textTransform={"uppercase"}
                            py={3}
                            border="1px solid #D7A989"
                            textAlign="center"
                            color="white"
                            onClick={() => {
                                setLoadSalleDeBain(false)
                                setLoadCuisine(false)
                                setLoadSalon(false)
                                setLoadChambre(true)
                            }}
                            bgColor={loadChambre ? "#D7A989" : "transparent"}
                            _hover={{backgroundColor: "#D7A989"}}
                        >La Chambre</Text>
                    </Box>
                    <Box align="center" w={{base:'50%', lg:"25%"}}>
                        <Text
                            fontSize={{base:'md', lg:"lg"}}
                            textTransform={"uppercase"}
                            py={3}
                            border="1px solid #D7A989"
                            textAlign="center"
                            color="white"
                            onClick={() => {
                                setLoadSalleDeBain(false)
                                setLoadCuisine(false)
                                setLoadChambre(false)
                                setLoadSalon(true)
                            }}
                            bgColor={loadSalon ? "#D7A989" : "transparent"}
                            _hover={{backgroundColor: "#D7A989"}}
                        >Le salon</Text>
                    </Box>
                    <Box align="center" w={{base:'50%', lg:"25%"}}>
                        <Text
                            fontSize={{base:'md', lg:"lg"}}
                            textTransform={"uppercase"}
                            py={3}
                            border="1px solid #D7A989"
                            textAlign="center"
                            color="white"
                            onClick={() => {
                                setLoadCuisine(false)
                                setLoadChambre(false)
                                setLoadSalon(false)
                                setLoadSalleDeBain(true)
                            }}
                            bgColor={loadSalleDeBain ? "#D7A989" : "transparent"}
                            _hover={{backgroundColor: "#D7A989"}}
                        >La salle de bain</Text>
                    </Box>
                    <Box align="center" w={{base:'50%', lg:"25%"}}>
                        <Text
                            fontSize={{base:'md', lg:"lg"}}
                            textTransform={"uppercase"}
                            py={3}
                            border="1px solid #D7A989"
                            textAlign="center"
                            color="white"
                            onClick={() => {
                                setLoadChambre(false)
                                setLoadSalon(false)
                                setLoadSalleDeBain(false)
                                setLoadCuisine(true)
                            }}
                            bgColor={loadCuisine ? "#D7A989" : "transparent"}
                            _hover={{backgroundColor: "#D7A989"}}
                        >La cuisine</Text>
                    </Box>
                </Flex>
            </Flex>
            {( loadChambre && isLoadingChambre) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadChambre && dataChambre) &&
                <Box w="100%" mb={24}>
                    <SliderImage datas={dataChambre} />
                </Box>
            }
            {( loadSalon && isLoadingSalon) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadSalon && dataSalon) &&
                <Box w="100%" mb={24}>
                    <SliderImage datas={dataSalon} />
                </Box>
            }
            {( loadSalleDeBain && isLoadingSalleDeBain) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadSalleDeBain && dataSalleDeBain) &&
                <Box w="100%" mb={24}>
                    <SliderImage datas={dataSalleDeBain} />
                </Box>
            }
            {( loadCuisine && isLoadingCuisine) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadCuisine && dataCuisine) &&
                <Box w="100%" mb={24}>
                    <SliderImage datas={dataCuisine} />
                </Box>
            }
            <ByLuxuriaCard />
        </>
    )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [ enImagesRes] = await Promise.all([
    fetchAPI("/en-images-page", {
      populate: {
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      seo: enImagesRes.data.attributes.seo,
    },
    revalidate: 1,
  };
}

export default EnImages;