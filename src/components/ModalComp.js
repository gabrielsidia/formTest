import {Modal, ModalOverlay, ModalContent, ModalHeader, 
        ModalFooter, ModalBody, ModalCloseButton, Button, 
        FormControl, FormLabel, Input, Box} from '@chakra-ui/react'
import { useState } from 'react'

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const[name, setNome] = useState(dataEdit.name || "")
  const[email, setEmail] = useState(dataEdit.email || "")
  const[idade, setIdade] = useState(dataEdit.idade || "")
  const[cep, setCep] = useState(dataEdit.cep || "");

  const handleSave = () => {
    if(!name || !email) return;

    if(emailAlreadyExist()) {
      return alert('Email já cadastrado')
    }

    if(Object.keys(dataEdit).length) {
      data[dataEdit.index] = {name, email}
    }
    const newDataArray = !Object.keys(dataEdit).length
    ?[...(data ? data :[]), {name, email}]
    :[...(data ? data : [])]

    localStorage.setItem("cad_usuario", JSON.stringify(newDataArray))

    setData(newDataArray)
    onClose()
  }

  const emailAlreadyExist = () => {
    if(dataEdit.email !== email && data?.length) {
      return data.find((item) => item.email === email)
    }

    return false;
  }
  
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Cadastro de Usuário</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <FormControl display='flex' flexDir='column' gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type='text'
                  value={name}
                  onChange={(e) => setNome(e.target.value)}/>
              </Box>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              </Box>
              <Box>
                <FormLabel>Idade</FormLabel>
                <Input
                  type='date'
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}/>
              </Box>
              <Box>
                <FormLabel>Cep</FormLabel>
                <Input
                  type='text'
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}/>
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent='start'>
            <Button colorScheme='green' mr={3} onClick={handleSave}>
              Salvar usuário
            </Button>
            <Button colorScheme='red'onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalComp
