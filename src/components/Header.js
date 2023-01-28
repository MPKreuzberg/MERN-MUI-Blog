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

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar sx={{ background: "#1a674c" }}>
      <Toolbar>
        <Typography variant="h4" color="#9fc5e8">
          MPKreuzberg'sBlog
        </Typography>
        <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="All Blogs" />
            <Tab label="My Blogs" />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button
            variant="contained"
            sx={{ margin: 1, borderradius: 5 }}
            color="warning"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 1, borderradius: 5 }}
            color="warning"
          >
            SignUp
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 1, borderradius: 5 }}
            color="warning"
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
