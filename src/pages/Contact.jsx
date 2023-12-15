import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import image from "../images/25.png";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { color } from "framer-motion";
export default function Price() {
  useEffect(() => {
    document.body.classList.add("bg-color");
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
     
    </div>
  );
}
