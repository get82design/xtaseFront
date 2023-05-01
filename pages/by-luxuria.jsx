import { Flex, Spinner } from "@chakra-ui/react";
import { ByLuxuriaHeading } from "../components/Heading/ByLuxuriaHeading";
import { ByLuxuriaCard } from "../components/Section/ByLuxuriaCard";
import { ByLuxuriaSection } from "../components/Section/ByLuxuriaSection";
import { MapAndContact } from "../components/Section/MapAndContact";
import Seo from "../components/Seo/Seo";
import { useGetByLuxuriaPage } from "../hook/hook";
import { fetchAPI } from "../lib/api";

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

                <ByLuxuriaSection data={data} />

                <MapAndContact locale={locale} />

                <ByLuxuriaCard locale={locale} />
            </>
            }
        </>
    )
}

export const getServerSideProps = async({ locale }) => {
  // Run API calls in parallel
  const [ byLuxuriaRes] = await Promise.all([
    fetchAPI("/by-luxuria-page", {
      populate: {
        seo: { populate: "*" },
      },
    }, locale),
  ]);

  return {
    props: {
      seo: byLuxuriaRes.data.attributes.seo,
      locale: locale
    },
    revalidate: 1,
  };
}

export default ByLuxuria;