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
  Spacer,
  Text,
} from "@chakra-ui/react";
import image from "../../images/25.png";
import { FaUser } from "react-icons/fa";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import arrow from "../../images/arrow6.svg";
import punct from "../../images/punct.svg";
import logo from "../../images/logo.png";

import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { Form, NavLink, Outlet, redirect, useParams } from "react-router-dom";
import { color } from "framer-motion";
export default function Lecturer(props) {
  useEffect(() => {
    document.body.classList.add("bg-color");
  }, []);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const buttonReturn = {
    bgColor: "#213655",
    color: "white",
    ":hover": {
      color: "black",
      bgColor: "blue.100",
    },
  };

  console.log(props);
  return (
    <div>
       <Flex flexDir={'row'} m={'20px'}>
        <Box ml={'30px'}>
          <img src={logo} alt="" />
        </Box>
        <Spacer />
        <NavLink to={'/login'}><Button colorScheme={"red"} marginRight={'40px'}>Sign In</Button></NavLink>
        
      </Flex>
      <GoogleOAuthProvider clientId="950695587102-tshfvmoi0kj2fasfmiiem3ed022eaf19.apps.googleusercontent.com">
        <Flex
          flexDir={"column"}
          mt={{ base: "60px", md: "150px", lg: "100px", xl: "80px" }}
          bgColor={"white"}
          borderRadius={"10px"}
          w={{ base: "90%", xl: "50%" }}
          mr={"auto"}
          ml={"auto"}>
          <Flex
            flexDirection={"row"}
            justify={"center"}
            align={"center"}
          >
            <Box w={"4%"} mt={"20px"} mr={"10px"}>
              <img
                src={punct}
                style={{
                  filter:
                    "invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)",
                }}
              />
            </Box>

            <Heading fontFamily={"mono"} mt={"30px"} color={"#213655"}>
              Sign Up as a Lecturer{" "}
            </Heading>
          </Flex>

          <Container mt={"30px"} mr={"auto"} ml={"auto"}>
            <Form method="post" action="/signin/lecturer">
              <FormControl mb={"30px"}>
                <InputGroup alignItems={"center"}>
                  <InputLeftElement pointerEvents={"none"}>
                    <Icon as={FaUser} color="gray" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    w={"100%"}
                    border={"1px solid gray"}
                  />
                </InputGroup>
              </FormControl>

              <FormControl mb={"30px"}>
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
                  />
                </InputGroup>
              </FormControl>

              <FormControl mb={"30px"}>
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
                  />
                </InputGroup>
              </FormControl>
              <Flex justify={"center"} mb={"10px"}>
                <Button type="submit" colorScheme="red" w={"50%"}>
                  Get Started
                </Button>
              </Flex>

             
            </Form>
            <Flex justify={"center"} mb={"30px"}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </Flex>
            
          </Container>
        </Flex>
      </GoogleOAuthProvider>

      <Outlet />
    </div>
  );
}

export const lecturerRegister = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    lecturerName: data.get("name"),
    lecturerEmail: data.get("email"),
    lecturerPassword: data.get("password"),
  };

  localStorage.setItem("Lecturer", JSON.stringify(submission));

  console.log(submission);
  return redirect("/lecturer");
};
