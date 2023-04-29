import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { useGetModal } from "../../hook/hook"
import { getStrapiMedia } from "../../lib/media"
import { useDialogContext } from "./DialogContext"

export const DialogEvent = () => {
    const { openDialog, setOpenDialog } = useDialogContext()
    const {data} = useGetModal(openDialog)
    return (
        <Modal isOpen={openDialog} onClose={() => setOpenDialog(false)}>
            <ModalOverlay />
            {data &&
                <ModalContent p={0}>
                    <ModalHeader p={0}>
                        <Box
                            w="100%"
                            bgSize="cover"
                            bgImage={getStrapiMedia(data.attributes.img)}
                            h="30vh"
                        ></Box>
                    </ModalHeader>
                    <ModalCloseButton
                        style={{ backgroundColor: "white", borderRadius: "50px", opacity: "0.5" }} 
                    />
                    <ModalBody py={6} px={10}>
                        <Stack spacing={4}>
                            <Heading
                                fontFamily={"meno-banner"}
                                color="#D7A989"
                                textAlign={"center"}
                                as="h2"
                            >{data.attributes.title}</Heading>
                            <Text
                                textAlign={"center"}
                            >{data.attributes.content}</Text>
                            <Text
                                textAlign={"center"}
                                fontWeight="bold"
                            >{data.attributes.date}</Text>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            }
        </Modal>
    )
}