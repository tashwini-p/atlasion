import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import clock from "../assets/JSM_ASSETS/clock_svg.png";
import itsm from "../assets/JSM_ASSETS/ITSM.png";
import upArrow from "../assets/JSM_ASSETS/upArrow.svg";
import rightArrow from "../assets/JSM_ASSETS/rightArrow.svg";
import smile from "../assets/JSM_ASSETS/Smile.png";
import group from "../assets/JSM_ASSETS//Group.png";
import EngineeringSupport3 from '../assets/JSM_ASSETS/EngineeringSupport3.png'
import EmployeeSupport from '../assets/JSM_ASSETS/EmployeeSupport.png'
import ITOperation from '../assets/JSM_ASSETS/ITOperations1.png'
import ITOperation2 from '../assets/JSM_ASSETS/ITOperations2.png'
import ITOperation3 from '../assets/JSM_ASSETS/ITOperations3.png'
import CustomerService1 from '../assets/JSM_ASSETS/CustomerService1.png'
import CustomerService3 from '../assets/JSM_ASSETS/CustomerService3.png'
import "./JiraServiceManagement.css";
import Footer from "../HomePage/Footer";
import { Navbar } from "../HomePage/Navbar";

const JiraServiceManagement: React.FC = () => {
  return (
    <>
    <Navbar/>
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
        fontSize="18px"
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
    <br />
    <Flex justifyContent="center" alignItems="center" gap="40px">
      <Tabs variant="soft-rounded">
        <TabList justifyContent="center" alignItems="center" gap="40px">
          <Tab borderRadius="50px" backgroundColor="#f7f8f9" padding="15px">
            IT support
          </Tab>
          <Tab borderRadius="50px" backgroundColor="#f7f8f9" padding="15px">
            Engineering support
          </Tab>
          <Tab borderRadius="50px" backgroundColor="#f7f8f9" padding="15px">
            Employee support
          </Tab>
          <Tab borderRadius="50px" backgroundColor="#f7f8f9" padding="15px">
            IT operations
          </Tab>
          <Tab borderRadius="50px" backgroundColor="#f7f8f9" padding="15px">
            Customer service
          </Tab>
        </TabList>
        <br />
        <br />
        <br />
        <br />
        <TabPanels>
          <TabPanel>
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
                height="355px"
                width="700px"
              />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex wrap="wrap">
              <Flex direction="column">
                <Heading
                  size="xl"
                  fontWeight="500"
                  color="#172b4d"
                  marginLeft="200px"
                  marginRight="280px"
                >
                  Engineering support
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
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <path
                          d="M 11.433 5.428 l -4.207 0.6 A 2 2 0 0 0 5.53 7.727 l -0.6 4.207 a 1 1 0 0 0 0.281 0.849 l 6.895 6.894 a 0.999 0.999 0 0 0 1.414 0 l 5.657 -5.657 a 1 1 0 0 0 0 -1.414 L 12.282 5.71 a 0.998 0.998 0 0 0 -0.849 -0.283 m -0.647 5.858 A 1.666 1.666 0 1 1 8.43 8.929 a 1.666 1.666 0 0 1 2.357 2.357"
                          fillRule="evenodd"
                          fill="#0052cc"
                        ></path>
                      </svg>
                    </span>
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                      Triage your unplanned work
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
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <g fill="#0052cc">
                          <path
                            d="M 4.998 11.513 c 0 -3.038 3.141 -5.51 7.002 -5.51 c 3.861 0 7.002 2.472 7.002 5.51 c 0 3.039 -3.141 5.51 -7.002 5.51 c -3.861 0 -7.002 -2.471 -7.002 -5.51 Z m 14.84 7.771 v -0.002 s -1.564 -2.26 -0.767 -3.116 l -0.037 0.02 C 20.261 14.902 21 13.279 21 11.513 C 21 7.371 16.963 4 12 4 s -9 3.37 -9 7.513 s 4.037 7.514 9 7.514 c 1.42 0 2.76 -0.285 3.957 -0.776 c 1.003 1.022 2.287 1.572 3.24 1.719 l 0.002 -0.003 a 0.524 0.524 0 0 0 0.164 0.033 a 0.515 0.515 0 0 0 0.474 -0.716 Z"
                            fillRule="evenodd"
                            fill="#0052cc"
                          ></path>
                          <rect
                            x="7"
                            y="9"
                            width="10"
                            height="2"
                            rx="1"
                          ></rect>
                          <rect
                            x="7"
                            y="12"
                            width="5"
                            height="2"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                    </span>
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Manage requests from customers
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
                      <Image src= {EngineeringSupport3} height="30px"/>
                    </span>
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Link requests to Jira Software issues
                    </Text>
                  </ListItem>
                </UnorderedList>
                <br />
                <Flex justifyContent="center" alignItems="center" gap="40px" marginLeft='-150px'>
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
                src="https://wac-cdn.atlassian.com/misc-assets/webp-images/GAL-1844/engineering-support-large-2x.webp"
                maxWidth="100%"
                height="355px"
                width="700px"
                marginLeft='-150px'
              />
            </Flex>
          </TabPanel>
          <TabPanel>
          <Flex wrap="wrap">
              <Flex direction="column">
                <Heading
                  size="xl"
                  fontWeight="500"
                  color="#172b4d"
                  marginLeft="200px"
                  marginRight="280px"
                >
                  Employee support
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
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        role="presentation"
                      >
                        <g fill="#0052cc">
                          <path
                            d="M 4.998 11.513 c 0 -3.038 3.141 -5.51 7.002 -5.51 c 3.861 0 7.002 2.472 7.002 5.51 c 0 3.039 -3.141 5.51 -7.002 5.51 c -3.861 0 -7.002 -2.471 -7.002 -5.51 Z m 14.84 7.771 v -0.002 s -1.564 -2.26 -0.767 -3.116 l -0.037 0.02 C 20.261 14.902 21 13.279 21 11.513 C 21 7.371 16.963 4 12 4 s -9 3.37 -9 7.513 s 4.037 7.514 9 7.514 c 1.42 0 2.76 -0.285 3.957 -0.776 c 1.003 1.022 2.287 1.572 3.24 1.719 l 0.002 -0.003 a 0.524 0.524 0 0 0 0.164 0.033 a 0.515 0.515 0 0 0 0.474 -0.716 Z"
                            fillRule="evenodd"
                            fill="#0052cc"
                          ></path>
                          <rect
                            x="7"
                            y="9"
                            width="10"
                            height="2"
                            rx="1"
                          ></rect>
                          <rect
                            x="7"
                            y="12"
                            width="5"
                            height="2"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                    </span>
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Ensure anyone can get help quickly
                    </Text>
                  </ListItem>
                  <br />
                  <ListItem
                    listStyleType="none"
                    textAlign="-webkit-match-parent"
                    display="flex"
                    alignItems="flex-start"
                  >
                      <Image src={EmployeeSupport} height='25px' />
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Empower people to self serve
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
                    Automate workflows
                    </Text>
                  </ListItem>
                </UnorderedList>
                <br />
                <Flex justifyContent="center" alignItems="center" gap="40px" marginLeft='-150px'>
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
                src="https://wac-cdn.atlassian.com/misc-assets/webp-images/GAL-1844/employee-support-large-2x.webp"
                maxWidth="100%"
                height="355px"
                width="700px"
                marginLeft='-150px'
              />
            </Flex>
          </TabPanel>
          <TabPanel>
          <Flex wrap="wrap" gap='50px'>
              <Flex direction="column">
                <Heading
                  size="xl"
                  fontWeight="500"
                  color="#172b4d"
                  marginLeft="200px"
                  marginRight="280px"
                >
                  IT operations
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
                    <Image src={ITOperation} height='25px'/>
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Automate change requests
                    </Text>
                  </ListItem>
                  <br />
                  <ListItem
                    listStyleType="none"
                    textAlign="-webkit-match-parent"
                    display="flex"
                    alignItems="flex-start"
                  >
                      <Image src={ITOperation2} height='25px' />
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Deploy with confidence
                    </Text>
                  </ListItem>
                  <br />
                  <ListItem
                    listStyleType="none"
                    textAlign="-webkit-match-parent"
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Image src={ITOperation3} height='20px' />
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Investigate, resolve, and prevent <br />incidents
                    </Text>
                  </ListItem>
                </UnorderedList>
                <br />
                <Flex justifyContent="center" alignItems="center" gap="40px" marginLeft='-50px'>
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
                src="https://wac-cdn.atlassian.com/misc-assets/webp-images/GAL-1844/it-operations-large-2x.webp"
                maxWidth="100%"
                height="355px"
                width="700px"
                marginLeft='-150px'
              />
            </Flex>
          </TabPanel>
          <TabPanel>
          <Flex wrap="wrap" gap='50px'>
              <Flex direction="column">
                <Heading
                  size="xl"
                  fontWeight="500"
                  color="#172b4d"
                  marginLeft="200px"
                  marginRight="280px"
                >
                  Customer service
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
                    <Image src={CustomerService1} height='25px'/>
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Customize your help center
                    </Text>
                  </ListItem>
                  <br />
                  <ListItem
                    listStyleType="none"
                    textAlign="-webkit-match-parent"
                    display="flex"
                    alignItems="flex-start"
                  >
                      <Image src={CustomerService3} height='25px' />
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Capture relevant customer <br /> information
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
                      <Image src= {EngineeringSupport3} height="30px"/>
                    </span>
                    <Text fontSize="20px" lineHeight="28px" color="#44546f">
                    Link requests to Jira Software issues
                    </Text>
                  </ListItem>
                </UnorderedList>
                <br />
                <Flex justifyContent="center" alignItems="center" gap="40px" marginLeft='-50px'>
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
                src="https://wac-cdn.atlassian.com/misc-assets/webp-images/GAL-1611/variant-2-hero-customer-service-screen.webp"
                maxWidth="100%"
                height="355px"
                width="700px"
                marginLeft='-150px'
              />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    <br />
    <br />
    <br />
    <br />
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="50px"
      background="linear-gradient(180deg, #ffffff, #deebff);"
    >
      <Image
        src="https://wac-cdn.atlassian.com/dam/jcr:a5389e4f-ead1-4ce6-873b-693300b7e844/JSM%20Product%20Tour%20Gartner%20ITSM.svg?cdnVersion=1277"
        height="450px"
        width="500px"
      />
      <Flex direction="column">
        <Heading
          textAlign="left"
          fontSize="2.25rem"
          fontWeight="500"
          color="#253858"
          marginBlockEnd="4px"
          lineHeight="1.33"
          marginBottom="24px"
        >
          Atlassian is a Leader in The <br /> Forrester Wave™: Enterprise{" "}
          <br /> Service Management, Q4 2023.
        </Heading>
        <Button
          borderRadius="5px"
          border="1px"
          borderColor="#0052cc"
          padding="20px"
          color="#0052cc"
          width="23%"
        >
          See report
        </Button>
      </Flex>
    </Flex>
    <Box background="linear-gradient(180deg, #0049b0, #6554c0);">
      <br />
      <br />
      <br />
      <Heading fontWeight="400" textAlign="center" color="white">
        High-velocity service management
      </Heading>
      <br />
      <br />
      <Flex justifyContent="center" alignItems="center" gap="40px">
        <Button
          fontSize="17px"
          fontWeight="400"
          borderRadius="50px"
          backgroundColor="#f7f8f9"
          padding="0px 40px"
        >
          Accelerate Dev and Ops
        </Button>
        <Button
          fontSize="17px"
          fontWeight="400"
          borderRadius="50px"
          backgroundColor="#f7f8f9"
          padding="0px 40px"
        >
          Empower all service teams
        </Button>
        <Button
          fontSize="17px"
          fontWeight="400"
          borderRadius="50px"
          backgroundColor="#f7f8f9"
          padding="20px"
        >
          Deliver value fast
        </Button>
      </Flex>
      <br />
      <br />
      <Flex justifyContent="center" gap="60px">
        <Flex direction="column" justifyContent="start">
          <Flex justifyContent="center" alignItems="center" gap="10px">
            <Box
              height="40px"
              width="40px"
              borderRadius="50%"
              backgroundColor="white"
            >
              <Image
                src={clock}
                borderRadius="50%"
                height="28px"
                width="35px"
                margin="2.9px"
              />
            </Box>
            <Heading size="lg" fontWeight="400" color="white">
              Accelerate Dev and Ops
            </Heading>
          </Flex>
          <Text
            textAlign="start"
            fontSize="16px"
            color="white"
            marginLeft="50px"
          >
            Connect Dev and Ops teams on a single <br />
            platform to supercharge collaboration <br />
            across changes, incidents, and requests <br />- all while managing
            risk.
          </Text>
        </Flex>
        <video width="700" autoPlay playsInline>
          <source
            src="https://wac-cdn-2.atlassian.com/video/upload/f_auto,q_auto/misc-assets/videos/jira-service-management/jsm-devops-cropped.mp4"
            type="video/mp4"
          />
        </video>
      </Flex>
      <br />
      <br />
      <br />
      <br />
      <Heading
        fontWeight="400"
        textAlign="center"
        color="white"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;'
      >
        Teams across the world rely on Jira Service Management
      </Heading>
      <br />
      <Flex justifyContent="center" alignItems="center" gap="10px">
        <Link fontSize="16px" color="white" marginTop="-5px">
          Explore customer stories
        </Link>
        <svg
          width="11px"
          height="8px"
          viewBox="0 0 11 8"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 7.40796 0 L 6.32831 1.2021 L 8.07854 3.1497 H 0.763182 C 0.341906 3.1497 0 3.53038 0 3.99943 C 0 4.46849 0.341906 4.84917 0.763182 4.84917 H 8.07854 L 6.32831 6.7979 L 7.40796 8 L 11 3.99943 L 7.40796 0 Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </Flex>
      <Flex justifyContent="center" gap="25px">
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:0798ec5f-5136-4c42-b2ce-ee94b9e1d8fb/jsm-teamwork.svg?cdnVersion=1286"
          height="689px"
          width="659px"
          marginTop="-10px"
        />
        <Flex
          direction="column"
          justifyContent="start"
          alignItems="start"
          gap="35px"
        >
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:0ed10f73-2304-40b3-af25-c4fe4220d567/engie-white.svg?cdnVersion=1286"
            height="155px"
            width="122px"
            marginBottom="50px"
          />
          <Text
            color="white"
            marginTop="-110px"
            fontWeight="350"
            fontSize="24px"
            fontFamily="Segoe UI"
            lineHeight="normal"
          >
            “We needed to move towards a more <br /> customer-centric approach
            on ITSM. Jira <br /> Service Management helped us meet our <br />{" "}
            target while saving time and money.”
          </Text>
          <Text color="white" fontSize="12px" fontWeight="500">
            JOSE LUIS LIZÁRRAGA CASTRO, IT SUPPORT ENGINEER, ENGIE MEXICO
          </Text>
          <Flex justifyContent="center" alignItems="center" gap="20px">
            <Heading fontSize="40px" fontWeight="500" color="white">
              67%
            </Heading>
            <Text color="white">
              reduction on license costs from switching to Jira <br /> Service
              Management
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center" gap="20px">
            <Heading fontSize="40px" fontWeight="500" color="white">
              200
            </Heading>
            <Text color="white">
              hours saved a month with report automation
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center" gap="20px">
            <Heading fontSize="40px" fontWeight="500" color="white">
              100%
            </Heading>
            <Text color="white">SLA compliance</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        marginTop="-80px"
      >
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:9ac5928e-e607-4320-83fc-8442934ae3d0/square-logo-N70.svg?cdnVersion=1288"
          height="150px"
          width="150px"
        />
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:b9af9a35-4786-4b77-927c-07be9ac62180/sothebys-logo-N70.svg?cdnVersion=1288"
          height="150px"
          width="150px"
        />
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:0bfd9cba-8641-433d-9416-6be8bb237e87/dominos-logo-N70.svg?cdnVersion=1288"
          height="150px"
          width="150px"
        />
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:8bc28768-dd86-4256-b7c6-40711e469cfb/puppet-logo-N70.svg?cdnVersion=1288"
          height="100px"
          width="100px"
        />
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:f60d9d9b-127d-48e3-97a3-e1714a53e608/twitter-logo-N70.svg?cdnVersion=1288"
          height="50px"
          width="50px"
        />
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:e481a9f5-8f2f-4bc0-9ce5-ff9631901bec/telegraphc-logo-N70.svg?cdnVersion=1288"
          height="200px"
          width="200px"
        />
      </Flex>
      <Flex
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="120px"
        marginTop="-70px"
      >
        <Flex direction="column" gap="20px">
          <Heading fontSize="36px" color="white">
            Jira Service Management <br />
            scales with you
          </Heading>
          <Text fontSize="20px" color="white">
            Whether you’re part of a small team or a big <br /> enterprise, we
            have a plan for you. Choose only <br />
            the features you need.
          </Text>
          <Button backgroundColor="#FFAB00" color="#172B4D" width="33%">
            Discover plans
          </Button>
        </Flex>
        <Image
          src="https://wac-cdn.atlassian.com/dam/jcr:56da3ff6-b5f2-4b64-815f-5e51867f59de/jsm-features.svg?cdnVersion=1286"
          height="500px"
          width="500px"
        />
      </Flex>
    </Box>
    <Box>
      <Flex
        wrap="wrap"
        direction="column"
        gap="10px"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(0deg, #ffffff, #deebff);"
      >
        <br />
        <br />
        <Heading fontSize="24px" color="#253858" fontWeight="500">
          Get started quickly with templates
        </Heading>
        <Text
          textAlign="center"
          fontSize="20px"
          color="#42526E"
          fontWeight="400"
        >
          With pre-configured request types, workflows and other
          out-of-the-box capabilities,
          <br /> templates make it easy for any team to get started quickly
          with a service experience <br /> that fits the way they like to
          work.
        </Text>
      </Flex>
      <br />
      <br />
      <Flex
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="50px"
      >
        <Flex
          direction="column"
          height="300px"
          width="350px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          borderTopColor="#998dd9"
          borderBlockStartStyle="solid"
          borderBlockStartWidth="10px"
          borderRadius="5px"
          justifyContent="center"
          alignItems="start"
          gap="30px"
          padding="2pc"
        >
          <Image src={itsm} height="60px" width="60px" />
          <Heading fontSize="20px" fontWeight="600" color="#253858">
            ITSM
          </Heading>
          <Text fontSize="16px" fontWeight="400">
            Manage requests, incidents, and <br /> changes to deliver great
            service, fast.
          </Text>
          <Flex gap="5px">
            <Link fontSize="16px" color="#0052cc" fontWeight="400">
              Try the ITSM template
            </Link>
            <Image src={upArrow} />
          </Flex>
          <Flex marginTop="-20px" gap="5px">
            <Link
              fontSize="16px"
              color="#0052cc"
              fontWeight="400"
              marginTop="-5px"
            >
              Learn more
            </Link>
            <Image src={rightArrow} />
          </Flex>
        </Flex>
        <Flex
          direction="column"
          height="300px"
          width="350px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          borderTopColor="#4c9aff"
          borderBlockStartStyle="solid"
          borderBlockStartWidth="10px"
          borderRadius="5px"
          justifyContent="center"
          alignItems="start"
          gap="30px"
          padding="2pc"
        >
          <Image src={smile} height="60px" width="60px" />
          <Heading fontSize="20px" fontWeight="600" color="#253858">
            Customer service
          </Heading>
          <Text fontSize="16px" fontWeight="400">
            Deliver great service experiences to <br /> external customers,
            fast.
          </Text>
          <Flex gap="5px">
            <Link fontSize="16px" color="#0052cc" fontWeight="400">
              Try the customer service template
            </Link>
            <Image src={upArrow} />
          </Flex>
          <Flex marginTop="-20px" gap="5px">
            <Link
              fontSize="16px"
              color="#0052cc"
              fontWeight="400"
              marginTop="-5px"
            >
              Learn more
            </Link>
            <Image src={rightArrow} />
          </Flex>
        </Flex>
        <Flex
          direction="column"
          height="300px"
          width="350px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          borderTopColor="#0065ff"
          borderBlockStartStyle="solid"
          borderBlockStartWidth="10px"
          borderRadius="5px"
          justifyContent="center"
          alignItems="start"
          gap="30px"
          padding="2pc"
        >
          <Image src={group} height="60px" width="60px" />
          <Heading fontSize="20px" fontWeight="600" color="#253858">
            Human resources
          </Heading>
          <Text fontSize="16px" fontWeight="400">
            Manage onboarding and offboarding <br /> and respond to staff
            requests.
          </Text>
          <Flex gap="5px">
            <Link fontSize="16px" color="#0052cc" fontWeight="400">
              Try the HR template
            </Link>
            <Image src={upArrow} />
          </Flex>
          <Flex marginTop="-20px" gap="5px">
            <Link
              fontSize="16px"
              color="#0052cc"
              fontWeight="400"
              marginTop="-5px"
            >
              Learn more
            </Link>
            <Image src={rightArrow} />
          </Flex>
        </Flex>
      </Flex>
      <br />
      <br />
      <Link>
        <Text textAlign="center" fontWeight="400">
          Show more
        </Text>
      </Link>
    </Box>
    <br />
    <br />
    <br />
    <br />
    <Box
      borderColor="#dfe1e5"
      height="2px"
      backgroundColor="#dfe1e5"
      border="0"
      width="76%"
      marginLeft="12%"
    ></Box>
    <br />
    <br />
    <Heading
      fontSize="36px"
      textAlign="center"
      color="#253858"
      fontWeight="500"
    >
      Jira Service Management resources
    </Heading>
    <br />
    <br />
    <Flex wrap="wrap" justifyContent="center" alignItems="center" gap="50px">
      <Flex
        direction="column"
        height="530px"
        width="550px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        gap="20px"
      >
        <Image src="https://wac-cdn.atlassian.com/dam/jcr:01c0f236-3cb0-4068-8ca8-30219b394ae3/jsm-tei-report.png?cdnVersion=1290" />
        <Heading
          fontSize="12px"
          fontWeight="500"
          paddingTop="20px"
          paddingLeft="20px"
        >
          FORRESTER REPORT
        </Heading>
        <Heading fontSize="24px" fontWeight="500" paddingLeft="20px">
          The Total Economic Impact™ of Atlassian for <br /> ITSM
        </Heading>
        <Flex marginLeft="20px" gap="5px">
          <Link fontSize="16px" color="#0052cc" fontWeight="400">
            Get report
          </Link>
          <Image src={rightArrow} />
        </Flex>
      </Flex>
      <Flex direction="column" gap="30px">
        <Flex
          wrap="wrap"
          justifyContent="start"
          gap="20px"
          height="250px"
          width="550px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        >
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:cc80a855-d6a0-4083-8f34-b46a3122bcc1/jsm-get-started.png?cdnVersion=1290"
            height="250px"
            width="250px"
          />
          <Flex direction="column" gap="20px" paddingTop="20px">
            <Heading
              fontSize="12px"
              fontWeight="500"
              paddingTop="20px"
              paddingLeft="20px"
            >
              GUIDES
            </Heading>
            <Heading fontSize="24px" fontWeight="500" paddingLeft="20px">
              Get started with Jira <br /> Service Management
            </Heading>
            <Flex marginLeft="20px" gap="5px">
              <Link fontSize="16px" color="#0052cc" fontWeight="400">
                Learn more
              </Link>
              <Image src={rightArrow} />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          wrap="wrap"
          justifyContent="start"
          gap="20px"
          height="250px"
          width="550px"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        >
          <Image
            src="https://wac-cdn.atlassian.com/dam/jcr:e5c74440-938a-4c00-bd28-1bd53a67d798/jsm-tips.png?cdnVersion=1290"
            height="250px"
            width="250px"
          />
          <Flex direction="column" gap="20px" paddingTop="20px">
            <Heading
              fontSize="12px"
              fontWeight="500"
              paddingTop="20px"
              paddingLeft="20px"
            >
              ITSM
            </Heading>
            <Heading fontSize="24px" fontWeight="500" paddingLeft="20px">
              Tips, tricks, and best <br /> practices for managing <br /> IT
              service delivery
            </Heading>
            <Flex marginLeft="20px" gap="5px">
              <Link fontSize="16px" color="#0052cc" fontWeight="400">
                Learn more
              </Link>
              <Image src={rightArrow} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <br />
    <br />
    <br />
    <br />
    <Box
      borderColor="#dfe1e5"
      height="2px"
      backgroundColor="#dfe1e5"
      border="0"
      width="76%"
      marginLeft="12%"
    ></Box>
    <br />
    <br />
    <br />
    <br />
    <Flex background="linear-gradient(180deg, #fff, #deebff);" gap="20px">
      <Image
        src="https://wac-cdn.atlassian.com/dam/jcr:16647810-ab3b-4f93-b9f9-968c357b61a0/jsm-integrations-left.svg?cdnVersion=1325"
        marginBottom="30px"
      />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        paddingTop="20px"
        marginBottom="50px"
      >
        <Heading
          fontSize="12px"
          fontWeight="500"
          paddingTop="20px"
          paddingLeft="20px"
        >
          INTEGRATIONS FOR EVERY TEAM
        </Heading>
        <Heading
          textAlign="center"
          fontSize="36px"
          fontWeight="500"
          paddingLeft="20px"
        >
          Supercharge service management with apps <br /> and integrations
        </Heading>
        <Text
          textAlign="center"
          fontSize="16px"
          color="#42526E"
          fontWeight="400"
        >
          Atlassian Marketplace offers over 1,000 trusted applications and
          integrations to ensure Jira <br /> Service Management can be
          customized to fit your use case.
        </Text>
        <Flex marginLeft="20px" gap="5px">
          <Link fontSize="16px" color="#0052cc" fontWeight="400">
            Explore the Marketplace
          </Link>
          <Image src={rightArrow} />
        </Flex>
      </Flex>
      <Image
        src="https://wac-cdn.atlassian.com/dam/jcr:9f835c55-ca31-4c7c-bf12-36fe2fd3b47b/integrations-lower-320.svg?cdnVersion=132"
        height="200px"
      />
    </Flex>
    <Flex position="relative" textAlign="center" color="white">
      <Image src="https://wac-cdn.atlassian.com/dam/jcr:810c8319-7fb0-4af4-a230-fd70f6669588/jsm-product-tour-footer-1800px.png?cdnVersion=1302" />
      <Heading
        fontSize="36px"
        fontWeight="400"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
      >
        Get started with Jira Service Management today
      </Heading>
      <Flex
        position="absolute"
        top="70%"
        left="50%"
        transform="translate(-50%,-50%)"
        gap="15px"
      >
        <Button
          backgroundColor="#FFAB00"
          color="#172B4D"
          width="43%"
          fontWeight="400"
        >
          Try it free
        </Button>
        <Flex gap="5px">
          <Link
            fontSize="16px"
            color="white"
            fontWeight="400"
            marginTop="5px"
          >
            Explore plans
          </Link>
          <svg
            width="11px"
            height="36px"
            viewBox="0 0 11 8"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 7.40796 0 L 6.32831 1.2021 L 8.07854 3.1497 H 0.763182 C 0.341906 3.1497 0 3.53038 0 3.99943 C 0 4.46849 0.341906 4.84917 0.763182 4.84917 H 8.07854 L 6.32831 6.7979 L 7.40796 8 L 11 3.99943 L 7.40796 0 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </Flex>
      </Flex>
    </Flex>
    <Footer/>
  </>
  );
};

export default JiraServiceManagement;