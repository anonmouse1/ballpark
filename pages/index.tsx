import { Container, Flex } from "@chakra-ui/react";
import HomeStruct from "../components/HomeStruct";

export default function Home() {
  return (
    <Container maxW="container.x1" p={0}>
      <Flex
        h="100vh"
        alignItems="center"
        justifyContent="center"
        bgColor="pink.100"
        direction="column"
      >
        <HomeStruct></HomeStruct>
      </Flex>
    </Container>
  );
}
