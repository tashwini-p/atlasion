import { Box } from "@mui/material"
import Sidenav from "../components/Sidenav"
import Navbar from "../components/Navbar";
import UsersTable from "../components/UsersTable";


const DashAnalytics = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Box height={100}>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
          <UsersTable/>
        </Box>
      </Box>
    </div>
    </>
  )
}

export default DashAnalytics