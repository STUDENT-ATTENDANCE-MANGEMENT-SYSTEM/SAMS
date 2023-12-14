import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import image from "../images/25.png";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import tag from "../images/price-tag.png";
import wallet from "../images/wallet.png";
import diamond from "../images/diamond.png";
import anchor from "../images/anchor.png";
import target from "../images/target.png";
import rocket from "../images/rocket.png";
import visa from "../images/visa.svg";
import mastercard from "../images/mastercard.svg";
import paystack from "../images/paystack.svg";
import chimoney from "../images/chimoney.png";
import googlepay from "../images/googlepay.svg";
// import Navbar from "../component/Navbar"
import Footer from "../component/Footer";

import {
  CalendarIcon,
  CheckCircleIcon,
  InfoIcon,
  NotAllowedIcon,
  PhoneIcon,
  StarIcon,
  TimeIcon,
  WarningIcon,
} from "@chakra-ui/icons";
export default function Price() {
  useEffect(() => {
    document.body.classList.add("bg-color");
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState("");

  return (
    <div>
      {/* <Navbar /> */}
      <Flex
        flexDir={"row"}
        align={"center"}
        justifyContent={"center"}
        mt={"8em"}
      >
        <Heading fontFamily={"mono"} px={".5em"} fontSize={"2.5rem"}>
          Pricing Plan
        </Heading>
        <Box w={"40px"}>
          <img src={tag} alt="price-tag" />
        </Box>
      </Flex>
      <SimpleGrid
        columns={{ base: "1", md: "1", lg: "2", xl: "2" }}
        mt={{ base: "0", lg: "40px", xl: "2em" }}
      >
        <Flex
          flexDir={"column"}
          align={{ base: "center", lg: "left", xl: "left" }}
          pt={"80px"}
        >
          <Heading
            fontSize={{ base: "2.5rem", xl: "3.3rem" }}
            textAlign={{ base: "center", lg: "left", xl: "left" }}
            pb={"0.4em"}
            pl={{ base: "0", lg: "1.7em", xl: "2em" }}
          >
            Choose the plan that best fits your institution's needs
          </Heading>
          <Text
            pb={"2em"}
            color={"gray"}
            ml={"0px"}
            fontSize={{ base: "1.1rem", lg: "1.2rem", xl: "1.5rem" }}
          >
            No contracts, no commitments, no fuzz.
          </Text>
        </Flex>
        <Box
          ml={"auto"}
          mr={"auto"}
          width={{ base: "90%", lg: "75%", xl: "75%" }}
        >
          <img src={wallet} alt="price-tag" />
        </Box>
      </SimpleGrid>
      <Tabs colorScheme="pink" mt={"4em"} p={"1.4em"} variant={"enclosed"}>
        <TabList ml={"auto"} mr={"auto"} justifyContent={"center"}>
          <Tab _selected={{ color: "white", bg: "red.500" }} mr={"30px"}>
            Month
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>Annual</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex
              flexDir={{ base: "column", md: "colum", lg: "row", xl: "row" }}
              gap={10}
              my={"1.5em"}
            >
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount("Small Sized Institution :" + " NGN 3,000")
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"4em"} py={"1.4em"}>
                          <img src={anchor} alt="basic" />
                        </Box>

                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 3,000
                        </Heading>

                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />0 t0 1000 students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          Atmost 1000 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"1.4em"} color={"white"} colorScheme="red">
                    Try Free Trg
                  </Button>
                </Link>
              </Flex>
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount("Medium Sized Institution :" + " NGN 5,000")
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"60px"} py={"20px"}>
                          <img src={target} alt="basic" />
                        </Box>

                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 5,000/mo
                        </Heading>

                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />
                          1001 t0 5000 students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          At most 6000 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"20px"} color={"white"} colorScheme="red">
                    Try Free Trial
                  </Button>
                </Link>
              </Flex>
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount("Large Sized Institution :" + " NGN 7,000")
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"60px"} py={"20px"}>
                          <img src={rocket} alt="basic" />
                        </Box>

                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 7,000/mo
                        </Heading>

                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />
                          5001 t0 20,000 students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          At most 22000 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"20px"} color={"white"} colorScheme="red">
                    Try Free Trial
                  </Button>
                </Link>
              </Flex>
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount("Very Large Sized Institution :" + " NGN 9,000")
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"60px"} py={"20px"}>
                          <img src={diamond} alt="basic" />
                        </Box>

                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 9,000/mo
                        </Heading>

                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />
                          20,000 and Above students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          Atmost 30000 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"20px"} color={"white"} colorScheme="red">
                    Try Free Trial
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
              gap={10}
              mx={"35px"}
              my={"30px"}
            >
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount("Small Sized Institution : " + " NGN 30,000")
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"60px"} py={"20px"}>
                          <img src={anchor} alt="basic" />
                        </Box>

                        {/* <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 30,000/yr
                        </Heading> */}
                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 30,000/yr
                        </Heading>
                        <Link to={"institution"}></Link>
                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />0 t0 1000 students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          Atmost 1100 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"20px"} color={"white"} colorScheme="red">
                    Try Free Trial
                  </Button>
                </Link>
              </Flex>
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount("Medium Sized Institution :" + " NGN 50,000")
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"60px"} py={"20px"}>
                          <img src={target} alt="basic" />
                        </Box>

                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 50,000/yr
                        </Heading>

                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />
                          1001 t0 5000 students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          Atmost 6000 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"20px"} color={"white"} colorScheme="red">
                    Try Free Trial
                  </Button>
                </Link>
              </Flex>
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount("Large Sized Institution :" + " NGN 70,000")
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"60px"} py={"20px"}>
                          <img src={rocket} alt="basic" />
                        </Box>

                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 70,000/yr
                        </Heading>

                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />
                          5001 t0 20,000 students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          Atmost 21000 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"20px"} color={"white"} colorScheme="red">
                    Try Free Trial
                  </Button>
                </Link>
              </Flex>
              <Flex align={"center"} flexDir={"column"}>
                <Box onClick={onOpen}>
                  <Card
                    onClick={() =>
                      setAmount(
                        "Very Large Sized Institution :" + " NGN 90,000"
                      )
                    }
                  >
                    <CardHeader borderBottom={"1px solid grey"}>
                      <Flex flexDir={"column"} align={"center"}>
                        <Box w={"60px"} py={"20px"}>
                          <img src={diamond} alt="basic" />
                        </Box>

                        <Heading fontFamily={"mono"} pb={"20px"}>
                          NGN 90,000/yr
                        </Heading>

                    
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <List spacing={5} pt={"10px"}>
                        <ListItem>
                          <ListIcon as={CheckCircleIcon} />
                          20001 and Above students
                        </ListItem>
                        <ListItem>
                          <ListIcon as={InfoIcon} />
                          Atmost 30000 geolocation request daily
                        </ListItem>
                        <ListItem>
                          <ListIcon as={NotAllowedIcon} />
                          No surge pricing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={PhoneIcon} />
                          Priority Support with 24/7 Availability
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TimeIcon} />
                          On-Site Training and Implementation
                        </ListItem>
                        <ListItem>
                          <ListIcon as={CalendarIcon} />
                          Dedicated Account Manager
                        </ListItem>
                      </List>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Box>
                <Link to={"/institution/home"}>
                  <Button my={"20px"} color={"white"} colorScheme="red">
                    Try Free Trial
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Almost there!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"row"} align={"center"}>
              <Text fontSize={"30px"}>{amount}</Text>
            </Flex>

            <Flex align={"center"} pt={"20px"}>
              <IconButton as={StarIcon} size={"10px"} />
              <Text px={"10px"}>Pick your preferred payment options</Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex flexDir={"row"} align={"center"} gap={6} pr={"30px"}>
              <Link to={"/"}>
                <Box w={"50px"}>
                  <img src={visa} alt="visa" />
                </Box>
              </Link>

              <Link to={"/"}>
                <Box w={"50px"}>
                  <img src={mastercard} alt="visa" />
                </Box>
              </Link>
              <Link to={"/paystack-check-out"}>
                <Box w={"70px"}>
                  <img src={paystack} alt="visa" />
                </Box>
              </Link>
              <Link>
                <Box w={"50px"}>
                  <img src={chimoney} alt="visa" />
                </Box>
              </Link>
              <Link to={"/"}>
                <Box w={"30px"}>
                  <img src={googlepay} alt="visa" />
                </Box>
              </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
      <Outlet />
    </div>
  );
}
