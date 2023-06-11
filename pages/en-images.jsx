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

const EnImages = ({ seo, locale }) => {
    const [loadChambre, setLoadChambre] = useState(true)
    const [loadSalon, setLoadSalon] = useState(false)
    const [loadSalleDeBain, setLoadSalleDeBain] = useState(false)
    const [loadCuisine, setLoadCuisine] = useState(false)
    const { error, isLoading, data } = useGetEnImagesPage(locale)
    const {
        error: errorChambre,
        isLoading: isLoadingChambre,
        data: dataChambre
    } = useGetGalerieChambre(loadChambre, locale)
    const {
        error: errorSalon,
        isLoading: isLoadingSalon,
        data: dataSalon
    } = useGetGalerieSalon(loadSalon, locale)
    const {
        error: errorSalleDeBain,
        isLoading: isLoadingSalleDeBain,
        data: dataSalleDeBain
    } = useGetGalerieSalleDeBain(loadSalleDeBain, locale)
    const {
        error: errorCuisine,
        isLoading: isLoadingCuisine,
        data: dataCuisine
    } = useGetGalerieCuisine(loadCuisine, locale)
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
            {data &&
                <>
                    <EnImagesHeading data={data} />
                    <Flex
                        py={20}
                        w="100%"
                        justifyContent={"center"}
                        fontFamily={"proxima-nova"}
                    >
                        <Flex w={{ base: '90vw', md: '70vw' }} cursor="pointer" zIndex={1100} flexWrap={'wrap'}>
                            <Box align="center" w={{ base: '50%', lg: "25%" }} fontFamily={"proxima-nova"}>
                                <Text
                                    fontSize={{ base: 'md', lg: "lg" }}
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
                                    _hover={{ backgroundColor: "#D7A989" }}
                                >{locale && locale !== 'fr-FR' ? "Bedroom" : "La Chambre"}</Text>
                            </Box>
                            <Box align="center" w={{ base: '50%', lg: "25%" }}>
                                <Text
                                    fontSize={{ base: 'md', lg: "lg" }}
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
                                    _hover={{ backgroundColor: "#D7A989" }}
                                >{locale && locale !== 'fr-FR' ? "Living room" : "Le Salon"}</Text>
                            </Box>
                            <Box align="center" w={{ base: '50%', lg: "25%" }}>
                                <Text
                                    fontSize={{ base: 'md', lg: "lg" }}
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
                                    _hover={{ backgroundColor: "#D7A989" }}
                                >{locale && locale !== 'fr-FR' ? "Bathroom" : "La salle de bain"}</Text>
                            </Box>
                            <Box align="center" w={{ base: '50%', lg: "25%" }}>
                                <Text
                                    fontSize={{ base: 'md', lg: "lg" }}
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
                                    _hover={{ backgroundColor: "#D7A989" }}
                                >{locale && locale !== 'fr-FR' ? "Kitchen" : "La cuisine"}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </>
            }
            {( loadChambre && isLoadingChambre) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadChambre && dataChambre) &&
                <>
                    <Box w="100%" mb={24}>
                        <SliderImage datas={dataChambre} />
                    </Box>
                    <Text fontFamily={"proxima-nova"} letterSpacing={"wider"} fontWeight={'light'} fontSize='xl' color="white" align="center" p="8">{data.attributes.bedroomDesc}</Text>
                </>
            }
            {( loadSalon && isLoadingSalon) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadSalon && dataSalon) &&
                <>
                    <Box w="100%" mb={24}>
                        <SliderImage datas={dataSalon} />
                    </Box>
                    <Text fontFamily={"proxima-nova"} letterSpacing={"wider"} fontWeight={'light'} fontSize='xl' color="white" align="center" p="8">{data.attributes.chambreDesc}</Text>
                </>
            }
            {( loadSalleDeBain && isLoadingSalleDeBain) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadSalleDeBain && dataSalleDeBain) &&
                <>
                    <Box w="100%" mb={24}>
                        <SliderImage datas={dataSalleDeBain} />
                    </Box>
                    <Text fontFamily={"proxima-nova"} letterSpacing={"wider"} fontWeight={'light'} fontSize='xl' color="white" align="center" p="8">{data.attributes.bathroomDesc}</Text>
                </>
            }
            {( loadCuisine && isLoadingCuisine) &&
                <Flex h="100vh" justifyContent={"center"} w="100%">
                    <Spinner size="xl" color="white" />
                </Flex>
            }
            {(loadCuisine && dataCuisine) &&
                <>
                    <Box w="100%" mb={24}>
                        <SliderImage datas={dataCuisine} />
                    </Box>
                    <Text fontFamily={"proxima-nova"} letterSpacing={"wider"} fontWeight={'light'} fontSize='xl' color="white" align="center" p="8">{data.attributes.kitchenDesc}</Text>
                </>
            }
            <ByLuxuriaCard locale={locale} />
        </>
    )
}

export async function getServerSideProps({locale}) {
  // Run API calls in parallel
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/en-images-page?populate=seo&[populate][0]=seo.shareImage${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const enImagesRes = await res.json()

  return {
    props: {
        seo: enImagesRes.data.attributes.seo,
        locale: locale
    },
    // revalidate: 1,
  };
}

export default EnImages;