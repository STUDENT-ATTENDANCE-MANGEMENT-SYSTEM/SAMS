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
} from "@chakra-ui/react"
import image from "../images/25.png"
import { FaUser } from "react-icons/fa"
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import arrow from "../images/arrow6.svg"
import punct from "../images/punct.svg"
import { GoogleLogin } from "@react-oauth/google"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { useEffect, useState, useContext } from "react"
import { Form, NavLink, Outlet, redirect } from "react-router-dom"
import { color } from "framer-motion"
export default function RegisterInstitution() {
  useEffect(() => {
    document.body.classList.add("bg-color")
  }, [])

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

  const buttonReturn = {
    bgColor: "#213655",
    color: "white",
    ":hover": {
      color: "black",
      bgColor: "blue.100",
    },
  }
  return (
    <div>
      <GoogleOAuthProvider clientId='950695587102-tshfvmoi0kj2fasfmiiem3ed022eaf19.apps.googleusercontent.com'>
        <Flex
          flexDir={"column"}
          mt={{ base: "60px", md: "150px", lg: "100px", xl: "100px" }}
          bgColor={"white"}
          py={"20px"}
          w={{ base: "90%", xl: "50%" }}
          mr={"auto"}
          ml={"auto"}
        >
          <Flex
            flexDirection={"row"}
            justify={"center"}
            align={"center"}
            mb={"20px"}
          >
            <Box w={"30px"} mt={"20px"} mr={"10px"}>
              <img
                src={punct}
                style={{
                  filter:
                    "invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)",
                }}
              />
            </Box>

            <Heading fontFamily={"mono"} mt={"30px"} color={"#213655"}>
              Sign Up as an Institution
            </Heading>
          </Flex>

          <Container mt={"40px"} mr={"auto"} ml={"auto"}>
            <Form method='post' action='/register-institution'>
              {/* <FormControl mb={"30px"}>
                <InputGroup alignItems={"center"}>
                  <InputLeftElement pointerEvents={"none"}>
                    <Icon as={FaUser} color='gray' />
                  </InputLeftElement>
                  <Input
                    type='text'
                    name='name'
                    placeholder='Institution Name'
                    w={"100%"}
                    border={"1px solid gray"}
                  />
                </InputGroup>
              </FormControl> */}

              {/* <FormControl mb={"30px"}>
                <InputGroup>
                  <InputLeftElement pointerEvents={"none"}>
                    <EmailIcon color='gray' />
                  </InputLeftElement>
                  <Input
                    type='email'
                    name='email'
                    placeholder='Institution Email'
                    w={"100%"}
                    border={"1px solid gray"}
                    outline={"none"}
                  />
                </InputGroup>
              </FormControl> */}

              {/* <FormControl mb={"30px"}>
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
                    name='password'
                    placeholder='Password'
                    w={"100%"}
                    border={"1px solid gray"}
                  />
                </InputGroup>
              </FormControl> */}
              <Flex justify={"center"} mb={"30px"}>
                <Button type='submit' colorScheme='red' w={"30%"}>
                  Get Started
                </Button>
              </Flex>

              <Text
                textAlign={"center"}
                mb={"20px"}
                color={"gray"}
                fontSize={"20px"}
              >
                or
              </Text>
            </Form>
            <Flex justify={"center"} mb={"30px"}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  alert(credentialResponse)
                }}
                onError={() => {
                  alert("Login Failed")
                }}
              />
            </Flex>
            <Box
              pos={"absolute"}
              w={{ base: "100px", md: "130px", lg: "150px", xl: "150px" }}
              bottom={"25%"}
            >
              <img
                src={arrow}
                style={{
                  filter:
                    "invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)",
                }}
              />
            </Box>
          </Container>
        </Flex>
      </GoogleOAuthProvider>
      {/* <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque et
        harum, accusantium, facilis facere velit at nisi mollitia aliquid
        cupiditate ad adipisci quod! Nihil assumenda quia at reiciendis
        consequuntur vero porro adipisci, quae dolor id quasi repudiandae
        commodi facilis architecto itaque delectus ullam voluptatibus aliquam
        iure a nesciunt nostrum ea! Illum explicabo error modi non et. Ut
        tempora voluptatum est odit? Cupiditate consectetur, recusandae optio
        repellendus at ullam ut. Ad deleniti voluptates saepe iusto est
        excepturi, impedit eos iste mollitia blanditiis enim consequuntur
        praesentium, accusantium expedita quis vel obcaecati, ullam distinctio
        perferendis cupiditate voluptas. Fugiat corrupti, perspiciatis veritatis
        laudantium adipisci rerum numquam quod nostrum ad? Qui hic perferendis
        molestias atque animi voluptas voluptates aut exercitationem! In laborum
        assumenda quod nam fugit placeat, tenetur dicta non illo soluta odio
        dolore sapiente autem culpa reiciendis fuga, dolorem quasi alias id!
        Voluptatum, officia? Corporis asperiores mollitia consequuntur ea
        tenetur vero, adipisci, alias nesciunt voluptates praesentium ullam
        assumenda itaque est ipsum, beatae at reprehenderit enim earum natus
        fugit amet autem in dolorum? Ex nostrum perferendis quos maiores
        doloribus iusto provident aliquam illum, accusamus magni voluptatum
        nihil vero laboriosam itaque laudantium minus est sed corporis, harum
        aut repellat. Veritatis rem voluptas impedit eos commodi?
      </h1> */}
      {/* <Outlet /> */}
    </div>
  )
}

export const institutionRegister = async ({ request }) => {
  console.log(request)
  const data = await request.formData()

  const submission = {
    institutionName: data.get("name"),
    institutionEmail: data.get("email"),
    institutionPassword: data.get("password"),
  }

  localStorage.setItem("Institution", JSON.stringify(submission))

  console.log(submission)
  return redirect("/price")
}
