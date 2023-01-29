import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [value, setValue] = useState();
  return (
    <AppBar  position="sticky"
    sx={{ background: "#1a674c" }}>
      <Toolbar>
        <Typography variant="h4" color="#9fc5e8">
          MPKreuzberg'sBlog
        </Typography>
       { isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
         { !isLoggedIn && <> <Button
          LinkComponent={Link} to="/auth"
            variant="contained"
            sx={{ margin: 1, borderradius: 5 }}
            color="warning"
          >
            Login
          </Button>
          <Button
          LinkComponent={Link} to="/auth"
            variant="contained"
            sx={{ margin: 1, borderradius: 5 }}
            color="warning"
          >
            SignUp
          </Button></>}
         { isLoggedIn && <Button
          LinkComponent={Link} to="/auth"
            variant="contained"
            sx={{ margin: 1, borderradius: 5 }}
            color="warning"
          >
            Logout
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
