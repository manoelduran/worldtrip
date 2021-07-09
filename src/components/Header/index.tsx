import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { RiArrowLeftSLine } from 'react-icons/ri';

export default function Header() {
  const { asPath } = useRouter()
  const isNotHomePage = asPath !== "/"
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {isNotHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>
        )}
        <Image
          src="/logo.svg"
          w={["81px", "184px"]}
          alt="Marca World Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}