import { ByLuxuriaCard } from '../components/Section/ByLuxuriaCard'
import { MapAndContact } from '../components/Section/MapAndContact'
import Seo from './../components/Seo/Seo'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useGetHomepage } from './../hook/hook'
import { Flex, Spinner } from '@chakra-ui/react'

import { HomeHeading } from '../components/Heading/HomeHeading'
import { Concept } from '../components/Section/Concept'
import { ListHomeList } from '../components/List/ListHomeList'
import { EnImagesSection } from '../components/Section/EnImagesSection'
import { useEffect, useState } from 'react'
import { VideoSection } from '../components/Section/VideoSection'

const Home = ({ seo, locale }) => {
  const [localeInView, setLocaleInView] = useState(null)
  const { error, isLoading, data } = useGetHomepage(localeInView)

  useEffect(() => {
    if (locale) {
      setLocaleInView(locale)
    }
  }, [locale])

  if (isLoading) {
    return (
      <Flex alignItems={"center"} h="100vh" justifyContent={"center"} w="100%">
        <Spinner size="xl" color="white" />
      </Flex>
    )
  }

  return (
    <>
      {/* SEO */}
      <Seo seo={seo} />

      {/*Mini Header */}
      <Flex
        w="100%"
        // h="196px"
        h={{base: "100px", md: "130px"}}
        justifyContent={'center'}
        p={8}
        bgGradient="radial(#061B61, #0C0023 60%)"
      ></Flex>
      {data &&
      <>
        <HomeHeading data={data?.attributes} />
        
        {/* BgVideo */}
        <VideoSection data={data?.attributes} />

        <Concept data={data?.attributes} />

        {/* En Images */}
        <EnImagesSection data={data?.attributes} />

        {/* LISTS */}
        <ListHomeList data={data?.attributes} locale={locale} />

        {/* MapAndContact */}
        <MapAndContact locale={locale} />

        {/* Card BY LUXURIA */}
        <ByLuxuriaCard locale={locale} />
      </>
      }

    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  // Run API calls in parallel
  const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/homepage?populate=seo&[populate][0]=seo.shareImage${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
  const homepageRes = await res.json()

  return {
    props: {
      seo: homepageRes.data.attributes.seo,
      locale: locale
    },
    // revalidate: 1,
  };
}

export default Home;
