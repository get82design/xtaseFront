import { Box, Flex, Spinner } from "@chakra-ui/react";
import { ByLuxuriaHeading } from "../components/Heading/ByLuxuriaHeading";
import { ByLuxuriaCard } from "../components/Section/ByLuxuriaCard";
import { ByLuxuriaSection } from "../components/Section/ByLuxuriaSection";
import { MapAndContact } from "../components/Section/MapAndContact";
import Seo from "../components/Seo/Seo";
import { useGetByLuxuriaPage } from "../hook/hook";
import { getStrapiMedia } from "../lib/media";

const ByLuxuria = ({ seo, locale }) => {
  const { error, isLoading, data } = useGetByLuxuriaPage(locale)
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
      {data &&
      <>
        <ByLuxuriaHeading data={data} />

        <ByLuxuriaSection data={data} locale={locale} />  

        <Box w="100%" h="100vh" bgImage={getStrapiMedia(data.attributes.bgImage)}></Box>

        <MapAndContact locale={locale} />

        <ByLuxuriaCard locale={locale} />
      </>
      }
    </>
  )
}

export async function getServerSideProps({ locale }) {
  // Run API calls in parallel
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/by-luxuria-page?populate=seo&[populate][0]=seo.shareImage${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const byLuxuriaRes = await res.json()

  return {
    props: {
      seo: byLuxuriaRes.data.attributes.seo,
      locale: locale
    },
  };
}

export default ByLuxuria;