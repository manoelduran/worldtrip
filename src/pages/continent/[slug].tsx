import { Flex } from "@chakra-ui/react";
import React from "react";
import Cities from "../../components/Cities";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import Header from "../../components/Header";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem" >
        <ContinentContent />
        <Cities />
      </Flex>
    </Flex>
  );
}