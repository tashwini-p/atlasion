
import { Route, Routes } from 'react-router-dom'
import Jira from '../jira software/Jira'
import BitBucket from '../bitbucket/BitBucket'
import JiraServiceManagement from '../Jira Service Management/JiraServiceManagement'

import { ChakraProvider } from '@chakra-ui/react'
import { Confluence } from '../confluence/Confluence'
import { Atlas } from '../atlas/Atlas'
import { Homepage } from '../HomePage/Pages/HomePage'
import { LoginPage } from '../HomePage/Component/Navbar'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <ChakraProvider><Homepage/></ChakraProvider>
        } />
        <Route path="/jiraSoftware" element={
            // <ChakraProvider> <Jira/></ChakraProvider>
         <Jira/>
        } />
        <Route path="/logIn" element={
          <ChakraProvider><LoginPage/></ChakraProvider>
        } />
        <Route path="/bitBucket" element={
          <BitBucket/>
        } />
        <Route path="/confluence" element={
            <ChakraProvider><Confluence/></ChakraProvider>
        } />
        <Route path="/atlas" element={
          <ChakraProvider><Atlas/></ChakraProvider>
        } />
        <Route
          path="/jiraServiceManagement"
          element={
            <ChakraProvider><JiraServiceManagement/></ChakraProvider>
          }
        />

      </Routes>

    </>
  )
}

export default AllRoutes