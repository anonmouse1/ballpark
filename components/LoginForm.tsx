import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  VStack,
  Flex,
  Box,
  useToast,
  Heading,
  Link,
} from "@chakra-ui/react";

function LoginForm() {
  const toast = useToast();

  return (
    <VStack as="form" justifyContent="center" bg="gray.200">
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
      </FormControl>
      <Flex mt={4} justifyContent="center" alignItems="center">
        <Button type="submit">Log in</Button>
      </Flex>
      <FormControl>
        <Link>Forgot password</Link>
        <Button variant="outline" onClick={console.log}>
          Sign up
        </Button>
      </FormControl>
    </VStack>
  );
}
export default LoginForm;
