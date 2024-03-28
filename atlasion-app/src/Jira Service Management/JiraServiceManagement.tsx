import { Box, Heading, Text } from "@chakra-ui/react";

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
            color="#172b4d"
            margin="0 0 1rem 0"
            lineHeight="36px"
            maxWidth="40pc"
            fontSize="2pc"
            fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
            display="block"
            marginBlockStart="0.83rem"
            marginBlockEnd="0.83rem"
            fontWeight="bold"
          >
            Unlock high-velocity teams with Jira Service Management
          </Heading>

          <Text
            fontSize="1pc"
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
      </>
    </>
  );
}

export default JiraServiceManagement;
