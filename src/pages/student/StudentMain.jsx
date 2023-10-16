import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { useEffect } from "react";
import nodata from "../../images/no-data.png";
import { color } from "framer-motion";
import { Link } from "react-router-dom";

export default function StudentMain() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.body.classList.add("bg-color");
  }, []);

  return (
    <div>
      <Container mt={"20px"}>
        <Flex justify={"center"}>
          <Box w={"500px"}>
            <img src={nodata} alt="no-data" />
          </Box>
        </Flex>
        <Text textAlign={"center"} fontWeight={"semibold"} mt={"-80px"}>
          You are yet to join an attendance tab
        </Text>
        <Flex justify={"center"} mt={"20px"} gap={"5"}>
          <Button colorScheme="red" onClick={onOpen}>
            Join
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Attendance code</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text pb={"20px"}>
                  Ask your lecturer for the course attendance code and enter it
                  here:
                </Text>
                <Input mb={"20px"} placeholder="attendance code"></Input>
                <Text>
                  If you have trouble joining the attendance tab, go to the
                  <Link to={"/about"} style={{ color: "blue" }}>
                    {""} Help guide.
                  </Link>
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" colorScheme="red" onClick={onClose}>
                  Join
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Container>
    </div>
  );
}
