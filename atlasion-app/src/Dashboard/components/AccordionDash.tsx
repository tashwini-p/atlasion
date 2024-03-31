
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionDash() {
  return (
    <div className='accordionStyles'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div style={{display:"flex", alignItems:"center", gap:"20px"}}> 
          <div><svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.692 22.8912L25.652 5.85122L24 4.19922L11.172 17.0272L5.308 22.8912C4.696 23.5032 4.696 24.4962 5.308 25.1092L17.027 36.8282L24 43.8012L36.828 30.9732L37.027 30.7742L42.691 25.1102C43.303 24.4982 43.303 23.5052 42.691 22.8922L42.692 22.8912ZM24 29.8552L18.145 24.0002L24.001 18.1442L29.856 23.9992L24 29.8552Z" fill="#1D7AFC"></path><path d="M24 18.1442C20.163 14.3072 20.152 8.09716 23.96 4.24316L11.15 17.0532L18.123 24.0262L24.002 18.1472L24 18.1452V18.1442Z" fill="url(#paint0_linear_818_577)"></path><path d="M29.872 23.9844L24 29.8564C27.85 33.7074 27.85 39.9504 24 43.8004L36.844 30.9574L29.871 23.9844H29.872Z" fill="url(#paint1_linear_818_577)"></path><defs><linearGradient id="paint0_linear_818_577" x1="22.956" y1="12.2212" x2="14.779" y2="20.3972" gradientUnits="userSpaceOnUse"><stop offset="0.176" stop-color="#0055CC"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient><linearGradient id="paint1_linear_818_577" x1="25.12" y1="35.7094" x2="33.28" y2="27.5494" gradientUnits="userSpaceOnUse"><stop offset="0.176" stop-color="#0055CC"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient></defs></svg></div>
            <Typography>Jira Software</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div style={{display:"flex", alignItems:"center", gap:"20px"}}> 
            <div><svg width="30" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.76706 32.3019C8.42806 32.8539 8.04306 33.5009 7.74406 34.0099C7.45606 34.5009 7.61106 35.1319 8.09606 35.4309L14.8901 39.6239C15.3881 39.9309 16.0401 39.7729 16.3371 39.2689C16.6071 38.8119 16.9571 38.2239 17.3391 37.5919C20.0321 33.1479 22.7401 33.6899 27.6191 36.0089L34.3571 39.2119C34.8881 39.4649 35.5231 39.2289 35.7621 38.6909L38.9981 31.3849C39.2281 30.8649 39.0021 30.2579 38.4881 30.0159C37.0651 29.3469 34.2371 28.0119 31.7051 26.7859C22.5051 22.3309 14.7201 22.6249 8.76806 32.3019H8.76706Z" fill="url(#paint0_linear_818_553)"></path><path d="M39.233 15.6978C39.572 15.1458 39.957 14.4988 40.256 13.9898C40.544 13.4988 40.389 12.8678 39.904 12.5688L33.11 8.37583C32.612 8.06883 31.96 8.22683 31.663 8.73083C31.393 9.18783 31.043 9.77583 30.661 10.4078C27.968 14.8518 25.26 14.3098 20.381 11.9908L13.643 8.78783C13.112 8.53483 12.477 8.77083 12.238 9.30883L9.00202 16.6148C8.77202 17.1348 8.99802 17.7418 9.51202 17.9838C10.935 18.6528 13.763 19.9878 16.295 21.2138C25.495 25.6688 33.28 25.3748 39.232 15.6978H39.233Z" fill="url(#paint1_linear_818_553)"></path><defs><linearGradient id="paint0_linear_818_553" x1="38.7961" y1="41.7759" x2="18.2371" y2="29.9619" gradientUnits="userSpaceOnUse"><stop stop-color="#0055CC"></stop><stop offset="0.972" stop-color="#1C78FA"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient><linearGradient id="paint1_linear_818_553" x1="9.20302" y1="6.22383" x2="29.763" y2="18.0378" gradientUnits="userSpaceOnUse"><stop stop-color="#0055CC"></stop><stop offset="0.972" stop-color="#1C78FA"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient></defs></svg></div>
            <Typography>Confluence</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div style={{display:"flex", alignItems:"center" , gap:"20px"}}> 
            <div><svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 42.7982C14.016 42.7982 5.89795 34.6802 5.89795 24.6962C5.89795 14.7122 14.016 6.59424 24 6.59424V9.47624C15.604 9.47624 8.78095 16.2992 8.78095 24.6952C8.78095 33.0912 15.604 39.9142 24 39.9142V42.7962V42.7982Z" fill="url(#paint0_linear_818_466)"></path><path d="M23.9999 42.7983V39.9163C32.3959 39.9163 39.2189 33.0933 39.2189 24.6973H42.1009C42.1009 34.6813 33.9829 42.7993 23.9989 42.7993L23.9999 42.7983Z" fill="url(#paint1_linear_818_466)"></path><path d="M42.102 24.6962H39.22C39.22 16.3002 32.397 9.47722 24.001 9.47722V6.59521C33.985 6.59521 42.103 14.7132 42.103 24.6972L42.102 24.6962Z" fill="url(#paint2_linear_818_466)"></path><path d="M31.711 30.238C29.7889 29.862 28.2719 29.18 25.7509 28.038C25.055 27.732 24.289 27.384 23.412 26.994C22.883 26.757 22.396 26.548 21.908 26.34C18.107 24.655 16.018 23.736 13.4559 23.736C11.6599 23.736 10.3089 24.223 9.55695 25.142C9.04195 25.755 8.83295 26.548 8.98595 27.314L6.15895 27.857C5.85295 26.242 6.26995 24.585 7.32895 23.304C8.24795 22.19 10.0579 20.853 13.4559 20.853C16.6309 20.853 19.1929 21.995 23.0779 23.708C23.5509 23.917 24.039 24.14 24.568 24.362C25.459 24.752 26.239 25.1 26.9349 25.42C29.344 26.506 30.667 27.105 32.268 27.411L31.711 30.238Z" fill="url(#paint3_linear_818_466)"></path><path d="M34.5259 30.516C33.5649 30.516 32.6459 30.432 31.7129 30.238L32.2699 27.411C33.0219 27.564 33.7599 27.634 34.5259 27.634C36.3079 27.634 37.6589 27.188 38.4389 26.339C39.2189 25.49 39.2469 24.459 39.2049 23.916L42.0729 23.665C42.2259 25.419 41.6969 27.063 40.5689 28.288C39.6359 29.304 37.8399 30.516 34.5259 30.516Z" fill="url(#paint4_linear_818_466)"></path><path d="M23.9999 42.798V39.916C28.1359 39.916 30.5999 35.697 30.5999 28.637C30.5999 21.577 28.0939 15.659 22.9559 10.187L25.0589 8.20996C30.7259 14.239 33.4829 20.923 33.4829 28.637C33.4829 37.368 29.8489 42.798 23.9999 42.798Z" fill="url(#paint5_linear_818_466)"></path><path d="M23.998 42.7981C17.774 42.7981 14.209 37.7301 14.209 28.8881C14.209 18.5701 18.721 12.8051 22.94 8.22412L25.057 10.1731C20.142 15.5201 17.092 20.5051 17.092 28.8871C17.092 38.0071 20.852 39.9151 23.999 39.9151V42.7971L23.998 42.7981Z" fill="url(#paint6_linear_818_466)"></path><path d="M16.2849 26.2C18.1459 26.2 19.6549 24.691 19.6549 22.83C19.6549 20.969 18.1459 19.46 16.2849 19.46C14.4239 19.46 12.9149 20.969 12.9149 22.83C12.9149 24.691 14.4239 26.2 16.2849 26.2Z" fill="#1D7AFC"></path><path d="M31.8629 32.0071C33.7239 32.0071 35.2329 30.4981 35.2329 28.6371C35.2329 26.7761 33.7239 25.2671 31.8629 25.2671C30.0019 25.2671 28.4929 26.7761 28.4929 28.6371C28.4929 30.4981 30.0019 32.0071 31.8629 32.0071Z" fill="#1D7AFC"></path><path d="M23.997 11.9412C25.858 11.9412 27.367 10.4322 27.367 8.57117C27.367 6.71017 25.858 5.20117 23.997 5.20117C22.136 5.20117 20.627 6.71017 20.627 8.57117C20.627 10.4322 22.136 11.9412 23.997 11.9412Z" fill="#1D7AFC"></path><defs><linearGradient id="paint0_linear_818_466" x1="15.989" y1="43.1032" x2="14.6109" y2="6.93924" gradientUnits="userSpaceOnUse"><stop offset="0.5" stop-color="#1D7AFC"></stop><stop offset="1" stop-color="#0055CC"></stop></linearGradient><linearGradient id="paint1_linear_818_466" x1="42.4099" y1="26.2853" x2="26.3829" y2="42.8553" gradientUnits="userSpaceOnUse"><stop stop-color="#0055CC"></stop><stop offset="1" stop-color="#0055CC"></stop></linearGradient><linearGradient id="paint2_linear_818_466" x1="33.051" y1="6.59421" x2="33.051" y2="24.6962" gradientUnits="userSpaceOnUse"><stop stop-color="#1D7AFC"></stop><stop offset="0.59" stop-color="#1D7AFC"></stop><stop offset="1" stop-color="#0055CC"></stop></linearGradient><linearGradient id="paint3_linear_818_466" x1="6.06095" y1="25.546" x2="32.268" y2="25.546" gradientUnits="userSpaceOnUse"><stop offset="0.26" stop-color="#1D7AFC"></stop><stop offset="1" stop-color="#0055CC"></stop></linearGradient><linearGradient id="paint4_linear_818_466" x1="34.6069" y1="29.777" x2="40.3299" y2="23.692" gradientUnits="userSpaceOnUse"><stop stop-color="#0055CC"></stop><stop offset="1" stop-color="#0055CC"></stop></linearGradient><linearGradient id="paint5_linear_818_466" x1="28.2189" y1="42.798" x2="28.2189" y2="8.20996" gradientUnits="userSpaceOnUse"><stop offset="0.36" stop-color="#1D7AFC"></stop><stop offset="1" stop-color="#0055CC"></stop></linearGradient><linearGradient id="paint6_linear_818_466" x1="19.633" y1="42.7981" x2="19.633" y2="8.22312" gradientUnits="userSpaceOnUse"><stop offset="0.06" stop-color="#1D7AFC"></stop><stop offset="0.58" stop-color="#0055CC"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient></defs></svg></div>
            <Typography>Atlas</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div style={{display:"flex", alignItems:"center", gap:"20px"}}> 
          <div><svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.73796 10.3291C8.09296 10.3291 7.60196 10.9071 7.70596 11.5441L12.13 38.4841C12.242 39.1661 12.831 39.6661 13.521 39.6721L34.812 39.6681C35.325 39.6681 35.763 39.2961 35.845 38.7901L40.294 11.5491C40.398 10.9131 39.907 10.3351 39.262 10.3351L8.73696 10.3281L8.73796 10.3291ZM27.427 29.8001H20.606L18.79 20.1901H29.072L27.427 29.8001Z" fill="#1D7AFC"></path><path d="M38.883 20.1899H29.072L27.427 29.7999H20.606L12.605 39.3269C12.605 39.3269 12.964 39.6709 13.521 39.6709L34.813 39.6669C35.325 39.6669 35.762 39.2949 35.844 38.7899L38.882 20.1899H38.883Z" fill="url(#paint0_linear_818_495)"></path><defs><linearGradient id="paint0_linear_818_495" x1="41.152" y1="22.8799" x2="24.937" y2="35.5379" gradientUnits="userSpaceOnUse"><stop offset="0.176" stop-color="#0055CC"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient></defs></svg></div>
            <Typography>BitBucket</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}