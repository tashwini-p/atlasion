import { Box, Flex, Heading, Text, Image as ChakraImage, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    
    <Box width="100%" bg="#F4F5F7" py={[2,10]} color={"black"} >
      <Container maxW={"7xl"}>
      <Flex justifyContent={["start","center"]} flexDirection={{ base: "column", md: "row" }} alignItems={["","center"]} ml={["7",0]} display={["none","block"]}>
        <Flex flex={{ base: 1, md: 0.8 }} justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
          <Box flex={0.2} textAlign="start" fontSize={[11,14]}>
            <Heading as="h2" fontSize={[10,14]} fontWeight={700} textTransform="uppercase" mb={[2,4]}>Products</Heading>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Jira Software</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Jira Align</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Jira Service Management</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Confluence</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Trello</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Bitbucket</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">View all products</Text>
          </Box>
          <Box flex={0.2} textAlign="start" fontSize={[11,14]} mt={[2,0]}>
            <Heading as="h2" fontSize={[10,14]} fontWeight={700} textTransform="uppercase" mb={[2,4]}>Resources</Heading>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Technical Support</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Purchasing & licensing</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Atlassian Community</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Knowledge base</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Marketplace</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>My Account</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">Create support ticket</Text>
          </Box>
          <Box flex={0.2} textAlign="start" fontSize={[11,14]} mt={[2,0]}>
            <Heading as="h2" fontSize={[10,14]} fontWeight={700} textTransform="uppercase" mb={[2,4]}>Expand & Learn</Heading>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Partners</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Training & Certification</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Documentation</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Developer Resources</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Enterprise services</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">View all resources</Text>
          </Box>
          <Box flex={0.2} textAlign="start" fontSize={[11,14]} mt={[2,0]}>
            <Heading as="h2"  fontSize={[10,14]} fontWeight={700} textTransform="uppercase" mb={[2,4]}>About Atlassian</Heading>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Company</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Careers</Text>
            <Text _hover={{ color: "blue" }}cursor={"pointer"}>Events</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Blogs</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Investor Relations</Text>
            <Text _hover={{ color: "blue" }} cursor={"pointer"}>Trust & Security</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">Contact us</Text>
          </Box>
        </Flex>
      </Flex>
      <hr />
      <Flex justifyContent="space-around" width="90%" mt={6} ml={["0rem","7rem"]} wrap={"wrap"}>
        <Box flex={0.7}  display="flex" gap={4} fontWeight={500} fontSize={[7,14]} color="#4A5568" alignItems="center" flexWrap={"wrap"}>
          <Flex gap={2} alignItems="center" >
            <ChakraImage src="https://img.icons8.com/ios/512/globe.png" height={15} width={15} />
            <Text>English</Text>
          </Flex>
          <Text>Privacy policy</Text>
          <Text>Terms</Text>
          <Text>Modern Slavery Act</Text>
          <Text>Impressum</Text>
          <Text>Copyright © 2022 Atlassian</Text>
        </Box>
        <Flex flex={0.3} justifyContent={["start","flex-end"]} wrap={"wrap"}>
          <ChakraImage src="https://img.icons8.com/fluency/512/facebook.png" height={[5,10]} width={[5,10]} mr={[1,3]}/>
          <ChakraImage src="https://img.icons8.com/fluency/512/twitter.png" height={[5,10]} width={[5,10]} mr={[1,3]}/>
          <ChakraImage src="https://img.icons8.com/fluency/512/linkedin.png" height={[5,10]} width={[5,10]}mr={[1,3]}/>
          <ChakraImage src="https://img.icons8.com/ios-filled/512/youtube-squared.png" height={[5,10]} width={[5,10]} mr={[1,3]} />
        </Flex>
      </Flex>
      </Container>
    </Box>
    
  );
};

export default Footer;
