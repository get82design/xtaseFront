import { Flex, Heading } from "@chakra-ui/react"

export const EnImagesHeading = ({ data }) => {
    return (
        <Flex
            pt={'20vh'}
            w='100%'
            justifyContent={'center'}
            align='center'
            flexDirection={'column'}
            gap={4}
        >
            <Heading
                textAlign={'center'}
                fontFamily="meno-banner"
                as='h1'
                size='2xl'
                color="white"
            >{data?.attributes.hero.title}</Heading>  
            <Heading
                maxWidth={'50vw'}
                textAlign={'center'}
                fontWeight={'normal'}
                fontFamily="proxima-nova"
                as='h2'
                letterSpacing={'wider'}
                size={{base:'sm', md:'md'}}
                lineHeight={"8"}
                className="text-primary"
                textTransform={"uppercase"}
            >{data?.attributes.hero.subTitle}</Heading> 
        </Flex>
)
}