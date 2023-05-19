import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  Box, Flex, Button, useDisclosure, Table, Thead, Tr, Th, Tbody, Td, useBreakpointValue
} from '@chakra-ui/react'

import { useEffect, useState } from "react"
import ModalComp from "./components/ModalComp"

const App = () => {
  const {isOpen, setIsOpen, onClose} = useDisclosure()
  const [ data, setData ] = useState([])
  const [dataEdit, setDataEdit] = useState({})

  return (
    <>
      <Flex
        h='100vh'
        align='center'
        justify='center'
        fontSize='20px'
        fontFamily='poppins'/>
    </>
  )
}

export default App
