import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  useSafeLayoutEffect,
} from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"
import {
  MdAnalytics,
  MdBook,
  MdContactSupport,
  MdHome,
  MdSettings,
} from "react-icons/md"
import { appContext } from "../App"
import Hamburger from "hamburger-react"
import { useEffect, useRef, useState, useContext } from "react"
import logo from "../images/logo.png"
import { AddIcon, SearchIcon } from "@chakra-ui/icons"
export default function LecturerLayout() {
  useEffect(() => {
    document.body.classList.add("bg-color")
  }, [])
  const [display, setDisplay] = useState("none")
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure()
  const {
    isOpen: isJoinOpen,
    onOpen: onJoinOpen,
    onClose: onJoinClose,
  } = useDisclosure()
  const { lecturer } = useContext(appContext)
  const initialRef = useRef(null)
  const [code, setCode] = useState(" ")
  const [courseTitle, setCourseTitle] = useState(" ")
  const [data, setData] = useState([
    { courseCode: "TME 211", title: "INTRODUCTION TO ENGINEERING DRAWING" },
    { courseCode: "TME 231", title: "INTRODUCTION TO ENGINEERING PRINCIPLES" },
    { courseCode: "MAT 224", title: "INTRODUCTION TO ENGINEERING MATHEMATICS" },
    { courseCode: "GNS 210", title: "INTRODUCTION TO ENTREPRENEURSHIP" },
  ])
  const handleSubmit = () => {
    setData(...data, { courseCode: code, title: courseTitle })
    setCode(" ")
    setCourseTitle(" ")
  }
  return (
    <div>
      <Modal isOpen={isJoinOpen} onClose={onJoinClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join an attendance</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={"10px"}>
              Ask your fellow lecturer for the course attendance tab, then enter
              it below:
            </Text>
            <Input mb={"10px"} placeholder='attendance code' />
            <Text>
              If you have an issue joining the attendance, go to the{" "}
              <Link to='/about' style={{ color: "blue" }}>
                Help guide
              </Link>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onJoinClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={onJoinClose}>
              Join
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isCreateOpen}
        onClose={onCreateClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an attendance card</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Course code</FormLabel>
              <Input
                ref={initialRef}
                placeholder='BME 201'
                onChange={(e) => {
                  setCode(e.target.value)
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Course title</FormLabel>
              <Input
                placeholder='General anatomy'
                onChange={(e) => {
                  setCourseTitle(e.target.value)
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={() => {
                handleSubmit()
              }}
            >
              Submit
            </Button>
            <Button onClick={onCreateClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <Box display={{ base: "none", lg: "grid", xl: "grid" }}>
          <GridItem
            as={"aside"}
            colSpan={{ base: "0", lg: "2", xl: "1" }}
            minHeight={"100vh"}
            borderRight={"2px solid black"}
          >
            <Flex mt={"40px"} ml={"10px"}>
              <Text fontWeight={"extrabold"} fontSize={"2xl"}>
                Hello! {lecturer?.firstName}
              </Text>
            </Flex>
            <Flex justify={"center"}>
              <List spacing={10} mt={"70px"} cursor={"pointer"}>
                <Link to={"home"}>
                  <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                    <ListIcon as={MdHome} boxSize={5} />
                    Home
                  </ListItem>
                </Link>
                <Accordion allowToggle>
                  <AccordionItem borderColor={"transparent"}>
                    <AccordionButton _expanded={{ borderColor: "white" }}>
                      <Box as='span' flex={"1"} textAlign={"left"}>
                        <ListItem fontWeight={"bold"} cursor={"pointer"}>
                          <ListIcon as={MdBook} boxSize={5} />
                          Courses
                        </ListItem>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>TME 221</AccordionPanel>
                    <AccordionPanel>TME 231</AccordionPanel>
                    <AccordionPanel>MAT 224</AccordionPanel>
                    <AccordionPanel>GNS 210</AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle>
                  <AccordionItem borderColor={"transparent"}>
                    <AccordionButton _expanded={{ borderColor: "white" }}>
                      <Box as='span' flex={"1"} textAlign={"left"}>
                        <ListItem fontWeight={"bold"} cursor={"pointer"}>
                          <ListIcon as={MdAnalytics} boxSize={5} />
                          Insight
                        </ListItem>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>TME 221</AccordionPanel>
                    <AccordionPanel>TME 231</AccordionPanel>
                    <AccordionPanel>MAT 224</AccordionPanel>
                    <AccordionPanel>GNS 210</AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                  <ListIcon as={MdSettings} boxSize={5} />
                  Setting
                </ListItem>
                <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                  <ListIcon as={MdContactSupport} boxSize={5} />
                  Support and Help
                </ListItem>
                <ListItem>
                  <Button colorScheme='red' p={"10px"} w={"75%"}>
                    Logout
                  </Button>
                </ListItem>
              </List>
            </Flex>
          </GridItem>
        </Box>
        <Box
          display={display}
          pos={"absolute"}
          zIndex={1000}
          bgColor={"white"}
          w={"250px"}
        >
          <GridItem
            as={"aside"}
            colSpan={{ base: "0", lg: "2", xl: "1" }}
            minHeight={"100vh"}
            borderRight={"2px solid black"}
          >
            <Flex mt={"60px"} ml={"10px"}>
              <Text fontWeight={"extrabold"} fontSize={"2xl"}>
                Hello! {lecturer?.FirstName}
              </Text>
            </Flex>
            <Flex justify={"center"}>
              <List spacing={10} mt={"70px"} cursor={"pointer"}>
                <Link to={"home"}>
                  <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                    <ListIcon as={MdHome} boxSize={5} />
                    Home
                  </ListItem>
                </Link>
                <Accordion allowToggle>
                  <AccordionItem borderColor={"transparent"}>
                    <AccordionButton _expanded={{ borderColor: "white" }}>
                      <Box as='span' flex={"1"} textAlign={"left"}>
                        <ListItem fontWeight={"bold"} cursor={"pointer"}>
                          <ListIcon as={MdBook} boxSize={5} />
                          Courses
                        </ListItem>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>TME 221</AccordionPanel>
                    <AccordionPanel>TME 231</AccordionPanel>
                    <AccordionPanel>MAT 224</AccordionPanel>
                    <AccordionPanel>GNS 210</AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle>
                  <AccordionItem borderColor={"transparent"}>
                    <AccordionButton _expanded={{ borderColor: "white" }}>
                      <Box as='span' flex={"1"} textAlign={"left"}>
                        <ListItem fontWeight={"bold"} cursor={"pointer"}>
                          <ListIcon as={MdAnalytics} boxSize={5} />
                          Insight
                        </ListItem>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>TME 221</AccordionPanel>
                    <AccordionPanel>TME 231</AccordionPanel>
                    <AccordionPanel>MAT 224</AccordionPanel>
                    <AccordionPanel>GNS 210</AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                  <ListIcon as={MdSettings} boxSize={5} />
                  Setting
                </ListItem>
                <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                  <ListIcon as={MdContactSupport} boxSize={5} />
                  Support and Help
                </ListItem>
                <ListItem>
                  <Button colorScheme='red' p={"10px"} w={"75%"}>
                    Logout
                  </Button>
                </ListItem>
              </List>
            </Flex>
          </GridItem>
        </Box>
        <GridItem as={"main"} colSpan={{ base: "6", lg: "5", xl: "5" }}>
          <Flex borderBottom={"1px solid grey"} p={"10px"} align={"center"}>
            <Box
              display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
              mr={{ base: "10px" }}
              zIndex={2000}
            >
              <Hamburger
                rounded
                direction='right'
                duration={0.5}
                onToggle={(toggled) => {
                  if (toggled) {
                    setDisplay("grid")
                  } else {
                    setDisplay("none")
                  }
                }}
              />
            </Box>
            <Box ml={{ base: "10px", lg: "25px", xl: "25px" }}>
              <img src={logo} alt='logo' />
            </Box>
            <Spacer />
            <Flex
              align={"center"}
              gap={{ base: 3, lg: 10, xl: 10 }}
              mr={{ base: "10px", md: "50px", lg: "130px", xl: "150px" }}
            >
              <IconButton
                variant={"ghost"}
                colorScheme='white'
                icon={<SearchIcon />}
              />
              <Menu>
                <MenuButton>
                  <IconButton
                    variant={"ghost"}
                    colorScheme='white'
                    icon={<AddIcon />}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={onCreateOpen}>Create Attendance</MenuItem>
                  <MenuItem onClick={onJoinOpen}>Join Attendance</MenuItem>
                </MenuList>
              </Menu>

              <Wrap>
                <WrapItem>
                  <Avatar
                    name='Segun Showunmi'
                    src='https://bit.ly/broken-link'
                  />
                </WrapItem>
              </Wrap>
            </Flex>
          </Flex>
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  )
}
