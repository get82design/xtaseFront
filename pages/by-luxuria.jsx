import { Box, Flex, Spinner } from "@chakra-ui/react";
import { ByLuxuriaHeading } from "../components/Heading/ByLuxuriaHeading";
import { ByLuxuriaCard } from "../components/Section/ByLuxuriaCard";
import { ByLuxuriaSection } from "../components/Section/ByLuxuriaSection";
import { MapAndContact } from "../components/Section/MapAndContact";
import Seo from "../components/Seo/Seo";
import { useGetByLuxuriaPage } from "../hook/hook";
import { fetchAPI } from "../lib/api";
import { VideoSection } from "../components/Section/VideoSection";

const ByLuxuria = ({ seo, locale }) => {
  const { error, isLoading, data } = useGetByLuxuriaPage(locale)
  if (isLoading) {
    return (
      <Flex alignItems={"center"} h="100vh" justifyContent={"center"} w="100%">
        <Spinner size="xl" color="white" />
      </Flex>
    )
  }
  console.log('data', data)
  return (
    <>
      <Seo seo={seo} />
      {data &&
      <>
        <ByLuxuriaHeading data={data} />

        <ByLuxuriaSection data={data} />  

        <MapAndContact locale={locale} />

        <ByLuxuriaCard locale={locale} />
      </>
      }
    </>
  )
}

export async function getServerSideProps({ locale }) {
  // Run API calls in parallel
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/by-luxuria-page?populate=seo&[populate][0]=seo.shareImage${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const byLuxuriaRes = await res.json()
  // const [ byLuxuriaRes] = await Promise.all([
  //   fetchAPI("/by-luxuria-page", {
  //     populate: {
  //       seo: { populate: "*" },
  //     },
  //   }, locale),
  // ]);

  return {
    props: {
      seo: byLuxuriaRes.data.attributes.seo,
      locale: locale
    },
    // revalidate: 1,
  };
}

export default ByLuxuria;