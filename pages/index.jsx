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

const MotionHeading = motion(Heading)
const MotionBox = motion(Box)

const Home = ({ home }) => {
  const router = useRouter()
  const [locale, setLocale] = useState(router?.locale)
  const [datas, setDatas] = useState()
  const { error, isLoading, data } = useGetHomepage(locale)

  useEffect(() => {
    if (router.locale && data) {
      setDatas(data)
    }
  }, [router.locale, data])

  if (isLoading) {
    return (
      <Flex alignItems={"center"} h="100vh" justifyContent={"center"} w="100%">
        <Spinner size="xl" color="white" />
      </Flex>
    )
  }

  console.log('home', home)
  return (
    <>
      {/* SEO */}
      <Seo seo={home?.seo} />

      {/*Mini Header */}
      <Flex
        w="100%"
        // h="196px"
        h={{base: "100px", md: "150px"}}
        justifyContent={'center'}
        p={8}
        bgGradient="radial(#061B61, #0C0023 60%)"
      ></Flex>
      
      <HomeHeading data={home} />
      
      {/* BgVideo */}

      <Concept data={home} />

      {/* En Images */}
      <EnImagesSection data={home} />

      {/* LISTS */}
      <ListHomeList data={home} />

      {/* MapAndContact */}
      {/* <MapAndContact /> */}

      {/* Card BY LUXURIA */}
      {/* <ByLuxuriaCard /> */}

    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  // Run API calls in parallel
  const [ homepageRes] = await Promise.all([
    fetchAPI(`/homepage`, {
      populate: "*",
      // locale:locale
    }),
  ]);

  return {
    props: {
      home: homepageRes.data.attributes,
      // ...await serverSideTranslations(locale, ['common']),
    },
    // revalidate: 1,
  };
}

export default Home;
