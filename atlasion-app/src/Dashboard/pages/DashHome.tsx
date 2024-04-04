import { Box, useMediaQuery } from "@mui/material"
import Sidenav from "../components/Sidenav"
import Grid from '@mui/system/Unstable_Grid';
import Navbar from "../components/Navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../styles/dash.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from "../components/AccordionDash";
import BarChart from "../charts/BarChart";
import CountUp from 'react-countup';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const DashHome = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  

  return (
    <>
      <div className="bgcolor">
      <Navbar/>
      <Box height={70}/>
        <Box marginLeft={2} sx={{ display: 'flex' }}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1, p:3}}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid xs={8}>
                <Stack spacing={2} direction={{xs: 'column', sm: 'column', md:'row'}}>
                  <Card className="cardGradient" sx={{ minWidth: 49 + "%", height: 150 }}>
                    <CardContent>
                      <div>
                        <CreditCardIcon className="iconStyle"/>
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                        $<CountUp delay={0.2} end={132000} duration={0.8}/>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className="cardGradient"  sx={{ minWidth: 49 + "%", height: 150 }}>
                    <CardContent>
                      <div>
                        <ShoppingBagIcon className="iconStyle"/>
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                        $<CountUp delay={0.2} end={82000} duration={0.8}/>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                        Total Profit
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid xs={4}>
                <Stack spacing={2} direction={{xs: 'column', sm: 'column', md:'column'}}>
                <Card className="cardGradientLight" sx={{ maxWidth: 345 }}>
                    <Stack direction={"row"}>
                      <div className="iconStyle"><PublicIcon/></div>
                      <div className="paddingAll">
                        <span className="priceTitle">120+</span>
                        <br />
                        <span className="priceSubTitle">Countries Reached</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card className="cardGradientLight" sx={{ maxWidth: 345 }}>
                    <Stack direction={"row"}>
                      <div className="iconStyle"><PeopleAltIcon/></div>
                      <div className="paddingAll">
                        <span className="priceTitle">8M+</span>
                        <br />
                        <span className="priceSubTitle">Users</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20}/>
            <Grid container spacing={2}>
              <Stack direction={{xs: 'column', sm: 'column', md:'row'}}>
                <Grid xs={12} md={8} style={{ display: isSmallScreen ? 'none' : 'block' }}>
                <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <BarChart/>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} md={4}>
                <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                        <div className="paddingAll">
                          <span className="priceTitle">Popular Products</span>
                        </div>
                      <AccordionDash/>
                    </CardContent>
                  </Card>
                </Grid>
              </Stack>
            </Grid>
          </Box>
        </Box>
      </div>

      </>
  )
}

export default DashHome