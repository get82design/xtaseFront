import { Box, Button, Center, Flex, Heading, Input, Spinner, Stack, Text, Textarea } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Seo from "../components/Seo/Seo";
import { useGetContactPage } from "../hook/hook";
import { fetchAPI } from "../lib/api";
import { ContactHeading } from "../components/Heading/ContactHeading";
import { ByLuxuriaCard } from "../components/Section/ByLuxuriaCard";
import { MapAndContact } from "../components/Section/MapAndContact";

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionFlex = motion(Flex)

export const Contact = ({ seo, locale }) => {
  const { data, isLoading, error } = useGetContactPage(locale);
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
      <ContactHeading data={data} />
      <Box
        w="100%"
        h='40vh'
        bgGradient="linear(to-b, #000000, transparent)"
        opacity={0.3}
      ></Box>
      <form>
        <Center mt={-60} color="white">
          <Stack w={{base: '90vw', lg:'50vw'}} border="1px solid #D7A989" spacing={0}>
            <Box w="100%" p={4} borderBottom={"1px solid #D7A989"}>
              <Input placeholder={locale && locale !== 'fr-FR' ? 'Name' : 'Nom'} name="name" variant={'unstyled'} _placeholder={{color: "#D7A989"}} />
            </Box>
            <Box w="100%" p={4} borderBottom={"1px solid #D7A989"}>
              <Input placeholder='Email' name="email" variant={'unstyled'} _placeholder={{color: "#D7A989"}} />
            </Box>
            <Box w="100%" p={4}>
              <Textarea minH={48} placeholder="Message" name="message" variant={'unstyled'} _placeholder={{color: "#D7A989"}} />
            </Box>
            <Button
              w="100%"
              fontFamily={'proxima-nova'}
              textTransform='uppercase'
              style={{ color: "white", fontSize: "14px", backgroundColor: '#D7A989'}}
              rounded={'none'}
            >{locale && locale !== 'fr-FR' ? 'Send' : 'Envoyer'}</Button>
          </Stack>
        </Center>
        <Text textAlign={"center"} fontSize="sm" fontStyle="italic" color="white">{locale && locale !== 'fr-FR' ? 'I accept the processing of personal data' : 'J’accepte le traitement des données personnelles'}</Text>
      </form>
      <MapAndContact locale={locale} />
      <ByLuxuriaCard locale={locale} />
    </>
  )
} 

export async function getServerSideProps({locale}) {
  // Run API calls in parallel
  const [contactRes] = await Promise.all([
    fetchAPI("/contact-page", {
      populate: {
        seo: { populate: "*" },
      },
    }, locale),
  ]);

  return {
    props: {
      seo: contactRes.data.attributes.seo,
      locale: locale
    },
    // revalidate: 1,
  };
}

export default Contact;