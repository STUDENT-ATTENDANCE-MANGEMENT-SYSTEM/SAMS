import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Link,
  VStack,
  List,
  ListItem,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import institutions from "nigerian-institutions";
import { FaUser } from "react-icons/fa";
import { CloseIcon, EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import logo from "../../images/logo-revamp.svg";

import { useContext, useEffect, useState } from "react";
import { appContext } from "../../App";
import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useParams,
  useNavigate,
} from "react-router-dom";
import { color } from "framer-motion";
export default function Lecturer() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [institution, setInstitution] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const { setLecturer } = useContext(appContext);
  const navigate = useNavigate();
  const institutionRegex = /^[A-Za-z\s]+$/;
  const formNameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const lecturerFormData = new FormData(e.currentTarget);
    let values = [...lecturerFormData.values()];
    console.log(values);
    let errors = {};
    if (isMember) {
      const lecturer = {
        email: values[0],
        password: values[1],
      };
      setLecturer(lecturer);
    } else {
      const lecturer = {
        firstName: values[0],
        lastName: values[1],
        email: values[2],
        password: values[3],
        institution: values[4],
      };
      setLecturer(lecturer);

      if (!values[0]) {
        errors.firstName = "First name is required.";
      } else if (!formNameRegex.test(values[0])) {
        errors.firstName = "Please enter only alphabets.";
      }
      if (!values[1]) {
        errors.lastName = "Last name is required.";
      } else if (!formNameRegex.test(values[1])) {
        errors.lastName = "Please enter only alphabets.";
      }
      if (!values[2]) {
        errors.email = "Email is required.";
      } else if (!emailRegex.test(values[2])) {
        errors.email = "Please enter a valid email.";
      }
      if (!values[3]) {
        errors.password = "Password is required.";
      } else if (!passwordRegex.test(values[3])) {
        errors.password =
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.";
      }
      if (!values[4]) {
        errors.institution = "Institution is required.";
      } else if (!institutionRegex.test(values[4])) {
        errors.institution = "Please enter only alphabets.";
      }
      if (Object.keys(errors).length === 0) {
        navigate("/lecturer");
      }
    }
    setErrors(errors);
  };

  const response = institutions.allSchools().map((school) => {
    return {
      name: school.name,
    };
  });
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInstitution(value);
    const filterSuggestions = response.filter((res) =>
      res.name.toString().toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filterSuggestions);
    setIsDropDownOpen(!!value);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropDownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const buttonReturn = {
    bgColor: "#213655",
    color: "white",
    ":hover": {
      color: "black",
      bgColor: "blue.100",
    },
  };

  return (
    <div>
      <Flex
        flexDir={"column"}
        mt={{ base: "60px", md: "150px", lg: "100px", xl: "10px" }}
        py={"20px"}
        w={{ base: "90%", xl: "50%" }}
        mr={"auto"}
        ml={"auto"}
      >
        <Flex justify={"center"}>
          <Box w={"15%"}>
            <img src={logo} alt="logo" />
          </Box>
        </Flex>

        <Heading
          fontFamily={"mono"}
          color={"#213655"}
          fontSize={{ base: "1.9em", md: "1.7em", lg: "3em", xl: "3em" }}
          textAlign={"center"}
          mb={"1.4em"}
        >
          {isMember ? "Log in" : "Sign up as a lecturer"}{" "}
        </Heading>

        <Flex flexDir="column">
          <Form
            method="post"
            // action='/signin/lecturer'
            onSubmit={handleSubmit}
          >
            <Flex gap={4} w={"90%"} mr={"auto"} ml={"auto"}>
              {!isMember && (
                <FormControl
                  mb={"2rem"}
                  ml={"auto"}
                  mr={"auto"}
                  isInvalid={isSubmitted && errors.firstName}
                >
                  <InputGroup alignItems={"center"}>
                    <InputLeftElement pointerEvents={"none"}>
                      <Icon as={FaUser} color="gray" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="name"
                      placeholder="First Name"
                      w={"100%"}
                      border={"1px solid gray"}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </InputGroup>
                  {isSubmitted && (
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  )}
                </FormControl>
              )}{" "}
              {!isMember && (
                <FormControl
                  mb={"2rem"}
                  ml={"auto"}
                  mr={"auto"}
                  isInvalid={isSubmitted && errors.lastName}
                >
                  <InputGroup alignItems={"center"}>
                    <InputLeftElement pointerEvents={"none"}>
                      <Icon as={FaUser} color="gray" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Last Name"
                      w={"100%"}
                      border={"1px solid gray"}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </InputGroup>
                  {isSubmitted && (
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  )}
                </FormControl>
              )}
            </Flex>
            <FormControl
              mb={"2rem"}
              w={"90%"}
              ml={"auto"}
              mr={"auto"}
              isInvalid={isSubmitted && errors.email}
            >
              <InputGroup>
                <InputLeftElement pointerEvents={"none"}>
                  <EmailIcon color="gray" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  w={"100%"}
                  border={"1px solid gray"}
                  outline={"none"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              {isSubmitted && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              mb={"2rem"}
              w={"90%"}
              ml={"auto"}
              mr={"auto"}
              isInvalid={isSubmitted && errors.password}
            >
              <InputGroup>
                <InputLeftElement>
                  <Box onClick={handleShow} variant={"ghost"}>
                    {show ? (
                      <ViewIcon color={"gray"} />
                    ) : (
                      <ViewOffIcon color={"gray"} />
                    )}
                  </Box>
                </InputLeftElement>
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  w={"100%"}
                  border={"1px solid gray"}
                  outline={"none"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              {isSubmitted && (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              mb={"2rem"}
              w={"90%"}
              ml={"auto"}
              mr={"auto"}
              isInvalid={isSubmitted && errors.institution}
            >
              <Flex pos={"relative"}>
                <Input
                  type="text"
                  name="institution"
                  value={institution}
                  onChange={handleInputChange}
                  placeholder="Type Institution name"
                  border={"1px solid gray"}
                />
                <Box
                  pos={"absolute"}
                  top={"50%"}
                  right={"10px"}
                  transform={"translateY(-50%)"}
                  variant={"ghost"}
                  onClick={() => setInstitution("")}
                >
                  <CloseIcon />
                </Box>
              </Flex>
              {isSubmitted && (
                <FormErrorMessage>{errors.institution}</FormErrorMessage>
              )}
              {isDropdownOpen && (
                <List zIndex={1000} mt={'1em'} maxHeight={"200px"} overflowY={"auto"} backgroundColor={'white'} position={'absolute'}>
                  {suggestions.map((res, index) => (
                    <ListItem
                      h={"50%"}
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the document click event from firing
                        setInstitution(res.name);
                        setIsDropDownOpen(false);
                      }}
                    >
                      {res.name}
                    </ListItem>
                  ))}
                </List>
              )}
            </FormControl>

            <Flex justify={"center"} my={"2em"}>
              <Button
                type="submit"
                backgroundColor={
                  firstName.length < 1 ||
                  lastName.length < 1 ||
                  email.length < 1 ||
                  password.length < 1 ||
                  institution.length < 1 > 0
                    ? "grey"
                    : "red"
                }
                color={"white"}
                w={"auto"}
              >
                {isMember ? "Log in" : "Get started"}
              </Button>
            </Flex>
          </Form>
          <Flex mb={"2em"} mx={"1.5em"}>
            <Text
              pr={".4em"}
              fontSize={{ base: ".6rem", lg: ".9rem", xl: ".9rem" }}
            >
              {isMember ? "Don't have an account?" : "Already have an account?"}
            </Text>
            <Link
              textAlign={"center"}
              color={"red"}
              fontSize={{ base: ".6rem", lg: ".9rem", xl: ".9rem" }}
              onClick={() => setIsMember(!isMember)}
            >
              {isMember ? "Get started" : "Log in"}
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Outlet />
    </div>
  );
}
