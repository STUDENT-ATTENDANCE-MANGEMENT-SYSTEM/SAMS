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
} from "@chakra-ui/react";
import image from "../../images/25.png";
import { FaUser } from "react-icons/fa";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import arrow from "../../images/arrow6.svg";
import punct from "../../images/punct.svg";
import { useContext, useEffect, useState } from "react";
import { Form, NavLink, Outlet, redirect, useNavigate } from "react-router-dom";
import { appContext } from "../../App";
import { color } from "framer-motion";
export default function Student() {
  useEffect(() => {
    document.body.classList.add("bg-color");
  }, []);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setStudent } = useContext(appContext);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const formNameRegex = /^[A-Za-z]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const studentFormData = new FormData(e.currentTarget);
    let values = [...studentFormData.values()];
    let errors = {};
    if (isMember) {
      const student = {
        email: values[0],
        password: values[1],
      };
      setStudent(student);
    } else {
      const student = {
        firstName: values[0],
        lastName: values[1],
        email: values[2],
        password: values[3],
      };
      setStudent(student);
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
      if (Object.keys(errors).length === 0) {
        navigate("/student");
      }
    }
    setErrors(errors);
  };

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
      <Container
        flexDir={"column"}
        mt={{ base: "60px", md: "150px", lg: "100px", xl: "100px" }}
        py={"20px"}
        w={{ base: "90%", xl: "50%" }}
        mr={"auto"}
        ml={"auto"}
      >
        <Flex
          flexDirection={"row"}
          justify={"center"}
          align={"center"}
          my={"2em"}
        >
          <Box w={"30px"} mr={"10px"}>
            <img
              src={punct}
              style={{
                filter:
                  "invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)",
              }}
            />
          </Box>

          <Heading fontFamily={"mono"} color={"#213655"}>
            {isMember ? "Log in" : "Sign Up as a Student"}{" "}
          </Heading>
        </Flex>

        <Flex flexDir="column">
          <Form
            method="post"
            // action='/signin/student'
            onSubmit={handleSubmit}
          >
            {!isMember && (
              <FormControl
                mb={"2rem"}
                w={"90%"}
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
            )}
            {!isMember && (
              <FormControl
                mb={"2rem"}
                w={"90%"}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              {isSubmitted && (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <Flex
              justify={"center"}
              mb={"2rem"}
              w={"90%"}
              ml={"auto"}
              mr={"auto"}
            >
              <Button type="submit" colorScheme="red" w={"30%"}>
                {isMember ? "Log in" : "Get started"}
              </Button>
            </Flex>
          </Form>
          <Flex mb={"2em"} mx={"1.5em"}>
            <Text pr={".4em"}>
              {isMember ? "Don't have an account?" : "Already have an account?"}
            </Text>
            <Link
              textAlign={"center"}
              color={"red"}
              fontSize={"1rem"}
              onClick={() => setIsMember(!isMember)}
            >
              {isMember ? "Get started" : "Log in"}
            </Link>
          </Flex>
          <Flex
            justify={"center"}
            mb={"2rem"}
            w={"90%"}
            ml={"auto"}
            mr={"auto"}
          ></Flex>
        </Flex>
      </Container>
    </div>
  );
}

export const studentRegister = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    studentName: data.get("name"),
    studentEmail: data.get("email"),
    studentPassword: data.get("password"),
  };

  localStorage.setItem("Student", JSON.stringify(submission));

  console.log(submission);
  return redirect("/student");
};
