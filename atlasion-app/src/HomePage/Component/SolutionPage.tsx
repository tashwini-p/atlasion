import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { LuNetwork } from "react-icons/lu";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { MdApartment, MdVerifiedUser } from "react-icons/md";

interface TeamSizeFilterProps {
  options: string[];
  title: string;
}

export const NavBarResources: React.FC<TeamSizeFilterProps> = ({
  options,
  title,
}) => {
  return (
    <Box pt={3} pl={1} mt={[0,4,6]} h="24vh" w="100%">
      <Flex justifyContent="space-between">
        <Box w="100%">
          <Text fontSize="xs" fontWeight="semibold" color="#54637c">
            {title}
          </Text>
          <Box color="#0a1e42" gridGap={1} gridAutoRows="max-content">
            {options.map((option, index) => (
              <Text key={index} _hover={{ color: "#2a6ed4" }}>
                {option}
              </Text>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const str: string[] = ["Enterprise", "Small Business", "Startup", "Non-profit"];
const str2: string[] = [
  "Software Development",
  "IT",
  "Finance",
  "Marketing",
  "HR",
];
const str3: string[] = [
  "Retail",
  "TeleCommunication",
  "Professional Service",
  "Government",
];

export const SolutionPage = () => {
 
  return (
    <Box style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
        {/* <Container maxW="7xl"> */}
      <Flex flexDirection={["column", "row"]} ml={[3, "13rem"]}>
        <Box maxW={["100%", "60%"]} mr={[0, "5"]}>
          <Text mt={["2rem", "4rem"]} fontSize="11px" fontWeight="bold" color="#54637c">
            FEATURED
          </Text>
          <Flex flexDirection={["column", "row"]} mt={[2,4]} columnGap={2} w="100%">
            <Flex
              bgGradient="linear(to-br, #B6D6FF, pink.100)"
              w={["100%", "33%"]}
              flexDirection="column"
              rowGap={5}
              pb={4}
              cursor="pointer"
              _hover={{
                boxShadow: "dark-lg",
                transition: "ease-in-out 300ms",
              }}
            >
              <Flex columnGap={["40%","30%"]} pl={4} mt={[4,8]}>
                <Text>Work Management</Text>
                <Flex justifyContent="center" mt="0.3rem">
                  <FaCopy size="1.5rem" />
                </Flex>
              </Flex>
              <Box pl={4} w="87%" fontSize="0.9rem">
                Manage projects and align goals across all teams to achieve
                deliverables
              </Box>
            </Flex>
            <Flex
              bgGradient="linear(to-br, #B5D4FE, #DAF5F2)"
              w={["100%", "32%"]}
              flexDirection="column"
              rowGap={5}
              _hover={{
                boxShadow: "dark-lg",
                transition: "ease-in-out 300ms",
              }}
              cursor="pointer"
            >
              <Flex columnGap={["30%","14%"]} pl={4} mt={[4,8]}>
                <Text>IT Service Management</Text>
                <Flex justifyContent="center" mt="0.3rem">
                  <AiFillThunderbolt size="1.5rem" />
                </Flex>
              </Flex>
              <Box pl={4} w="86%" fontSize="0.9rem">
                Enable dev, IT ops, and business teams to deliver great
                service at high velocity
              </Box>
            </Flex>
            <Flex
              bgGradient="linear(to-br, #ECE7FD, #FDEBE8)"
              w={["100%", "33%"]}
              flexDirection="column"
              rowGap={5}
              _hover={{
                boxShadow: "dark-lg",
                transition: "ease-in-out 300ms",
              }}
              cursor="pointer"
            >
              <Flex columnGap={["44%","38%"]} pl={4} mt={[4,8]}>
                <Text>Agile & DevOps</Text>
                <Flex justifyContent="center" mt="0.3rem">
                  <LuNetwork size="1.5rem" />
                </Flex>
              </Flex>
              <Box pl={4} w="87%" fontSize="0.9rem">
                Run a world-class agile software organization from discovery
                to delivery and operations
              </Box>
            </Flex>
          </Flex>
          <Grid  templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} mt={4} w="100%">
            <NavBarResources title="BY TEAM SIZE" options={str} />
            <NavBarResources title="BY TEAM FUNCTION" options={str2} />
            <NavBarResources title="BY INDUSTRY" options={str3} />
          </Grid>
        </Box>
        <Box minW={["100%", "38%"]} bg="#F3F4F6">
          <Box pl="1rem" pt="3rem" maxW="57%" h="100%">
            <Flex flexDirection="column" rowGap={3} mb={6}>
              <Text fontSize="11px" fontWeight="bold" color="#54637c">
                WHAT'S NEW
              </Text>
              <Text fontSize="0.85rem" fontWeight="bold" color="#54637c">
                Atlassian Together
              </Text>
              <Text fontSize="0.6rem" fontWeight="bold" color="#54637c">
                Get Atlassian work management products in <br />
                one convenient package for enterprise teams.
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              color="#2a6ed4"
              fontWeight="medium"
              _hover={{
                transform: "translateX(1px)",
                transition: "ease-in-out 300ms",
              }}
              fontSize="0.9rem"
            >
              <Text
                textAlign="center"
                px="1"
                flexWrap="nowrap"
                _hover={{ color: "#2a6ed4" }}
              >
                Learn More
              </Text>
              <ChevronRightIcon mt={1} />
            </Flex>
            <Flex flexDirection="column" rowGap={6} mt={10}>
              <Text fontSize={["0.5rem","0.6rem","0.7rem"]} fontWeight="semibold" color="#54637c">
                YOU MIGHT FIND HELPFUL
              </Text>
              <Flex
                fontSize="md"
                fontWeight="medium"
                color="#0a1e42"
                flexDirection="column"
                rowGap={2}
              >
                <Flex alignItems="center" h="1.8rem" columnGap={2}>
                  <MdVerifiedUser size={"1rem"} />
                  <Text _hover={{ color: "#2a6ed4" }} fontSize={["0.5rem","0.6rem","1rem"]}>
                    Atlasian Trust & Security
                  </Text>
                </Flex>
                <Flex alignItems="center" h="1.8rem" columnGap={2}>
                  <Box >
                    <MdApartment size={"1rem"} />
                  </Box>
                  <Text _hover={{ color: "#2a6ed4" }} fontSize={["0.5rem","0.6rem","1rem"]}>
                    Customer Case Studies
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
      {/* </Container> */}
    </Box>
  );
};
