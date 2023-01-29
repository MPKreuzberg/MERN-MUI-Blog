 import React from 'react'
 import { Box, Button, TextField, Typography } from "@mui/material";

 const Auth = () => {
   return (
     <div>
      <form>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent={'center'}_>
          <Typography>Login</Typography>
          <TextField />
          <TextField />
          <TextField />
          <Button>Submit</Button>
          <Button>SignUp</Button>

        </Box>
      </form>
     </div>
   )
 }
 
 export default Auth;