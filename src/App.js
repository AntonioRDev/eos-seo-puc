import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

function App() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          EONS Marketing Solutions
        </Heading>

        <FormControl isRequired>
          <FormLabel>Arquivo com o código</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center w="full">
              <Input w="full" type='file'/> 
            </Center>
          </Stack>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Nome da empresa</FormLabel>
          <Input
            placeholder="Digite o nome..."
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="seu-email@exemplo.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>

        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancelar
          </Button>

          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default App;