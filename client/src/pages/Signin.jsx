import React from "react"

import { Box, Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react"
import student from "../images/student.png"
import lecturer from "../images/tutor.png"
import { NavLink, Outlet } from "react-router-dom"
import { useEffect } from "react"

export default function Signin() {
  useEffect(() => {
    document.body.classList.add("bg-color")
  }, [])

  return (
    <div>
      <Heading
        textAlign={"center"}
        my={"2em"}
        fontSize={"2.4rem"}
        color={"#213655"}
      >
        Register based on your role
      </Heading>
      <Flex
      justify={'center'}
      flexDir={{ base: "column", lg: "row", xl: "row" }}
      gap={5}
      mb={"3em"}
      mx={{ base: "0", lg: "3em", xl: "4em" }}
       >

        <NavLink to={"student"}>
        <Flex align={"center"} flexDir={"column"}>
            <Box w={{ base: "75%", lg: "50%", xl: "50%" }} pb={"2em"}>
              <img src={student} alt="student" />
            </Box>
            <Button variant={"ghost"} color={"#213655"} fontSize={"2rem"}>
              STUDENT
            </Button>
          </Flex>
        </NavLink>
        <Spacer />
        <NavLink to={"lecturer"}>
        <Flex align={"center"} flexDir={"column"}>
            <Box w={{ base: "75%", lg: "50%", xl: "50%" }} pb={"2em"}>
              <img src={lecturer} alt="student" />
            </Box>
            <Button variant={"ghost"} fontSize={"2rem"} color={"#213655"}>
              LECTURER
            </Button>
          </Flex>
        </NavLink>
      </Flex>
    </div>
  )
}
