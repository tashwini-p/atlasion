import { Box, Flex, Heading, Text, Image as ChakraImage } from "@chakra-ui/react";
import logo from "../assets/WebsiteLogo.png"
const Footer = () => {
  return (
    <Box width="100%" backgroundColor="#F4F5F7" py={10}>
      <Flex justifyContent="center" flexDirection={{ base: "column", md: "row" }} alignItems="center">
        {/* Atlassian logo */}
        <Flex flex={{ base: 1, md: 0.8 }} justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
          {/* Your existing footer content */}
          <Box flex={0.2} textAlign="start" fontSize={14}>
            <Heading as="h2" fontSize={14} fontWeight={700} textTransform="uppercase" mb={4}>Products</Heading>
            <Text _hover={{ color: "blue" }}>Jira Software</Text>
            <Text _hover={{ color: "blue" }}>Jira Align</Text>
            <Text _hover={{ color: "blue" }}>Jira Service Management</Text>
            <Text _hover={{ color: "blue" }}>Confluence</Text>
            <Text _hover={{ color: "blue" }}>Trello</Text>
            <Text _hover={{ color: "blue" }}>Bitbucket</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">View all products</Text>
          </Box>
          <Box flex={0.2} textAlign="start" fontSize={14}>
            <Heading as="h2" fontSize={14} fontWeight={700} textTransform="uppercase" mb={4}>Resources</Heading>
            <Text _hover={{ color: "blue" }}>Technical Support</Text>
            <Text _hover={{ color: "blue" }}>Purchasing & licensing</Text>
            <Text _hover={{ color: "blue" }}>Atlassian Community</Text>
            <Text _hover={{ color: "blue" }}>Knowledge base</Text>
            <Text _hover={{ color: "blue" }}>Marketplace</Text>
            <Text _hover={{ color: "blue" }}>My Account</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">Create support ticket</Text>
          </Box>
          <Box flex={0.2} textAlign="start" fontSize={14}>
            <Heading as="h2" fontSize={14} fontWeight={700} textTransform="uppercase" mb={4}>Expand & Learn</Heading>
            <Text _hover={{ color: "blue" }}>Partners</Text>
            <Text _hover={{ color: "blue" }}>Training & Certification</Text>
            <Text _hover={{ color: "blue" }}>Documentation</Text>
            <Text _hover={{ color: "blue" }}>Developer Resources</Text>
            <Text _hover={{ color: "blue" }}>Enterprise services</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">View all resources</Text>
          </Box>
          <Box flex={0.2} textAlign="start" fontSize={14}>
            <Heading as="h2" fontSize={14} fontWeight={700} textTransform="uppercase" mb={4}>About Atlassian</Heading>
            <Text _hover={{ color: "blue" }}>Company</Text>
            <Text _hover={{ color: "blue" }}>Careers</Text>
            <Text _hover={{ color: "blue" }}>Events</Text>
            <Text _hover={{ color: "blue" }}>Blogs</Text>
            <Text _hover={{ color: "blue" }}>Investor Relations</Text>
            <Text _hover={{ color: "blue" }}>Trust & Security</Text>
            <Text paddingTop={2} color="#3182CE" cursor="pointer">Contact us</Text>
          </Box>
        </Flex>
      </Flex>
      <hr />
      <Flex justifyContent="space-around" width="80%" mt={6} ml={"10rem"}>
        <Box flex={0.7} display="flex" gap={4} fontWeight={500} fontSize={14} color="#4A5568" alignItems="center">
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
        <Flex flex={0.3} justifyContent="flex-end">
          <ChakraImage src="https://img.icons8.com/fluency/512/facebook.png" height={10} width={10} mr={3}/>
          <ChakraImage src="https://img.icons8.com/fluency/512/twitter.png" height={10} width={10} mr={3}/>
          <ChakraImage src="https://img.icons8.com/fluency/512/linkedin.png" height={10} width={10} mr={3}/>
          <ChakraImage src="https://img.icons8.com/ios-filled/512/youtube-squared.png" height={10} width={10} mr={8} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
