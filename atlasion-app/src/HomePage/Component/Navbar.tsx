import React, { ChangeEvent, useState } from "react";
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
} from "@chakra-ui/icons";
import logo from "../../assets/HomePageIcon/WebsiteLogo.png";
import { NavProduct } from "./Product";
import { SolutionPage } from "./SolutionPage";
import { ResourcePage } from "./ResourcesPage";
import { useAuth } from "../../AuthContext/Auth";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar: React.FC = () => {
  const { handleLogout, userFullDetails} = useAuth();
  const { isOpen, onToggle } = useDisclosure();
  const navigate =useNavigate();

  const firstCharacterOfName = userFullDetails.firstName.charAt(0).toUpperCase() + userFullDetails.lastName.charAt(0).toUpperCase();
  const OpenLoginPage=()=>{
    navigate("/logIn");
  }
  
  const handleLOGOUT=()=>{
    handleLogout();
  }


  const HomePageReturn=()=>{
    navigate("/")
  }

 console.log(userFullDetails);
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
                onClick={HomePageReturn}
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
            {
              userFullDetails.email==""||null?<Button
              onClick={OpenLoginPage}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              cursor={"pointer"}
              color={"white"}
              bg={"crimson"}
              _hover={{
                bg: "red.600",
              }}
            >
              Sign Up
            </Button>:
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
                <Text>{firstCharacterOfName}</Text>
              </MenuButton>
              <MenuList p={0}>
                <Flex bg={"#172B4D"}>
                  <Avatar
                    mt={2}
                    ml={2}
                    h={"2.3rem"}
                    w={"2.3rem"}
                    src={"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"}
                  />
                  <Box ml={2} mt={2} fontSize={"0.9rem"} color={"white"}>
                    <p
                      style={{
                        marginTop: "0",
                        padding: "0px",
                        paddingRight: "0.3rem",
                      }}
                    >
                      {userFullDetails.firstName}
                    </p>
                    <p
                      style={{
                        marginTop: "0",
                        padding: "0px",
                        paddingRight: "0.3rem",
                      }}
                    >
                      {userFullDetails.email}
                    </p>
                  </Box>
                </Flex>
                <MenuItem>Switch Account</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Licenses</MenuItem>
                <MenuItem onClick={handleLOGOUT}>Logout</MenuItem>
              </MenuList>
            </Menu>
           }
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
}> = ({ label, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
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
        (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )
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
      bg={"blue.400"}
      // background="linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"
      position="relative"
      overflow="hidden"
      boxShadow="77px 4px 18px rgba(8, 8, 8, 0.2)" 
    >
      <Flex
        boxShadow="0 4px 12px rgba(0, 0, 4, 0.2)" 
        flexDirection="column"
        alignItems="center"
        bg="white"
        p={8}
        borderRadius="md"
        //boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
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
  const init:LoginData={
    email:"",
    password:"",
  }
  const { login } = useAuth();

 const[userData,setUserData]=useState<LoginData>(init);

 
  
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    let input=e.target;
    let name=input.name;
    let value= input.value;
    setUserData({...userData,[name]:value});
  }

  const handleSubmit = async () => {
    console.log(userData);
    try {
      await login(userData);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack spacing={4} w={"sm"} maxW={"sm"}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" variant="filled" name="email" onChange={handleChange} value={userData.email}/>
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" variant="filled" name="password" onChange={handleChange} value={userData.password}/>
      </FormControl>
      <Stack spacing={6}>
        <Checkbox>Remember me</Checkbox>
        <Button
          onClick={handleSubmit}
          bg={"#0755D6"}
          variant={"solid"}
          color="white"
          _hover={{ bg: "blue" }}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};

const SignupForm: React.FC = () => {
 
  const {setUserFullDetails} = useAuth();

 const init:SignupData={
    "email": "",
    "password":"",
    "username": "",
    "firstName": "",
    "lastName": "",
    "age": 0,
    "organization": "",
 }

  const[userData,setUserData]=useState<SignupData>(init);
  const navigate =useNavigate();
  
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    let input=e.target;
    let name=input.name;
    let value= input.value;
    setUserData({...userData,[name]:value});
  }
  
  const handleSignup = async (userData: SignupData) => {
    console.log(userData);
    try {
      const response = await axios.post('https://atlasion.onrender.com/register', userData);
      console.log(response.data);
      console.log(response.data.user)
      setUserFullDetails(response.data.user);
      navigate("/")
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed');
    }
  };
  return (
    <Stack spacing={2} w={"sm"} maxW={"sm"} mt={-2}>
      <FormControl id="signup-email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" variant="filled" name="email" onChange={handleChange} value={userData.email}/>
      </FormControl>
      <FormControl id="signup-username">
        <FormLabel>Username</FormLabel>
        <Input type="text" variant="filled" name="username" onChange={handleChange} value={userData.username}/>
      </FormControl>
      <FormControl id="signup-password">
        <FormLabel>Password</FormLabel>
        <Input type="password" variant="filled" name="password" onChange={handleChange} value={userData.password}/>
      </FormControl>
      <FormControl id="signup-first-name">
        <FormLabel>First Name</FormLabel>
        <Input type="text" variant="filled" name="firstName" onChange={handleChange} value={userData.firstName}/>
      </FormControl>
      <FormControl id="signup-last-name">
        <FormLabel>Last Name</FormLabel>
        <Input type="text" variant="filled" name="lastName" onChange={handleChange} value={userData.lastName}/>
      </FormControl>
      <FormControl id="signup-age">
        <FormLabel>Age</FormLabel>
        <Input type="number" variant="filled" name="age" onChange={handleChange} value={userData.age}/>
      </FormControl>
      <FormControl id="signup-organization">
        <FormLabel>Organization</FormLabel>
        <Input type="text" variant="filled" name="organization" onChange={handleChange} value={userData.organization}/>
      </FormControl>
      <Button
        bg={"#0755D6"}
        variant={"solid"}
        _hover={{ bg: "blue" }}
        color={"white"}
        onClick={() => handleSignup(userData)}
      >
        Sign up
      </Button>
    </Stack>
  );
};
