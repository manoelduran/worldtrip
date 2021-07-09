import { Box } from "@chakra-ui/react";
import React from "react";

export default function Spacer() {
  return (
    <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.700" my={["9", "20"]} />
  );
}