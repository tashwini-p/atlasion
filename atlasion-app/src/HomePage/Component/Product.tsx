import { Box, Flex, Text, Img, Divider, Grid} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaMap } from "react-icons/fa";
import { IoCloudDoneSharp } from "react-icons/io5";
import React from "react";

interface ProductCards {
  image_Url: string;
  Product_name: string;
  description: string;
}

export const ProductCard: React.FC<ProductCards> = ({
  image_Url,
  Product_name,
  description,
}) => {
  return (
    <Flex
      alignItems={["start","center"]}
      columnGap={[2,7]}
      _hover={{ transform: "translateX(1px)", transition: "ease-in-out 300ms" }}
    >
      <Box>
        <Img h={["2rem","3rem"]} w={["2rem","3rem"]} src={image_Url} />
      </Box>
      <Box color="black" _hover={{ color: "#2a6ed4" }}>
        <Text fontSize={["0.9rem","1.3rem"]}>{Product_name}</Text>
        <Text fontSize={["0.6rem","0.8rem"]}>{description}</Text>
      </Box>
    </Flex>
  );
};

export const CardDetail: React.FC<ProductCards> = ({
  image_Url,
  Product_name,
  description,
}) => {
  return (
    <Flex
      alignItems="center"
      columnGap={[1,4]}
      h={["4rem"]}
      _hover={{ transform: "translateX(1px)", transition: "ease-in-out 300ms" }}
    >
      <Flex justifyContent="center" alignItems="center" >
        <Img h={["2rem","3rem"]} w={["2rem","3rem"]} src={image_Url} />
      </Flex>
      <Box
        fontWeight="bold"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        _hover={{ color: "#2a6ed4" }}
        fontFamily="__Inter_20951f"
      >
        <Text fontSize={["0.8rem","1.1rem"]} color="#091e42" paddingRight="0.3rem">
          {Product_name}
        </Text>
        <Text fontSize={["0.6rem","0.9rem"]} color="#505f79" paddingRight="0.3rem">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export function NavProduct() {
  return (
    <Box
      zIndex="14"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      textDecoration="none"
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
    >
    
      <Box
        ml={["4","11rem"]}
        mt={["0","4rem"]}
        w={{ base: "100%", md: "65%" }}
        pt={{ base: "3rem", md: 0 }}
        pl={{ base: "1rem", md: "2.5rem" }}
        pr={{ base: "0.5rem", md: 0 }}
        textDecoration="none"
        
      >
        <Box>
          <Text mb={["2","5"]} fontSize="11px" fontWeight="bold" color="#54637c">
            FEATURED
          </Text>
        </Box>
        <Flex flexDirection={"column"} rowGap={[2,7]}>
          <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} rowGap={6}>
            <ProductCard
              image_Url={
                "https://tse1.mm.bing.net/th?id=OIP.3Xlbth8iI3LofCjgkU8cHwHaIC&pid=Api&P=0&h=180"
              }
              Product_name={"Jira Software"}
              description={"Project and issue tracking"}
            />
            <ProductCard
              image_Url={
                "https://tse1.mm.bing.net/th?id=OIP.KK_wcCiud9ThyDfki_rKyAAAAA&pid=Api&P=0&h=180"
              }
              Product_name={"Confluence"}
              description={"Content collaboration"}
            />
            <ProductCard
              image_Url={
                "https://www.scoopadmin.com/theme/assets/galleries/jira-servicedesk-logo.png"
              }
              Product_name={"Jira Service Management"}
              description={"High-velocity ITSM"}
            />
            <ProductCard
              image_Url={
                "https://tse1.mm.bing.net/th?id=OIP.SuVu6-ExuplFN6WLChTKhQAAAA&pid=Api&P=0&h=180"
              }
              Product_name={"JTrello"}
              description={"Visual project management"}
            />
          </Grid>
          <Flex
            alignItems="center"
            color="#2a6ed4"
            fontWeight="medium"
            _hover={{
              transform: "translateX(1px)",
              transition: "ease-in-out 300ms",
            }}
          >
            <Text
              fontSize={[14,18]}
              textAlign={["left","center"]}
              px="1"
              flexWrap="nowrap"
              _hover={{ color: "#2a6ed4" }}
            >
              View all products
            </Text>
            <ChevronRightIcon mt={1}  />
          </Flex>

          <Divider backgroundColor="#E5E7EB" h="1px" />
        </Flex>
        <Flex
          mt={6}
          mb={4}
          flexDirection="column"
          rowGap={5}
          _hover={{
            transform: "translateX(1px)",
            transition: "ease-in-out 300ms",
          }}
        >
          <Text
            lineHeight="0.5"
            fontSize={["0.9rem","1rem"]}
            fontWeight="medium"
            color="#0a1e42"
            _hover={{ color: "#2a6ed4" }}
          >
            Marketplace
          </Text>
          <Flex
            fontSize={["0.7rem","0.9rem"]}
            h="1.4rem"
            textAlign={["start","center"]}
            fontWeight="medium"
            color="#54637c"
            alignItems="center"
          >
            <Text>
              Connect thousands of apps and integrations for all your Atlassian
              products
            </Text>
            <ChevronRightIcon mt={1} />
          </Flex>
        </Flex>
      </Box>
      <Box minW="35%" pl="2.5rem" pt={["1rem","3rem"]} bg="#F3F4F6">
        <Box>
          <Text fontSize="11px" fontWeight="bold" color="#54637c">
            WHAT'S NEW
          </Text>
        </Box>
        <CardDetail
          image_Url={
            "https://attlasianmegamenuclone.vercel.app/logos-atlas-icon-gradient-blue.svg"
          }
          Product_name={"Atlas"}
          description={"Teamwork directory"}
        />
        <CardDetail
          image_Url={
            "https://attlasianmegamenuclone.vercel.app/Jira%20Product%20Discovery-icon-blue.svg"
          }
          Product_name={"Jira Product Discovery"}
          description={"Prioritization and roadmaping"}
        />
        <Flex
          alignItems="center"
          mt={[2,4]}
          mb={[4,7]}
          color="#2a6ed4"
          fontWeight="medium"
        >
          <Text textAlign="center" fontWeight="semibold">
            View all
          </Text>
          <ChevronRightIcon mt={1} />
        </Flex>
        <Flex flexDirection="column" rowGap={[2,6]} mb={[2,0]}>
          <Text fontSize="0.7rem" fontWeight="semibold" color="#54637c">
            YOU MIGHT FIND HELPFUL
          </Text>
          <Flex
            fontSize="md"
            fontWeight="medium"
            color="#0a1e42"
            flexDirection="column"
            rowGap={[2,2]}
            mb={[5,0]}
          >
            <Flex alignItems="center" h={["1rem","1.8rem"]} columnGap={[2]}>
              <FaMap size="1.2rem" />
              <Text _hover={{ color: "#2a6ed4" }} h={["1.2rem","1.8rem"]} fontSize={["0.8rem","1.1rem"]} >Cloud Product Roadmap</Text>
            </Flex>
            <Flex alignItems="center"h={["1.2rem","1.8rem"]} columnGap={2}>
              <Box>
                <IoCloudDoneSharp size="1.2rem" />
              </Box>
              <Text _hover={{ color: "#2a6ed4" }} h={["1.2rem","1.8rem"]} fontSize={["0.9rem","1.1rem"]}>
                Atlassian Migration Program
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
     
    </Box>
  );
}
