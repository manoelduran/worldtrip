import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";
import React from "react";

interface TypeProps {
  icon: string;
  text: string;
}

export default function Type({ icon, text }: TypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })
  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
    >
      {isMobile ? <Image src={`/${icon}.svg`} w="85px" h="85px" mb="6" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>{text}</Text>
    </Flex>
  );
}