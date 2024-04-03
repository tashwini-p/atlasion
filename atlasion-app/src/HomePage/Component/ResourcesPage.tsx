import { Box, Flex, Grid, Img, Text } from "@chakra-ui/react";
import ResourceImage from "../../assets/HomePageIcon/ResourcesPagelogo.png"

import { ChevronRightIcon } from "@chakra-ui/icons";


interface DataType {
  title: String;
  Data: String[];
}

export const ResourceData: React.FC<DataType> = ({ title, Data }) => {
  return (
    <Box  w={["full", "3/5"]} my={[8, 0]}>
      <Text fontSize="xs" fontWeight="semibold" color="#54637c" pl={2}>
        {title}
      </Text>
      <Box color="#0a1e42" gridGap={1}>
        {Data.map((subTitle,index) => {
          return (
            <Box my={1} pl={2} key={index}>
              <Text _hover={{ color: "#2a6ed4" }} fontSize="0.9rem">{subTitle}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export const ResourcePage = () => {
  return (
    <Box zIndex="14"style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} w={"100%"}>
        {/* <Container maxW={"7xl"}> */}
      <Flex flexDirection={["column", "row"]} ml={[3, "13rem"]} >
        <Grid mr={[0, "5"]}  w={"80%"} columnGap={8} >
          <Text
            mt={["2rem", "4rem"]}
            fontSize={["11px","10px"]}
            fontWeight="bold"
            color="#54637c"
            ml={2}
          >
            FEATURED
          </Text>
          <Grid
           mt={["1","5"]}
           mb={["1","4rem"]}
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(3,1fr)",
            ]}
          >
            <ResourceData title={"LEARN"} Data={Column1_Data} />
            <ResourceData title={"SUPPORT"} Data={Column2_Data} />
            <ResourceData title={"CONNECT"} Data={Column3_Data} />
          </Grid>
        </Grid>
        <Box minW={["100%", "38%"]} bg="#F3F4F6">
          <Box pl="1rem" pt="3rem" maxW="57%" h="100%" >
            <Flex flexDirection="column" rowGap={3} mb={"4rem"}>
              <Text fontSize="12px" fontWeight="bold" color="#54637c">
                WHAT'S NEW
              </Text>
               <Box  w={"70%"} mb={5}>
                <Img src={ResourceImage} alt="ResourcesLogo"/>
               </Box>
               <Flex justifyContent="center" h="1.8rem" rowGap={2} flexDirection={"column"}>
                  <Text fontSize={["0.5rem","0.6rem","1.1rem"]} color="#0a1e42">
                    Atlassian Presents: Unleash
                  </Text>
                  <Text fontSize={["0.5rem","0.6rem","0.7rem"]} color="#0a1e42">
                      Product updates, hands-on training, and technical demos - catch all that and more at our biggest agile & DevOps even
                  </Text>
                </Flex>
                <Flex
                  mt={8}
                  alignItems="center"
                  color="#2a6ed4"
                  fontWeight="medium"
                 _hover={{
                  transform: "translateX(1px)",
                  transition: "ease-in-out 300ms",
                }}
                fontSize="1rem"
                >
              <Text
                textAlign="center"
                flexWrap="nowrap"
                _hover={{ color: "#2a6ed4" }}
               >
                Watch Now
              </Text>
              <ChevronRightIcon mt={1} />
            </Flex>
              </Flex>
                 </Box>
              </Box>
      </Flex>
      {/* </Container> */}
    </Box>
  );
};

export const Column1_Data: String[] = [
  "Atlassian University",
  "Atlassian Playbook",
  "Production Documentation",
  "Developer Resources",
];
export const Column2_Data: String[] = [
  "Atlassian Community",
  "Atlassian Support",
  "Atlassian Migration Program",
  "Enterprise Services",
  "Partner Support",
  "Purchasing & Licensing",
];
export const Column3_Data: String[] = [
  "About us",
  "Careers",
  "Work Life Blog",
  "Events",
];
