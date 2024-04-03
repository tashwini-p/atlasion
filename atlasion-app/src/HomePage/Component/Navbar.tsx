import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Img,
  Container,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "../../assets/HomePageIcon/WebsiteLogo.png";
import { NavProduct } from "./Product";
import { SolutionPage } from "./SolutionPage";
import { ResourcePage } from "./ResourcesPage";

export const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Container maxW={"7xl"}>
          <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 4 }}
            px={{ base: 4 }}
            align={"center"}
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Img
                src={logo}
                h={["1rem", "3rem"]}
                mt={0}
                w={["5rem", "10rem"]}
                ml={[5, 9]}
              />
              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              cursor={"pointer"}
              color={"white"}
              bg={"crimson"}
              href={"#"}
              _hover={{
                bg: "red.600",
              }}
            >
              Sign Up
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                cursor={"pointer"}
                minW={0}
                px={2}
                py={1}
                mx={9}
                bg={"#0756CD"}
                color={"white"}
                // _hover={"none"}
                // _active={"none"}
              >
                <Text>DG</Text>
              </MenuButton>
              <MenuList p={0}>
                <Flex bg={"#172B4D"}>
                  <Avatar
                    mt={2}
                    ml={2}
                    h={"2.3rem"}
                    w={"2.3rem"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                  <Box ml={2} mt={2} fontSize={"0.9rem"} color={"white"}>
                    <p
                      style={{
                        marginTop: "0",
                        padding: "0px",
                        paddingRight: "0.3rem",
                      }}
                    >
                      Username
                    </p>
                    <p
                      style={{
                        marginTop: "0",
                        padding: "0px",
                        paddingRight: "0.3rem",
                      }}
                    >
                      anujkshatriya82@gmail.com
                    </p>
                  </Box>
                </Flex>
                <MenuItem>Switch Account</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Licenses</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Container>
      </Box>
    </>
  );
};

const DesktopNav: React.FC = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
 

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                textDecoration={"none"}
                fontSize={"1.2rem"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  // color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent border={"white"} mt={3.4} w={"100vw"}>
                <Stack borderTop={"1px solid #EBECF0"}>
                  {navItem.label === "Products" && <NavProduct />}
                  {navItem.label === "Solution" && <SolutionPage />}
                  {navItem.label === "Resources" && <ResourcePage />}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

// const DesktopSubNav: React.FC<{
//   label: string;
//   href?: string;
//   subLabel?: string;
// }> = ({ label, href, subLabel }) => {
//   return (
//     <Box
//       as="a"
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Box>
//   );
// };

const MobileNav: React.FC = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem: React.FC<{
  label: string;
  href?: string;
  children?: any;
}> = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children && (
            <Stack
              borderTop={"1px solid #EBECF0"}
              border={"white"}
              mt={3.4}
              w={"100vw"}
            >
              {label === "Products" && <NavProduct />}
              {label === "Solution" && <SolutionPage />}
              {label === "Resources" && <ResourcePage />}
            </Stack>
          )}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Products",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Solution",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
];

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  organization: string;
}

export const LoginPage: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const switchToSignup = () => {
    setIsLoginView(false);
  };

  const switchToLogin = () => {
    setIsLoginView(true);
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      background="linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"
      position="relative"
      overflow="hidden"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <img
          src={logo}
          alt="Atlasian logo"
          width="200px"
          height="auto"
          style={{ marginBottom: "1rem" }}
        />
        {isLoginView ? <LoginForm /> : <SignupForm />}
        <Text
          color={isLoginView ? "blue.500" : "gray.600"}
          cursor="pointer"
          onClick={isLoginView ? switchToSignup : switchToLogin}
        >
          {isLoginView
            ? "Don't have an account? Sign up here"
            : "Already have an account? Sign in here"}
        </Text>
      </Flex>
    </Flex>
  );
};

const LoginForm: React.FC = () => {
  const handleLogin = () => {
    // Logic for handling login
  };

  return (
    <Stack spacing={4} w={"sm"} maxW={"sm"}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" variant="filled" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" variant="filled" />
      </FormControl>
      <Stack spacing={6}>
        <Checkbox>Remember me</Checkbox>
        <Button
          bg={"#0755D6"}
          variant={"solid"}
          color="white"
          _hover={{ bg: "blue" }}
          onClick={handleLogin}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};

const SignupForm: React.FC = () => {
  const handleSignup = () => {
    // Logic for handling signup
  };

  return (
    <Stack spacing={4} w={"sm"} maxW={"sm"}>
      <FormControl id="signup-email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" variant="filled" />
      </FormControl>
      <FormControl id="signup-username">
        <FormLabel>Username</FormLabel>
        <Input type="text" variant="filled" />
      </FormControl>
      <FormControl id="signup-first-name">
        <FormLabel>First Name</FormLabel>
        <Input type="text" variant="filled" />
      </FormControl>
      <FormControl id="signup-last-name">
        <FormLabel>Last Name</FormLabel>
        <Input type="text" variant="filled" />
      </FormControl>
      <FormControl id="signup-age">
        <FormLabel>Age</FormLabel>
        <Input type="number" variant="filled" />
      </FormControl>
      <FormControl id="signup-organization">
        <FormLabel>Organization</FormLabel>
        <Input type="text" variant="filled" />
      </FormControl>
      <Button
        bg={"#0755D6"}
        variant={"solid"}
        _hover={{ bg: "blue" }}
        color={"white"}
        onClick={handleSignup}
      >
        Sign up
      </Button>
    </Stack>
  );
};
