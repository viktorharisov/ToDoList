import React, {useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {EditIcon} from "@chakra-ui/icons";
import {editHandler} from "../TaskService/TaskService";


const EditModal = ({text, id, setTasks}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [currentText, setCurrentText] = useState(text)

    const onSave = () => editHandler(id, currentText, setTasks, onClose)

    const handleChangeText = (e) => setCurrentText(e.target.value)

    return (
        <>
            <Button onClick={onOpen}><EditIcon/></Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Измените название задачи</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    </ModalBody>
                        <FormControl>
                            <FormLabel>Название</FormLabel>
                            <Input value = {currentText}
                                placeholder='Название задачи'
                                onChange = {handleChangeText}/>
                        </FormControl>

                    <ModalFooter>

                        <Button colorScheme='red'
                                onClick={onClose}>
                            Отменить
                        </Button>
                        <Button colorScheme='blue'
                                mr={3}
                                onClick={onSave}>
                            Сохранить
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditModal;