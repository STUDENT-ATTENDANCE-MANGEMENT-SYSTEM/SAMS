import {
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridItem,
  Flex,
  SimpleGrid,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react"
import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import copy from "copy-to-clipboard"
import { NavLink, Outlet } from "react-router-dom"
import { color } from "framer-motion"
import {
  MdContentCopy,
  MdMoreVert,
  MdLockOutline,
  MdLockOpen,
  MdEdit,
  MdCalculate,
} from "react-icons/md"
const data = [
  { courseCode: "TME 211", title: "INTRODUCTION TO ENGINEERING DRAWING" },
  { courseCode: "TME 231", title: "INTRODUCTION TO ENGINEERING PRINCIPLES" },
  { courseCode: "MAT 224", title: "INTRODUCTION TO ENGINEERING MATHEMATICS" },
  { courseCode: "GNS 210", title: "INTRODUCTION TO ENTREPRENEURSHIP" },
]
export default function LecturerHome() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    document.body.classList.add("bg-color")
  }, [])
  const [lock, setLock] = useState(Array(data.length).fill(true))
  const handleOpen = (index) => {
    setLock((prevLock) => {
      const updatedLock = [...prevLock]
      updatedLock[index] = !lock[index]
      return updatedLock
    })
  }
  return (
    <div>
      <SimpleGrid columns={3} mx={"20px"} gap={"10"} mt={"30px"}>
        {data.map((item, index) => {
          const { courseCode, title } = item
          const [code, setCode] = useState(courseCode + uuidv4())

          return (
            <div key={index}>
              <Card>
                <CardHeader>
                  <Flex>
                    <Text fontSize={"1.6rem"} pl={"10px"} mt={"15px"}>
                      {courseCode}
                    </Text>
                    <Spacer />
                    <Menu>
                      <MenuButton>
                        {" "}
                        <IconButton
                          variant={"ghost"}
                          size={"lg"}
                          icon={<MdMoreVert />}
                        />
                      </MenuButton>
                      <MenuList ml={"-160px"} mt={"-10px"}>
                        <MenuItem icon={<MdEdit />}>Edit Attendance</MenuItem>
                        <MenuItem icon={<MdCalculate />}>
                          Calculate Attendance
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </CardHeader>
                <CardBody>{title}</CardBody>
                <CardFooter>
                  <Spacer />
                  <span>
                    <IconButton
                      variant={"ghost"}
                      size={"lg"}
                      icon={
                        lock[index] ? (
                          <MdLockOutline
                            onClick={() => {
                              // onOpen()
                              if (
                                window.confirm(
                                  "Are you sure you want to open the attendance?"
                                )
                              ) {
                                handleOpen(index)
                              }
                            }}
                          />
                        ) : (
                          <MdLockOpen
                            onClick={() => {
                              // onOpen()
                              if (
                                window.confirm(
                                  "Are you sure you want to lock the attendance?"
                                )
                              ) {
                                handleOpen(index)
                              }
                            }}
                          />
                        )
                      }
                    />
                  </span>
                  <span>
                    <IconButton
                      onClick={() => {
                        setCode(courseCode + uuidv4())
                        copy(code)
                        alert(`You have copied course ID`)
                      }}
                      variant={"ghost"}
                      size={"lg"}
                      icon={<MdContentCopy />}
                    />
                  </span>
                </CardFooter>
              </Card>
              {/* <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Open</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    Are you sure you want to open the attendance
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                      Exit
                    </Button>
                    <Button
                      variant='ghost'
                      onClick={() => {
                        onClose()
                        handleOpen(index)
                      }}
                    >
                      Open
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal> */}
            </div>
          )
        })}
      </SimpleGrid>
    </div>
  )
}
