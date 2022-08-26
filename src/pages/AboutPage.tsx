import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import SendIcon from "@mui/icons-material/Send";

export const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Header />
      <Box
        sx={{
          mr: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          gap: "10px",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" color={"#311b92"}>
          Hello, Dear guys
        </Typography>
        <Typography variant="body2" color={"#311b92"}>
          My name is Marina and this is my independent small home project. I
          will be very glad to your responses and offers.<br /> Over time,
          replenishment of my knowledge, the entire list will change depending
          on my knowledge.
        </Typography>
        <TextField
          id="outlined-textarea"
          placeholder="Enter your review"
          multiline
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </div>
  );
};
