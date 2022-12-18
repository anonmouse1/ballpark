import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginForm from "../components/loginForm";
import { Container, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.x1" p={0}>
      <Flex h="100vh" py={20}>
        <div>
          <Head>
            <title>Ballpark</title>
            <meta name="description" content="ballpark app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <h1 className={styles.title}>Ballpark</h1>
            <div>
              <Image
                src="/baseballonCard.png"
                alt="baseball"
                width={200}
                height={200}
              />
            </div>

            <p>A simple app to track your baseball card collection</p>

            <div>
              <LoginForm></LoginForm>
            </div>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span className={styles.logo}>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </footer>
        </div>
      </Flex>
    </Container>
  );
}
