import {
<<<<<<< HEAD
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
    Tooltip,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react"
  import Hamburger from "hamburger-react";
  import { Link, Outlet } from "react-router-dom"
  import {
    MdAnalytics,
    MdBook,
    MdContactSupport,
    MdHome,
    MdSettings,
  } from "react-icons/md"
  import { useEffect, useState } from "react"
  import logo from "../images/logo.png"
  import { AddIcon, BellIcon, SearchIcon } from "@chakra-ui/icons"
  export default function StudentLayout() {
    useEffect(() => {
      document.body.classList.add("bg-color")
    }, [])
    const [display, setDisplay] = useState("none");
  
    return (
      <div>
        <Grid templateColumns={"repeat(6, 1fr)"}>
        <Box display={{ base: "none", lg: "grid", xl: "grid" }}>
          <GridItem
            as={"aside"}
            colSpan={{ base: "0", lg: "2", xl: "1" }}
            minHeight={"100vh"}
            borderRight={"2px solid black"}
          >
            <Flex mt={"60px"} ml={"10px"}>
              <Text fontWeight={"extrabold"} fontSize={"2xl"}>
                Hello! Segun
              </Text>
            </Flex>
            <Flex justify={"center"}>
              <List spacing={10} mt={"70px"} cursor={"pointer"}>
                <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                  <ListIcon as={MdHome} boxSize={5} />
                  Home
                </ListItem>
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
            w={"250px"}>
          <GridItem
            as={"aside"}
            colSpan={{ base: "0", lg: "2", xl: "1" }}
            minHeight={"100vh"}
            borderRight={"2px solid black"}
          >
            <Flex mt={"60px"} ml={"10px"}>
              <Text fontWeight={"extrabold"} fontSize={"2xl"}>
                Hello! Segun
              </Text>
            </Flex>
            <Flex justify={"center"}>
              <List spacing={10} mt={"70px"} cursor={"pointer"}>
                <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                  <ListIcon as={MdHome} boxSize={5} />
                  Home
                </ListItem>
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
                mr={"40px"}
                zIndex={2000}>
                <Hamburger
                  rounded
                  direction="right"
                  duration={0.5}
                  onToggle={(toggled) => {
                    if (toggled) {
                      setDisplay("grid");
                    } else {
                      setDisplay("none");
                    }
                  }}
                />
              </Box>
              <Box ml={"25px"}>
                <img src={logo} alt='logo' />
              </Box>
              <Spacer />
              <Flex align={"center"} gap={"10"} mr={{ base: "10px", md: "50px", lg: "130px", xl: "150px" }}>
=======
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
  Tooltip,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"
import {
  MdAnalytics,
  MdBook,
  MdContactSupport,
  MdHome,
  MdSettings,
} from "react-icons/md"
import { useEffect } from "react"
import logo from "../images/logo.png"
import { AddIcon, BellIcon, SearchIcon } from "@chakra-ui/icons"
export default function StudentLayout() {
  useEffect(() => {
    document.body.classList.add("bg-color")
  }, [])

  return (
    <div>
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem
          as={"aside"}
          colSpan={"1"}
          minHeight={"100vh"}
          borderRight={"2px solid black"}
        >
          <Flex mt={"40px"} ml={"10px"}>
            <Text fontWeight={"extrabold"} fontSize={"2xl"}>
              Hello! Segun
            </Text>
          </Flex>
          <Flex justify={"center"}>
            <List spacing={10} mt={"70px"} cursor={"pointer"}>
              <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                <ListIcon as={MdHome} boxSize={5} />
                Home
              </ListItem>
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
        <GridItem as={"main"} colSpan={"5"}>
          <Flex borderBottom={"1px solid grey"} p={"10px"} align={"center"}>
            <Box ml={"25px"}>
              <img src={logo} alt='logo' />
            </Box>
            <Spacer />
            <Flex align={"center"} gap={"10"} mr={"100px"}>
              <IconButton
                variant={"ghost"}
                colorScheme='white'
                icon={<BellIcon />}
              />
              <Tooltip
                hasArrow
                label='Join attendance'
                bg={"white"}
                color={"black"}
                p={"10px"}
              >
>>>>>>> 4239b837063c2b87406c1284724f2fa49aca03be
                <IconButton
                  variant={"ghost"}
                  colorScheme='white'
                  icon={<BellIcon />}
                />
                <Tooltip
                  hasArrow
                  label='Join attendance'
                  bg={"white"}
                  color={"black"}
                  p={"10px"}
                >
                  <IconButton
                    variant={"ghost"}
                    colorScheme='white'
                    icon={<AddIcon />}
                  />
                </Tooltip>
  
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
  