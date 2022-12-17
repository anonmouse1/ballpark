import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Stack,
  Flex,
  Box,
  useToast,
  Heading,
  Link,
} from "@chakra-ui/react";

function LoginForm() {
  const toast = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform login logic here
    toast({
      title: "Logged in successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit}
      color={"orange"}
      justifyContent="center"
      bg="gray.800"
    >
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" placeholder="Enter your email address" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <Link>Forgot password</Link>
        <Button variant="outline" variantColor="teal" onClick={console.log}>
          Sign up
        </Button>
      </FormControl>
      <Flex mt={4} justifyContent="center" alignItems="center">
        <Button variantColor="teal" type="submit">
          Log in
        </Button>
      </Flex>
    </Stack>
  );
}
export default LoginForm;
