import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Type from "./type";


export default function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      MaxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Type icon="nightlife" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Type icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <Type icon="modern" text="moderno" />
      </GridItem>
      <GridItem>
        <Type icon="classic" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="more" text="e mais..." />
      </GridItem>
    </Grid>
  );
}