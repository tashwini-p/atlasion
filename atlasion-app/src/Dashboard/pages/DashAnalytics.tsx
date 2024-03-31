import { Box } from "@mui/material"
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav"
import Grid from '@mui/system/Unstable_Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../styles/dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import CountUp from 'react-countup';


const DashAnalytics = () => {
  return (
    <>
    <div className="bgcolor">
      <Navbar/>
      <Box height={70}/>
        <Box marginLeft={2} sx={{ display: 'flex' }}>
          <Sidenav/>
          <Box component="main" sx={{flexGrow:1, p:3}}>
            <Grid container spacing={2}>
              <Grid xs={8}>
                <Stack spacing={2} direction={"row"}>
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
                <Stack spacing={2}>
                <Card className="cardGradientLight" sx={{ maxWidth: 345 }}>
                    <Stack direction={"row"}>
                      <div className="iconStyle"><StorefrontIcon/></div>
                      <div className="paddingAll">
                        <span className="priceTitle">$203K</span>
                        <br />
                        <span className="priceSubTitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card className="cardGradientLight" sx={{ maxWidth: 345 }}>
                    <Stack direction={"row"}>
                      <div className="iconStyle"><StorefrontIcon/></div>
                      <div className="paddingAll">
                        <span className="priceTitle">$203K</span>
                        <br />
                        <span className="priceSubTitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20}/>
            <Grid container spacing={2}>
              <Grid xs={6}>
              <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingAll">
                        <span style={{fontWeight:"600"}}>Popularity by Country</span>
                      </div>
                    <div style={{marginLeft:"60px"}}><GeoChart/></div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={6}>
              <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                      <PieChart/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>

    </>
  )
}

export default DashAnalytics