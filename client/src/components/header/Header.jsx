import * as React from "react";

import { Container, Divider, Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "./logo.jpg";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { AppRegistration, ContactSupport, Home, Login, MenuOutlined, Sell, TrackChanges, Upload } from "@mui/icons-material";
import './header.css';
export default function Header() {
  let navLinks = document.getElementsByClassName("navItems");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  // Menu Open Direction Handler
  let dir = "right";
  const [state, setState] = React.useState({});
  const toggleDrawer = (dir, open) => () => {
    setState({ [dir]: open });
  };

  return (
    <>
      <Box>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={3}

          >
            {/* logo  */}
            <Grid item xs={6} sm={2} md={2} lg={2} style={{ color: "white" }}>
              <Link to="/">
                <img src={Logo} alt={Logo} width="60px" style={{ borderRadius: '50%' }} />
              </Link>
            </Grid>
            {/* my links  */}
            <Hidden mdDown>
              <Grid
                container
                item
                xs={10}
                sm={10}
                md={10}
                lg={10}
                justifyContent="flex-end"
                alignItems="center"
                columnSpacing={2}
              >



                <Grid item style={{ textAlign: "center" }}>
                  <Typography
                    paragraph
                    fontSize={{ xs: "15px", md: "14px" }}
                  >
                    <Link
                      className='navItems active'
                      to='/'
                      style={{
                        textDecoration: "none",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Home
                    </Link>
                  </Typography>
                </Grid>


                <Grid item style={{ textAlign: "center" }}>
                  <Typography
                    paragraph
                    fontSize={{ xs: "15px", md: "14px" }}
                  >
                    <Link
                      className='navItems'
                      to='./addalpaca'
                      style={{
                        textDecoration: "none",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Upload
                    </Link>
                  </Typography>
                </Grid>



                <Grid item style={{ textAlign: "center" }}>
                  <Typography
                    paragraph
                    fontSize={{ xs: "15px", md: "14px" }}
                  >
                    <Link
                      className='navItems'
                      to='./listalpaca'
                      style={{
                        textDecoration: "none",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      History
                    </Link>
                  </Typography>
                </Grid>


              </Grid>
            </Hidden>

            <Hidden mdUp>
              <>
                <MenuOutlined
                  sx={{
                    color: "#FFC90D",
                    fontSize: "35px",
                    "&:hover": { cursor: "pointer" },
                  }}
                  onClick={toggleDrawer(dir, true)}
                  open
                />

                <SwipeableDrawer
                  anchor={dir}
                  open={state[dir]}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  <Box
                    sx={{
                      width: 200,
                      marginLeft: "1vw",
                      marginRight: "1vw",
                      marginTop: "5vh",
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <center> <img src={Logo} alt={Logo} width="50px" style={{ borderRadius: '50%' }} /></center>
                    <Divider sx={{ margin: '20px', background: '#FFC90D', color: 'pink' }} />
                    <List>
                      {[
                        { name: "Home", link: "/", classes: "navItemsMobile  activeMobileMenu", icon: <Home sx={{ color: "#FFC90D" }} /> },
                        { name: "Upload", link: "./addalpaca", classes: "navItemsMobile ", icon: <Upload sx={{ color: "#FFC90D" }} /> },
                        { name: "History", link: "./listalpaca", classes: "navItemsMobile ", icon: <TrackChanges sx={{ color: "#FFC90D" }} /> },
                      ].map((obj, index) => {
                        return (
                          <ListItem key={index}>
                            <ListItemIcon >{obj.icon} </ListItemIcon>
                            <Link
                              to={obj.link}
                              className={obj.classes}
                              style={{ textDecoration: "none" }}
                            >
                              <ListItemText primary={obj.name} />
                            </Link>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                </SwipeableDrawer>
              </>
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
