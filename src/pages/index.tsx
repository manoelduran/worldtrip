import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Spacer from "../components/Spacer";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Spacer />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  )
}
