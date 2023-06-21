import { Box, Button, Center, Flex, Input, Spinner, Stack, Text, Textarea } from "@chakra-ui/react";
import Seo from "../components/Seo/Seo";
import { useGetContactPage } from "../hook/hook";
import emailjs from '@emailjs/browser';
import { ContactHeading } from "../components/Heading/ContactHeading";
import { ByLuxuriaCard } from "../components/Section/ByLuxuriaCard";
import { MapAndContact } from "../components/Section/MapAndContact";
import { useRef, useState } from "react";
import { useToast } from '@chakra-ui/react'

export const Contact = ({ seo, locale }) => {
  const { data, isLoading, error } = useGetContactPage(locale);
  const form = useRef();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const toast = useToast()
  const sendEmail = (e) => {
    e.preventDefault();
    if(name !== '' && email !== '' && message !== ''){
      emailjs.sendForm("service_cgl91w4", "template_deep2ll", form.current, "Rs7dltjgFnKvs14oG").then(
        (result) => {
          // console.log(result.text);
          toast({
            title: locale && locale !== 'fr-FR' ? 'Message sent.' : 'Message envoyé.',
            description: locale && locale !== 'fr-FR' ? "Your message has been sent" : "Votre message a bien été envoyé",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        },
        (error) => {
          // console.log(error.text);
          toast({
            title: locale && locale !== 'fr-FR' ? "Problem while sending the message." : "Problème lors de l'envoie du message.",
            description: locale && locale !== 'fr-FR' ? "please try again later" : "Veuillez réessayer plus tard",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      );
    }
  };
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
          <ContactHeading data={data} locale={locale} />
          <Box
            w="100%"
            h='40vh'
            bgGradient="linear(to-b, #000000, transparent)"
            opacity={0.3}
          ></Box>
        {data &&
          <form ref={form} onSubmit={sendEmail}>
            <Center mt={{ base: -56, lg: -80 }} color="white" fontFamily={"proxima-nova"}>
              <Stack zIndex={1100} w={{ base: '90vw', lg: '50vw' }} border="1px solid #D7A989" spacing={0}>
                <Box w="100%" p={4} borderBottom={"1px solid #D7A989"}>
                  <Input
                    size="sm"
                    letterSpacing={'widest'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={locale && locale !== 'fr-FR' ? 'NAME' : 'NOM'}
                    name="name" type="text" variant={'unstyled'}
                    _placeholder={{ color: "#D7A989" }} />
                </Box>
                <Box w="100%" p={4} borderBottom={"1px solid #D7A989"}>
                  <Input
                    size="sm"
                    letterSpacing={'widest'}
                    placeholder='EMAIL'
                    name="email"
                    type="email"
                    variant={'unstyled'}
                    _placeholder={{ color: "#D7A989" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box w="100%" p={4}>
                  <Textarea
                    size="sm"
                    letterSpacing={'widest'}
                    minH={48}
                    placeholder="MESSAGE"
                    name="message"
                    variant={'unstyled'}
                    _placeholder={{ color: "#D7A989" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                </Box>
                <Button
                  w="100%"
                  fontFamily={'proxima-nova'}
                  textTransform='uppercase'
                  fontWeight={'light'} type="submit"
                  // style={{ color: "white", fontSize: "14px", backgroundColor: '#D7A989' }}
                  className="startButtonTwo"
                  rounded={'none'}
                >{locale && locale !== 'fr-FR' ? 'Send' : 'Envoyer'}</Button>
              </Stack>
            </Center>
            <Text textAlign={"center"} mt={2} fontSize="xs" fontWeight={'light'} fontStyle="italic" color="white">{locale && locale !== 'fr-FR' ? 'I accept the processing of personal data' : 'J’accepte le traitement des données personnelles'}</Text>
          </form>
        }
          <MapAndContact locale={locale} />
          <ByLuxuriaCard locale={locale} />
        </>
      }
    </>
  )
} 

export async function getServerSideProps({locale}) {
  // Run API calls in parallel
  const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/contact-page?populate=seo&[populate][0]=seo.shareImage${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
  const contactRes = await res.json()

  return {
    props: {
      seo: contactRes.data.attributes.seo,
      locale: locale
    },
    // revalidate: 1,
  };
}

export default Contact;