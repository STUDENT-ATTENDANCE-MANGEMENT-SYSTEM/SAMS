import {
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
} from "@chakra-ui/react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  MdAnnouncement,
  MdBook,
  MdContentCopy,
  MdHelp,
  MdNotifications,
  MdOutlineNotifications,
  MdSettingsSuggest,
  MdSsidChart,
  MdVisibility,
} from "react-icons/md";
import { useEffect } from "react";
import logo from "../images/logo.png";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
export default function InstitutionLayout() {
  useEffect(() => {
    document.body.classList.add("bg-color");
  }, []);

  return (
    <div>
      <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem
          as={"aside"}
          colSpan={"1"}
          minHeight={"100vh"}
          borderRight={"2px solid black"}>
          <Flex mt={"30px"} ml={"10px"}>
            <Text fontWeight={"extrabold"} fontSize={"2xl"}>
              University of Ibadan
            </Text>
          </Flex>
          <Flex justify={"center"}>
            <List spacing={10} mt={"70px"} cursor={"pointer"}>
              <NavLink
                to={"home"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "Red" : "black",
                  };
                }}>
                <ListItem
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  pl={"20px"}
                  pb={"30px"}>
                  <ListIcon as={MdVisibility} boxSize={5} />
                  Overview
                </ListItem>
              </NavLink>
              <NavLink
                to={"/construction"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "Red" : "black",
                  };
                }}>
                <ListItem
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  pl={"20px"}
                  pb={"30px"}>
                  <ListIcon as={MdBook} boxSize={5} />
                  Courses
                </ListItem>
              </NavLink>
              <NavLink
                to={"/construction"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "Red" : "black",
                  };
                }}>
                <ListItem
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  pl={"20px"}
                  pb={"30px"}>
                  <ListIcon as={MdSsidChart} boxSize={5} />
                  Insight
                </ListItem>
              </NavLink>
              <NavLink
                to={"/construction"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "Red" : "black",
                  };
                }}>
                <ListItem
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  pl={"20px"}
                  pb={"30px"}>
                  <ListIcon as={MdSettingsSuggest} boxSize={5} />
                  Setting
                </ListItem>
              </NavLink>
              <NavLink
                to={"/construction"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "Red" : "black",
                  };
                }}>
                <ListItem
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  pl={"20px"}
                  pb={"30px"}>
                  <ListIcon as={MdHelp} boxSize={5} />
                  Support and Help
                </ListItem>
              </NavLink>
              <NavLink
                to={"/construction"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "Red" : "black",
                  };
                }}>
                {" "}
                <ListItem fontWeight={"bold"} cursor={"pointer"} pl={"20px"}>
                  <ListIcon as={MdAnnouncement} boxSize={5} />
                  Annoucement
                </ListItem>
              </NavLink>

              <ListItem>
                <Button colorScheme="red" p={"10px"} w={"75%"}>
                  Logout
                </Button>
              </ListItem>
            </List>
          </Flex>
        </GridItem>
        <GridItem as={"main"} colSpan={"5"}>
          <Flex borderBottom={"1px solid grey"} p={"10px"} align={"center"}>
            <Box ml={"25px"}>
              <img src={logo} alt="logo" />
            </Box>
            <Spacer />
            <Flex align={"center"} gap={"7"} mr={"150px"}>
              <Tooltip
                hasArrow
                label="Copy institution code"
                bg={"white"}
                color={"black"}
                p={"10px"}>
                <IconButton
                  variant={"ghost"}
                  colorScheme="white"
                  icon={<MdContentCopy />}
                  size={"lg"}
                />
              </Tooltip>

              <Menu>
                <MenuButton>
                  <IconButton
                    variant={"ghost"}
                    colorScheme="white"
                    icon={<MdOutlineNotifications />}
                    size={"lg"}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Create Attendance</MenuItem>
                  <MenuItem>Join Attendance</MenuItem>
                </MenuList>
              </Menu>

              <Wrap>
                <WrapItem>
                  <Avatar
                    name="University of Ibadan"
                    src="https://bit.ly/broken-link"
                  />
                </WrapItem>
              </Wrap>
            </Flex>
          </Flex>
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
}
