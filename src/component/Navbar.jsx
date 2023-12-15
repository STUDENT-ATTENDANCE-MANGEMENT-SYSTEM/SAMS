import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
export default function Navbar() {
  const componentButton = {
    bgColor: "#213655",
    borderRadius: "0",
    color: "white",
    ":hover": {
      color: "white",
      bgColor: "#f2575d",
    },
  };

  const secondRegister = {
    color: "#213655",
    border: "2px solid #213655 ",
    bgColor: "transparent",
    borderRadius: "0",
    ":hover": {
      bgColor: "#f2575d",
      color: "white",
      border: "3px solid #f2575d ",
    },
  };
  const [display, setDisplay] = useState("none");
  const [background, setBackground] = useState("hsl(32, 45%, 94%)");
  const [shadow, setShadow] = useState("");
  const changeBg = (e) => {
    var scrollValue = window.scrollY;
    if (scrollValue > 100) {
      setBackground("white");
      setShadow("0px 2px 10px 0px rgba(158,161,161,1)");
    } else {
      setBackground("hsl(32, 45%, 94%)");
      setShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  }, []);

  return (
    <div>
      <Flex
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        ml={"0px"}
        mt={"0px"}
        py={"1.3em"}
        boxShadow={shadow}
        backgroundColor={background}
        w={"100vw"}
        pos={"fixed"}
        zIndex={100}
        top={"0"}
        transition={"all 1s"}
      >
        <Box
          mx={{ base: "3%", md: "3%", lg: "5%", xl: "5%" }}
          w={"100%"}
        
        >
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </Box>
        <Spacer />
        <Flex display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}>
          <NavLink
            to={"/construction"}
            style={({ isActive }) => {
              return {
                color: isActive ? "Red" : "green",
              };
            }}
          >
            <Button
              as={"a"}
              variant={"ghost"}
              _hover={{ color: "red" }}
              aria-label="About"
              w={"100%"}
              mr={"3em"}
            >
              ABOUT
            </Button>
          </NavLink>
          <NavLink
            to={"/contact"}
            style={({ isActive }) => {
              return {
                color: isActive ? "Red" : "black",
              };      
            }}
          >
            <Button
              as={"a"}
              variant={"ghost"}
              aria-label="Contact"
              _hover={{ color: "red" }}
              w={"100%"}
              mr={"3em"}
            >
              CONTACT
            </Button>
          </NavLink>
          <NavLink
            to={"/contruction"}
            style={({ isActive }) => {
              return {
                color: isActive ? "Red" : "black",
              };
            }}
          >
            <Button
              as={"a"}
              variant={"ghost"}
              aria-label="Pricing"
              _hover={{ color: "red" }}
              w={"100%"}
            >
              PRICING
            </Button>
          </NavLink>
        </Flex>
        <Spacer />
        <Button
          display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          sx={componentButton}
          mx={"3em"}

          w={'30%'}
        >
          <NavLink to={"/construction"}>Register as a Parent</NavLink>
        </Button>
        <Box
          display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
          mr={"2.4em"}
        >
          <Hamburger
            rounded
            direction="right"
            duration={0.5}
            onToggle={(toggled) => {
              if (toggled) {
                setDisplay("flex");
              } else {
                setDisplay("none");
              }
            }}
          />
        </Box>

        <Flex
          w={"100vw"}
          zIndex={20}
          h={"100vh"}
          bgColor={background}
          pos={"fixed"}
          top={"80px"}
          left={"0"}
          overflow={"auto"}
          flexDir={"column"}
          display={display}
          transition={"all 1s"}
        >
          <Flex flexDir={"column"} align={"center"} my={"4em"}>
            <NavLink to={"/construction"} onClick={() => setDisplay("none")}>
              <Button
                as={"a"}
                variant={"ghost"}
                aria-label="About"
                w={"100%"}
                mb={"1.5em"}
              >
                ABOUT
              </Button>
            </NavLink>
            <NavLink to={"/contact"} onClick={() => setDisplay("none")}>
              <Button
                as={"a"}
                variant={"ghost"}
                aria-label="Contact"
                w={"100%"}
                mb={"1.5em"}
              >
                CONTACT
              </Button>
            </NavLink>
            <NavLink to={"/construction"} onClick={() => setDisplay("none")}>
              <Button
                variant={"ghost"}
                aria-label="Pricing"
                w={"100%"}
                mb={"1.5em"}
              >
                PRICING
              </Button>
            </NavLink>
            
            <Button variant={"ghost"} sx={componentButton} w={"50%"}>
              Register as a Parent
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
