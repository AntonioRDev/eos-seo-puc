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
import { useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();
  const [isLoading, setLoading] = React.useState(false);

  const [files, setFiles] = React.useState(undefined);
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onSubmit = async () => {
    if (!files || !files.length || !company || !email) {
      toast({
        title: "Atenção!",
        description: "Preencha todos os campos obrigatórios",
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("empresa", company);
      formData.append("email", email);
      formData.append("file", files[0]);

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/upload_file`, {
        method: "POST",
        body: formData,
      });
      console.log("response", response);
      toast({
        title: "Sucesso",
        description: "Seu código foi enviado para análise, aguarde o retorno",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });

      onCancel();
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Ocorreu um erro ao enviar o seu formulário",
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      console.log("onSubmit", error);
    } finally {
      setLoading(false);
    }
  };

  const onCancel = () => {
    setFiles(undefined);
    setCompany("");
    setEmail("");
  };

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
              <Input
                w="full"
                type="file"
                onChange={(e) => setFiles(e.target.files)}
              />
            </Center>
          </Stack>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Nome da empresa</FormLabel>
          <Input
            placeholder="Digite o nome..."
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="seu-email@exemplo.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={onCancel}
            disabled={isLoading}
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
            onClick={onSubmit}
            disabled={isLoading}
            isLoading={isLoading}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default App;
