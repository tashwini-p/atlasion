import { Box, Button, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';


const BitBucket: React.FC = () => {
  return (
    <>

    <Box  bg='rgb(222,235,255)'  p={4} color='black' height={500}  w={{base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em",  }}>
 <Text as='h1' align={'center'} color={'#42526e'}>Code & CI/CD, built for teams using Jira</Text>
 <Text as='h3' align={'center'} color={'#42526e'} fontFamily="Charlie Display">With best-in-class Jira integration, and built-in CI/CD, Bitbucket Cloud connects <br /> developer workflows from planning to incident management. Join millions of <br /> developers who choose to build on Bitbucket. </Text>
 <Button textAlign={'center'} marginLeft={650} bg='rgb(0,82,204)' color={'white'} padding={10} border={'none'} borderRadius={5} width={100} fontSize={16}>Get it free</Button>
<Image src='https://wac-cdn.atlassian.com/dam/jcr:d37f290f-7d83-42e1-8eef-e6c65e995e21/Product-UI-001B_2x.png?cdnVersion=1512' width="80%" marginLeft={130} marginTop={50}></Image>
<Flex direction="row">
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:fbd117fc-0fcf-43f2-9a92-005b5159e361/illustrations-spot-Cloud.svg?cdnVersion=1512' height="100px" marginLeft={300} marginTop={100} />
  <Text marginLeft={30} as='h2' marginTop={100} color={'#42526e'} fontFamily="Charlie Display">Migrating to cloud? Listen to this webinar on 
  <br />Bitbucket Cloud's enterprise strategy + get <br /> migration tips.</Text>
  <Text marginLeft={-460} as='h4' marginTop={200} color={'blue'} fontSize={16}>Learn more</Text>
</Flex>
  </Box>

  <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' marginTop={700} height={300} display='flex'>
  {/* Contents */}
  <Flex direction="column" justify="center" align="center" width="100%" marginTop={-100}>
    <Image src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSr8JuH7uaxK2_D2wIZja4B8K3ZH-G37Z-h-slzhgPXcQzXSF4S' height={50} width={50}  marginTop={30}/>
    <Text as="p" marginTop={30} fontSize={16}>PRODUCT  FEATURES</Text>
    <Text as="h1">Why choose Bitbucket Cloud?</Text>
  </Flex>
  
</Box>
<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={600} display='flex' alignItems="center" justifyContent="center" marginTop={-150}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center" >
    {/* Text Content */}
    <Box width="50%">
      <Text as="h1" fontSize={24} marginTop={4} color='#ffffff'>Collaborate across multiple teams</Text>
      <Text as="h4" marginBottom={4} color='#ffffff' fontSize={19}> Reduce context-switching by managing your Jira issues in Bitbucket with the built-in Jira UI. And when you include your issue key in commits, your Jira issue statuses update automatically.</Text>
      <Text as="h5" marginTop={20} fontSize={16}>Learn More</Text>
    
    </Box>
    {/* Image */}
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:82085599-4ecc-4965-a101-ed9cbb2505e1/bitbucket-cloud-features-002_2x.png?cdnVersion=1523' height={400} width='60%'  />
  </Flex>
</Box>


<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={600} display='flex' alignItems="center" justifyContent="center" marginTop={-150}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center" >
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:573ed78d-0a62-4932-9c6c-4f3fab8d78d5/bitbucket-cloud-features-003_2x.png?cdnVersion=1512' height={400} width='60%'  />
    <Box width="50%" marginLeft={40}>
      <Text as="h1" marginTop={4} fontSize={24}>Ship quality code</Text>
      <Text as="h4" marginBottom={4} fontSize={19}>Comprehensive code review features to help you find and fix bugs before you deploy. Review large diffs with ease, view third-party code reports, and open Jira tickets right from the PR screen.</Text>
      <Text as="h5" marginTop={20} fontSize={16}> Learn More</Text>
    
    </Box>
    {/* Image */}
   
  </Flex>
</Box>

<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={600} display='flex' alignItems="center" justifyContent="center" marginTop={-150}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center">
    {/* Text Content */}
    <Box width="50%">
      <Text as="h1" marginTop={4} color='#ffffff' fontSize={24}>Automate deployments</Text>
      <Text as="h4" marginBottom={4} color='#ffffff'fontSize={19}>Use our built-in CI/CD tool, Bitbucket Pipelines, to create powerful, automated workflows. Or connect Bitbucket Cloud to on-prem CI/CD tools like Bamboo or Jenkins.</Text>
      <Text as="h5" marginTop={20} fontSize={16}>Learn More</Text>
    
    </Box>
    {/* Image */}
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:19c20014-198b-49d7-a8b9-5240bd1f3eb7/bitbucket-cloud-features-004_2x.png?cdnVersion=1512' height={400} width='60%'  />
  </Flex>
</Box>


<Box  w='100%' p={4}  marginTop={300} height={300} display='flex'>
  {/* Contents */}
  <Flex direction="column" justify="center" align="center" width="100%" marginTop={-100}>
    <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzA14uCAkl4RHcqQ4EtAVYi3ZR5oe1hMDU79LWNpqM120k-8UV' height={50} width={50} />
    <Text as="p" fontSize={13} marginTop={20} fontFamily={'robot'}>WATCH THE DEMO</Text>
    <Text as="h1">See how Bitbucket Cloud works with Atlassian tools?</Text>
    <Text as="p" fontSize={20} marginTop={-5}>This video demos a code change workflow using Jira Software and Bitbucket Pipelines. </Text>
    <Box marginTop={20}>
    <iframe width="1000px" height="500px" src="https://www.youtube.com/embed/kr2zkyxnhAk?si=OorHcIgFK7AbxW7R" 
    title="YouTube video player"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    ></iframe>
    </Box>
  </Flex>
  
</Box>
<Box  w='100%' p={4}  marginTop={500} height={300} display='flex'  >
  
  <Flex  direction="column" justify="center" align="center" width="100%" marginTop={-100} >
    <Image src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVM1Xm5fPhhqVhsxUTv6zySEYcvfmKnbDwLEZRYAbJccZtWSbU' height={50} width={50} />
    <Text as="p" fontSize={13} marginTop={20}>SECURE YOUR CODE</Text>
    <Text as="p" fontSize={20} >Run automatic security scans with out-of-the-box integration with Snyk, or connect to <br />other providers. Simply open an existing repository or create a new one and navigate to <br /> the Security tab to install the Snyk integration.</Text>
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:1cb022f7-3223-4376-b281-9c5889ee5cc6/bitbucket-cloud-features-005_2x.png?cdnVersion=1512' height={400} width='60%' marginTop={30} />

    </Flex>
  
  
  
    </Box>
    <Box  w='70%' p={4} marginLeft={250} height={600} display='flex' alignItems="center" justifyContent="center" marginTop={200} boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center">
    {/* Text Content */}
    <Box width="50%">
      <Text as="h1" marginTop={4} fontSize={36} color='#253858'>Collaborate with IT Ops</Text>
      <Text as="h4" marginBottom={4} fontSize={16} color='#091e42'>Enable automated change approval processes and resolve incidents faster by mapping incidents to deployments with Bitbucket and Jira Service Management.</Text>
      <Text as="h5" marginTop={20} fontSize={16} color={'blue'}>Learn More</Text>
    
    </Box>
  
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:b6b639ff-45d6-4f92-98d1-f45477ef38b0/bitbucket-cloud-features-006_2x.png?cdnVersion=1512' height={400} width='60%'  />
  </Flex>
</Box>
<Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={300} display='flex' alignItems="center" justifyContent="center" marginTop={150}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center" marginLeft={100}>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:13f7a2fd-a1db-4d22-baa3-8f29a8b31390/Spot-Illo_CodeFolder_2x.png?cdnVersion=1512' height={200} width='200px' marginLeft={200}  />
    <Box width="50%" >
      <Text as="h1" marginTop={4} marginLeft={-150} fontSize={36}>Secure & compliant</Text>
      <Text as="h3" marginBottom={4}marginLeft={-150} fontSize={18}>Bitbucket Cloud is compliant with SOC2/3, ISO, and GDPR.  2FA <br />and IP allowlisting keep your code accessible only by authorized <br /> users. All code is encrypted in transit and at rest.</Text>
      <Text as="h3" marginTop={20}marginLeft={-150} fontSize={16}>Learn More</Text>
    
    </Box>
    {/* Image */}
   
  </Flex>
</Box>

<Box  w='100%' p={4}  marginTop={80} height={500} display='flex'>
<Box   p={4}  marginTop={40} height={200} display='flex' width="40%" marginLeft={100}>
<GridItem rowSpan={1} colSpan={1} >
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:5a71e162-8e5f-4e22-be26-f7b767313e96/Logo-Circle_Mabl_2x.png?cdnVersion=1512' borderRadius={'50%'} h='100px' w="100px" marginLeft={-130}  marginTop={-60}
     boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:791a62a9-25be-46e1-9ae6-27e8c212536c/Logo-Circle_Jenkins_2x.png?cdnVersion=1512' borderRadius={'50%'} h='100px' w="100px" marginTop={300} marginLeft={-60}
    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Image>
   
      </GridItem>
      {/* Contents */}
      <Flex direction="column" justify="center"  fontSize={20}>
        <Text as='p' fontSize={16}>INTEGRATIONS FOR EVERY TEAM</Text>
    <Text as="h1" whiteSpace="nowrap" fontSize={36} color='#253858'>
    Build a DevOps toolchain that works for you
    </Text>
        <Text as="p">Don’t settle for an all-in-one DevOps tool. Start by connecting Bitbucket and Jira Software via Atlassian’s Open DevOps solution, then build out your custom DevOps stack with market-leading partner tools across security, testing and monitoring. </Text>
     <Text color={'blue'}>Explore the Marketplace</Text>
      </Flex>
</Box>
    <Grid
      h='500px' w="800px"
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={10}
      marginLeft={200}
     
 
    >
      <GridItem rowSpan={1} colSpan={1} >
       <Image src='https://wac-cdn.atlassian.com/dam/jcr:f11640c6-fe6b-4350-8a57-bfd8111aa07d/Logo-Circle_DataDog_2x.png?cdnVersion=1512' borderRadius={'50%'}  h='100px' w="100px" marginTop={-300} marginLeft={-60}
boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Image>
   
      
      </GridItem>
      
      <GridItem rowSpan={1} colSpan={1} >
      <Image src='https://wac-cdn.atlassian.com/dam/jcr:5e1e8165-bb0b-4de2-b4e7-1329397f0f2e/Logo-Circle_LaunchDarkly_2x.png?cdnVersion=1512'borderRadius={'50%'} h='100px' w="100px"  marginLeft={100} marginTop={100}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
      <Image src='data:image/png;base64,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' borderRadius={'50%'} h='100px' w="100px"  marginLeft={50} marginTop={-100}
     boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Image>
     
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='https://wac-cdn.atlassian.com/dam/jcr:6ce5b38c-2b22-4754-9655-19434a55b8c6/Logo-Circle_Split_2x.png?cdnVersion=1512' borderRadius={'50%'} h='100px' w="100px"  marginLeft={-400} marginTop={130}
   boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Image>
   
      </GridItem>
      
      <GridItem rowSpan={1} colSpan={1} >
    <Image src='data:image/png;base64,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' borderRadius={'50%'} h='100px' w="100px" marginLeft={200} 
     boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Image>
   
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
      <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjDd_AD03l0nKuWav3BPfx4j8Cf8ZLDBUsb1SobOcUNhO2-lEp'marginLeft={-400} marginTop={130} borderRadius={'50%'} h='100px' w="100px"  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" ></Image>
     
      </GridItem>
      

    
    </Grid>
    </Box>
    <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' marginTop={-90} height={700}>
    <Box  w='100%' p={4} color='black' height={500} >
 <Text as='h1' align={'center'} marginTop={100}>15 million developers from over a million teams love Bitbucket</Text>
 

<Flex direction="row" marginTop={-90}>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:262ef9c0-f07a-4459-9ac7-ec23d7000e9f/Logo-Grey-Nextiva_2x.png?cdnVersion=1512' height="30px" marginLeft={200} marginTop={100} width={150} />
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:3bc7739e-a367-4021-9e55-efaa70a09b0b/Logo-Grey-AirCanada2_2x.png?cdnVersion=1512' height="50px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:6f961303-7cc1-48e7-b3b8-f748d336f859/Logo-Grey-Fugro_2x.png?cdnVersion=1512' height="50px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:044864a4-31ef-41c0-bb53-2dd47af071e2/Logo-Grey-Flo_2x.png?cdnVersion=1512' height="50px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:70f08c00-2520-4df3-8fa6-eb19af34bdca/Logo-Grey-Invesco_2x.png?cdnVersion=1512' height="30px" marginLeft={30} marginTop={100}  width={150}/>
  <Image src='https://wac-cdn.atlassian.com/dam/jcr:0731cc0f-d2b3-4107-83b6-def20f8dc7cd/Logo-Grey-Rappi_2x.png?cdnVersion=1512' height="30px" marginLeft={30} marginTop={100}  width={150}/>
</Flex>
  </Box>
  <Box bg='rgb(9,30,66)' w='70%' p={4} color='white' height={400} display='flex' alignItems="center" justifyContent="center" marginTop={-250} marginLeft={250}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center" direction='column'>
 

      <Text as="h2" marginBottom={4} fontSize={33} marginLeft={-30}>“We’ve gone from one big-bang release every month to 10-20 production deployments per day. We also reduced the average development cycle time from 5.8 days to 2.9 days and the standard deviation from 19.8 days to 3.5 days.</Text>
      <Text marginLeft={-700} fontSize={20} marginTop={50}>Roman Bugaev, CTO </Text>
     <Image src='https://wac-cdn.atlassian.com/dam/jcr:4f9fb3e9-ccf7-4506-884b-d57ea8d83372/Logo-Carousel_001-Flo_2x.png?cdnVersion=1512' height={30} marginLeft={-850}></Image>
    
   
  
  </Flex>
</Box>
</Box>
<Box  w='100%' p={4}  marginTop={10} height={300} display='flex'>
  {/* Contents */}
  <Flex direction="column" justify="center" align="center" width="100%" marginTop={-100}>
  
   
    <Text as="h1">Learn more</Text>
  </Flex>
  
</Box>
<Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={-150}>
        {/* Grid Item 1 */}
        <GridItem>
         
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:a4c1bb58-a486-4505-b78f-5ce6828ccbde/LearnMore-001_2x.png?cdnVersion=1512' height={200} marginLeft={80}></Image>
         
        </GridItem>
        
        {/* Grid Item 2 */}
        <GridItem>
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:cc7be397-59c9-4de8-a5e3-b0fd7bc61619/LearnMore-002_2x.png?cdnVersion=1512'  height={200} marginLeft={30}></Image>
        </GridItem>
        
        {/* Grid Item 3 */}
        <GridItem>
          <Image src='https://wac-cdn.atlassian.com/dam/jcr:86178190-ddc0-4f9b-9a4e-ae004c69fa6b/LearnMore-003_2x.png?cdnVersion=1512' height={200}></Image>
        </GridItem>
        
        <GridItem>
         <Text  as='h2'marginLeft={80}>Need a self-hosted option?</Text>
         <Text marginLeft={80} fontSize={20}>Bitbucket Data Center is our code collaboration tool built for teams who need to host code behind the firewall. </Text>
         <Text marginLeft={80} fontSize={19} color={"blue"}>Learn more</Text>
        </GridItem>
        <GridItem>
        <Text  as='h2'marginLeft={40}>Considering migrating to <br /> Bitbucket Cloud?</Text>
         <Text marginLeft={40} fontSize={20}>Our free migration app automates moving your code and users from Bitbucket Server or Data Center to Bitbucket Cloud. </Text>
         <Text marginLeft={40} fontSize={19} color={"blue"}>Learn more</Text>
        </GridItem>
        <GridItem>
        <Text  as='h2'marginLeft={40}>New features on the horizon</Text>
         <Text marginLeft={40} fontSize={20}>Learn more about what we’ve recently shipped and what we’re building next for your team. </Text>
         <Text marginLeft={40} fontSize={19} color={"blue"}>Learn more</Text>
        </GridItem>
      </Grid>
      <Box bg='rgb(9,30,66)' w='100%' p={4} color='white' height={300} display='flex' alignItems="center" justifyContent="center" marginTop={50}>
  {/* Contents */}
  <Flex width="80%" justifyContent="space-between" alignItems="center" flexDirection={'column'}>
 
      <Text as="h1" marginTop={-20} fontSize={36}>Take Bitbucket Cloud for a spin</Text>
      <Button colorScheme='blue' bg="rgb(0,82,204)" width={130} height={40}  border={'none'}  color={'white'} borderRadius={5} fontSize={16} marginTop={20}>Start for free</Button>

    

   
  </Flex>
</Box>

      
  </>
  
  )
}

export default BitBucket