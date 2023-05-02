import { ByLuxuriaCard } from '../components/Section/ByLuxuriaCard'
import { MapAndContact } from '../components/Section/MapAndContact'
import Seo from './../components/Seo/Seo'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useGetHomepage } from './../hook/hook'
import { fetchAPI } from './../lib/api'
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { HomeHeading } from '../components/Heading/HomeHeading'
import { Concept } from '../components/Section/Concept'
import { ListHomeList } from '../components/List/ListHomeList'
import { EnImagesSection } from '../components/Section/EnImagesSection'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { VideoSection } from '../components/Section/VideoSection'

const MotionHeading = motion(Heading)
const MotionBox = motion(Box)

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

  console.log('home', seo, data, locale)
  return (
    <>
      {/* SEO */}
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
  const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/homepage?populate=*${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
  const homepageRes = await res.json()
  // const [ homepageRes] = await Promise.all([
  //   fetchAPI(`/homepage`, {
  //     // populate: "*",
  //     populate: {
  //       seo: { populate: "*" },
  //     },
  //   }, locale),
  // ]);

  // console.log('homepage', globalRes)
  return {
    props: {
      // home: homepageRes.data.attributes,
      seo: homepageRes.data.attributes.seo,
      locale: locale
      // ...await serverSideTranslations(locale, ['common']),
    },
    // revalidate: 1,
  };
}

export default Home;
