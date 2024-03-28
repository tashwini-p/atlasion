import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const JiraServiceManagement: React.FC = () => {
  return (
    <>
      <>
        <Box
          maxWidth="600px"
          paddingBlockStart="3rem"
          paddingInline="1rem"
          paddingBlockEnd="2rem"
          textAlign="center"
          flexDirection="column"
          marginLeft="auto"
          marginRight="auto"
          boxSizing="border-box"
          fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
        >
          <Heading
            as="h2"
            size="xl"
            color="#172b4d"
            margin="0 0 1rem 0"
            lineHeight="36px"
            maxWidth="40pc"
            fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
            display="block"
            marginBlockStart="0.83rem"
            marginBlockEnd="0.83rem"
            fontWeight="bold"
          >
            Unlock high-velocity teams with Jira Service Management
          </Heading>

          <Text
            fontSize="17px"
            marginBlock="0"
            lineHeight="24px"
            color="#44546f"
            fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
          >
            Businesses are building and shipping more digital services than ever
            before. Velocity matters. Learn how to connect Dev, IT, and business
            teams to deliver exceptional service.
          </Text>
        </Box>

        <Flex justifyContent="center" alignItems="center" gap="40px">
          <Button borderRadius="50px" backgroundColor="#f7f8f9" padding="25px">
            IT support
          </Button>
          <Button borderRadius="50px" backgroundColor="#f7f8f9" padding="25px">
            Engineering support
          </Button>
          <Button borderRadius="50px" backgroundColor="#f7f8f9" padding="25px">
            Employee support
          </Button>
          <Button borderRadius="50px" backgroundColor="#f7f8f9" padding="25px">
            IT operations
          </Button>
          <Button borderRadius="50px" backgroundColor="#f7f8f9" padding="25px">
            Customer service
          </Button>
        </Flex>
        <br />
        <br />
        <Flex wrap="wrap">
          <Flex direction="column">
            <Heading
              size="xl"
              fontWeight="500"
              color="#172b4d"
              marginLeft="200px"
              marginRight="280px"
            >
              IT support
            </Heading>
            <br />
            <UnorderedList
              marginLeft="200px"
              display="flex"
              flexWrap="wrap"
              flexDirection="column"
              justifyContent="space-between"
            >
              <ListItem
                listStyleType="none"
                textAlign="-webkit-match-parent"
                display="flex"
                alignItems="flex-start"
              >
                <span>
                  <svg width="24px" height="24px" viewBox="0 0 24 24">
                    <path
                      d="M 15.587 6.988 l 0.626 -0.664 c 0.203 -0.215 0.481 -0.324 0.76 -0.324 c 0.247 0 0.496 0.086 0.694 0.262 a 0.982 0.982 0 0 1 0.063 1.414 l -0.565 0.6 a 7 7 0 1 1 -10.33 0 l -0.564 -0.6 a 0.981 0.981 0 0 1 0.062 -1.414 A 1.04 1.04 0 0 1 7.03 6 c 0.278 0 0.556 0.109 0.76 0.324 l 0.624 0.664 a 6.955 6.955 0 0 1 2.582 -0.916 L 10.998 5 H 10.5 a 0.5 0.5 0 0 1 -0.5 -0.5 v -1 a 0.5 0.5 0 0 1 0.5 -0.5 h 3 a 0.5 0.5 0 0 1 0.5 0.5 v 1 a 0.5 0.5 0 0 1 -0.5 0.5 h -0.498 l 0.001 1.071 a 6.955 6.955 0 0 1 2.584 0.917 Z M 12 18 a 5 5 0 1 0 0 -10 a 5 5 0 0 0 0 10 Z m 0.368 -4.232 a 0.796 0.796 0 0 1 -1.14 -0.018 a 0.834 0.834 0 0 1 0.018 -1.163 l 2.386 -2.355 a 0.796 0.796 0 0 1 1.14 0.018 a 0.834 0.834 0 0 1 -0.018 1.163 l -2.386 2.355 Z"
                      fill="#0052cc"
                    ></path>
                  </svg>
                </span>
                <Text fontSize="20px" lineHeight="28px" color="#44546f">
                  Spin up a service desk with ease
                </Text>
              </ListItem>
              <br />
              <ListItem
                listStyleType="none"
                textAlign="-webkit-match-parent"
                display="flex"
                alignItems="flex-start"
              >
                <span>
                  <svg width="24px" height="24px" viewBox="0 0 24 24">
                    <path
                      d="M 19 5 h 0.006 C 20.107 5 21 5.895 21 6.994 v 12.012 A 1.995 1.995 0 0 1 19.006 21 H 6.994 A 1.995 1.995 0 0 1 5 19.006 V 19 h 13 c 0.555 0 1 -0.448 1 -1 V 5 Z M 3 5.006 C 3 3.898 3.897 3 5.006 3 h 9.988 C 16.102 3 17 3.897 17 5.006 v 9.988 A 2.005 2.005 0 0 1 14.994 17 H 5.006 A 2.005 2.005 0 0 1 3 14.994 V 5.006 Z M 5 5 v 10 h 10 V 5 H 5 Z m 1 3 c 0 -0.552 0.453 -1 0.997 -1 h 6.006 c 0.55 0 0.997 0.444 0.997 1 c 0 0.552 -0.453 1 -0.997 1 H 6.997 A 0.996 0.996 0 0 1 6 8 Z m 0 3 c 0 -0.552 0.453 -1 0.997 -1 h 6.006 c 0.55 0 0.997 0.444 0.997 1 c 0 0.552 -0.453 1 -0.997 1 H 6.997 A 0.996 0.996 0 0 1 6 11 Z"
                      fill="#0052cc"
                    ></path>
                  </svg>
                </span>
                <Text fontSize="20px" lineHeight="28px" color="#44546f">
                  Manage all your requests in one place
                </Text>
              </ListItem>
              <br />
              <ListItem
                listStyleType="none"
                textAlign="-webkit-match-parent"
                display="flex"
                alignItems="flex-start"
              >
                <span>
                  <svg width="24px" height="24px" viewBox="0 0 24 24">
                    <path
                      d="M 19.293 3.293 l -5 5 a 1 1 0 1 0 1.414 1.414 l 5 -5 a 1 1 0 1 0 -1.414 -1.414 Z M 8.038 4.929 a 0.957 0.957 0 1 0 0.008 -1.912 L 4.058 3 A 1.053 1.053 0 0 0 3 4.044 l 0.017 4.004 a 0.957 0.957 0 0 0 1.916 -0.008 L 4.92 4.916 l 3.118 0.013 Z"
                      fill="#0052cc"
                    ></path>
                    <path
                      d="M 11 19.998 A 0.998 0.998 0 0 0 12 21 c 0.552 0 1 -0.454 1 -1.007 v -7.4 c 0 -0.556 -0.315 -1.322 -0.705 -1.713 L 5.207 3.793 L 3.793 5.207 L 11 12.414 v 7.584 Z"
                      fill="#0052cc"
                    ></path>
                  </svg>
                </span>
                <Text fontSize="20px" lineHeight="28px" color="#44546f">
                  Reduce manual tasks with automated <br /> workflows
                </Text>
              </ListItem>
            </UnorderedList>
            <br />
            <Flex justifyContent="center" alignItems="center" gap="40px">
              <Button
                borderRadius="5px"
                backgroundColor="#0052cc"
                padding="15px"
                color="white"
              >
                Try it now
              </Button>
              <Button
                borderRadius="5px"
                backgroundColor="white"
                padding="15px"
                color="#0052cc"
              >
                Join a demo
              </Button>
            </Flex>
          </Flex>
          <Image
            src="https://wac-cdn.atlassian.com/misc-assets/webp-images/GAL-1844/it-support-large-2x.webp"
            maxWidth="100%"
            height="355"
            width="700px"
          />
        </Flex>
      </>
    </>
  );
};

export default JiraServiceManagement;