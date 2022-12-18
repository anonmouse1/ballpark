import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/loginForm";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function HomeStruct() {
  return (
    <div>
      <Head>
        <title>Ballpark</title>
        <meta name="description" content="ballpark app" />
        <link rel="icon" href="/baseballonCard.svg" />
      </Head>
      <div>
        <Image
          src="/baseballonCard.svg"
          alt="baseball"
          width={200}
          height={200}
        />
      </div>
      <Heading size="xl">BallPark</Heading>
      <Text size="2xl">
        A simple app to track your baseball card collection
      </Text>

      <div>
        <LoginForm></LoginForm>
      </div>

      <footer></footer>
    </div>
  );
}
