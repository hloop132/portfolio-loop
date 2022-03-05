import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



const Card = () => {
  return (
    <Grid item sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 1000,
        height: 600,
      },
    }}>
      <Paper elevation={3}>
        <img
          src="./css/20210419_131130.jpg"
          className="img"
        />
        <Box paddingX={1}>
          <Typography varient="h4" component="h2">
            About Me
          </Typography>
          <box
            xs={{
              display: "flex",
              alignItems: "center",
            }}
          >
            
            <Typography variant="body2" component="p">
              Am I supose to know what I am doing?
              Maybe?! 
              Great......Just checking! 
            </Typography>
          </box>
          
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
