import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  Flex,
  useToast,
  Heading,
  SimpleGrid,
  GridItem,
  Checkbox,
} from "@chakra-ui/react";

function LoginForm() {
  const toast = useToast();

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      as="form"
      justifyContent="center"
      bg="gray.200"
    >
      <VStack spacing="{3}" alignItems="flex-start">
        <Heading size="lg">Sign in</Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl mt={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox>Remember me</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" type="submit">
            Sign in
          </Button>
        </GridItem>
        <HStack justifyContent="space-between" w="full">
          <GridItem colSpan={1}>
            <FormControl>
              <Button variant="link">Forgot password</Button>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <Button variant="outline" onClick={console.log}>
                Sign up
              </Button>
            </FormControl>
          </GridItem>
        </HStack>
      </SimpleGrid>
    </VStack>
  );
}
export default LoginForm;
